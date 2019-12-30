/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
     quote : " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
     source : 'Marilyn Monroe',
     citation :"",
     year : "2005"
  },
  {
    quote : " “You only live once, but if you do it right, once is enough.” ",
    source : 'Mae West',
    citation :"",
    year : ""
  },
  {
    quote : " “In three words I can sum up everything I've learned about life: it goes on.”  ",
    source : 'Robert Frost ',
    citation :"From some of the movies",
    year : ""
  },
  {
    quote : " “To live is the rarest thing in the world. Most people exist, that is all.”  ",
    source : 'Oscar Wilde',
    citation :"",
    year : ""
  },
  {
    quote : " “Good friends, good books, and a sleepy conscience: this is the ideal life.” ",
    source : 'Mark Twain ',
    citation :"",
    year : ""
  }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length ) + 1;
  return randomNumber;
}
console.log(getRandomQuote());


/***
 * `printQuote` function
***/
function printQuote () {
  let randomQuoteObject =  getRandomQuote();
  let storeHtml = '';


{/* <p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p> */}

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);