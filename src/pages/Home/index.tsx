import { useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Hero from "../../components/Hero";
import { hero, heroCarousel } from "../../helpers/constants";
import { HeroCarousel } from "../../helpers/interfaces";
import Switch from "../../components/Switch";

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
          <Heading level={4} className="whitespace-break-spaces text-[1.5rem] font-surt-semibold text-base mb-5">
            {data?.title}
            </Heading>
            <Heading level={4} className="whitespace-break-spaces font-surt-regular text-[.8em] leading-7">
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
    <Hero className="p-3 py-10 md:py-0 flex flex-col md:flex-row justify-evenly items-center md:items-start gap-y-10 md:gap-0">

      <section className="my-auto flex flex-col">
        <Heading level={1} className="whitespace-break-spaces text-[4rem] font-surt-ex-bold leading-none">
          {hero.title +"\n" + hero.title2}
        </Heading>
        <Heading level={2} className="text-mapuche text-[2.5rem] font-surt-ex-bold">
          {hero.subtitle}
        </Heading>
      </section>

      <section className="max-w-[500px] mx-10 my-auto flex flex-col items-center md:items-start">
        <Switch selectedValue={selectedValue} handleClick={handleCheckboxChange} />
        {handleSelect()}
      </section>
    </Hero>
  )
}

export default Home;
