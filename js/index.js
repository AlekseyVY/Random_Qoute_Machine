/*Quotes*/
let randomQuoteArr = [
					  "Tears of joy are like the summer rain drops pierced by sunbeams. #Hosea Ballou",
					  "I freed a thousand slaves I could have freed a thousand more if only they knew they were slaves. #Unknown",
					  "Ten people who speak make more noise than ten thousand who are silent. #Napoleon Bonaparte",
					  "Nature does not hurry, yet everything is accomplished. #Lao Tzu",
					  "They always say time changes things, but you actually have to change them yourself. #Andy Warhol",
					  "I am the wisest man alive, for I know one thing, and that is that I know nothing. #Socrates",
					  "The mind is everything. What you think you become. #Buddha",
					  "The life of the dead is placed in the memory of the living. #Marcus Tullius Cicero",
					  "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path. #Buddha",
					  "Without hard work, nothing grows but weeds. #Gordon B. Hinckley",
					 ];

/* Random quote generator max is array.length*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/*inserts random quote in html*/
$(document).ready(function(){
    $("#quoteBtn").click(function(){
    	let randomQuote = randomQuoteArr[getRandomInt(randomQuoteArr.length)];
		let randomQA = randomQuote.split("#");
        $("#quoteInsert").text(randomQA[0]);
        $("#sourceQuote").text(randomQA[1]);
    });
});
