"use client";

import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { techs } from "@/utils/techs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Tecnologias() {
  return (
    <>
      <h2 className="text-4xl text-[#46237a]">Tecnologias</h2>
      <div className="flex flex-row flex-wrap justify-center my-4">
        {techs.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: item.time }}
            viewport={{ once: true }}
            key={item.name}
            className="m-2"
          >
            <div className="flex flex-col size-24 justify-center items-center">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#f283b6] rounded-lg size-20 flex flex-col justify-center items-center transition duration-500 hover:bg-[#f7ece1]"
              >
                <a href={item.site} target="_blank">
                  <Image
                    as={NextImage}
                    width={60}
                    height={60}
                    src={item.src}
                    alt={item.name}
                  />
                </a>
              </motion.div>
            </div>
            <h4 className="text-md text-center">{item.name}</h4>
          </motion.div>
        ))}
      </div>
    </>
  );
}
