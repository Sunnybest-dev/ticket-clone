import { User } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full bg-[#0065ff] flex items-center justify-between px-3 py-3">
      {/* Left Section: Slanted Menu + Logo */}
      <div className="flex items-center space-x-2">
        {/* Slanted Menu Icon */}
        <div className="flex flex-col space-y-1 invert">
         <svg viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false">
            <path d="M23 5.75H1v-1.5h22zm-22 5.5h16v1.5H1zm12 7H1v1.5h12z"></path>
            </svg>
        </div>

        {/* Logo Text */}
       <span className="text-white font-semibold italic text-lg tracking-tight">
        <a href="/" className="text-2xl">
             ticketmaster<sup className="text-[15px]">®</sup>
             </a>
        </span>


      </div>

      {/* Right Section: User Icon */}
      <svg viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" focusable="false" className="invert">
        <path d="M8 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0M12 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m6.49 12H5.43L1 16.9V23h22v-6.12zM2.5 17.58 6 14.5h11.93l3.57 3.07v3.93h-19z"></path></svg>
    </div>
  );
}
