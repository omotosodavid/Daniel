const ProjectContent = ({No, title, content}) => {
  return (
    <div className="md:w-[32rem] font-medium">
      <h6 className="flex items-center gap-x-2 text-white mb-6 text-xl">
        <span className=" block h-[2px] w-7 bg-[#616161]"></span>Project {No}
      </h6>
      <h3 className="text-3xl text-[#9A8F8F] font-bold mb-8">{title}</h3>
      <p className="text-[#5F828C] text-lg">{content}</p>
    </div>
  );
};

export default ProjectContent;
