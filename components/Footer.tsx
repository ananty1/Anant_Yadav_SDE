import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";


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
          Want to build something <span className="text-purple">real</span> with tech that actually works?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
         I'm always open to meaningful collaborations — whether it's building from scratch or scaling what you already have.
    Drop a message and let’s see what we can create together.
        </p>
        <a href="mailto:y2anant@gmail.com">
          <MagicButton
            title="Let's connect"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2025 Anant | Built with code, coffee & curiosity
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
      key={info.id}
      href={info.link}
      target="_blank"
      rel="noopener noreferrer"
      title={info.title}
      className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
    >
      <img src={info.img} alt={info.title} width={20} height={20} />
    </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;