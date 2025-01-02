import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-black">
    <div className="px-4">
      <div className="py-4 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
        <Image src="/assets/logo.png" alt="logo" height={41} width={40} className="relative"/>
        </div>
        <div className="sm:hidden">
          <Image src="/assets/Icons.png" alt="menu" height={20} width={20} />
        </div>
        <nav className="gap-6 items-center hidden sm:flex">
          <Link href="#" className="text-opacity-30 text-white hover:text-opacity-100 transition">About</Link>
          <Link href="#" className="text-opacity-30 text-white hover:text-opacity-100 transition">Features</Link>
          <Link href="#" className="text-opacity-30 text-white hover:text-opacity-100 transition">Updates</Link>
          <Link href="#" className="text-opacity-30 text-white hover:text-opacity-100 transition">Help</Link>
          <Link href="#" className="text-opacity-30 text-white hover:text-opacity-100 transition">Customers</Link>
          <button className="py-2 px-4 bg-white rounded-lg">Get for free</button>
        </nav>
      </div>
    </div>
    </div>
  );
};
