

type Activity = {
    name: string,
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
            name: getString(formData, "name"),
            activity: getRequiredString(formData, "activity"),
            startTime:  getRequiredString(formData, "startTime"),
            endTime: getRequiredString(formData, "endTime"),
        });

        console.log(activitys);
        // console.log(DiscountRate);
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
    // Get the table element in which you want to add row
    let table = document.querySelector("table") as HTMLTableElement || null;
 
    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    addActivityForm.addEventListener("submit", function (e) {
        e.preventDefault();
    let row = table.insertRow(-1); // We are adding at the 

 
    // Create table cells
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
 
    // Add data to c1 and c2
    c1.innerText = "Elon"
    c2.innerText = "45"
    c3.innerText = "Houston"
    c4.innerText = "test"
})};

 addRow()
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

