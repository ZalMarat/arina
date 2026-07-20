interface Services {
  title: string;
  children: React.ReactNode;
}

export default function ServicesCategory({ title, children }: Services) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[#F3C98A] bg-white md:h-20 md:flex-row">
      <div className="flex items-center justify-center bg-[#FFD28C] p-5 md:w-40">
        <span className="text-xl font-bold text-white md:text-2xl">
          {title}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center p-5 text-center text-base font-semibold text-[#1A2E5A] md:px-6 md:text-2xl">
        {children}
      </div>
    </div>
  );
}
