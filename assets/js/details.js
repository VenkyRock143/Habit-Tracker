
const weekDays = document.getElementsByClassName('day-name');
//This javascript code is used to display the 7 days with there respecting week names.
const currentDate = new Date();
const endDate = new Date(currentDate);
const startDate = new Date(currentDate);
startDate.setDate(startDate.getDate() - (weekDays.length - 1));

for (let i = 0; i < weekDays.length; i++) {
  const day = weekDays[i];
  const dayDate = new Date(startDate);
  dayDate.setDate(startDate.getDate() + i);

  const options = { weekday: 'short', day: 'numeric' };
  const dayText = dayDate.toLocaleString('default', options);

  day.textContent = dayText;
  //we can make current day bold to identify the current date easily
  day.style.fontWeight = (i === weekDays.length - 1) ? "800" : "normal";
}
//This javascript code is used to dipslay current month and year
const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
document.getElementById('month-name').textContent = monthYear;


// Changing status design of the data (done, not done)
let days = document.getElementsByClassName('days');
let statusMappings = {
  'no': {
    iconClass: 'fa fa-times',
    text:"",
    backgroundColor: "rgb(242, 118, 109)"
  },
  'yes': {
    iconClass: 'fa fa-check',
    text: "",
    backgroundColor: "rgb(69, 204, 105)"
  }
};

for (let i = 0, len = days.length; i < len; i++) {
  let day = days[i];
  let status = day.textContent;

  if (status in statusMappings) {
    let statusInfo = statusMappings[status];
    let iconClass = statusInfo.iconClass;
    let backgroundColor = statusInfo.backgroundColor;

    day.innerHTML = `<i class="${iconClass}"></i>`;
    day.style.backgroundColor = backgroundColor;
  }
  
  day.style.color = "white";
}
