import { Button, Textarea, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";

export default function Footer() {
  return (
    <footer className="relative min-w-full z-0 min-h-72 bg-[#1f271b] p-6 flex flex-row justify-between">
      <div className="flex flex-col space-y-4 w-2/5">
        <h4 className="text-[#fcfcfc] text-lg">Entre em contato!</h4>
        <Textarea
          placeholder="Mande uma proposta de emprego! Eu sei que você quer :3"
          minRows={6}
          className="min-w-xl"
        />
        <Button className="bg-[#46237a] text-[#fcfcfc]">
          Enviar email
        </Button>
      </div>
      <div className="flex flex-col space-y-4 w-auto justify-center">
        <h4 className="text-[#fcfcfc] text-lg text-center">Este aqui sou eu!</h4>
        <Image src="/pfp.jpeg" alt="Foto de Felipe Mastromauro Corrêa" width={190} className="align-center"/>
      </div>
    </footer>
  );
}
