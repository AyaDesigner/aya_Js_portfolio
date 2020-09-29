function searchFilm(){

    const search = document.getElementById('search');

    const container = document.getElementById('container');

    var request = new XMLHttpRequest();
    request.open('GET', 'http://www.omdbapi.com/?t='+search.value+'&apikey=cbd0acd8', true);
    request.onload = function () {

      var movie = JSON.parse(this.response);
        
          const card = document.getElementById('card');

          const h1 = document.getElementById('title');
          h1.textContent = movie.Title;

          const p = document.createElement('p');
          p.textContent = movie.Plot;

          var img = document.createElement('img'); 
          img.src =   movie.Poster;

          var imdbLink = document.createElement('a');
   

          imdbLink.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
          imdbLink.innerHTML = "IMDB LINK";


          var year = document.createElement('h1'); 
          year.textContent = movie.Year;


          card.appendChild(h1);
          card.appendChild(year);
          card.appendChild(img);
          card.appendChild(p);
          card.appendChild(imdbLink);

    
    }
    request.send();
}



let numbers = [1,2,7,0,8,75,42,5];


function returnSum(arr){

    

    let sum = 0;


        
        arr.array.forEach(element => {


            sum=sum+element; 

            
        });
           
        
    }
return sum;
}


let arrayBig = numbers.filter((element) => {
   return element > 20;
});

let array100 = numbers.map((element) => {
    return element*100;
 });

 let result = numbers.reduce((total,element) => {
    return total+element; 
 });



console.log(result);

