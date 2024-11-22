import Image from "next/image";

export default function Item({
  name,
  color,
  price,
  amount = 1,
  img,
}: {
  name: string;
  color: string;
  price: string;
  amount?: number;
  img: string;
}) {
  return (
    <div className="flex gap-5">
      {/* Card */}
      <div className="w-32 h-24 bg-white rounded-md self-center">
        <Image
          src={img}
          width={100}
          height={100}
          alt="iPhone 12 Pro"
          className="w-full h-full object-scale-down"
        />
      </div>
      <div className="flex flex-col w-full font">
        <div className="flex justify-between text-[#1D1D1F]">
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <div className="text-[#394150]">
          <p>{color}</p>
        </div>
        <div className="flex justify-between mt-auto text-[#394150]">
          <p>x {amount}</p>
          <p>X</p>
        </div>
      </div>
    </div>
  );
}
