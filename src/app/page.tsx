import Button from "@/components/button";
import ServicesCategory from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-inter">
      <main className="">
        <section className="bg-[url('/img/1.webp')] clip w-[2300] h-[500] flex">
          <div className="flex flex-col gap-6 mx-5 my-5">
            <h1 className="font-bold">ТУТ БУДЕТ АДЕКВАТНЫЙ ТЕКСТ</h1>
            <Button>Записаться</Button>
          </div>
        </section>

        {/* <Image src={}></Image> */}
        <section className="mx-5 my-5 ">
          <div className="content-center">
            <h1 className="text-4xl font-bold">
              ПРИГЛАШАЮ НА ОЧНЫЕ И ОНЛАЙН КОНСУЛЬТАЦИИ
            </h1>
          </div>
          <div>
            <ServicesCategory title="Чоловіки">
              Готова підтримати Вас у складний момент та допомогти повернути
              радість життя.
            </ServicesCategory>
          </div>
        </section>
      </main>
    </div>
  );
}
