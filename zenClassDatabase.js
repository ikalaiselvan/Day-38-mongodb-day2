// mongodb day-2 task : 

// 1. Users :
db.users.insertMany([
  {
    user_id: 1,
    name: "user1",
    email: "user1@gmail.com",
    role: "student",
    codecata_solved: 15,
    codecata_pending: 85,
    attendance: "present",
    date: new Date(2022 - 10 - 17),
  },
  {
    user_id: 2,
    name: "user2",
    email: "user2@gmail.com",
    role: "student",
    codecata_solved: 80,
    codecata_pending: 20,
    attendance: "absent",
    date: new Date(2022 - 10 - 21),
  },
]);

// codecata :
db.codecata.insertMany([
  {
    name: "user1",
    level: "basic",
    problems_solved: {
      absolute_Beginner: 10,
      basics: 15,
      strings: 10,
      array: 10,
      companies: 15,
    },
    updated_at: "15-10-2022",
  },
  {
    name: "user2",
    level: "advace",
    problems_solved: {
      absolute_Beginner: 10,
      basics: 15,
      strings: 10,
      array: 10,
      companies: 15,
    },
    updated_at: "15-10-2022",
  },
]);

// Attendance :
db.codecata.insertMany([
  {
    user_id: 1,
    attendance: "95 %",
    updated_at: 15 - 10 - 2022,
    class_type: "Fulstack developer",
    batch: "B39WDTamil",
  },
  {
    user_id: 2,
    attendance: "85 %",
    updated_at: 15 - 10 - 2022,
    class_type: "python",
    batch: "B38WDEnglish",
  },
]);

// tasks :
db.tasks.insertMany([
  {
    user_id: 1,
    topics: "javascript, html, css, react, nodejs",
    task: "array, oops, html table, css grid",
    task_completed: 95,
    pending: 5,
    updated_at: new Date("2022-10-15"),
  },
  {
    user_id: 2,
    topics: "javascript, html, css, react, nodejs",
    task: "array, oops, html table, css grid",
    task_completed: 55,
    pending: 45,
    updated_at: new Date("2022-10-17"),
  },
]);

// company drives :
db.companydrives.insertMany([
  {
    user_id: 1,
    user_name: "user_1",
    location: "chennai",
    company_drive: true,
    company_name: "foco",
    date: new Date("2022-10-19"),
  },
  {
    user_id: 2,
    user_name: "user_2",
    location: "Bangalore",
    company_drive: true,
    company_name: "infosys",
    date: new Date("2022-10-21"),
  },
]);

// mentars :
db.mentars.insertMany([
  {
    id: 1,
    name: "mentar-1",
    email: "mentar1@gmail.com",
    class_type: "front end",
    language: "English",
    Available_time: "Week days",
    mentees_count: 20,
  },
  {
    id: 2,
    name: "mentar-2",
    email: "mentar2@gmail.com",
    class_type: "back end",
    language: "Tamil",
    Available_time: "Week end",
    mentees_count: 35,
  },
]);


// 1. Find all the topics and tasks which are thought in the month of October
db.tasks.find(
  { updated_at: { $gt: ISODate("2022-10-01"), $lt: ISODate("2022-10-31") } },
  { _id: 0, task: 1, topics: 1 }
);

// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.tasks.find(
  { date: { $gt: ISODate("2022-10-01"), $lt: ISODate("2022-10-31") } },
  { _id: 0, company_name: 1 }
);

// 3. Find all the company drives and students who are appeared for the placement.
  db.companydrives.find(
    { company_drive: { $eq: true } },
    { _id: 0, user_name: 1, company_name: 1 }
  );
// 4. Find the number of problems solved by the user in codekata
    db.users.find({}, { _id: 0,name : 1, codecata_solved: 1});

// 5. Find all the mentors with who has the mentee's count more than 15
    db.mentars.find({ mentees_count: { $gt: 15 } }, { _id: 0, name: 1 });

// 6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
    db.users.find({}, { _id: 0, name: 1 }).count();