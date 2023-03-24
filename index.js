let input = document.querySelector("#search");



document.addEventListener("keypress", (e) =>{
   if(e.key == "Enter") {
    window.location.href = "search.html?m=" + input.value;
   } 
})