const myWeek = [
  { day: "Monday", activity: "Walk", category: "physical", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "morning" },
  { day: "Tuesday", activity: "Drawing", category: "creative", hoursSpent: 2, enjoyment: 9, timeOfDay: "evening" },
  { day: "Wednesday", activity: "Hanging out with friends", category: "social", hoursSpent: 3, enjoyment: 10, timeOfDay: "afternoon" },
  { day: "Thursday", activity: "Gaming", category: "social", hoursSpent: 2.5, enjoyment: 8, timeOfDay: "evening" },
  { day: "Friday", activity: "Studying", category: "productive", hoursSpent: 4, enjoyment: 4, timeOfDay: "afternoon" },
  { day: "Saturday", activity: "Skating", category: "physical", hoursSpent: 3, enjoyment: 9, timeOfDay: "morning" },
  { day: "Sunday", activity: "Watching Youtube", category: "relaxing", hoursSpent: 2.5, enjoyment: 7, timeOfDay: "afternoon" }
];

// Predictions
// I think Hanging out with friends will have the highest enjoyment out of all activities.
// The category that'll dominate most of my week will be physical.
// A pattern I suspect is that afternoons have higher overall enjoyment because thats usually when I have the most free time.

// Finds how many total hours were spent doing physical activities
function totalPhysicalHours(data) {
  const physical = data.filter(item => item.category === "physical");
  return physical.reduce((sum, act) => sum + act.hoursSpent, 0);
}

// Finds the average enjoyment score for a certain time of day 
function averageEnjoymentByTime(time) {
  const match = myWeek.filter(a => a.timeOfDay === time);
  if (match.length === 0) return 0;

  const total = match.reduce((sum, a) => sum + a.enjoyment, 0);
  return (total / match.length).toFixed(1);
}

// Custom higher order function 
function filterByCondition(testFn) {
  return myWeek.filter(testFn);
}

const shortFun = filterByCondition(a => a.hoursSpent < 2 && a.enjoyment > 8);
















