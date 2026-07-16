import ServicesCard from "@/components/sevicesCard";

export default function Services() {
  return (
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
  );
}
