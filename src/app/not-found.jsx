"use client";
import Image from "next/image";
import error from "../assets/Error.png";
import Button from "@/components/buttons/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {

  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <div className="text-center container mx-auto flex flex-col justify-center items-center space-y-4">
        {/* Next.js Image component */}
        <div className=" mx-auto flex justify-center items-center text-center">
          <Image
            src={error}
            alt="404 Error"
            height={500}
            width={500}
            className="max-auto"
          />
        </div>
        {/* <h1 className="text-4xl font-bold mt-6">404 ERROR</h1> */}
        <p className="text-lg mt-4">Oops! The Page Not Found.</p>
        <p className="text-sm mt-2">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        {/* Use Link for navigation */}
        <Button
          text={"Back to home"}
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
}
