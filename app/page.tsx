// Homepage, served at "/". Edit the values below to make it yours.

const links = [
  // each object becomes one link in the footer
  { label: "GitHub", href: "https://github.com/Z10457" }, // TODO: replace with your GitHub URL
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zohaib-ahmed-9345232a7/" }, // TODO: replace with your LinkedIn URL
  { label: "Email", href: "mailto:zohaib.ahmed1738@gmail.com" }, // TODO: replace with your email
];

const projects = [
  // each object becomes one card in the projects grid
  { title: "NBA MVP Machine", description: "Built a machine that analyzes who the NBA MVP should be, comparing two approaches: a machine learning model and a weighted formula. Built in Python, using Plotly, and Quarto.", href: "https://z10457.github.io/nbamvp_project/" }, // TODO: real project
  { title: "Academia Agent", description: "Built an AI assistant for students that reads your syllabi, tracks assignments, and finds scholarly papers,built in Python with Google’s Gemini API (tool-calling agent loop), Supabase for per-user data storage, and the OpenAlex database for research. (In progress)", href: "https://github.com/Z10457/academiabot" }, // TODO: real project
  { title: "Ram Hub", description: "Built a commuter hub for college students, built for a hackathon. It tracks campus shuttles on a live map, lets you reserve a seat and get a QR boarding pass, and plans your trip from home across subway, bus, and rail. It also connects you with commute groups and classmates on your route, with privacy controls. Built with Next.js and TypeScript for a hackathon.", href: "ram-hub-nine.vercel.app" }, // TODO: real project
];

export default function Home() {
return (
  <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-24 px-6 py-24">
    <section className="flex flex-col items-center gap-6 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
        Software Engineer · Fordham &apos;27
      </p>
      <h1 className="text-5xl font-semibold tracking-tight text-[var(--accent)] sm:text-6xl">
        Hi, I&apos;m Zohaib.
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-neutral-200">
        I&apos;m a Computer and Information Science student at Fordham University who
        enjoys building software that is useful and fun.
      </p>
      <p className="max-w-xl text-lg leading-relaxed text-neutral-200">
        Outside of coding, I love playing sports (such as soccer and basketball),
        playing video games (sport games and story mode), and reading history books!
      </p>
      <div className="flex justify-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white"
        >
          See my work
        </a>
        <a
          href="mailto:zohaib.ahmed1738@gmail.com" // TODO: replace with your email
          className="rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent)] transition hover:bg-neutral-900"
        >
          Get in touch
        </a>
      </div>
    </section>

    <section id="projects" className="flex flex-col gap-8">
      <h2 className="text-center text-2xl font-semibold tracking-tight text-[var(--accent)]">
        Projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition hover:border-[var(--accent)]"
          >
            <h3 className="font-medium text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>

    <footer className="flex flex-col items-center gap-4 border-t border-neutral-800 pt-8 text-sm text-neutral-500">
      <div className="flex gap-5">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="transition hover:text-[var(--accent)]">
            {link.label}
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Zohaib Ahmed</p>
    </footer>
  </main>
);
}
