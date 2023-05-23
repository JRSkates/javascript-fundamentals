const person = {
  name: "Jack",
  age: 26,
  address: {
    city: "London",
    postcode: "SW6 6RN",
  },
  hobbies: ["writing", "tennis", "cooking"],
};

console.log(person.address.city);
console.log(person.hobbies[1]);

const cohort = {
  name: "April2023",
  id: 1234,
  students: ["Jack", "Andrea", "Cameron", "Caroline", "Will"],
};

const printCohort = (cohort) => {
  console.log(
    `${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`
  );
};

printCohort(cohort);
