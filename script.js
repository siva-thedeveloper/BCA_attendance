let presentCount = 0;

// Date
let d = new Date();
if (document.getElementById("date")) {
  document.getElementById("date").innerText = "Date: " + d.toDateString();
}

// Login Logic
function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u === "admin" && p === "admin") {
    window.location = "admin.html";
  } else if (u === "staff" && p === "staff") {
    window.location = "staff.html";
  } else {
    alert("Invalid Login");
  }
}

// Attendance
function markPresent() {
  let name = document.getElementById("name").value;
  if (name === "") return;

  let li = document.createElement("li");
  li.innerText = name + " - Present";
  li.className = "present";

  document.getElementById("list").appendChild(li);
  presentCount++;
  document.getElementById("count").innerText = presentCount;

  document.getElementById("name").value = "";
}

function markAbsent() {
  let name = document.getElementById("name").value;
  if (name === "") return;

  let li = document.createElement("li");
  li.innerText = name + " - Absent";
  li.className = "absent";

  document.getElementById("list").appendChild(li);
  document.getElementById("name").value = "";
}
