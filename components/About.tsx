import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="max-w-5xl mx-auto py-24 px-6"
      >
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          I am a Computer Science Engineering graduate with
          experience in MERN Stack Development, Machine Learning,
          and Data Analytics.

          I enjoy building scalable web applications,
          solving real-world problems, and continuously
          learning modern technologies.
        </p>
      </section>
    </FadeIn>
  );
}