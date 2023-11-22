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
            name: getString(formData, "name"),
            activity: getRequiredString(formData, "activity"),
            startTime: getRequiredString(formData, "startTime"),
            endTime: getRequiredString(formData, "endTime")
        });
        console.log(activitys);
        // console.log(DiscountRate);
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
    // Get the table element in which you want to add row
    var table = document.querySelector("table") || null;
    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    addActivityForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var row = table.insertRow(-1); // We are adding at the 
        // Create table cells
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        var c4 = row.insertCell(3);
        // Add data to c1 and c2
        c1.innerText = "Elon";
        c2.innerText = "45";
        c3.innerText = "Houston";
        c4.innerText = "test";
    });
}
;
addRow();
// const newRow = document.querySelector('tr') as HTMLElement || null ;
// ['name', 'activity', 'startTime', 'endTime'].forEach(colText =>{
//     const col = document.createElement('td');
//     col.innerText = colText;
//     newRow?.appendChild(col);
// });
// document.querySelector('table')?.appendChild(newRow);
// function parseLicenseType(value: string): LicenseType {
//     if (value !== "A" && value !== "B" && value !== "C") {
//         throw new Error(`Invalid license type: ${value}`);
//     }
//     return value;
// }
// function parseStatus(value: string): status {
//     if (value !== "normal" && value !== "free" && value !== "discount" && value !== "banned") {
//         throw new Error(`Invalid status type: ${value}`);
//     }
//     return value;
// }
