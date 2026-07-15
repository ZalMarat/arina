import React from "react";

export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-linear-[#F3C98A] w-77.5 h-98.5 rounded-4xl text-white font-bold">
      <div className="text-center py-15 text-[38px] my-5">
        <span>{title}</span>
      </div>
      <div className="text-center text-[24px]">{children}</div>
    </div>
  );
}
