import { stats } from "../../partials/Export";
const Stats = () => {
  return (
    <section>
      {stats.map((stat, index) => (
        <div key={index}>
          <h3>{stat.number}+</h3>
          <p>{stat.content}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
