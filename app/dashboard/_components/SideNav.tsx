"use client";

import React from "react";
import Image from "next/image";
import { FileClock, Home, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const SideNav: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

  const MenuList = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "History", icon: FileClock, path: "/dashboard/history" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  return (
    <div className="h-screen w-64 bg-gradient-to-br from-[#d2cff0] via-[#dcdaff] to-[#d2cff0] text-[#2E2E3A] p-5 shadow-lg">
      <div className="flex justify-center mb-8">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <hr className="border-t border-[#b4acd6] mb-6" />
      <div className="flex flex-col gap-2">
        {MenuList.map((menu) => {
          const isActive = path === menu.path;
          return (
            <div
              key={menu.path}
              onClick={() => router.push(menu.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-[#6D5BA8] text-white shadow"
                  : "hover:bg-[#c2bff0] text-[#2E2E3A]"
              }`}
            >
              <menu.icon className="h-5 w-5" />
              <span className="text-base">{menu.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
