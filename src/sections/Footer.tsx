import logo from "../assets/Logo.svg";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className=" body-font flex justify-between px-20 bg-gray-200  p-8 gap-12">
      <div className=" space-y-4">
        <img src={logo} alt="" className="h-32 w-32" />

        <p className=" text-sm  flex gap-4 items-center">
          <FaLocationArrow className="h-9 w-9" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </p>

        <p className=" text-sm  flex gap-4 items-center">
          <MdOutlinePhoneIphone className="h-9 w-9" />
          <span>Lorem ipsum</span>
        </p>

        <p className=" text-sm  flex gap-4 items-center">
          <MdOutlineEmail className="h-9 w-9" />
          <span>Lorem ipsum dolor sit amet</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              Collection
            </h2>
            <div className=" md:flex md:flex-col hidden ">
              {Array.from({ length: 4 }).map(() => (
                <span>LOREM IPSUM</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              Information
            </h2>
            <div className=" md:flex md:flex-col hidden ">
              {Array.from({ length: 4 }).map(() => (
                <span>LOREM IPSUM</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              More
            </h2>
            <div className=" md:flex md:flex-col hidden ">
              {Array.from({ length: 4 }).map(() => (
                <span>LOREM IPSUM</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
