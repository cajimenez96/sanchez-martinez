import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getService } from "../../helpers/helper";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button";

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
  const { id } = useParams();
  
  const serviceId = parseInt(id);

  const service = useMemo(() => getService(serviceId), [serviceId]);


  return (
    <div className="w-full flex justify-center">
      <Section className="w-full md:w-4/5 min-h-[70vh] flex justify-center">
        <Section className="w-full">
          <Heading level={4} className="font-extrabold text-3xl text-oscuro">
            {service?.title}
          </Heading>
          <section className="mx-0 mt-10 flex flex-wrap justify-between">
            <article className="w-full md:w-1/2">
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
            </article>

            <article className="mt-5 max-w-[500px]">
              {service?.items.map(item => (
                <div className={`flex gap-3 mt-3`}>
                  <div>
                    <Number id={item.id} />
                  </div>
                  <div>
                    <Text className="text-oscuro">{item.description}</Text>
                  </div>
                </div>
              ))}
            </article>

          </section>

          <div className="mt-10 flex justify-start">
            <div>
              <Button link href={service?.button.path} buttonStyle="outline" className="border-naranja font-medium text-naranja hover:text-crema hover:bg-naranja">
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
