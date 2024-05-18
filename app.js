const input=document.getElementById("input-box");
const addBtn=document.getElementById("addBtn");
const listTask=document.getElementById("list-container");
const deleteAll=document.getElementById("deleteBtn");


getData();

function addTask(e){
    if(input.value===''){
        alert("You must write something !")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
    
        listTask.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span); 
        saveData();
    }
    input.value='';
    saveData();

  
}

listTask.addEventListener("click",e=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData(); 
    }
},false)

function saveData(){
    localStorage.setItem("Data",listTask.innerHTML);
}
function getData(){
    listTask.innerHTML=localStorage.getItem("Data")
}

function delALL(){
    // confirm("Are You sure,You are Deleting all the Tasks press  ( ESC ) to get back ",listTask.innerHTML='');
    listTask.innerHTML='';
}

function darkTheme(){
    document.body.classList.toggle("dark")
}



