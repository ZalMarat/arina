export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[320px] w-full flex-col rounded-[32px] bg-[#F3C98A] p-6 text-white md:h-[394px] md:w-[310px]">
      <h3 className="text-center text-2xl font-bold md:text-4xl">{title}</h3>

      <div className="mt-8 text-center text-lg md:text-2xl">{children}</div>
    </div>
  );
}
