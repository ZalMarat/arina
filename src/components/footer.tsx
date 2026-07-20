import Button from "./button";

export default function Footer() {
  return (
    <footer className="bg-[#92C8DB]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-5 py-8 md:flex-row">
        <h4 className="text-center text-xl font-bold text-black md:text-2xl">
          Черемисова Арина Вадимовна
        </h4>

        <Button>Записаться</Button>
      </div>
    </footer>
  );
}
