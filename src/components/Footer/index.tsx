import { ReactNode } from "react";
import { footer } from "../../helpers/constants";
import { NavbarItemMenu } from "../../helpers/interfaces";
import Heading from "../Heading";
import Section from "../Section";
import { LogoNav } from "../SvgIcons";

interface ListProps {
  title: string;
  elements: NavbarItemMenu[];
}

interface ContactProps {
  title?: string;
  children: ReactNode;
}

const List = ({title, elements}: ListProps) => {
  return (
    <div className="flex flex-col w-full">
      <Heading level={6} className="mb-4 uppercase text-oscuro font-medium">{title}</Heading>
      <ul>
        {elements.map((recurso) => (
          <li className="mb-3 font-medium">{recurso.name}</li>
        ))}
      </ul>
    </div>
  );
};

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
        <div className="flex flex-wrap md:flex-nowrap justify-between">

          <div className="flex w-[2048px]">
            <List title={'Recursos'} elements={footer.recursos} />           
            <List title={'Servicios'} elements={footer.servicios} />
          </div>


          <div className="w-full border border-mapuche my-5 md:hidden"/>
        
          <div className="w-full order-4 md:order-3">
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
                <a href="#">{footer.contacto.ubicacion}</a>
              </Contact>
            
          </div>


          <div className="w-full order-3 md:order-4 mb-5 md:mb-0">
            <Heading level={6} className="mb-4 uppercase text-oscuro font-medium">
              Magna
            </Heading>
              
            <span className="font-light">
              {footer.magna.descripcion}
            </span>
          </div>

        </div>
      </Section>
      <Section className="my-3 flex flex-wrap justify-center md:justify-between items-center gap-5">
        <div className="order-2 md:order-1">
          <LogoNav />
        </div>
        <p className="font-medium text-center order-1">
          {footer.footer.texto}
        </p>
      </Section>
    </div>
  )
}

export default Footer;
