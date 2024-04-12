
    
   let addText =document.querySelector(".addText")
   let addBtn = document.querySelector("#addBtn")
   let ul = document.querySelector("ul")

   addBtn.addEventListener("click",function(){
    if (InputDeviceInfo.value.length > 0){
        let li= document.createElement("li")
        li.appendChild(document.createTextNode(addText.value))
        ul.appendChild(li);
        li.addEventListener("click",function(){});


    }
   });

