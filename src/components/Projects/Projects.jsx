import { projects } from "../../partials/Export";
import ProjectContent from "./ProjectContent";
import ProjectImage from "./ProjectImage";

const Projects = () => {
  return (
    <section>
      <h3>My Recent Works</h3>
      <section>
        {projects.map((project, index) => (
          <div key={index}>
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
    </section>
  );
};

export default Projects;
