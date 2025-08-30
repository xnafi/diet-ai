"use client";
import Link from "next/link";

const PL = {
  0: "pl-0",
  2: "pl-2",
  3: "pl-3",
  4: "pl-4",
  5: "pl-5",
  6: "pl-6",
  8: "pl-8",
  10: "pl-10",
  12: "pl-12",
  16: "pl-16",
  20: "pl-20",
  24: "pl-24",
};
const PR = {
  0: "pr-0",
  2: "pr-2",
  3: "pr-3",
  4: "pr-4",
  5: "pr-5",
  6: "pr-6",
  8: "pr-8",
  10: "pr-10",
  12: "pr-12",
  16: "pr-16",
  20: "pr-20",
  24: "pr-24",
};
const TEXT_PL = {
  0: "pl-0",
  2: "pl-2",
  3: "pl-3",
  4: "pl-4",
  5: "pl-5",
  6: "pl-6",
  8: "pl-8",
  10: "pl-10",
  12: "pl-12",
  16: "pl-16",
  20: "pl-20",
  24: "pl-24",
};

export default function Button({
  href,
  children,
  pl = 8,
  pr = 4, 
  textPl = 10,
  ...rest
}) {
  const baseStyle = [
    "secondaryColorBg",
    "text-center w-full rounded-2xl h-10 lg:h-14",
    "relative text-black text-xl font-semibold group",
    PL[pl] || "",
    PR[pr] || "",
  ].join(" ");

  const content = (
    <>
      <div className="bg-white rounded-md h-8 lg:h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[95%] z-10 duration-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="19.99" height="18">
          <path d="M10.029 5H0v7.967h10.029V18l9.961-9.048L10.029 0v5z" />
        </svg>
      </div>
      <p className={`text-sm ${TEXT_PL[textPl] || ""}`}>{children}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseStyle} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={baseStyle} {...rest}>
      {content}
    </button>
  );
}
