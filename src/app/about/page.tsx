"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white pt-12 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Lab Leaders Section */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-left">Lab leaders</h2>
            <hr className="mt-2 border-t-4 border-white w-1/3" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/about/thiago.png"
                alt="Dr. Thiago Moulin"
                className="h-48 w-auto rounded-full mb-4"
              />
              <p className="text-lg font-medium">Dr. Thiago Moulin</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/about/helgi.png"
                alt="Prof. Helgi Schiöth"
                className="h-48 w-auto rounded-full mb-4"
              />
              <p className="text-lg font-medium">Prof. Helgi Schiöth</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/about/robert.png"
                alt="Prof. Robert Fredriksson"
                className="h-48 w-auto rounded-full mb-4"
              />
              <p className="text-lg font-medium">Prof. Robert Fredriksson</p>
            </div>
          </div>
        </section>

        {/* Students Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-left">Students</h2>
            <hr className="mt-2 border-t-4 border-white w-1/3" />
          </div>
          <div className="text-center text-xl">Under construction</div>
        </section>
        
        {/* Back Button at the Bottom */}
        <div className="mt-12 flex justify-start">
          <button
            onClick={() => router.back()}
            className="text-white text-lg hover:underline"
          >
            &larr; Back
          </button>
        </div>
      </div>
    </main>
  );
}
