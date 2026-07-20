import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-5 font-inter">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-5 md:flex-row">
        <div className="text-center text-xl font-bold text-gray-800 sm:text-2xl">
          <h1> Черемисова Арина Вадимовна</h1>
        </div>

        <div className="flex flex-col items-center gap-3 text-lg sm:text-xl md:flex-row md:gap-6">
          +79643375430
        </div>
      </div>
    </header>
  );
}
