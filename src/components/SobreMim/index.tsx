"use client";

import { LanguageIcon, SwatchIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
  Spacer,
} from "@nextui-org/react";
import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/components/prism-c";
import { motion } from "framer-motion";

export default function SobreMim() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <h1 id="sobre" className="text-4xl text-[#46237a]">
        Sobre mim
      </h1>
      <div className="my-4 flex flex-row flex-wrap space-x-10 align-middle justify-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, ease: "easeIn" }}
          viewport={{ once: true }}
          className="my-2 w-2/4"
        >
          <Card className="flex justify-center w-auto h-full bg-gradient-to-br from-[#1f271b] from-10% to-[#46237a] to-95%">
            <CardBody>
              <p className="text-2xl text-[#fcfcfc] mb-4">
                Estudante de Engenharia de computação pela FACENS
              </p>
              <Image
                alt="Campus da FACENS"
                src="https://agendasorocaba.com.br/wp-content/uploads/2021/01/facens-centro-universitario-sorocaba.jpg"
              />
            </CardBody>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, ease: "easeIn" }}
          viewport={{ once: true }}
          className="my-2 w-1/4"
        >
          <Card className="flex justify-center w-auto h-full bg-gradient-to-bl from-[#1f271b] from-10% to-[#46237a] to-95%">
            <CardBody>
              <p className="text-2xl text-[#fcfcfc] mb-4">
                Ex-graduando de Engenharia de Software pela UnB
              </p>
              <Image
                alt="Campus da UnB"
                src="http://unbimagens.unb.br/images/phocagallery/FGA/thumbs/phoca_thumb_l_20230414_campus-fga_betomonteiro%201.jpg"
              />
            </CardBody>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, ease: "easeIn" }}
          viewport={{ once: true }}
          className="my-2 w-1/6"
        >
          <Card className="flex justify-center w-auto h-full bg-gradient-to-bl from-[#f7ece1] from-10% to-[#f283b6] to-95%">
            <CardBody>
              <p className="text-2xl text-[#1f271b] mb-4">
                Inglês fluente e N5 em Japonês
              </p>
              <LanguageIcon className="text-[#1f271b]" />
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
/*
<div className="flex flex-row my-4">
        <div className="my-4 w-3/4 space-y-2 justify-center text-lg">
          <p>
            Meu nome é Felipe Mastromauro Corrêa. Sou um estudante de graduação
            em Engenharia da Computação pela{" "}
            <Link isExternal href="https://www.facens.br" showAnchorIcon>
              FACENS
            </Link>{" "}
            e ex-graduando em Engenharia de Software pela{" "}
            <Link isExternal href="https://www.unb.br" showAnchorIcon>
              Universidade de Brasília
            </Link>
            . Também sou técnico em desenvolvimento de sistemas pela{" "}
            <Link
              isExternal
              href="https://www.etecfernandoprestes.com.br"
              showAnchorIcon
            >
              ETEC Fernando Prestes
            </Link>
            .
          </p>
          <p>
            Tenho interesse no desenvolvimento de soluções de software de
            qualquer porte e qualquer natureza, tendo maior experiência com o
            desenvolvimento de soluções Web.
          </p>
        </div>
        <Spacer x={8} />
        <Image
          className="my-4"
          src="/pfp.jpeg"
          alt="Foto de Felipe Mastromauro Corrêa"
          height={200}
          width={200}
        />
      </div>

      <Card className="flex justify-center w-full  bg-gradient-to-bl from-[#1f271b] from-20% to-[#46237a] to-80%">
        <CardBody>
          <p className="text-2xl text-[#fcfcfc]">Fã de Touhou e Vampire Savior :3</p>
        </CardBody>
      </Card>


      <Card className="my-2 flex justify-center w-2/5">
          <CardHeader className="space-x-2 flex justify-between">
            <p>example.c</p>
            <div>
              <span className="size-3 rounded-full bg-green-600"></span>
              <span className="size-3 rounded-full bg-yellow-400"></span>
              <span className="size-3 rounded-full bg-red-600"></span>
            </div>
          </CardHeader>
          <CardBody className="bg-[#46237a]">
            
          </CardBody>
        </Card>
*/
