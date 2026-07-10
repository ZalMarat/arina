import Button from "./button";

export default function Footer() {
  return (
    <footer className="bg-[#92C8DB] font-inter">
      <div className="flex justify-between mx-5 my-5">
        <div className="container text-black font-bold my-5">
          <h4>Черемисова Арина Вадимовна</h4>
        </div>
        <div className="my-5">
          <Button>Записаться</Button>
        </div>
      </div>
    </footer>
  );
}
