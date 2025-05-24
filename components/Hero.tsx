export default function Hero() {
  return (
    <section className="">
      <div className="leading-10 md:leading-16 font-mono text-4xl md:text-5xl">
        <p className="mb-4">
          👋🏻I’m a{" "}
          <span className="underline decoration-wavy decoration-amber-500">
            Mathematician
          </span>
        </p>
        <p>
          A
          <span className="inline-block mx-2 relative before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-400">
            <span className="relative text-black">FULLSTACK</span>
          </span>
          Developer,
        </p>
        <p>
          And an{" "}
          <span className="inline-block font-extrabold text-primary">ML</span>{" "}
          Enthusiast,
        </p>
        <p>
          With
          <span className="inline-block mx-2 relative before:absolute before:-inset-1 before:block before:skew-y-3 before:bg-cyan-400">
            <span className="relative text-black">Hacking</span>
          </span>
          Mindset.
        </p>
      </div>
      <p className="text-xl mt-16 md:mt-30 mb-3">
        I build, I learn, I solve. One elegant solution at a time. ⚡
      </p>
      <a
        href="mailto:oruovie@gmail.com"
        className="inline-block bg-primary/50 px-3 py-2 border border-foreground/10 rounded-sm font-bold"
      >
        Let’s connect like WebSockets
      </a>
    </section>
  );
}
