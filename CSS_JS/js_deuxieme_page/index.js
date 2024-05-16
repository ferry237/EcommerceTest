
function dropdown(id, flb, flh) {
    let div =document.getElementById(id)
    let img_flb =document.getElementById(flb)
    let img_flh =document.getElementById(flh)
    div.classList.toggle("hidden");
    img_flb.classList.toggle("hidden")
    img_flh.classList.toggle("hidden")
  }  


  let nocheck = document.querySelectorAll("#nocheck");
  let isclick = false;
  
  nocheck.forEach((evenmt) => {
      evenmt.addEventListener('click', () => {
          isclick ? (evenmt.src = "/items2/nocheck.svg") : (evenmt.src = "/items2/check.svg");
          isclick = !isclick;
      });
  });

       
 