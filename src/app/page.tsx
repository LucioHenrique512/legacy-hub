"use client";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";

const links = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/legacyjovens_novaserrana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: FaInstagram,
  },
  {
    title: "WhatsApp",
    href: "https://chat.whatsapp.com/LPq8sh0hvN73cEW0zruWtC",
    icon: FaWhatsapp,
  },
];

export default function Home() {
  return (
    <div className="flex justify-between min-h-screen flex-col">
      <header className="relative w-full h-[30vh] bg-lime-400 bg-[url('../../public/images/banner.png')] bg-center flex justify-center items-center">
        <Image
          className="absolute w-[140px] h-[140px] rounded-full bottom-[-70px] border-8 border-black"
          src={require("../../public/images/avatar.jpg")}
          alt="Avatar"
        />
      </header>
      <div className="flex items-center justify-center">
        <ul>
          {links.map((item, index) => (
            <li className="mb-4" key={`${index}-${item.title}`}>
              <button
                className="relative bg-lime-400 text-gray-900 font-bold w-[300px] rounded-full h-[45px] text-xl"
                onClick={() => {
                  document.location.href = item.href;
                }}
              >
                <div className="absolute h-[45px] w-[45px]  top-0 left-2 flex justify-center items-center">
                  {item.icon && <item.icon className="text-3xl" />}
                </div>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div />
    </div>
  );
}
