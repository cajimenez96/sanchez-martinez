import { ReactNode } from "react";
import { LinkType } from "../../helpers/interfaces";
import Heading from "../Heading";
import Section from "../Section";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import { images } from "../../utils/images";
import { footer } from "./Footer.data";

interface ListProps {
  title: string;
  items: LinkType[];
}

interface ContactProps {
  title?: string;
  children: ReactNode;
}

const ListSection = ({ title, items }: ListProps) => (
  <div className="flex flex-col w-full">
    <Heading level={6} className="mb-4 uppercase text-sm text-oscuro font-medium">{title}</Heading>
    <ul>
      {items.map((element, index) => (
        <li className="mb-3 font-medium text-sm" key={index}>
          <Link to={`${element.path}${element.id !== undefined && (element.id >= 0) ? `/${element.id}` : ''}`}>
            {element.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Contact = ({children, title}: ContactProps) => {
  return (
    <>
      <p className="my-1 font-light">{title}</p>
      {children}
    </>
  );
};

const Footer = () => {
  return (
    <div className="w-full mx-auto">
      <Reveal>
        <Section className="mx-5 md:mx-20 mb-0 py-4 border-t-2 border-b-2 border-mapuche text-sm">

          <div className="flex justify-around flex-wrap md:flex-nowrap gap-10">

            <div className="w-full md:w-[39%] flex justify-between">
              <ListSection
                title="Recursos"
                items={footer.recursos}
              />
              <ListSection
                title="Servicios"
                items={footer.servicios}
              />
            </div>


            <div className="w-full md:w-[30%] border border-mapuche my-5 md:hidden"/>
          
            <div className="w-full md:w-[30%] order-4 md:order-3">
              <Heading level={6} className="mb-4 uppercase text-oscuro font-medium">
                Contacto
              </Heading>
              
                <Contact title="Correo:">
                  <a href={`mailto:${footer.contacto.correo}`} className="font-medium">{footer.contacto.correo}</a>
                </Contact>


                <Contact title="Teléfono:">
                <a href={`tel:${footer.contacto.telefono}`} className="font-medium">{footer.contacto.telefono}</a>
                </Contact>

                <Contact title="Dirección:">
                  <p className="font-medium whitespace-pre">
                    {footer.contacto.direccion.ciudad},<br/>
                    {footer.contacto.direccion.localidad},<br/>
                    {footer.contacto.direccion.calle}
                  </p>
                </Contact>

                <Contact>
                  <a href="https://maps.app.goo.gl/aTpseSqxtuZDUJEo6" target="_blank" className="text-naranja">{footer.contacto.ubicacion}</a>
                </Contact>
              
            </div>


            <div className="w-full md:w-[30%] order-3 md:order-4 mb-5 md:mb-0">
              <Heading level={6} className="mb-4 uppercase text-oscuro font-medium">
                Sánchez Martínez & Asociados
              </Heading>
                
              <span className="font-light">
                {footer.magna.descripcion}
              </span>
            </div>

          </div>
        </Section>
        <Section className="mt-3 mb-5 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="">
            <img src={images.logo} width={150} alt="Sanchez martinez" />
          </div>
          <p className="font-medium text-center order-1">
            {footer.footer.texto}
          </p>
        </Section>

      </Reveal>
    </div>
  )
}

export default Footer;
