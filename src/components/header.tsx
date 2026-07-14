import Link from "next/link";
export default function Header() {
  return (
    <header className="mx-5 font-inter">
      <div className="container text-black flex justify-between items-center my-5 ">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Черемисова Арина Вадимовна</Link>
        </div>

        <nav className="text-2xl md:flex gap-5">
          <Link href="">Консультации</Link>
          <Link href="">Услуги</Link>
          <Link href="/about">Обо мне</Link>
          <Link href="">Цены</Link>
          <Link href="">Отзывы</Link>
        </nav>
      </div>
    </header>
  );
}
