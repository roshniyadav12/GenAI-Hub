"use client";

import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="bg-[#d2cff0] rounded-2xl shadow-md hover:shadow-xl  p-5 cursor-pointer group transition-all duration-300 max-w-sm mx-auto"
      >
        {/* Top Section */}
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.4 }}
            className="w-16 h-16 rounded-xl bg-white flex items-center justify-center overflow-hidden"
          >
            <Image
              src={item.icon}
              alt="icon"
              width={48}
              height={48}
              className="object-contain"
            />
          </motion.div>
          <h3 className="text-lg font-semibold text-[#2E2E3A]">{item.name}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm line-clamp-3">{item.desc}</p>

        <motion.div
          className="mt-5 text-sm text-purple-700 font-medium opacity-0 group-hover:opacity-100 transition"
          whileHover={{ x: 5 }}
        >
          ➜ Try this template
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default TemplateCard;
