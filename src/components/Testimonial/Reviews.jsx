import { reviews } from "../../partials/Export";
import ImageComponent from "../../partials/ImageComponent";

const Reviews = () => {
  return (
    <aside className="sm:w-[40rem] overflow-hidden">
      <div className="flex gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#4C5460] rounded-2xl sm:px-6 sm:py-4 py-2 px-4 w-full flex-shrink-0 grid gap-y-4"
          >
            <ImageComponent
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
      </div>
    </aside>
  );
};

export default Reviews;
