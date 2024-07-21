import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  Spacer,
} from "@nextui-org/react";

export default function Projetos() {
  return (
    <>
      <h2 className="text-4xl text-[#46237a]">Projetos</h2>
      <div className="flex flex-row flex-wrap my-4">
        <Card className="w-2/5">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <h3 className="text-lg text-[#46237a]">WattSaver</h3>
              <p className="text-lg">
                Dashboard para gerenciamento de energia
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <Image alt="Wattsaver" src="/wattsaver.jpeg" className="shadow-lg"/>
            <p className="mt-2 text-md text-default-500">Aplicação web para a visualização de dados de consumo de energia caseira.</p>
          </CardBody>
          <CardFooter className="flex justify-between">
            <Link isExternal showAnchorIcon href="https://github.com/MastroCoder/wattsave_dashboard">
              <FontAwesomeIcon icon={faGithub} size="lg" className="text-[#1f271b]" />
              <p className="ml-2">Código fonte</p>
            </Link>
            <Link isExternal showAnchorIcon href="https://wattsave-dashboard.vercel.app">
              <p className="ml-2">Deploy</p>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
