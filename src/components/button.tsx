import React, { type ButtonHTMLAttributes } from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className=" text-white px-7 py-5 rounded-3xl w-fit  text-2xl border-2 border-solid bg-[#FFCE84] hover:cursor-pointer">
      {children}
    </button>
  );
}
export function ButtonMain({
  children,
  ...props
}: { children: React.ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="font-inter text-white px-7 py-5 rounded-3xl w-fit  text-2xl border-2 border-solid "
    >
      {children}
    </button>
  );
}
