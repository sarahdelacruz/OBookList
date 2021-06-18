const search = document.getElementById("search");
const animeList = document.querySelectorAll(".bookdetails");

search.addEventListener("keyup, OBooksApp");

function OBooksApp(e){
   const text = e.target.value.toLowerCase();
   list.forEach(function(card){
      const item = card.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) > -1){
         card.parentElement.parentElement.style.display = "block"
      }else{
         card.parentElement.parentElement.style.display = "none"
      }
   })
}
ReactDOM.render(<OBooksApp/>,document.getElementById('app'));