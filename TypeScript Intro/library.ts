interface Person {
  firstName: string;
  lastName?: string;
  age: number;
}

interface People {
  person1: Person;
  person2: Person;
}

const getPeople = async (): Promise<People> => {
  const response = await fetch("http://localhost:3000");
  const people = await response.json();
  return people;
};

export default getPeople;
