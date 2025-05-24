export default function Page() {
  return (
    <div>
      <p className="italic">
        “Logs” is my{" "}
        <span className="underline decoration-wavy decoration-3 decoration-primary">
          LIFE/DEVELOPER
        </span>{" "}
        journal — part changelog, part brain dump, part thought experiment.
        Whether I’m debugging a tricky bug 🐞, reflecting on a math insight 🧮,
        or documenting a lesson from life or code — it gets logged here.
      </p>
      <div className="my-5 flex flex-col gap-3">
        <p className="flex flex-row items-start gap-3 border-b border-gray-50/15 pb-2">
          <span className="bg-blue-500 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center">
            {" "}
            INFO
          </span>
          <span>
            ℹ️This is where I document{" "}
            <span className="underline decoration-wavy decoration-2 decoration-blue-500">
              wins
            </span>
            ,{" "}
            <span className="underline decoration-wavy decoration-2 decoration-blue-500">
              bugs
            </span>
            ,
            <span className="underline decoration-wavy decoration-2 decoration-blue-500">
              fixes
            </span>
            , and{" "}
            <span className="underline decoration-wavy decoration-2 decoration-blue-500">
              forks
            </span>{" "}
            in the road.
            <span className="underline decoration-wavy decoration-2 decoration-blue-500">
              Helpful notes
            </span>{" "}
            for future me (and maybe you) 📓.
          </span>
        </p>
        <p className="flex flex-row items-start gap-3 border-b border-gray-50/15 pb-2">
          <span className="bg-indigo-500 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center">
            {" "}
            DEBUG
          </span>
          <span>
            🧪Expect ideas in{" "}
            <span className="underline decoration-wavy decoration-2 decoration-indigo-500">
              dev
            </span>{" "}
            mode.{" "}
            <span className="underline decoration-wavy decoration-2 decoration-indigo-500">
              Unfiltered
            </span>{" "}
            thoughts, work-in-
            <span className="underline decoration-wavy decoration-2 decoration-indigo-500">
              progress
            </span>{" "}
            <span className="underline decoration-wavy decoration-2 decoration-indigo-500">
              experiments
            </span>
            , and behind-the-scenes brain dumps.
          </span>
        </p>
        <p className="flex flex-row items-start gap-3 border-b border-gray-50/15 pb-2">
          <span className="bg-yellow-500 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center">
            {" "}
            WARN
          </span>
          <span>
            ⚠️Proceed with{" "}
            <span className="underline decoration-wavy decoration-2 decoration-yellow-500">
              wins
            </span>
            . These logs contain growing{" "}
            <span className="underline decoration-wavy decoration-2 decoration-yellow-500">
              pains
            </span>
            , near-
            <span className="underline decoration-wavy decoration-2 decoration-yellow-500">
              burnouts
            </span>
            , or lessons{" "}
            <span className="underline decoration-wavy decoration-2 decoration-yellow-500">
              learned
            </span>{" "}
            the{" "}
            <span className="underline decoration-wavy decoration-2 decoration-yellow-500">
              hard
            </span>{" "}
            way 🔥.
          </span>
        </p>
        <p className="flex flex-row items-start gap-3 border-b border-gray-50/15 pb-2">
          <span className="bg-red-500 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center">
            {" "}
            ERROR
          </span>
          <span>
            ❌Oops. Things{" "}
            <span className="underline decoration-wavy decoration-2 decoration-red-500">
              broke
            </span>
            . But we log them to{" "}
            <span className="underline decoration-wavy decoration-2 decoration-red-500">
              fix
            </span>{" "}
            them — one stack trace at a time.{" "}
            <span className="underline decoration-wavy decoration-2 decoration-red-500">
              Vulnerability
            </span>{" "}
            lives here. So does{" "}
            <span className="underline decoration-wavy decoration-2 decoration-red-500">
              resilience.
            </span>
          </span>
        </p>
        <p className="flex flex-row items-start gap-3 border-b border-gray-50/15 pb-2">
          <span className="bg-teal-500 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center">
            {" "}
            TRACE
          </span>
          <span>
            🔍Zooming in. Sometimes I{" "}
            <span className="underline decoration-wavy decoration-2 decoration-teal-500">
              dig deep
            </span>{" "}
            into a concept or decision — tracing every thought path, variable,
            and possibility.
          </span>
        </p>
        <p className="flex flex-row items-start gap-3">
          <span className="bg-red-700 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center">
            {" "}
            FATAL
          </span>
          <span>
            💥Rare logs. System{" "}
            <span className="underline decoration-wavy decoration-2 decoration-red-700">
              crash
            </span>{" "}
            moments. But spoiler: we reboot stronger.
          </span>
        </p>
      </div>
    </div>
  );
}
