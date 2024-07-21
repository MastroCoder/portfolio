"use client"
import { Link } from "@nextui-org/react";
import { Typewriter } from "nextjs-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="z-0 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl text-gradient-animation text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-[#46237a] to-[#1f271b] py-4">
        <Typewriter
          words={["Meu nome é Felipe Mastromauro! :3"]}
          typeSpeed={70}
        />
      </h1>
      <h2 className="text-2xl md:text-3xl text-gradient-animation text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-[#46237a] to-[#1f271b] py-4">
        <Typewriter
          words={["", "Estudante de Eng. da computação e fullstack dev"]}
          typeSpeed={70}
          delaySpeed={3000}
        />
      </h2>
      <div className="my-4 z-0 flex flex-row justify-center items-center space-x-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 7, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Link
            isExternal
            href="https://www.linkedin.com/in/felipemastromauro/"
            className="bg-transparent"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="3x"
              className="text-[#1f271b]"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 7.25, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Link
            isExternal
            className="bg-transparent"
            href="https://github.com/MastroCoder"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              className="text-[#1f271b]"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * <Button
              radius="full"
              className="text-2xl md:text-3xl bg-transparent border-[#1f271b] text-[#1f271b] border-large"
              startContent={
                <ArrowDownTrayIcon className="size-16 text-[#1f271b]" />
              }
            >
              CV
            </Button>
 */
