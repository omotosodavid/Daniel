import { reviews } from "../../partials/Export";

const Reviews = () => {
  return (
    <div>
      {reviews.map((review, index) => (
        <div className="bg-[#4C5460] rounded-2xl px-8 py-4" key={index}>
          <figure>
            <img className="rounded-full" src={review.image} alt={review.name} />
          </figure>
          <p className="text-[#8F9AAC]">{review.content}</p>
          <div className="text-[#03242E]">
            <h6>{review.name}</h6>
            <p>{review.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
