"use client";

import { useEffect, useState } from "react";

interface Publication {
  pmid: string;
  authors: string[];
  title: string;
  year: string;
  journal: string;
  link: string;
  abstract: string;
}

const leaderMap: Record<string, string[]> = {
  "Thiago C. Moulin": ["Moulin TC"],
  "Helgi B. Schiöth": ["Schiöth HB", "Schioth HB"],
  "Robert Fredriksson": ["Fredriksson R"],
};

export default function PublicationsPage() {
  const [pubs, setPubs] = useState<Publication[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [yearFilter, setYearFilter] = useState("All");
  const [authorFilter, setAuthorFilter] = useState("All");

  useEffect(() => {
    fetch("/publications.txt")
      .then((res) => res.text())
      .then(parsePubMed)
      .then((data) => {
        setPubs(data);
        // Extract years sorted descending (latest first)
        const ys = Array.from(new Set(data.map((d) => d.year))).sort(
          (a, b) => Number(b) - Number(a)
        );
        setYears(ys);
      })
      .catch(console.error);
  }, []);

  function parsePubMed(txt: string): Publication[] {
    const records = txt
      .trim()
      .split(/\r?\n\r?\n/)
      .filter((r) => r.trim());

    return records.map((rec) => {
      const lines = rec.split(/\r?\n/);
      let pmid = "";
      let year = "";
      let journal = "";
      let authors: string[] = [];
      let titleLines: string[] = [];
      let abstractLines: string[] = [];
      let readingTitle = false;
      let readingAbstract = false;

      for (const line of lines) {
        const m = line.match(/^([A-Z]{2,4})\s*-\s*(.*)/);
        if (m) {
          const tag = m[1];
          const content = m[2].trim();
          readingTitle = false;
          readingAbstract = false;

          switch (tag) {
            case "PMID": pmid = content; break;
            case "DP": {
              const y = content.match(/(\d{4})/);
              if (y) year = y[1];
              break;
            }
            case "TI":
              titleLines = [content];
              readingTitle = true;
              break;
            case "AB":
              abstractLines = [content];
              readingAbstract = true;
              break;
            case "JT": // Full journal title
              journal = content;
              break;
            case "TA": // fallback to abbreviation if JT missing
              if (!journal) journal = content;
              break;
            case "AU":
              authors.push(content);
              break;
          }
        } else {
          if (readingTitle) titleLines.push(line.trim());
          else if (readingAbstract) abstractLines.push(line.trim());
        }
      }

      return {
        pmid,
        authors,
        title: titleLines.join(" "),
        year,
        journal,
        abstract: abstractLines.join(" "),
        link: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
      };
    });
  }

  // Apply filters and sort descending by year (latest first)
  const filtered = pubs
    .filter((p) => {
      const byYear = yearFilter === "All" || p.year === yearFilter;
      const byAuthor =
        authorFilter === "All" ||
        leaderMap[authorFilter]?.some((tag) => p.authors.includes(tag));
      return byYear && byAuthor;
    })
    .sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <main className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <section>
          <h2 className="text-3xl font-bold text-left">Publications</h2>
          <hr className="mt-2 border-t-4 border-white w-1/3 mb-6" />
        </section>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <select
            className="bg-black/40 border border-white text-white rounded px-3 py-1"
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
          >
            <option value="All">All years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <select
            className="bg-black/40 border border-white text-white rounded px-3 py-1"
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
          >
            <option value="All">All authors</option>
            {Object.keys(leaderMap).map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Publication List */}
        <div className="space-y-10">
          {filtered.length === 0 && (
            <p className="text-center text-lg">No publications found.</p>
          )}

          {filtered.map((p, idx) => (
            <div key={p.pmid || idx} className="space-y-2">
              {/* Authors */}
              <p className="text-sm">
                {p.authors.map((au, i) => {
                  const isLeader = Object.values(leaderMap)
                    .flat()
                    .includes(au);
                  return (
                    <span key={`${au}-${i}`}>
                      {isLeader ? <strong>{au}</strong> : au}
                      {i < p.authors.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </p>

              {/* Year – Journal */}
              <p className="text-xs italic">
                {p.year} – {p.journal}
              </p>

              {/* Title with hoverable abstract */}
              <div className="relative group">
                <p className="text-lg cursor-default max-w-full">
                  {p.title}
                </p>
                <div className="absolute left-0 top-full mt-2 hidden w-[40rem] bg-black border border-white p-4 rounded text-sm text-justify group-hover:block z-10">
                  {p.abstract}
                </div>
              </div>

              {/* PubMed Link */}
              <div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white/80 hover:text-white"
                >
                  View on PubMed
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
