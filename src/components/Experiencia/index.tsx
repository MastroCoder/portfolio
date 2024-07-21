"use client";

import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";

export default function Experiencia() {
  return (
    <>
      <h2 className="text-4xl text-[#46237a]">Experiência profissional</h2>
      <div className="flex flex-col my-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1 , y: 0 }}
          transition={{delay: 0.25}}
          viewport={{ once: true }}
        >
          <Card className="min-w-4/5">
            <CardHeader className="flex gap-3">
              <Image
                alt="Logo da FINATEC"
                width={60}
                src="https://media.licdn.com/dms/image/C4D0BAQF-oxraJDmIfg/company-logo_200_200/0/1630546153526/finatec_logo?e=1729123200&v=beta&t=ouMeZSt1a6ShOjsT4u19evqM7xWHqflz_HwM99cI8oE"
              />
              <div className="flex flex-col">
                <h3 className="text-xl text-[#46237a]">FINATEC</h3>
                <p className="text-xl text-default-500">
                  Nov. 2023 - Atualmente
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col">
              <h4 className="text-lg mb-4 text-[#46237a]">Cargos ocupados</h4>
              <p>
                Estagiário em engenharia de software{" "}
                <span className="text-default-500">Nov.2023 - abr. 2024</span>
              </p>
              <p>
                Pesquisa acadêmica sem vínculo empregatício{" "}
                <span className="text-default-500">Abr. 2024 - Atualmente</span>
              </p>
              <h4 className="text-lg my-4 text-[#46237a]">Atribuições</h4>
              <p>
                Implantação de infraestrutura, implementação de sistemas de
                software, levantamento de requisitos, auxílio em rotinas de
                teste e em documentação de software.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="finatec.org.br">
                finatec.org.br
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
