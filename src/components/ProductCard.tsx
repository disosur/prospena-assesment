interface ProductCardProps {
  image?: string;
  title: string;
  text?: string;
}

export default function ProductCard({ image, title, text }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="bg-orange-300 text-white w-fit text-xs lg:text-lg p-2  absolute translate-x-28 translate-y-10 lg:translate-x-80 lg:translate-y-10">
        15% OFF
      </div>
      <img
        className="object-cover shadow-lg rounded-lg w-[140px] h-[200px] lg:w-[350px] lg:h-[500px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-base lg:text-lg font-bold">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
