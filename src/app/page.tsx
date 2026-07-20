import Button from "@/components/button";
import ServicesCategory from "@/components/about";
import Image from "next/image";
import ServicesCard from "@/components/sevicesCard";
import Card from "@/components/card";
export default function Home() {
  return (
    <div className="font-inter">
      <main className="">
        <section className="bg-[url('/img/1.webp')] clip bg-cover bg-center bg-no-repeat w-full h-125 flex">
          <div className="flex flex-col gap-6 mx-5 my-5">
            <h1 className="font-bold">ТУТ БУДЕТ АДЕКВАТНЫЙ ТЕКСТ</h1>
            <Button>Записаться</Button>
          </div>
        </section>

        {/* <Image src={}></Image> */}
        <section className="mx-5 my-5 ">
          <div className="my-5 mx-5">
            <h2 className="text-4xl font-bold text-center">
              ПРИГЛАШАЮ НА ОЧНЫЕ И ОНЛАЙН КОНСУЛЬТАЦИИ
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <ServicesCategory title="Чоловіки">
              Готова підтримати Вас у складний момент та допомогти повернути
              радість життя.
            </ServicesCategory>
            <ServicesCategory title="GOU">JID</ServicesCategory>
          </div>
        </section>
        <section className="bg-[url('/img/2.webp')] clip2 bg-cover bg-center bg-no-repeat w-full  h-125 flex">
          <div className="my-10 mx-10">
            <h1 className="text-4xl">Я помогу вам!</h1>
            <div className="text-2xl ">
              <p>
                Пережити стан гострого стресу (війна, втрата домівки, роботи або
                близьких);
              </p>
              <p>
                Пережити стан гострого стресу (війна, втрата домівки, роботи або
                близьких);
              </p>
              <p>
                Пережити стан гострого стресу (війна, втрата домівки, роботи або
                близьких);
              </p>
            </div>
          </div>
        </section>
        <div className="my-5 mx-5">
          <h2 className="text-4xl font-bold text-center">Услуги</h2>
        </div>
        <section>
          <div className="bg-[url('/img/3.webp')] clip3 bg-cover bg-center bg-no-repeat w-full h-[560px] ">
            <div className="flex gap-10 justify-center">
              <div className="mt-24">
                <ServicesCard title="Гол">БУБУ</ServicesCard>
              </div>
              <div className="mt-16">
                <ServicesCard title="Гол">БУБУ</ServicesCard>
              </div>
              <div className="mt-8">
                <ServicesCard title="Гол">БУБУ</ServicesCard>
              </div>
              <div>
                <ServicesCard title="Гол">БУБУ</ServicesCard>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="my-5 mx-5">
            <h2 className="text-4xl font-bold text-center">Обо мне</h2>
          </div>
          <div className="flex justify-center gap-8">
            <Card title="Грудное вскармливание">Молоко титя 100 р</Card>
            <Card title="aboba">popa</Card>
            <Card title="aboba">popa</Card>
            <Card title="aboba">popa</Card>
          </div>
        </section>
      </main>
    </div>
  );
}
