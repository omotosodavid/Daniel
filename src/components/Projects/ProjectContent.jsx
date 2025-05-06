const ProjectContent = ({No, title, content}) => {
  return (
    <div>
      <h6 class="flex items-center gap-x-2 text-white">
        <span class=" block h-[2px] w-4 bg-[#616161]"></span>Project {No}
      </h6>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default ProjectContent;
