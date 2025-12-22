function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "“After all, one can’t complain. I have my friends.” —Eeyore.",
    autoStart: true,
    delay: 40,
  });
}

let quoteGeneratorElement = document.querySelector("#social-quote-generator");
quoteGeneratorElement.addEventListener("submit", generateQuote);
