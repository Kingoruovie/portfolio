import Project from "@/components/Project";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa6";
import { SiPython, SiSelenium } from "react-icons/si";

const styleCLass = "fill-foreground/50 size-12";

const projectsInfo = [
  {
    title: "Tiny interfaces, pixel-perfect ambition.",
    description:
      "A sandbox of challenges tackled from Frontend Mentor, where I sharpen UI skills, decode tricky layouts, and obsess over responsiveness. Built with clean code, component logic, and a sprinkle of personal flair. 🌶️",
    icons: [
      <FaHtml5 key="1" className={styleCLass} />,
      <FaCss3Alt key="2" className={styleCLass} />,
      <FaJs key="3" className={styleCLass} />,
      <FaReact key="3" className={styleCLass} />,
    ],
    repo: "https://github.com/Kingoruovie/PROJECTS/tree/main/FRONTEND",
    live: "https://www.frontendmentor.io/profile/Kingoruovie",
  },
  {
    title: "DataSnatchers",
    description: `Automated the web so you don’t have to.\n
From deep product crawls to targeted data harvests, these scrapers are built to sneak past blockers, structure chaos, and feed APIs or dashboards with clean, usable data—fast, headless, and quietly efficient.`,
    icons: [
      <SiPython key="1" className={styleCLass} />,
      <SiSelenium key="2" className={styleCLass} />,
    ],
    repo: "https://github.com/Kingoruovie/PROJECTS/tree/main/WEBSCRAPERS",
  },
];

export default function Page() {
  return (
    <section>
      <p>
        A collection of crafted chaos and clever constructs. <br />
        Things I’ve wired, wrangled, and whispered into working — <br />
        because ideas deserve to run wild and ship fast.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {projectsInfo.map((projectInfo, index) => {
          return (
            <Project
              key={index}
              icons={projectInfo.icons}
              title={projectInfo.title}
              description={projectInfo.description}
              live={projectInfo.live}
              repo={projectInfo.repo}
            />
          );
        })}
      </div>
    </section>
  );
}
