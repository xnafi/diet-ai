import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container grid md:flex justify-between gap-8 text-sm">
        {/* Logo + Intro */}
        <div className="md:col-span-1 space-y-4 max-w-sm">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <Link href="/" className="paraText cursor-pointer" nk href="/">
              <Image
                src={logo}
                width={137}
                height={100}
                alt="logo"
                style={{ width: "137px", height: "auto" }}
              />
            </Link>
          </div>
          <p className="text-gray-600 text-sm">
            AI-powered nutrition tracking to help you <br /> achieve your health
            and fitness goals.
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-between w-[60%] flex-col md:flex-row space-y-6 md:space-y-6">
          <div>
            <h4 className="text-lg font-semibold">Platform</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="paraText cursor-pointer">App</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Solutions</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="paraText cursor-pointer">Accounting team</li>
              <li className="paraText cursor-pointer">Audit team</li>
              <li className="paraText cursor-pointer">Partners</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="paraText cursor-pointer">Resources center</li>
              <li className="paraText cursor-pointer">Compliance glossary</li>
              <li className="paraText cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="paraText cursor-pointer">About</li>
              <li className="paraText cursor-pointer">Career</li>
              <li className="paraText cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8">
        <div className="container !py-5 flex flex-col md:flex-row justify-between items-center paraText">
          <p className="paraText">© All rights reserved © DietAI Apps</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span>Terms and condition</span>
            <span>Privacy & Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
