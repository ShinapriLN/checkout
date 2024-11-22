import Item from "./components/item";
import Input from "./components/input";
import Button from "./components/button";
import { Divider } from "@nextui-org/react";
import Option from "./components/select";

export default function Home() {
  const checkout = [
    {
      name: "iPhone 12 Pro",
      price: "999.00",
      color: "Golden",
      img: "/resources/Gold.png",
    },
    {
      name: "Apple Watch",
      price: "399.00",
      color: "Blue",
      img: "/resources/Apple-watch.png",
    },
    {
      name: "iMac",
      price: "1199.00",
      color: "Green",
      img: "/resources/iMac.png",
    },
  ];

  return (
    <div className="w-full h-full min-h-screen bg-[url('/resources/background-image.png')] bg-no-repeat bg-contain flex justify-center">
      <div>
        <div className="flex justify-center gap-4 text-white m-8">
          <p className=" text-2xl font-bold">Checkout</p>
          <p className="bg-[#1D1D1F] text-white text-xs rounded-full flex items-center px-4">
            3 ITEMS
          </p>
        </div>
        <div className="rounded-xl mx-10 grid grid-cols-1 sm:grid-cols-2">
          <div className="bg-[#E5E7EB] rounded-l-xl grid grid-rows-3 p-10 gap-2">
            {/* Items */}
            <div className="row-span-2 grid grid-rows-3 gap-2">
              {checkout.map((item, idx) => (
                <Item
                  key={idx}
                  name={item.name}
                  price={item.price}
                  color={item.color}
                  img={item.img}
                />
              ))}
              <Divider className="bg-[#D2D5DA]" />
            </div>

            {/* Controls */}
            <div>
              <div className="flex items-center gap-2 my-4">
                <Input type="text" placeholder="Enter coupon code" />
                <Button>Apply Coupon</Button>
              </div>
              <div className="grid grid-rows-3 gap-2">
                <div className="flex justify-between text-[#394150] font-bold">
                  <p>Sub total</p>
                  <p>$2597.00</p>
                </div>
                <div className="flex justify-between text-[#394150] font-bold">
                  <p>Tax</p>
                  <p>$623.28</p>
                </div>
                <div className="flex justify-between text-[#1D1D1F] font-bold">
                  <p>Total</p>
                  <p>$3220.28</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-[#F3F4F6] rounded-r-xl grid grid-rows-3 p-10 gap-2">
            <div className="row-span-2 grid grid-rows-7">
              <label className="font-bold">Contact Information</label>
              <div className="row-span-2">
                <label className="text-[#394150]">First & Last name</label>
                <Input type="text" placeholder="Enter first & last name" />
              </div>

              <div className="row-span-2">
                <label className="text-[#394150]">Email Address</label>
                <Input type="text" placeholder="Enter email address" />
              </div>
              <div className="row-span-2 grid grid-cols-2 gap-4">
                <div>
                  <label  className="text-[#394150]">Country</label>
                  <Option />
                </div>
                <div>
                  <label  className="text-[#394150]">Postal Code</label>
                  <Input type="text" placeholder="00270" />
                </div>
              </div>
            </div>
            <div className="row-start-3">
              <Button className="w-full">Continue</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
