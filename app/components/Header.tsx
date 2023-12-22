import { Link } from "@remix-run/react";

function Header() {
  return (
    <header className="h-35 px-16 flex items-center justify-between gap-16">
      <div className="flex gap-16 items-center">
        <p className="text-xl font-secondary font-black">Tomasz Posiadala</p>
      </div>
    </header>
  );
}

export default Header;
