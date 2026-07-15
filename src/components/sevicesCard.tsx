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
    <div className="bg-linear-[#F3C98A] w-77.5 h-98.5 rounded-4xl">
      <div>
        <h1>{title}</h1>
      </div>
      <div>{children}</div>
      <div>
        <Button>Записаться</Button>
      </div>
    </div>
  );
}
