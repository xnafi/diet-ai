import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Button from "../buttons/Button";
import InfoBar from "./InfoBar";

// nav links
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

      {/* navbar starts */}
      <nav className="shw-full z-10 bg-white container !py-0">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                width={137}
                height={100}
                alt="logo"
                style={{ width: "137px", height: "auto" }}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-10 relative">
            {navLink.map((link, index) => (
              <div key={index} className="group relative">
                <Link
                  href={link.href}
                  className="nav-link uppercase flex items-center gap-1"
                >
                  {link.name}
                  {link.subMenu && (
                    <svg
                      className="w-3 h-3 text-gray-600 group-hover:rotate-180 transition-transform duration-300"
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
                  <div
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg opacity-0 
                             invisible group-hover:opacity-100 group-hover:visible
                             translate-y-2 group-hover:translate-y-0
                             transition-all duration-300 ease-in-out"
                  >
                    <ul className="py-2 px-4 space-y-2 min-w-[160px]">
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
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Button textPl={4}>{"Start For Free"}</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <svg
                className="w-6 h-6"
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

            {/* Mobile Nav */}
            <div className="peer-checked:block hidden absolute top-0 left-0 w-64 h-screen bg-white shadow-lg z-20 p-6">
              <div className="flex justify-end mb-6">
                <label htmlFor="menu-toggle" className="cursor-pointer">
                  <svg
                    className="w-6 h-6"
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

              <nav className="space-y-4 flex flex-col">
                {navLink.map((link, index) => (
                  <div key={index}>
                    {link.subMenu ? (
                      <>
                        {/* Submenu Toggle */}
                        <input
                          type="checkbox"
                          id={`submenu-${index}`}
                          className="hidden peer"
                        />
                        <label
                          htmlFor={`submenu-${index}`}
                          className="w-full nav-link uppercase flex justify-between items-center cursor-pointer"
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

                        {/* Mobile Submenu */}
                        <div
                          className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out 
                                   peer-checked:max-h-40"
                        >
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
                      <Link href={link.href} className="nav-link uppercase">
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button textPl="1">{"Start for free"}</Button>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
