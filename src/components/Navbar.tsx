"use client";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      {/* Mobile: shown below md (768px) */}
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      {/* Desktop: shown at md (768px) and above */}
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
    </>
  );
}
