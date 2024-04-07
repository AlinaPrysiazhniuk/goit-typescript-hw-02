// /*
//   Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
//   і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
// */

// enum DayOfWeek {
//   Monday = "Monday",
//   Tuesday = "Tuesday",
//   Wednesday = " Wednesday",
//   Thursday = "Thursday",
//   Friday = "Friday",
//   Saturday = "Saturday",
//   Sunday = "Sunday",
// }

// function isWeekend(day: DayOfWeek): boolean {
//   switch (day) {
//     case DayOfWeek.Monday:
//     case DayOfWeek.Tuesday:
//     case DayOfWeek.Wednesday:
//     case DayOfWeek.Thursday:
//     case DayOfWeek.Friday:
//       return false;
//     case DayOfWeek.Saturday:
//     case DayOfWeek.Sunday:
//       return true;
//     default:
//       return false;
//   }
// }

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}
