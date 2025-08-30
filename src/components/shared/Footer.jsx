import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container grid gap-8 text-sm">
        {/* Logo + Intro */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            {/* Logo */}
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
          <p className="text-gray-600 text-sm">
            AI-powered nutrition tracking to help you achieve your health and
            fitness goals.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold">Platform</h4>
          <ul className="space-y-2 text-gray-600">
            <li>App</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Solutions</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Accounting team</li>
            <li>Audit team</li>
            <li>Partners</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Resources</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Resources center</li>
            <li>Compliance glossary</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>About</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© All rights reserved © DietAI Apps</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">Terms and condition</a>
            <a href="#">Privacy & Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
