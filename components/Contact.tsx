export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold mb-8">
        Contact
      </h2>

      <div className="space-y-4">
        <p>Email: shaktieknist@gmail.com</p>

        {/* <p>Phone: +91 8252635987</p> */}

        <p>
          <a
            href="https://linkedin.com/in/eknist-shakti-a395162b9"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-600 px-6 py-3 hover:border-white transition"
          >
            LinkedIn Profile
          </a>
        </p>

        <p>
          <a
                href="https://github.com/Ek-shakti"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-600 px-6 py-3 hover:border-white transition"
>
              GitHub
</a>
        </p>
      </div>
    </section>
  );
}

