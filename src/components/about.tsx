interface Services {
  title: string;
  children: React.ReactNode;
}

export default function ServicesCategory({ title, children }: Services) {
  return (
    <div className="flex h-20 overflow-hidden rounded-2xl border border-[#F3C98A] bg-white font-inter ">
      <div className="flex w-32 items-center justify-center bg-[#FFD28C]">
        <div>
          <span className="text-2xl font-bold text-white">{title}</span>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center px-6 text-center text-2xl font-semibold text-[#1A2E5A] ">
        {children}
      </div>
    </div>
  );
}
