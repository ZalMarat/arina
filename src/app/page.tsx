import Button from "@/components/button";
import ServicesCategory from "@/components/ServicesCategory";
import ServicesCard from "@/components/sevicesCard";
import Card from "@/components/card";

export default function Home() {
  return (
    <main className="font-inter">
      {/* Hero */}
      <section className="clip flex min-h-[400px] items-center bg-[url('/img/1.webp')] bg-cover bg-center bg-no-repeat md:min-h-[550px]">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              ТУТ БУДЕТ АДЕКВАТНЫЙ ТЕКСТ
            </h1>

            <Button>Записаться</Button>
          </div>
        </div>
      </section>

      {/* Консультации */}
      <section className="container mx-auto px-5 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-5xl">
          ПРИГЛАШАЮ НА ОЧНЫЕ И ОНЛАЙН КОНСУЛЬТАЦИИ
        </h2>

        <div className="space-y-6">
          <ServicesCategory title="Чоловіки">
            Готова підтримати Вас у складний момент та допомогти повернути
            радість життя.
          </ServicesCategory>

          <ServicesCategory title="GOU">JID</ServicesCategory>
        </div>
      </section>

      {/* Я помогу */}
      <section className="clip2 flex min-h-[500px] items-center bg-[url('/img/2.webp')] bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Я помогу вам!
            </h2>

            <div className="space-y-4 text-lg text-white md:text-2xl">
              <p>
                Пережити стан гострого стресу (війна, втрата домівки, роботи або
                близьких)
              </p>

              <p>
                Пережити стан гострого стресу (війна, втрата домівки, роботи або
                близьких)
              </p>

              <p>
                Пережити стан гострого стресу (війна, втрата домівки, роботи або
                близьких)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}

      <section className="py-16">
        <div className="container mx-auto px-5">
          <h2 className="mb-14 text-center text-3xl font-bold md:text-5xl">
            Услуги
          </h2>
        </div>

        <div className="clip3 bg-[url('/img/3.webp')] bg-cover bg-center py-16">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-4">
              <div className="xl:mt-24">
                <ServicesCard title="Гол">БУБУ</ServicesCard>
              </div>

              <div className="xl:mt-16">
                <ServicesCard title="Гол">БУБУ</ServicesCard>
              </div>

              <div className="xl:mt-8">
                <ServicesCard title="Гол">БУБУ</ServicesCard>
              </div>

              <ServicesCard title="Гол">БУБУ</ServicesCard>
            </div>
          </div>
        </div>
      </section>

      {/* Обо мне */}

      <section className="container mx-auto px-5 py-16">
        <h2 className="mb-14 text-center text-3xl font-bold md:text-5xl">
          Обо мне
        </h2>

        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <Card title="Грудное вскармливание">Молоко титя 100 р</Card>

          <Card title="aboba">popa</Card>

          <Card title="aboba">popa</Card>

          <Card title="aboba">popa</Card>
        </div>
      </section>
    </main>
  );
}
