const name = "İbrahim Sezer";
const department = "Software Enginner";
const salary = 4000;

// const a = "İsim: " + name + "\n" + "Department: " + department + "\n" + "Salary: " + salary;

// Yukarıda ki ifadeyi hammmal gibi yazacağına Template Litarel sayesinde aşşadaki gibi yazabilirsin
// const a = `İsim: ${name}\nDepartment: ${department}\nSalary: ${salary}`;



// Eskiden böyle amele gibi yazılırdı
/* const html = "<ul> " +
             "<li>" + name + "</li>" +
             "<li>" + department + "</li>" +
             "<li>" + salary + "</li>" +
             "</ul>";

document.body.innerHTML = html; */



// template literal sayesinde kısaltılmış bi şekilde yazılabilir

function a(){
    return "Hello java";
}

const html = `<ul>
                <li>${name}</li>
                <li>${department}</li>
                <li>${salary}</li>
                <li>${20 + 12}</li>
                <li>${a()}</li>
            </ul>`;

document.body.innerHTML = html;     // Html içine yazdır demek