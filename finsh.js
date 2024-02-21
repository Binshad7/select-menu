const selectField = document.getElementById("selectField")
const selectText = document.getElementById("selectText")
const options = document.getElementsByClassName("options")
const list = document.querySelector("#list")
const Img = document.querySelector("#Img")
Img.onclick = ()=>{
    
  list.classList.toggle("hide")
  
  setTimeout(()=>{
    list.classList.toggle("hide")
  },20000)
}

for(option of options){
    option.onclick =function () {
        console.log("hello");
        selectText.innerHTML = this.textContent
        setTimeout(()=>{
            selectText.innerHTML = "Select Social Media"
        },30000)
    }
}