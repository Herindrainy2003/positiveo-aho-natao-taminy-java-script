let quotes = document.querySelector('#titre')
let auteur  = document.querySelector('#auteur')
let url = "json/quotes.json"
 fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{  
    var index = Math.floor(Math.random()* data.length);
    quotes.textContent = ` " ${data[index].quoteText} " `
    auteur.textContent = data[index].quoteAuthor;
})