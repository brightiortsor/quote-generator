const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";

const getQuote = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      quote.textContent = `${data.content}`;
      author.textContent = `${data.author}`;
    });
};

btn.addEventListener("click", getQuote);

//[update quote once page loads]
// window.addEventListener("load", getQuote) || getQuote();
getQuote();

//[Using async/await to call API data]

// async function getQuote(){
//     const resp = await fetch('https://api.quotable.io/random')
//     const data = await resp.json()
//     console.log(data);
//   }
//getQuote();
