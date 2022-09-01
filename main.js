
    //cont

      const searchInput = document.querySelector('.search');
      const suggestions = document.querySelector('.suggestions');
      
      const endpoint = 'https://restcountries.com/v2/all';// pour avoir l'accé a l'API rest
      const cities = []; //un tableau ou on va stocker les données de l'API

      //ecouteurs 

      searchInput.addEventListener('keyup', displayMatches);//quand on tape on lance la fonction displaymatches
      
     
      
      fetch(endpoint)  // on passe a fetch une URL fetch() méthode globale fetch() qui procure un moyen facile et logique de récupérer des ressources à travers le réseau de manière asynchrone.
     
      //  .then(blob => blob.json())

        .then(function(blob){   //La méthode then() renvoie un objet Promise(echec). Elle peut prendre jusqu'à deux arguments qui sont deux fonctions callback à utiliser en cas de complétion ou d'échec de la Promise
            return blob.json() //La méthode blob() de l’interface Response prend un flux Response et le lit jusqu’à la fin. Il renvoie une promesse qui se résout avec un objet Blob.
            // lorsque on obtient un reponse  on la parse en json et on la retourne (une promesse)
        })

        //.then(data => cities.push(...data)) 

        .then(function(data){ //dasn cette fonction on auras le resultat de blob.json qui est un objet representant les donne (data)
            return cities.push(...data) //on ajoute ces données dns notre tableau cities avc la methode push()
        }) // le (...) sytaxe de decomposition utiliser si on a un tableau et qu'on souhaite créer un nouveau tableau composé du premier
      
      function findMatches(wordToMatch, cities){ // fonction pour trouver si sa a matcher ou pas
          return cities.filter(place => { //La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
              
              const regex = new RegExp(wordToMatch, 'gi');//wordtomatch le mot qu'on a ecrit//Un objet RegExp est utilisé pour étudier les correspondances d'un texte avec un motif donné.
              return place.name.match(regex);//on retourn le nom qui a macher avec notre const regex
          });
      }
      
      
      function displayMatches(){
          
          const matchArray = findMatches(this.value, cities);
          console.log(matchArray);
          const html = matchArray.map(place => {
              return `
        <li>
        <span>${place.name}</span>
        <span>${place.capital}</span>
        <span class="population">${place.population}</span>
        </li>
        `;
              
          }).join('');
          suggestions.innerHTML = html;
      }
      
      
      
      
      
      
      
      
      
      
      