import Image from "next/image";
import acmeLogo from "../../public/logos/acme.png";
import apexLogo from "../../public/logos/apex.png";
import celestiaLogo from "../../public/logos/celestia.png";
import echoLogo from "../../public/logos/echo.png";
import pulseLogo from "../../public/logos/pulse.png";
import quantumLogo from "../../public/logos/quantum.png";

const images = [
  { src: acmeLogo, alt: "acmeLogo" },
  { src: apexLogo, alt: "apexLogo" },
  { src: celestiaLogo, alt: "celestia Logo" },
  { src: echoLogo, alt: "echo Logo" },
  { src: pulseLogo, alt: "pulse Logo" },
  { src: quantumLogo, alt: "quantum Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <div className="flex gap-16">
            {images.map(({ src, alt }) => (
              <Image src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
