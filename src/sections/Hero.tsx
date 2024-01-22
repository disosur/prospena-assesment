import hero1 from "../assets/product-1.jpg";
import hero2 from "../assets/product-2.jpg";
import hero3 from "../assets/product-4.jpg";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="h-screen relative flex flex-col justify-center items-center">
      <div className="absolute z-50 md:translate-y-80">
        <Button>Shop Now</Button>
      </div>

      <div className="flex justify-center flex-col-reverse md:flex-row md:h-screen md:items-center z-10">
        <img
          className="w-60 object-cover self-end translate-y-[-4rem] z-50 translate-x-14 md:object-cover md:w-full md:max-h-[300px] md:max-w-[280px] lg:max-h-[514px] lg:max-w-[380px] md:min-h-0 md:h-auto md:translate-y-[-16rem] md:z-40"
          src={hero1}
          alt=""
        />
        <img
          className="w-60 object-cover -translate-x-12 z-40 md:object-cover md:w-full md:max-h-[300px] md:max-w-[287px] lg:max-h-[560px] lg:max-w-[387px] md:min-h-0 md:h-auto md:translate-x-[-4rem] md:z-50 "
          src={hero2}
          alt=""
        />
        <img
          className="w-80 object-cover self-end translate-x-24 translate-y-[2rem] md:object-cover md:w-full md:max-h-[300px] md:max-w-[550px] lg:max-h-[532px] lg:max-w-[720px] md:min-h-0 md:h-auto md:translate-x-[-6rem] md:translate-y-[-18rem]"
          src={hero3}
          alt=""
        />
      </div>
    </section>
  );
}
