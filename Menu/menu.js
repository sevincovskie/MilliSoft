let bar=document.querySelector(".fa-bars");
bar.addEventListener("click", function () {


  let a=document.querySelector(".closeMenu").style.display="flex";
  let b=document.querySelector(".navMenu").style.display="none";
  
})


let close=document.querySelector(".fa-times");
close.addEventListener("click", function () {


  var a=document.querySelector(".closeMenu").style.display="none";
  var b=document.querySelector(".navMenu").style.display="flex";
  
})
  

document.querySelectorAll("li").forEach((element ,index1 )=> {
  element.addEventListener("mouseover", function () {
    var j=element;
    var i=index1;
    document.querySelectorAll("span").forEach((item ,index2 )=> {
      if(index2==i){
        item.style.display="flex";
       

      
      }


    })
    
    
    
  })

});