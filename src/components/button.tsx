import React, { type ButtonHTMLAttributes } from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-fit rounded-3xl border-2 border-white bg-[#FFCE84] px-5 py-3 text-lg text-white transition hover:cursor-pointer hover:bg-[#f8c16b] md:px-7 md:py-5 md:text-2xl">
      {children}
    </button>
  );
}

export function ButtonMain({
  children,
  ...props
}: {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="w-fit rounded-3xl border-2 border-white px-5 py-3 text-lg text-white transition hover:cursor-pointer md:px-7 md:py-5 md:text-2xl"
    >
      {children}
    </button>
  );
}
