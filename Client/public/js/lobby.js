// import { store } from "../../src/Redux/store";

// const state = store.getState();

// const role = state.role;
let form = document.getElementById("lobby__form");

let displayName = sessionStorage.getItem("display_name");
if (displayName) {
//   console.log(role);
  form.name.value = displayName;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sessionStorage.setItem("display_name", e.target.name.value);

  let inviteCode = e.target.room.value;
  if (!inviteCode) {
    inviteCode = String(Math.floor(Math.random() * 10000));
  }
  window.location = `room.html?room=${inviteCode}`;
});
