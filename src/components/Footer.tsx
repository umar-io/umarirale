import { GithubIcon, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

type FooterProps = {
  darkMode: boolean;
  getYear: number;
};

const Footer: React.FC<FooterProps> = ({ darkMode, getYear }) => {
  const footerLink = [
    {
      linkIcon: <GithubIcon />,
      linkPath: "https://github.com/umar-io",
      ariaLabel: "GitHub",
    },
    {
      linkIcon: <Linkedin />,
      linkPath: "https://linkedin.com/umar_d3v",
      ariaLabel: "LinkedIn",
    },
    {
      linkIcon: <Twitter />,
      linkPath: "https://x.com/umar_d3v",
      ariaLabel: "Twitter",
    },
  ];

  return (
    <footer
      className={`${
        darkMode ? "bg-black" : "bg-gray-800"
      } text-white flex justify-between w-full py-[20px] px-[40px] font-quicksand h-[50px]`}
    >
      <p>Umar Irale &copy; {getYear}</p>
      <div className="flex justify-between gap-2.5">
        {footerLink.map((link, index) => (
          <Link
            to={link.linkPath}
            key={index}
            aria-label={link.ariaLabel}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            {link.linkIcon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;