export default function Skills() {
  return (
    <section className="mt-16">
      <h2 className="font-mono text-2xl font-bold">🧠 Stack & Strategy</h2>
      <p className="italic">
        I don&apos;t just code — I solve. Here&apos;s the tech I use to move
        from abstract ideas to scalable, real-world solutions. Think clean
        logic, solid architecture, and a touch of mathematical magic.
      </p>
      <div className="mt-3 flex flex-col space-y-4">
        <div>
          <h3 className="font-bold underline decoration-wavy decoration-2 decoration-primary">
            Languages & Runtimes:
          </h3>
          <p>🐍 Python | 🟩 JavaScript | 🟪 TypeScript | 🧱 Node.js | 🍞 Bun</p>
        </div>
        <div>
          <h3 className="font-bold underline decoration-wavy decoration-2 decoration-primary">
            Backend Frameworks:
          </h3>
          <p>🍃 Django | ⚡ Flask | 🛠️ Express | ✨ Next.js (API routes)</p>
        </div>
        <div>
          <h3 className="font-bold underline decoration-wavy decoration-2 decoration-primary">
            Frontend:
          </h3>
          <p>⚛️ React | 🖌️ Tailwind CSS | 🧩 React Icons | ✨ Nextjs</p>
        </div>
        <div>
          <h3 className="font-bold underline decoration-wavy decoration-2 decoration-primary">
            Databases & Storage:
          </h3>
          <p>🐘 PostgreSQL (+PostGIS) | 🔐 Redis | 📁 Amazon S3| 🍃 MongoDB</p>
        </div>
        <div>
          <h3 className="font-bold underline decoration-wavy decoration-2 decoration-primary">
            DevOps & Tools:
          </h3>
          <p>🐳 Docker | 🚀 Vercel | ⚙️ Git | 🔒 JWT Authentication | ☁️ AWS</p>
        </div>
        <div>
          <h3 className="font-bold underline decoration-wavy decoration-2 decoration-primary">
            Others:
          </h3>
          <p>📡 WebSockets | 🐝 Celery | 📊 REST & GraphQL APIs</p>
        </div>
      </div>
    </section>
  );
}
