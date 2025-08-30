"use client";

import Link from "next/link";

export default function Button({ href, children }) {
  const content = (
    <>
      <div className="bg-white rounded-xl h-8 lg:h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="19.99" height="18">
          <path d="M10.029 5H0v7.967h10.029V18l9.961-9.048L10.029 0v5z" />
        </svg>
      </div>
      <p className="text-sm pl-6">{children}</p>
    </>
  );
  const baseStyle =
    "secondaryColorBg text-center w-48 rounded-2xl h-10 lg:h-14 relative text-black text-xl font-semibold group border";

  if (href) {
    return (
      <Link href={href} className={baseStyle}>
        {content}
      </Link>
    );
  }

  return <button className={baseStyle}>{content}</button>;
}
