const ProjectImage = ({ img, alt, width, height, left, bottom, deg }) => {
  return (
    <figure className="relative">
      <div
        className={`h-[${height}px] w-[${width}px] rotate-[${deg}deg] bg-[#575757] rounded-[4rem] absolute bottom-${bottom} left-${left}`}
      ></div>
      <img className="w-auto h-auto z-10 relative" src={img} alt={alt} />
    </figure>
  );
};

export default ProjectImage;
