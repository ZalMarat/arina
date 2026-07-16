import React from "react";
import Button from "@/components/button";
export default function ServicesCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[374px] w-77.5 flex-col rounded-4xl bg-[#F3C98A] p-8 text-white mt-12">
      <h2 className="text-center text-2xl font-bold">{title}</h2>
      <div className="mt-10 text-center text-4xl font-bold text-[#5F6570]">
        {children}
      </div>

      <div className="mt-auto flex justify-center">
        <Button>Записаться</Button>
      </div>
    </div>
  );
}
