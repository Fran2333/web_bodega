import Link from "next/link";
import { useState } from "react";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item has-children">
          <a href="#" className="active">
            Inicio
          </a>
        </li>
        <li>
          <Link href="#nosotros">Nosotros</Link>
        </li>
        <li className="menu-item has-children">
          <a href="#servicios">Servicios</a>
        </li>
        <li className="menu-item has-children">
          <a href="#contactanos">Contáctanos</a>
        </li>
      </ul>
    </nav>
  );
};
export default MobileHeader;
