
let quotesArr = [
    " “Be yourself; everyone else is already taken.”",
    " “Two things are infinite: the universe and human stupidity -and I'm not sure about the universe.” ",
    " “You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“If you tell the truth, you don't have to remember anything.”"

];

let buttonClick = document.querySelector("#btnChange");
let quotes = document.querySelector(".quotes");

buttonClick.addEventListener("click", function(){
    const randomIndex= Math.floor(Math.random()* quotesArr.length);
    let quoteRandom = quotesArr[randomIndex];
    quotes.innerHTML = `
    <div class="quote">
        <p>${quoteRandom}</p>
    </div>`;
});