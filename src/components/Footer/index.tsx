import { ReactNode } from "react";
import { footer } from "../../helpers/constants";
import { LinkType } from "../../helpers/interfaces";
import Heading from "../Heading";
import Section from "../Section";
import { Link } from "react-router-dom";
import { normalizeLink } from "../../helpers/helper";
import { images } from "../../utils/images";

interface ListProps {
  title: string;
  items: LinkType[];
  linkPath: (value: LinkType) => string;
}

interface ContactProps {
  title?: string;
  children: ReactNode;
}

const ListSection = ({ title, items, linkPath }: ListProps) => (
  <div className="flex flex-col w-full">
    <Heading level={6} className="mb-4 uppercase text-sm text-oscuro font-medium">{title}</Heading>
    <ul>
      {items.map((element, index) => (
        <li className="mb-3 font-medium text-sm" key={index}>
          <Link to={linkPath(element)}>
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
    <div className="w-full md:w-3/4 mx-auto">
      <Section className="mx-5 md:mx-20 mb-0 py-4 border-t-2 border-b-2 border-mapuche text-sm">

        <div className="flex justify-around flex-wrap md:flex-nowrap gap-10">

          <div className="w-full md:w-[39%] flex justify-between">
            <ListSection
              title="Recursos"
              items={footer.recursos}
              linkPath={(element) => normalizeLink(element.path)}
            />
            <ListSection
              title="Servicios"
              items={footer.servicios}
              linkPath={(element) => normalizeLink(element.path, element.id)}
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
                <a href="#" className="text-naranja">{footer.contacto.ubicacion}</a>
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
    </div>
  )
}

export default Footer;
