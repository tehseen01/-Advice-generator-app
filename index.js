const adviceGenrate = document.getElementById("btn");
const adviceQuote = document.getElementById("quote");
const adviceId = document.getElementById("advice-id");

adviceGenrate.addEventListener("click", () => {
  apiUrl();
});

const url = "https://api.adviceslip.com/advice";

async function apiUrl() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data);
  adviceQuote.textContent = data.slip.advice;
  adviceId.textContent = `advice # ${data.slip.id}`;
}

apiUrl();
