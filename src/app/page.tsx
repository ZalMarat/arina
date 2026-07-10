import Button from "@/components/button";

export default function Home() {
  return (
    <div className="font-inter">
      <main className="">
        <section className="bg-[url('/img/1.webp')] clip w-[2300] h-[500]">
          <div className="flex flex-col gap-6 mx-5 my-5">
            <h1 className="">ТУТ БУДЕТ АДЕКВАТНЫЙ ТЕКСТ</h1>
            <Button>Записаться</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
