const getPeople = async () => {
    const response = await fetch("http://localhost:3000");
    const people = await response.json();
    return people;
};
export default getPeople;
