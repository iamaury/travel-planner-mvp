const planningBtnAction = document.getElementById("createPlanningBtn"); 
const accueilVue = document.getElementById("accueil");
const planningVue = document.getElementById("planning")

planningVue.style.display = "none";

planningBtnAction.addEventListener("click",function() {
  accueilVue.style.display = "none";
  planningVue.style.display = "block";
});
