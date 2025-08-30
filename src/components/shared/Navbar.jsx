// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="flex items-center justify-between py-4 px-6 md:px-12 bg-white shadow-sm sticky top-0 z-50">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <div className="w-6 h-6 bg-green-600 rounded-md"></div>
//         <span className="font-semibold text-lg">Diet AI</span>
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden md:flex space-x-8 text-gray-700">
//         <Link href="#">Product</Link>
//         <Link href="#">Resources</Link>
//         <Link href="#">Pricing</Link>
//         <Link href="#">About</Link>
//         <Link href="#">Careers</Link>
//       </div>

//       {/* CTA */}
//       <div className="hidden md:flex">
//         <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium">
//           Start for free
//         </button>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden">
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Button from "../buttons/Button";
const navLink = [
  { name: "Resources", href: "/Resources" },
  { name: "Pricing", href: "/Pricing" },
  { name: "About", href: "/About" },
  { name: "Careers", href: "/Careers" },
];

const Navbar = () => {
  return (
    <>
      <nav className="shadow-md w-full z-10">
        <div className="container mx-auto h-[100px] !py-0">
          <div className="flex items-center justify-between py-4">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={logo}
                  width={137}
                  height={100}
                  alt="logo"
                  className="w-[137px] lg:w-[137px]"
                />
              </Link>
            </div>
            <div className="hidden lg:flex space-x-10">
              {navLink.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="nav-link uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* button */}
            <div className="hidden lg:flex">
              <Button>{"Start For Free"}</Button>
            </div>
            {/* Hamburger menu */}
            <div className="lg:hidden">
              <input
                type="checkbox"
                id="menu-toggle"
                className="hidden peer"
                aria-hidden="true"
              />
              <label
                htmlFor="menu-toggle"
                className="nav-link uppercase-checked:text-[#d63a76]"
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <div
                className="peer-checked:transform peer-checked:translate-x-0 
                         fixed top-0 left-0 w-64 h-full bg-white primaryText shadow-lg z-20
                         transform -translate-x-full transition-transform duration-300 ease-in-out"
              >
                <div className="p-4">
                  <div>
                    <label
                      htmlFor="menu-toggle"
                      className="nav-link uppercase flex justify-end "
                      aria-label="Close Menu"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
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
                      <Link
                        key={index}
                        href={link.href}
                        className="nav-link uppercase"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="">
                      <Button>{"Start for free"}</Button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
