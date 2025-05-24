export default function Experience() {
  return (
    <section className="mt-20">
      <h2 className="font-mono text-2xl font-bold">🚀 Things I’ve Done</h2>
      <div className="relative border-l border-gray-700 ml-4 pl-6 space-y-10">
        {/* 1st Company */}
        <div className="relative">
          <div className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-blue-600"></div>
          <div>
            <h3 className="text-xl font-semibold">🏢 SafeWox (Remote)</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              2024 – Present
            </span>
            <div className="text-gray-700 dark:text-gray-300 mt-2">
              Crafted a real-time ride-hailing system with:
              <ul className="list-disc ml-6 mt-1 text-sm">
                <li>📍 Location-based driver matching via PostGIS</li>
                <li>🧠 Dynamic roles for drivers, brokers & providers</li>
                <li>💬 WebSocket-powered chat between riders & drivers</li>
                <li>🔐 JWT-secured, role-aware authentication</li>
              </ul>
            </div>
            <div className="text-gray-700 dark:text-gray-300 mt-2">
              Engineered a powerful ops dashboard featuring:
              <ul className="list-disc ml-6 mt-1 text-sm">
                <li>🧾 End-to-end patient data flows with secure APIs.</li>
                <li>📥 PDF & ZIP generation at scale via Celery.</li>
                <li>🔐 Bulletproof encryption for sensitive health files.</li>
                <li>📬 Smart email & SMS dispatch with concurrency tuning.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2nd Company */}
        <div className="relative">
          <div className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-green-600"></div>
          <div>
            <h3 className="text-xl font-semibold">🔍 DataMall</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              2023
            </span>
            <div className="text-gray-700 dark:text-gray-300 mt-2">
              Created a custom web scraping pipeline that:
              <ul className="list-disc ml-6 mt-1 text-sm">
                <li>📦 Extracted 1000s of leads daily</li>
                <li>🧼 Cleaned and structured complex HTML tables</li>
                <li>📤 Exported into CSV & synced to Airtable</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3rd Entry – optional personal */}
        <div className="relative">
          <div className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-purple-600"></div>
          <div>
            <h3 className="text-xl font-semibold">
              🧪 Personal Projects & Freelancing
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              2022 – Present
            </span>
            <div className="text-gray-700 dark:text-gray-300 mt-2">
              Tinkering, building, and solving with code & numbers:
              <ul className="list-disc ml-6 mt-1 text-sm">
                <li>
                  ⚡ Full-stack apps using Express, Django, Flask, and Next.js
                </li>
                <li>🖼️ Admin dashboards and user portals</li>
                <li>
                  🧮 Freelanced as a math tutor & problem-solver for clients
                </li>
                <li>🎯 Focus on scalability, clean design & speed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
