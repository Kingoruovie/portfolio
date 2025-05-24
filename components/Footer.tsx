import { IoMail } from "react-icons/io5";
import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-30 text-sm flex items-center justify-between">
      <p className="opacity-70">&copy; 2025 Oru Ovie</p>
      <nav>
        <ul className="flex items-center gap-2">
          <li>
            <a href="mailto:oruovie@gmail.com">
              <IoMail className="size-6 transition delay-200 opacity-70 hover:fill-primary hover:opacity-100" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Kingoruovie">
              <FaSquareGithub className="size-5 transition delay-200 opacity-70 hover:fill-primary hover:opacity-100" />
            </a>
          </li>
          <li>
            <a href="https://x.com/OruOvie">
              <FaSquareXTwitter className="size-5 transition delay-200 opacity-70 hover:fill-primary hover:opacity-100" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ovie-oru-723025197/">
              <FaLinkedin className="size-5 transition delay-200 opacity-70 hover:fill-primary hover:opacity-100" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
