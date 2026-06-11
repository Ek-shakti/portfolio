const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Python",
  "Machine Learning",
  "Git",
  "GitHub",
  "Power BI",
  "Tailwind CSS",
];
import FadeIn from "./FadeIn";
export default function Skills() {
return (
  <FadeIn>
    <section
      id="skills"
      className="rounded-xl border border-gray-700 bg-gray-900 px-5 py-3 hover:border-blue-500 transition"
    >
      <h2 className="text-4xl font-bold mb-8">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-gray-700 rounded-lg px-5 py-3"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  </FadeIn>
);
}