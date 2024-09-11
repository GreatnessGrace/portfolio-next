import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Transform <span className="text-purple">your</span> vision into reality with innovative digital solutions.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Contact me today, and together we&apos;ll build something extraordinary.
        </p>
        <a href="mailto:graceunstoppable7@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    
    </footer>
  );
};

export default Footer;