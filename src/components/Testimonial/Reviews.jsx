import { reviews } from "../../partials/Export";
import ImageComponent from "../../partials/ImageComponent";

const Reviews = () => {
  return (
    <section className="overflow-hidden w-[38.5rem]">
      <div className="flex items-start justify-between w-[155rem]">
        {reviews.map((review, index) => (
          <div
            className="bg-[#4C5460] rounded-2xl px-8 py-4 w-[38rem] grid gap-y-6"
            key={index}
          >
            <ImageComponent
              addClass={"rounded-full"}
              image={review.image}
              alt={review.name}
            />
            <p className="text-[#8F9AAC] text-lg">{review.content}</p>
            <div className="text-[#03242E]">
              <h6 className="text-xl font-semibold">{review.name}</h6>
              <p className="text-lg">{review.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
