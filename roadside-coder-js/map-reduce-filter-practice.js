let students = [
  { name: "piyush", rollNumber: 34, marks: 45 },
  { name: "anita", rollNumber: 35, marks: 50 },
  { name: "rahul", rollNumber: 36, marks: 75 },
  { name: "deepa", rollNumber: 37, marks: 60 },
  { name: "vishal", rollNumber: 38, marks: 85 },
  { name: "megha", rollNumber: 39, marks: 70 },
];

// return only the name of the students
let result = students.map((item) => {
  return item.name;
});

// return the details of those who scored more than 60 days
result = students.filter((item) => item.marks > 60);

// return the details of those who scored more than 60 days and roll number greater than 15
result = students.filter((item) => item.marks > 60 && item.rollNumber > 15);

// sum of marks of all of the students
result = students.reduce((prev, cur) => prev + cur.marks, 0);

// return only names of the students who scored more than 60
result = students
  .filter((item) => item.marks > 60)
  .map((record) => record.name);

// return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
result = students
  .map((item) => {
    if (item.marks < 60) {
      item.marks += 20;
    }
    return item;
  })
  .filter((record) => record.marks > 60)
  .reduce((acc, cur) => acc + cur.marks, 0);

console.log(result);
