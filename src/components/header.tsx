export default function Header() {
  return (
    <header className="mx-5 font-inter">
      <div className="container text-black flex justify-between items-center my-5 ">
        <div className="text-2xl font-bold text-gray-800">
          <p>Черемисова Арина Вадимовна</p>
        </div>

        <nav className="text-2xl md:flex gap-5">
          <a href="">Консультации</a>
          <a href="">Услуги</a>
          <a href="">Обо мне</a>
          <a href="">Цены</a>
          <a href="">Отзывы</a>
        </nav>
      </div>
    </header>
  );
}
