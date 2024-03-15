console.log('IMDBetter Extenstion is running!')

const apiURL = 'https://imdbetter-api.onrender.com/'
// const apiURL = 'http://localhost:3007/'

let currentURL = document.location.href;
let mediaItemId = currentURL.split('/title/')[1].split('/')[0];

fetch( apiURL + 'mediaItemScore?id=' + mediaItemId )
  .then((response) => response.json())
  .then((score) => {
    if ( score !== false ) {
        let scoreEl = document.querySelector('div[data-testid=hero-rating-bar__aggregate-rating__score] span:first-of-type');
        let scoreText = scoreEl.innerText;
        let scoreHTML = '<span style="margin-right: 5px; text-decoration:line-through; color:var(--ipt-on-baseAlt-textSecondary-color, rgba(255,255,255,0.7))" >' 
        + scoreText 
        + '</span>' 
        + score;
        scoreEl.innerHTML = scoreHTML;
    }
  })