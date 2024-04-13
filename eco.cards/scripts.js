let lists = document.querySelectorAll(".product_list li");
let rows = document.querySelectorAll(".row");

lists.forEach(item => {
  item.addEventListener("click", function () {

   lists.forEach(elements => {
      elements.classList.remove("active")
    })
    item.classList.add("active")


    rows.forEach(item2 => {
      item2.classList.add("passiv");
    })
    rows.forEach(item1 => {
      if (item1.className.includes(item.innerText)) {
        item1.classList.remove("passiv")
      }
    })
  })
})


