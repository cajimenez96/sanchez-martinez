  import Heading from "../../components/Heading";
import Section from "../../components/Section";
import Text from "../../components/Text";
import { about } from "../../helpers/constants";
import { images } from "../../utils/images";
import { marcas } from "../../utils/marcas";

interface ContentProps {
  title: string;
  text: string;
  className?: string;
}

const Content = ({title, text, className}: ContentProps) => {
  return (
    <Section className={`px-0 mx-0 ${className}`}>
      <Heading level={5} className="mb-5 font-semibold md:font-extrabold text-xl md:text-4xl text-oscuro">
        {title}
      </Heading>
      <div>
        <Text className="text-xs md:text-base text-oscuro">
          {text}
        </Text>
      </div>
    </Section>
  );
};


const About = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center md:mt-10">

      <Content title={about.title} text={about.description} className="md:max-w-[500px]" />
      
      <img src={images.about} alt="Nosotros" className="mt-8 mb-12" />

      <Content title={about.firms} text={about.text} />
      <div className="flex flex-wrap justify-center gap-10">
        {marcas.map((m, index) => (
          <img
            key={index}
            src={m.src}
            alt={m.name}
            className="border rounded-md drop-shadow"
            width={400}
            height={200}
          />
        ))}
      </div>

    </div>
  )
}

export default About;
