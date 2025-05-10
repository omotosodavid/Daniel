import ImageComponent from "../../partials/ImageComponent";
import { services } from "../../partials/Export";
const ServicesIllustration = () => {
  return (
    <section className="flex flex-wrap w-[41.5rem] gap-y-24 justify-between">
      {services.map((service, index) => (
        <div key={index} className={`border rounded-2xl py-4 w-80 grid gap-y-3 place-items-center relative ${service.position===undefined?"":service.position}`}>
          <ImageComponent
            image={service.image}
            parentClass={"border border-[#9DC5FA] p-4 rounded-full w-24"}
            addClass={"w-full h-full"}
            alt={service.skill}
          />
          <p className="text-white text-center text-lg font-medium w-max">{service.skill}</p>
        </div>
      ))}
    </section>
  );
};

export default ServicesIllustration;
