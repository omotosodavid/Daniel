import { reviews } from "../../partials/Export";
import ImageComponent from "../../partials/ImageComponent";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Reviews = () => {
  return (
    <aside className="md:w-[40rem] w-full xl:px-0 px-2">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#4C5460] rounded-2xl sm:px-6 sm:py-4 py-2 px-4 w-[97%] mx-auto flex-shrink-0 grid gap-y-4 text-left"
          >
            <ImageComponent
              parentClass={"w-36"}
              addClass={"rounded-full"}
              image={review.image}
              alt={review.name}
            />
            <p className="text-[#8F9AAC] sm:text-lg">{review.content}</p>
            <div className="text-[#03242E]">
              <h6 className="text-lg font-semibold">{review.name}</h6>
              <p className="text-sm md:text-base">{review.title}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </aside>
  );
};

export default Reviews;
