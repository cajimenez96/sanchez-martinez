import { ReactNode } from "react";
import Heading from "../../components/Heading";
import Section from "../../components/Section";
import Text from "../../components/Text";
import { about } from "../../helpers/constants";
import { images } from "../../utils/images";
import Reveal from "../../components/Reveal";
import Motion from "../../components/Motion";

interface ContentProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

interface CardProps {
  image: string;
  title: string;
  classNameImage?: string
}

const Content: React.FC<ContentProps> = ({title, children, className}) => {
  return (
    <Section className={`px-0 mx-0 ${className}`}>
      <Reveal className="w-full">
        <Heading level={5} className="w-full mb-5 font-semibold md:font-extrabold text-xl md:text-4xl text-oscuro whitespace-pre">
          {title}
        </Heading>
      </Reveal>
      <div className="flex justify-center gap-10">
        {children}
      </div>
    </Section>
  );
};

const Card: React.FC<CardProps> = ({image, title, classNameImage}) => {
  return (
    <div>
      <img src={image} alt={title} width={300} className={`mb-2 p-1 border rounded-lg ${classNameImage}`} />
      <Text className="text-oscuro">{title}</Text>
    </div>
  )
}


const About = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center md:mt-10 p-5">

      <Reveal>
        <Content title={about.title}>
          <Text className="text-xs md:text-base text-oscuro">
            {about.description}
          </Text>
        </Content>
      </Reveal>

      <Motion className="flex flex-wrap justify-center gap-5">
        {about.firms.map((firm, index) => (
          <Card title={firm.name} image={firm.image} classNameImage="grayscale" key={index} />
        ))}
      </Motion>
      
      <Motion>
        <img src={images.about} alt="Nosotros" className="mt-8 mb-12" />
      </Motion>

      <Content title={about.title2} className="w-full">

        <div className="w-full mt-10 flex flex-wrap justify-evenly">
          <Motion className="text-start mb-5">
            <Card title={about.profile} image={about.profileImage} classNameImage="border-none w-[450px]" />
          </Motion>

          <Reveal>
            <Text className="w-96 text-xs md:text-base text-oscuro text-start whitespace-pre-wrap">
              {about.profileText}
            </Text>
          </Reveal>
        </div>

        
      </Content>

    </div>
  )
}

export default About;
