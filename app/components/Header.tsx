import { Link } from "@remix-run/react";

function Header() {
  return (
    <header className="h-35 px-8 md:px-16 flex items-center justify-center md:justify-between gap-16">
      <div className="flex gap-16 items-center">
        <p className=" text-lg font-black md:text-xl font-secondary md:font-black">Tomasz Posiadala</p>
      </div>
    </header>
  );
}

export default Header;
