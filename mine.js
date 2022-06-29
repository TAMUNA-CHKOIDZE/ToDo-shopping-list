let input = document.querySelector(".input");
let chamonatvali = document.querySelector(".chamonatvali");
let buttonAdd = document.querySelector(".buttonAdd");
let contentCounter = 0;
buttonAdd.addEventListener("click", function () {
   contentCounter++;

   buttonAdd.addEventListener("click", function () {
      if (input.value == "") {
         console.log("input ცარიელია");
      } else {
         let content = document.createElement("div");
         content.classList.add(`content${contentCounter}`);
         content.classList.add("content");
         chamonatvali.appendChild(content);
         let paragraph = document.createElement("p");
         paragraph.classList.add("paragraph_styling");
         paragraph.innerHTML = input.value;
         input.value = "";
         content.appendChild(paragraph);
         let krestik = document.createElement("img");
         krestik.src = "https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"
         krestik.classList.add("krestik");
         content.appendChild(krestik);
         krestik.addEventListener("click", function () {
            content.remove(content);
         })

      }
   })
})

