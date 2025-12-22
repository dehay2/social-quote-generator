function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#user-instructions");
  let apiKey = "07c173115a88142ao0a457t94aeaf9b8";
  let context =
    "You are wise and knowledgable quote generator. Provide a quote within one to two sentences in basic HTML format. Make sure to follow the user instructions.";
  let prompt = `User instructions: generate a quote about ${topicInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayQuote);
}

let quoteGeneratorElement = document.querySelector("#social-quote-generator");
quoteGeneratorElement.addEventListener("submit", generateQuote);
