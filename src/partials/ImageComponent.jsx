const ImageComponent = ({image, addClass,parentClass,alt}) => {
  return (
    <figure className={parentClass}>
    <img className={addClass} src={image} alt={alt} />
    </figure>
  );
};

export default ImageComponent;
