import { reviews } from "../../partials/Export";
import ImageComponent from "../../partials/ImageComponent";

const Reviews = () => {
  return (
    <aside className="w-[40rem] overflow-hidden">
      <div className="flex gap-6 px-4 sm:px-8 py-6 w-max">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#4C5460] rounded-2xl px-6 py-4 w-[280px] sm:w-[320px] md:w-[380px] flex-shrink-0 grid gap-y-4"
          >
            <ImageComponent
              addClass={"rounded-full"}
              image={review.image}
              alt={review.name}
            />
            <p className="text-[#8F9AAC] text-base md:text-lg">{review.content}</p>
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
