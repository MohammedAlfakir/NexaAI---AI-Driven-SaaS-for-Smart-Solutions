import Section from "./Section";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          <Link to={"https://www.mohammedalfakir.site/"} target="_blank">
            Mohammed Alfakir{" "}
          </Link>
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          <Link to={"https://mohammedalfakir.site/"} target="_blank">
            <a className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 cursor-pointer">
              <TbWorld />
            </a>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/mohammed-alfakir/"}
            target="_blank"
          >
            <a className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 cursor-pointer">
              <FaLinkedin />
            </a>
          </Link>
          <Link to={"https://github.com/MohammedAlfakir"} target="_blank">
            <a className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 cursor-pointer">
              <FaGithub />
            </a>
          </Link>
          <Link to={"https://x.com/itsAlfakir"} target="_blank">
            <a className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 cursor-pointer">
              <FaXTwitter />
            </a>
          </Link>
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
