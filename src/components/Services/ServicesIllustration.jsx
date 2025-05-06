import ImageComponent from "../../partials/ImageComponent";
import { services } from "../../partials/Export";
const ServicesIllustration = () => {
  return (
    <section>
      {services.map((service, index) => (
        <div key={index} className="border-2 rounded-lg py-3 px-10">
          <ImageComponent
            image={service.image}
            parentClass={"border border-[#9DC5FA] p-4 rounded-full"}
            alt={service.skill}
          />
          <p>{service.skill}</p>
        </div>
      ))}
    </section>
  );
};

export default ServicesIllustration;
