import Link from "next/link";

export default function Home() {
  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "Methods", href: "#" },
    { label: "About us", href: "/about" },
  ];

  return (
    <main className="relative w-full h-screen overflow-hidden text-white">
      {/* Video background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black -z-10">
        <video
          autoPlay
          loop
          muted
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full px-6 text-center bg-black/40 space-y-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            NeuroFly Uppsala
          </h1>
          <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
            We study how genes and environment shape the brain, behavior, and everything in between.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative inline-block font-['Barlow'] text-white text-lg tracking-wide font-medium transition-all duration-200 hover:font-semibold after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

