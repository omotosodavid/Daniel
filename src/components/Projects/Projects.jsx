import { projects } from "../../partials/Export";
import ImageComponent from "../../partials/ImageComponent";
import ProjectContent from "./ProjectContent";

const Projects = () => {
  return (
    <section id="portfolio" className="relative overflow-clip">
      <section className="xl:w-[75rem] mx-auto pt-12 xl:px-0 px-4">
        <h3 className="text-white text-4xl text-center font-medium">
          My Recent Works
        </h3>
        <section className="mt-20 grid lg:gap-y-10 gap-y-20 z-10 relative">
          {projects.map((project, index) => (
            <div
              className={`flex flex-${project.direction} flex-wrap items-center lg:justify-between justify-center gap-y-10`}
              key={index}
            >
              <ProjectContent
                No={index + 1}
                title={project.title}
                content={project.content}
              />
              <ImageComponent image={project.image} alt={project.title} />
            </div>
          ))}
        </section>
        <button className="mt-24 mb-14 grid place-items-center w-full">
            <a
              href="https://www.behance.net/omotoso-daniel"
              className="bg-[#948D8D] rounded-2xl py-3 px-8 text-xl hover:scale-95 duration-200"
            >
              View All
            </a>
        </button>
      </section>
      <div className="absolute top-[40rem] -right-20 border-white border-[2.5rem] p-14 rounded-full"></div>
      <div className="absolute top-[70rem] -left-24 border-white border-[2.5rem] p-14 rounded-full"></div>
      <div className="absolute top-[110rem] -right-24 border-white border-[2.5rem] p-14 rounded-full"></div>
    </section>
  );
};

export default Projects;
