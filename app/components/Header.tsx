import { Link } from "@remix-run/react";
import myPhoto from "../assets/images/MyPhoto-1.jpg";

function Header() {
  return (
    <header className="bg-secondary h-50 px-16 flex items-center justify-between gap-16">
      <div className="flex gap-16 items-center">
        <img className="rounded-full" height="70" width="70" src={myPhoto} alt="Tomasz Posiadala"></img>
        <p className="text-lg font-secondary font-black">Tomasz Posiadala</p>
      </div>
      <menu className="flex gap-16 items-center">
        <Link to="https://denydevito.hashnode.dev/" className="text-lg font-secondary font-black hover:text-secondary ">
          Blog
        </Link>
      </menu>
    </header>
  );
}

export default Header;
