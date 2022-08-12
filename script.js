/* .js files add interaction to your website */

var factList=[
  "The pandemic, cutting off social contacts, putting parents out of work, and causing many to lose important family members put more pressure on teenagers and has led to a further decline in their mental health.",
  "In 2019, 13 percent of adolescents reported having a major depressive episode, a 60 percent increase from 2007.",
  "According to the Centers for Disease Control and Prevention, suicide rates, which were stable between 2000 and 2007, jumped almost to 60% by 2018. ",
  "Almost half of adolescents with mental health issues do not receive any mental health services citing that they would either experience discrimination from others (such as employers, friends, or family), it is too expensive, they lack transportation, or they believe treatment does not work.",
  "The most common ways parents can tell if their child has a mental health disorder is that if they avoid their friends and their social life, lose interest in activities, they don't have motivation for fun or exciting activities, or suffer from insomnia or nightmares.",
];

var fact = document.getElementById ("myFact");
var myBtn=document.getElementById("myBtn");
var count=0;

myBtn.addEventListener("click", displayfact);

function displayfact(){
  fact.innerHTML=factList[count];
  count++; //adds 1 to count
  if(count==factList.length){
    count=0;
    
  }
}
