import useFunctions from "../../utils/useFunctions";
const Stats = () => {
  const { formatYear } = useFunctions();
  const stats = [
    {
      number: `${formatYear()}`,
      content: "Years of Experience",
    },
    { number: 20, content: "Project Completed" },
    { number: 50, content: "Happy Clients" },
  ];
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
