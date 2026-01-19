const planningBtnAction = document.getElementById("createPlanningBtn"); 
const joinPlanningBtnAction = document.getElementById("joinPlanningBtn");
const planningCode = document.getElementById("joinPlanningCode");
const accueilVue = document.getElementById("accueil");
const planningVue = document.getElementById("planning")

planningVue.style.display = "none";

planningBtnAction.addEventListener("click",function() {
  accueilVue.style.display = "none";
  planningVue.style.display = "block";
});
planningCode.addEventListener("input",function(){
  planningCode.value = planningCode.value.toUpperCase();
  if (planningCode.value.length > 6){
    planningCode.value = planningCode.value.slice (0,6);
  }
});  
joinPlanningBtnAction.addEventListener("click",function() {
  const code = planningCode.value;
  const regex = /^[A-Z0-9]{6}$/; 
  if  (regex.test(code)){
  console.log("code ok");
  } else {
  planningCode.value = "error";
  }
});

