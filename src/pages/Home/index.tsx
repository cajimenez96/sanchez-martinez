import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import { hero, heroCarousel, sectionTitles, servicesCards } from "../../helpers/constants";
import { Card as CardElement, HeroCarousel } from "../../helpers/interfaces";
import Switch from "../../components/Switch";
import Card, { CardBody } from "../../components/Card";
import Section from "../../components/Section";
import Carousel from "../../components/Carousel";
import Modal from "../../components/Modal";
import Text from "../../components/Text";
import { images } from "../../utils/images";
import { Navigation } from "../../utils/navigation";
import { IPost } from "../../api/Post";
import { getAllPosts } from "../Posts/require";
import { useNavigate } from "react-router-dom";
import Reveal from "../../components/Reveal";
import Motion from "../../components/Motion";
import Spinner from "../../components/Spinner";

const Home = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState<number>(1);
  const [allPosts, setAllPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const data = await getAllPosts();
      setAllPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleCheckboxChange = (value: number) => {
    setSelectedValue(value);
  }

  const handleSelect = () => {
    const data = heroCarousel.find((element: HeroCarousel) => element.id === selectedValue);

    return (
      <div className="min-h-[300px] flex flex-col h-full justify-between items-center md:items-start">
        <Reveal>
          <Heading level={4} className="mb-5 whitespace-break-spaces font-bold text-lg md:text-4xl">
            {data?.name}
            </Heading>
            <Text className="font-normal text-base leading-7">
              {data?.description}
            </Text>
        </Reveal>
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
      <Container className="p-3 py-10 mt-5 md:py-0 flex flex-col lg:flex-row justify-evenly items-center lg:items-start gap-y-10 md:gap-0 min-h-[70vh]">

        <Motion>
          <Section className="my-auto md:py-20 flex flex-col items-start leading-[2.8rem] md:leading-none">
            
            <Heading level={1} className="font-black text-5xl md:text-[82px] md:tracking-[8px] uppercase">
              {hero.title}
            </Heading>

            <Heading level={1} className="font-black text-5xl md:text-[82px] md:tracking-[8px] uppercase">
              {hero.title2}
            </Heading>
            
            <Heading level={3} className="text-mapuche font-medium text-4xl md:text-7xl">
              {hero.subtitle}
            </Heading>

          </Section>
        </Motion>

        <Section className="w-3/4 md:max-w-[500px] mx-10 my-auto flex flex-col items-center md:items-start">
          <div className="w-full mt-5">
            <Switch selectedValue={selectedValue} handleClick={handleCheckboxChange} />
          </div>
          {handleSelect()}
        </Section>
      </Container>

      <Section className="flex justify-center mx-5 md:mx-0">
        <div className="md:mt-10">
          <Heading level={4} className="font-semibold md:font-black text-oscuro text-xl md:text-[36px] text-center">
            {sectionTitles.service}
          </Heading>

          <article className="flex flex-wrap justify-center gap-20 mt-10 md:mt-14 mx-auto">
            
            <Motion className="w-full flex flex-wrap justify-center gap-5 lg:gap-0">
              {servicesCards.map((service: CardElement) => (
                <Card
                  className="py-3 h-auto w-full md:w-[40%] lg:w-[30%] xl:w-[25%] border-[2px] border-oscuro rounded-xl"
                  handleClick={() => navigate(Navigation.service+'/'+service.id)}
                  key={service.id}
                >
                  <CardBody
                    title={service.name}
                    text={service.description}
                    image={service.image}
                    classText="text-oscuro"
                  />
                </Card>
              ))}
            </Motion>

            <Motion className="hidden md:block">
              <img src={images.service} alt="Servicios" />
            </Motion>

          </article>
        </div>
      </Section>

      <section>
        <Container className="py-10 flex flex-col items-center">

          <Reveal>
            <div className="flex flex-col items-center">
              <Heading level={4} className="font-semibold md:font-black text-crema text-xl md:text-4xl">
                {sectionTitles.notice}
              </Heading>

              <div className="w-64 my-8 text-center">
                <Button buttonStyle="outline" link href={Navigation.post}>
                  Ver todas las noticias
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="w-[90%] mx-auto">
          {loading ? (
            <Spinner />
            ) : (
              <Carousel elements={allPosts} />
            )}
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
