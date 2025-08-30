import Link from "next/link";
import Image from "next/image";
import error from '../assets/Error.png'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <div className="text-center">
        {/* Next.js Image component */}
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src={error}
            alt="404 Error"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        {/* <h1 className="text-4xl font-bold mt-6">404 ERROR</h1> */}
        <p className="text-lg mt-4">Oops! The Page Not Found.</p>
        <p className="text-sm mt-2">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        {/* Use Link for navigation */}
        <Link
          href="/"
          className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
