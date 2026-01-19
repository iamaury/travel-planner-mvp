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
  console.log(planningBtnCode.value);
});
