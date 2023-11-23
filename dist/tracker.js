var activitys = [];
var addActivityForm = document.querySelector("form[name='add-new-activity']");
if (!addActivityForm) {
    console.error("Couldn't find add activity form.");
}
else {
    addActivityForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        activitys.push({
            date: getRequiredString(formData, "date"),
            activity: getRequiredString(formData, "activity"),
            startTime: getRequiredString(formData, "startTime"),
            endTime: getRequiredString(formData, "endTime")
        });
        console.log(activitys);
    });
}
function getString(formData, key) {
    var value = formData.get(key);
    if (value == null) {
        throw new Error("Field " + key + " doesn't exist!");
    }
    if (typeof value !== "string") {
        throw new Error("Value of field " + key + " is not a string!");
    }
    if (!value) {
        return undefined;
    }
    return value;
}
function getRequiredString(formData, key) {
    var value = getString(formData, key);
    if (!value) {
        throw new Error("Value for " + key + " is required!");
    }
    return value;
}
;
function addRow() {
    var table = document.querySelector("table") || null;
    addActivityForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var row = table.insertRow(-1);
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        var c4 = row.insertCell(3);
        var val0 = document.querySelector('#date').value || null;
        var val1 = document.querySelector('#activity').value || null;
        var val2 = document.querySelector('#startTime').value || null;
        var val3 = document.querySelector('#endTime').value || null;
        c1.append(val0);
        c2.append(val1);
        c3.append(val2);
        c4.append(val3);
        function addHours(date, hours) {
            date.setTime(date.getTime() + hours * 60 * 60 * 1000);
            return date;
        }
        // ✅ Add 1 hour to the current date
        var duration = document.querySelector('#duration').value || null;
        var deadline = addHours(new Date(), duration);
        // To call defined fuction every second
        var x = setInterval(function () {
            // Getting current time in required format
            var now = new Date().getTime();
            // Calculating the difference
            var t = deadline - now;
            // Getting value of days, hours, minutes, seconds
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            // Output the remaining time
            document.getElementById("time-to-end").innerHTML =
                days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";
            // Output for over time
            if (t < 0) {
                clearInterval(x);
                document.getElementById("time-to-end")
                    .innerHTML = "EXPIRED";
            }
        }, 1000);
    });
}
;
addRow();
