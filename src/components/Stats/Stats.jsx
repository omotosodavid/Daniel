import { stats } from "../../partials/Export";
const Stats = () => {
  return (
    <section className="lg:w-[55rem] mx-auto sm:pl-0 pl-4 sm:overflow-x-visible overflow-x-hidden flex sm:flex-wrap md:justify-between sm:justify-center justify-between items-center mt-16 mb-12 text-white ">
      {stats.map((stat, index) => (
        <div className="flex items-center gap-x-1" key={index}>
          <h1 className="sm:text-7xl text-xl font-bold">{stat.number}<span className="text-[#C5BCBC]">+</span></h1>
          <p className="text-[#AEA9A9] w-20 pt-2 font-medium">{stat.content}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
