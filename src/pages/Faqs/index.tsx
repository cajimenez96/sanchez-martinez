import React from 'react';
import Section from '../../components/Section';
import Heading from '../../components/Heading';
import Accordion from '../../components/Accordion';
import { faqs } from '../../helpers/constants';

const Faqs: React.FC = () => {
  return (
    <Section className="flex flex-col items-center min-h-[75vh]">
      <Heading 
        level={5}
        className="w-full text-center font-semibold md:font-extrabold text-xl md:text-3xl text-oscuro"
      >
        Preguntas frecuentes
      </Heading>

      <article className="md:w-[530px] flex flex-col items-center justify-center gap-5 mt-12">
        {faqs.map((faq, index) => (
          <Accordion
          key={index}
          title={faq.title}
          classNameTitle="text-naranja hover:text-oscuro justify-between px-0"
          classNameChildren="text-oscuro"
        >
          {faq.description}
        </Accordion>
        ))}
      </article>
    </Section>
  )
}

export default Faqs;