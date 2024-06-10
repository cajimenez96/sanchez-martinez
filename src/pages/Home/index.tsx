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
          <Heading level={4} className="whitespace-break-spaces text-[1.5rem] text-base mb-5">
            {data?.title}
            </Heading>
            <Heading level={4} className="whitespace-break-spaces text-[.8em] leading-7">
              {data?.description}
            </Heading>
        </div>
        <div className="w-[250px]">
          <Button buttonStyle="outline">
            {data?.button}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Container className="p-3 py-10 md:py-0 flex flex-col md:flex-row justify-evenly items-center md:items-start gap-y-10 md:gap-0 min-h-[70vh]">

        <Section className="my-auto flex flex-col">
          <Heading level={1} className="whitespace-break-spaces text-[4rem] leading-none">
            {hero.title +"\n" + hero.title2}
          </Heading>
          <Heading level={2} className="text-mapuche text-[2.5rem]">
            {hero.subtitle}
          </Heading>
        </Section>

        <Section className="max-w-[500px] mx-10 my-auto flex flex-col items-center md:items-start">
          <Switch selectedValue={selectedValue} handleClick={handleCheckboxChange} />
          {handleSelect()}
        </Section>
      </Container>

      <Section>
        <Heading level={4} className="text-oscuro text-[36px]">
          {sectionTitles.service}
        </Heading>

        <article className="flex gap-20 mt-14">
          
          <div className="flex flex-col justify-between">
            {servicesCards.map((element: Service, index: number) => (
              <ServiceCard service={element} key={index}/>
            ))}
          </div>

          <div className="max-w-md max-h-[850px]">
            <img src={images.service} alt="Servicios" />
          </div>

        </article>
      </Section>

      <>
        <Section className="flex flex-col items-center mt-20">
          <Heading level={4} className="text-oscuro text-[36px]">
            {sectionTitles.notice}
          </Heading>
        </Section>
          <Container className="py-12 flex flex-col items-center">
            <div className="w-64">
              <Button buttonStyle="outline">
                Ver todas las noticias
              </Button>
            </div>

            <div className="w-full" >
              <Carousel>
                {response.map((notice) => (
                  <NoticeCard element={notice} />
                ))}
              </Carousel>
            </div>
          </Container>
      </>
    </>
  )
}

export default Home;
