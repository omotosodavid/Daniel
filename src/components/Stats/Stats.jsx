import { stats } from "../../partials/Export";
const Stats = () => {
  return (
    <section className="w-[75rem] mx-auto flex justify-between items-center mt-16 mb-12 text-white ">
      {stats.map((stat, index) => (
        <div className="flex items-center" key={index}>
          <h1 className="text-7xl font-bold">{stat.number}<span className="text-[#C5BCBC]">+</span></h1>
          <p className="text-[#AEA9A9] w-24 pt-2 font-medium">{stat.content}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
