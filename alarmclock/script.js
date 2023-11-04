const timeDisplay = document.getElementById("time");
const alarmTimeInput = document.getElementById("alarm-time");
const alarmToneSelect = document.getElementById("alarm-tone");
const setAlarmBtn = document.getElementById("set-alarm-btn");
const alarmStatus = document.getElementById("alarm-status");

function updateISTTime() {
  const ISTTimeZone = "Asia/Kolkata";
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Display AM/PM
    timeZone: ISTTimeZone,
  };
  const ISTTime = new Intl.DateTimeFormat("en-US", options).format(now);
  timeDisplay.textContent = ISTTime;
}

setInterval(updateISTTime, 1000);
updateISTTime();

setAlarmBtn.addEventListener("click", () => {
  const alarmTime = alarmTimeInput.value;
  const alarmTone = alarmToneSelect.value;
  const now = new Date();
  const alarm = new Date(now.toDateString() + " " + alarmTime);

  if (isNaN(alarm.getTime())) {
    alarmStatus.textContent = "Invalid time format";
  } else {
    const ISTTimeZone = "Asia/Kolkata";
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Display AM/PM
      timeZone: ISTTimeZone,
    };
    const ISTAlarmTime = new Intl.DateTimeFormat("en-US", options).format(alarm);

    alarmStatus.textContent = "Alarm set for " + ISTAlarmTime;
    const timeUntilAlarm = alarm - now;
    if (timeUntilAlarm > 0) {
      setTimeout(() => {
        const audio = new Audio(alarmTone);
        audio.play();
        alert("Time to wake up!");
      }, timeUntilAlarm);
    }
  }
});
