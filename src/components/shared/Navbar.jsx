"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Button from "../buttons/Button";
import InfoBar from "./InfoBar";

const navLink = [
  {
    name: "Resources",
    href: "/resources",
    subMenu: [
      { label: "Resources 1", href: "/resources-1" },
      { label: "Resources 2", href: "/resources-2" },
      { label: "Resources 3", href: "/resources-3" },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
    subMenu: [
      { label: "Pricing 1", href: "/pricing-1" },
      { label: "Pricing 2", href: "/pricing-2" },
      { label: "Pricing 3", href: "/pricing-3" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
];

const Navbar = () => {
  return (
    <>
      {/* info bar */}
      <InfoBar />
      {/* nav bar */}
      <nav className="w-full z-50">
        <div className="container !py-4 mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              width={137}
              height={100}
              alt="logo"
              className="w-[137px]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLink.map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  href={link.href}
                  className="capitalize flex items-center gap-1 paraText transition"
                >
                  {link.name}
                  {link.subMenu && (
                    <svg
                      className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {link.subMenu && (
                  <ul
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[180px] 
                             opacity-0 invisible group-hover:visible group-hover:opacity-100
                             transition-all duration-500 pointer-events-auto z-50"
                  >
                    {link.subMenu.map((item, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 paraText transition"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Button textPl={6}>Start For Free</Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />

            {/* Hamburger */}
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer z-50 relative"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Overlay to lock background scroll */}
            <div className="peer-checked:fixed peer-checked:inset-0 peer-checked:bg-black/20 peer-checked:overflow-hidden"></div>

            {/* Mobile Sidebar */}
            <div className="peer-checked:translate-x-0 -translate-x-full transition-transform duration-300 fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-50 p-6 overflow-y-auto">
              <div className="flex justify-end mb-6">
                <label htmlFor="menu-toggle" className="cursor-pointer">
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLink.map((link, index) => (
                  <div key={index} className="flex flex-col">
                    {link.subMenu ? (
                      <>
                        <input
                          type="checkbox"
                          id={`submenu-${index}`}
                          className="hidden peer"
                        />
                        <label
                          htmlFor={`submenu-${index}`}
                          className="w-full flex justify-between items-center capitalize cursor-pointer text-gray-800 hover:text-green-600 transition"
                        >
                          {link.name}
                          <svg
                            className="w-4 h-4 text-gray-600 transition-transform duration-300 peer-checked:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 9l6 6 6-6"
                            />
                          </svg>
                        </label>

                        <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-40">
                          <ul className="pl-4 mt-2 space-y-2">
                            {link.subMenu.map((item, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={item.href}
                                  className="block text-gray-700 hover:text-green-600 transition"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="capitalize text-gray-800 hover:text-green-600 transition"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button textPl={7}>Start For Free</Button>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
