import { projects } from "../../partials/Export";
import ProjectContent from "./ProjectContent";
import ProjectImage from "./ProjectImage";

const Projects = () => {
  return (
    <section className="w-[75rem] mx-auto pt-12">
      <h3 className="text-white text-4xl text-center font-medium">
        My Recent Works
      </h3>
      <section className="mt-20 grid gap-y-10">
        {projects.map((project, index) => (
          <div
            className={`flex flex-${project.direction} items-center justify-between`}
            key={index}
          >
            <ProjectContent
              No={index + 1}
              title={project.title}
              content={project.content}
            />
            <ProjectImage
              img={project.image}
              alt={project.title}
              height={project.height}
              width={project.width}
              left={project.left}
              bottom={project.bottom}
              deg={project.deg}
            />
          </div>
        ))}
      </section>
      <div className="mt-24 mb-14 grid place-content-center">
        <button className="bg-[#948D8D] rounded-2xl py-4 px-14 text-2xl">
          View All
        </button>
      </div>
    </section>
  );
};

export default Projects;
