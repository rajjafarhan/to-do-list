const btn=document.querySelector(".add-task-button");
const list=document.querySelector(".list");
const inputText=document.querySelector(".input-text");

btn.addEventListener('click',()=>{
    const input=inputText.value;
    const tasskList=document.createElement('div');
    tasskList.classList.add("task-list");
    // inputText=""
    console.log("this");
    list.appendChild(tasskList);
    const text=document.createElement('input');
    text.classList.add('input-text');
    text.type=text;
    text.value=input;
    text.setAttribute("readonly","readonly")
    tasskList.appendChild(text);
    const editButton=document.createElement("button");
    editButton.classList.add("edit-button");
    tasskList.appendChild(editButton);
    editButton.innerHTML="Edit"
    const deleteButton=document.createElement("button");
    deleteButton.classList.add("delete-button")
    tasskList.appendChild(deleteButton);
    deleteButton.innerHTML="Delete";
   
    editButton.addEventListener('click',()=>{
        if(editButton.innerHTML=="Edit"){
            text.removeAttribute("readonly");
            editButton.innerHTML="Save";
        }
        else{
            text.setAttribute("readonly","readonly");
            editButton.innerHTML="Edit";
        }
    })
    deleteButton.addEventListener('click',()=>{
        list.removeChild(tasskList);
    })

    inputText.value="  "
});

// btn.addEventListener('click',()=>{
//     const input=inputText.value;
//     list.innerHTML=`<div class="task-list">
//     <input type="text" value="${input}" class="input-text" readonly>
//     <button class="edit-button"  onClick="edit()">Edit</button>
//     <button class="delete-button" onClick="delete()">Delete</button>
// </div>`


// })



// function edit(){
   
//     // const inputTwo=document.querySelector(".input-text");
//     // let input=inputTwo.value;
//     const input=inputText.value;
//     list.innerHTML=`<div class="task-list">
//     <input type="text" value="${input}" class="input-text" >
//     <button class="edit-button"  onClick="edit()">Edit</button>
//     <button class="delete-button" onClick="deletefun">Delete</button>
// </div>`

// }



