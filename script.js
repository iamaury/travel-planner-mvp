const planningBtnAction = document.getElementById("createPlanningBtn"); 
const joinPlanningBtnAction = document.getElementById("joinPlanningBtn");
const planningCode = document.getElementById("joinPlanningCode");
const accueilVue = document.getElementById("accueil");
const planningVue = document.getElementById("planning")
const errorMessage = document.getElementById("errorMessage")

planningVue.style.display = "none";
errorMessage.style.display = "none";

function showPlanningView() {
  accueilVue.style.display = "none";
  planningVue.style.display = "block";
}
function generatePlanningCode(){
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let code = "";

  for (let i = 0; i < 6; i++){
  const randomIndex = Math.floor(Math.random()*characters.length);
  code = code + characters[randomIndex];
  }
  return code;
}

planningBtnAction.addEventListener("click", function (){
  function showPlanningView();
  
  const nouvCode = generatePlanningCode();
    console.log(nouvCode);
  
  planningCode.value = nouvCode;
});

planningCode.addEventListener("input",function(){
  errorMessage.style.display = "none";
  planningCode.value = planningCode.value.toUpperCase();
  if (planningCode.value.length > 6){
    planningCode.value = planningCode.value.slice (0,6);
  }
});  

joinPlanningBtnAction.addEventListener("click",function() {
  const code = planningCode.value;
  const regex = /^[A-Z0-9]{6}$/; 
  if  (regex.test(code)){
    console.log ("code ok");
  } else {
  errorMessage.style.display = "block";
  }
});

