import FadeIn from "./FadeIn";

export default function Projects() {
  const projects = [
    {
      title: "IoT Sentinel AI",
      description:
        "Machine Learning based IoT security system for attack detection and protocol classification using Random Forest and Explainable AI.",
      tech: "Python, Scikit-Learn, XGBoost, LIME",
      github: "#",
      demo: "#",
    },
    {
      title: "User Management Application",
      description:
        "Full-stack CRUD application with authentication, MongoDB integration, and responsive UI.",
      tech: "React, Node.js, Express, MongoDB",
      github: "https://github.com/Ek-shakti/user-manager",
      demo: "https://user-manager-ymah.onrender.com/",
    },
    {
      title: "Recipe Ideas Platform",
      description:
        "Web application that generates recipe suggestions using external APIs and responsive design.",
      tech: "React, JavaScript, REST APIs",
      github: "#",
      demo: "https://cookquick.netlify.app/ ",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with modern web technologies to showcase projects and skills.",
      tech: "Next.js, Tailwind CSS",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <FadeIn>
      <section
        id="projects"
        className="max-w-6xl mx-auto py-24 px-6"
      >
        <h2 className="text-4xl font-bold mb-4">
  Featured Projects
</h2>

<p className="text-gray-400 mb-12">
  A selection of projects showcasing my experience in Full Stack Development,
  Machine Learning, and Data Analytics.
</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-500/5 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-violet-400 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition"
                >
                  GitHub →
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}