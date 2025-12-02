const addBtn = document.getElementById("addBtn");
const nameInput = document.getElementById("nameInput");
const rollInput = document.getElementById("rollInput");
const deptInput = document.getElementById("deptInput");
const tableBody = document.querySelector("#studentTable tbody");

addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();
    const dept = deptInput.value.trim();

    if(name === "" || roll === "" || dept === "") {
        alert("Please fill all fields!");
        return;
    }

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${dept}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(tr);

    tr.querySelector(".delete-btn").addEventListener("click", () => {
        tr.remove();
    });

    nameInput.value = "";
    rollInput.value = "";
    deptInput.value = "";
});
