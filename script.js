const planningBtnAction = document.getElementById("createPlanningBtn"); 
const joinPlanningBtnAction = document.getElementById("joinPlanningBtn");
const planningBtnCode = document.getElementById("joinPlanningCode");
const accueilVue = document.getElementById("accueil");
const planningVue = document.getElementById("planning")

planningVue.style.display = "none";

planningBtnAction.addEventListener("click",function() {
  accueilVue.style.display = "none";
  planningVue.style.display = "block";
});
joinPlanningBtnAction.addEventListener("click",function() {
  const code = planningBtnCode.value;
  const regex = /^[A-Z0-9]{6}$/; 
  if  (regex.text(code)){
  console.log("code ok");
  } else {
  planningBtnCode.value = "error";
  }
});

