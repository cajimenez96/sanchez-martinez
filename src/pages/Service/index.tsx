import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getService } from "../../helpers/helper";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Reveal from "../../components/Reveal";
import Motion from "../../components/Motion";

interface NumberProps {
  id: number;
}

const Number = ({id}: NumberProps) => {
  return (
    <div className="h-6 w-6 bg-naranja rounded-lg flex justify-center items-center">
      <p className="font-bold text-crema text-xl text-center">{id}</p>
  </div>
  )
}

const Service = () => {
  const navigate = useNavigate();
  const { id } = useParams<{id?: string}>();
  const serviceId = id ? parseInt(id) : 0;
  const service = useMemo(() => getService(serviceId), [serviceId]);

  type Service = typeof service;

  const redirect = (element: Service) => {
    if (element) navigate(element.button.path + element.id)
  }

  return (
    <div className="w-full flex justify-center">
      <Section className="w-full md:w-4/5 min-h-[70vh] flex justify-center">
        <Section className="w-full">
          <Reveal>
            <Heading level={4} className="font-extrabold text-3xl text-oscuro">
              {service?.title}
            </Heading>
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <Text className="text-naranja">
                Brindado por:
              </Text>
            </Reveal>
            <Motion>
              <img 
                src={service?.image}
                alt={service?.title}
                width={300}
                className="grayscale"
              />
            </Motion>
          </div>
          <section className="mx-0 mt-10 flex flex-wrap justify-between">
            <Reveal className="w-full md:w-1/2">
              {service?.description.map((element, index) => (
                <div className="mt-5" key={index}>
                  <Heading level={6} className="font-bold text-base text-naranja">
                    {element.title}
                  </Heading>

                  <Text className="mt-1 text-oscuro">
                    {element.description}
                  </Text>
                </div>
              ))}
              <div className="mt-10 hidden md:flex justify-start">
                <Motion>
                  <Button
                    buttonStyle="outline"
                    className="border-naranja font-medium text-naranja hover:text-crema hover:bg-naranja"
                    handleClick={() => redirect(service)}>
                    {service?.button.text}
                  </Button>
                </Motion>
              </div>
            </Reveal>

            <Motion className="mt-5 max-w-[500px]">
              {service?.items.map(item => (
                <div className={`flex gap-3 mt-3`} key={item.id}>
                  <div>
                    <Number id={item.id} />
                  </div>
                  <div>
                    <Text className="text-oscuro">{item.description}</Text>
                  </div>
                </div>
              ))}
            </Motion>
          </section>

          <div className="mt-10 flex md:hidden justify-start">
            <div>
              <Button
                buttonStyle="outline"
                className="border-naranja font-medium text-naranja hover:text-crema hover:bg-naranja"
                handleClick={() => redirect(service)}>
                {service?.button.text}
              </Button>
            </div>
          </div>

        </Section>
      </Section>
    </div>
  )
}

export default Service;
