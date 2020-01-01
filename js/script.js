/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat



// Create the array object and add quotes to it.

let quotes = [
  {
     quote : " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
     source : 'Marilyn Monroe',
     year : "2005",
     category : "Self-Motivation Quote"
  },
  {
    quote : " “You only live once, but if you do it right, once is enough.” ",
    source : 'Mae West',
    category : "Love Quote"
  },
  {
    quote : " “In three words I can sum up everything I've learned about life: it goes on.”  ",
    source : 'Robert Frost ',
    citation :"From some of the movies",
    category: "Fashion Quote"
  },
  {
    quote : " “To live is the rarest thing in the world. Most people exist, that is all.”  ",
    source : 'Oscar Wilde',
    category : "Science quote"
  },
  {
    quote : " “Good friends, good books, and a sleepy conscience: this is the ideal life.” ",
    source : 'Mark Twain ',
    category : "Other"
  }
]

// Create the array object of random Background css values
let background = [
  "#001f3f",
  "#0074D9", 
  "#7FDBFF",
  "#39CCCC",
  "#3D9970",
  "#2ECC40",
  "#FF4136",
  "#85144b",
  "#F012BE",
  "#B10DC9"
]

// Set timout function, so after 10s quote will change it self to another
function showAnotherQuote() {
  nIntervId = setInterval(printQuote, 10000);
}

// Call Function showAnotherQuote
showAnotherQuote();

// Random background function to get random background color from "background" array object 
function getRandomBackground() {
  let randomBackground = Math.floor(Math.random() * background.length );
  return background[randomBackground];
}




// Random Quote function to het random quote from "quotes" array object 
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length );
  return quotes[randomNumber];
}


// Print Random Quotes Functio to print random quote the website
function printQuote () {
  let randomQuoteObject =  getRandomQuote();
  let showRandomBg = getRandomBackground();
  let html = '';
  html = "<p class='quote'>" + randomQuoteObject.quote + "</p>";
  html += "<p class='source'>" + randomQuoteObject.source;

  // Check if quotes array have citation and if yes display it
    if ("citation" in randomQuoteObject) {
        html += "<span class='citation'>" + randomQuoteObject.citation + "</span>";
    }

  // Check if quotes array have year and if yes display it
    if ("year" in randomQuoteObject) {
       html += "<span class='year'>" + randomQuoteObject.year + "</span>";
  }
  html += "<span class='category'>" + randomQuoteObject.category+ "</span>";
  html += "</p>";


  document.getElementById('quote-box').innerHTML = html; 

  // Change background color to the generated random color
  document.body.style.backgroundColor = showRandomBg;


}


// click event listener for the print quote button

document.getElementById('load-quote').addEventListener("click", printQuote, false);