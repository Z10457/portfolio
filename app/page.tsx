// Homepage, served at "/". Edit the values below to make it yours.

const links = [
  // each object becomes one link in the footer
  { label: "GitHub", href: "https://github.com/Z10457" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zohaib-ahmed-9345232a7/" },
  { label: "Email", href: "mailto:zohaib.ahmed1738@gmail.com" },
];

const projects = [
  // each object becomes one card in the projects grid
  {
    title: "NBA MVP Machine",
    description:
      "Built a machine that analyzes who the NBA MVP should be, comparing two approaches: a machine learning model and a weighted formula. Built in Python, using Plotly and Quarto.",
    href: "https://z10457.github.io/nbamvp_project/",
  },
  {
    title: "Academia Agent",
    description:
      "Built an AI assistant for students that reads your syllabi, tracks assignments, and finds scholarly papers. Built in Python with Google’s Gemini API (tool-calling agent loop), Supabase for per-user data storage, and the OpenAlex database for research. (In progress)",
    href: "https://github.com/Z10457/academiabot",
  },
  {
    title: "Ram Hub",
    description:
      "Built a commuter hub for college students at a hackathon. It tracks campus shuttles on a live map, lets you reserve a seat and get a QR boarding pass, and plans your trip from home across subway, bus, and rail. It also connects you with commute groups and classmates on your route, with privacy controls. Built with Next.js and TypeScript.",
    href: "https://ram-hub-nine.vercel.app",
  },
];

const hobbies = [
  "Soccer",
  "Basketball",
  "Sports games",
  "Story-mode games",
  "History books",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-24 px-6 py-24">
      {/* hero */}
      <section className="flex flex-col items-center gap-6 text-center">
        <p className="text-sm font-light uppercase tracking-widest text-stone-500">
          Software Engineer · Fordham &apos;27
        </p>
        <h1 className="text-5xl font-light tracking-tight text-[var(--accent)] sm:text-6xl">
          Zohaib Ahmed.
        </h1>
        <p className="max-w-xl text-lg font-light leading-relaxed text-stone-600">
          A Computer and Information Science student at Fordham University who
          enjoys building software that is useful and fun.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
  <a
    href="#projects"
    className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-normal text-white transition hover:opacity-90"
  >
    See my work
  </a>
  <a
    href="mailto:zohaib.ahmed1738@gmail.com"
    className="rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm font-normal text-[var(--accent)] transition hover:bg-stone-100"
  >
    Get in touch
  </a>
  {links
    .filter((link) => link.label !== "Email")
    .map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-normal text-stone-600 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        {link.label}
      </a>
    ))}
    </div>
    </section>

      {/* projects */}
      <section id="projects" className="flex flex-col gap-8">
        <h2 className="text-center text-2xl font-light tracking-tight text-[var(--accent)]">
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="rounded-2xl border border-stone-200 bg-white/70 p-6 transition hover:border-[var(--accent)]"
            >
              <h3 className="font-normal text-stone-900">{project.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-stone-600">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* hobbies */}
      <section className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-light tracking-tight text-[var(--accent)]">
          Outside of code
        </h2>
        <p className="max-w-xl text-lg font-light leading-relaxed text-stone-600">
          When I&apos;m not building things, you&apos;ll find me on the field or the
          court, losing track of time in a good story-mode game, or deep in a
          history book.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {hobbies.map((item) => (
            <span
              key={item}
              className="rounded-full border border-stone-300 px-4 py-1.5 text-sm font-light text-stone-600"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="flex flex-col items-center border-t border-stone-200 pt-8 text-sm font-light text-stone-500">
    <p>© {new Date().getFullYear()} Zohaib Ahmed</p>
      </footer>
    </main>
  );
}