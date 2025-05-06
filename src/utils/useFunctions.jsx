const useFunctions = () => {
  const formatYear = () => {
    const recentYear = new Date().getFullYear();
    let period =recentYear-2022
    return period;
  };
  return {
    formatYear,
  };
};

export default useFunctions;
