

type Activity = {
    date: string,
    activity: string,
    startTime: string,
    endTime: string,
};

type activityArray = Activity[];

const activitys: activityArray = [];

const addActivityForm = document.querySelector("form[name='add-new-activity']") as HTMLFormElement | null;
if (!addActivityForm) {
    console.error("Couldn't find add activity form.");
} 
else {
    addActivityForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        activitys.push({
            date: getRequiredString(formData, "date"),
            activity: getRequiredString(formData, "activity"),
            startTime:  getRequiredString(formData, "startTime"),
            endTime: getRequiredString(formData, "endTime"),
        });

        console.log(activitys);
    });
}

function getString(formData: FormData, key: string) {
    const value = formData.get(key);

    if (value == null) {
        throw new Error(`Field ${key} doesn't exist!`);
    }

    if (typeof value !== "string") {
        throw new Error(`Value of field ${key} is not a string!`);
    }

    if (!value) {
        return undefined;
    }

    return value;
}

function getRequiredString(formData: FormData, key: string) {
    const value = getString(formData, key);

    if (!value) {
        throw new Error(`Value for ${key} is required!`);
    }

    return value;
};
function addRow() {
    let table = document.querySelector("table") as HTMLTableElement || null;
 
    addActivityForm!.addEventListener("submit", function (e) {
        e.preventDefault();
    let row = table.insertRow(-1); 
 
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);

    const val0 = document.querySelector('#date')!.value as HTMLInputElement || null;
    const val1 = document.querySelector('#activity')!.value as HTMLInputElement || null;
    const val2 = document.querySelector('#startTime')!.value as HTMLInputElement || null;
    const val3 = document.querySelector('#endTime')!.value as HTMLInputElement || null;

 
    c1.append(val0);
    c2.append(val1);
    c3.append(val2);
    c4.append(val3);

    function addHours(date, hours) {
        date.setTime(date.getTime() + hours * 60 * 60 * 1000);
      
        return date;
      }
      
      // ✅ Add 1 hour to the current date
      const duration = document.querySelector('#duration')!.value as HTMLInputElement || null;

      const deadline = addHours(new Date(), duration);


// To call defined fuction every second
let x = setInterval(function () {

// Getting current time in required format
let now = new Date().getTime();

// Calculating the difference
let t = deadline - now;

// Getting value of days, hours, minutes, seconds
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor(
(t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor(
(t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor(
(t % (1000 * 60)) / 1000);

// Output the remaining time
document.getElementById("time-to-end")!.innerHTML =
days + "d " + hours + "h " + 
minutes + "m " + seconds + "s ";

// Output for over time
if (t < 0) {
clearInterval(x);
document.getElementById("time-to-end")!
 .innerHTML = "EXPIRED";
}
}, 1000);

})};
addRow();
