import { useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import { hero, heroCarousel, response, sectionTitles, servicesCards } from "../../helpers/constants";
import { HeroCarousel, Service } from "../../helpers/interfaces";
import Switch from "../../components/Switch";
import ServiceCard from "../../components/ServiceCard";
import { images } from "../../utils/images";
import Section from "../../components/Section";
import NoticeCard from "../../components/NoticeCard";
import Carousel from "../../components/Carousel";
import Modal from "../../components/Modal";
import Text from "../../components/Text";

const Home = () => {
  const [selectedValue, setSelectedValue] = useState<number>(1);

  const handleCheckboxChange = (value: number) => {
    setSelectedValue(value);
  }

  const handleSelect = () => {
    const data = heroCarousel.find((element: HeroCarousel) => element.id === selectedValue)
    return (
      <div className="min-h-[300px] flex flex-col h-full justify-between items-center md:items-start">
        <div>
          <Heading level={4} className="mb-5 whitespace-break-spaces font-bold text-lg md:text-4xl">
            {data?.title}
            </Heading>
            <Text className="font-normal text-base leading-7">
              {data?.description}
            </Text>
        </div>
        <div className="w-[250px]">
          <Button link href={data?.path} buttonStyle="outline">
            {data?.button}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Container className="p-3 py-10 md:py-0 flex flex-col md:flex-row justify-evenly items-center md:items-start gap-y-10 md:gap-0 min-h-[70vh]">

        <Section className="my-auto md:py-20 flex flex-col items-start leading-[2.8rem] md:leading-none">
          
          <Heading level={1} className="font-black text-[40px] md:text-[82px] md:tracking-[8px]">
            {hero.title}
          </Heading>

          <Heading level={1} className="font-black text-[40px] md:text-[82px] md:tracking-[8px]">
            {hero.title2}
          </Heading>
          
          <Heading level={3} className="text-mapuche font-medium text-3xl md:text-7xl">
            {hero.subtitle}
          </Heading>

        </Section>

        <Section className="w-3/4 md:max-w-[500px] mx-10 my-auto flex flex-col items-center md:items-start">
          <div className="w-full mt-5">
            <Switch selectedValue={selectedValue} handleClick={handleCheckboxChange} />
          </div>
          {handleSelect()}
        </Section>
      </Container>

      <Section className="flex justify-center mx-5 md:mx-0">
        <div className="md:mt-10">
          <Heading level={4} className="font-semibold md:font-black text-oscuro text-xl md:text-[36px]">
            {sectionTitles.service}
          </Heading>

          <article className="flex gap-20 mt-10 md:mt-14">
            
            <div className="flex flex-col justify-between gap-5 md:gap-0">
              {servicesCards.map((element: Service, index: number) => (
                <ServiceCard service={element} key={index}/>
                ))}
            </div>

            <div className="max-w-md max-h-[850px] hidden md:block">
              <img src={images.service} alt="Servicios" />
            </div>

          </article>
        </div>
      </Section>

      <section>
        <Container className="py-10 flex flex-col items-center">

          <Heading level={4} className="font-semibold md:font-black text-crema text-xl md:text-4xl">
            {sectionTitles.notice}
          </Heading>

          <div className="w-64 my-8">
            <Button buttonStyle="outline">
              Ver todas las noticias
            </Button>
          </div>

          <div className="w-[90%]">
            <Carousel>
              {response.map((notice) => (
                <NoticeCard element={notice} key={notice.id} />
              ))}
            </Carousel>
          </div>
        </Container>
      </section>

      <div className="w-full flex justify-center">
        <Modal />
      </div>

    </>
  )
}

export default Home;
