window.onload = adviceGenerator;
const id= document.querySelector(".id");
const advice = document.querySelector(".Advice");
const btn = document.querySelector(".random");
const baseUrl = "https://api.adviceslip.com/advice";

function adviceGenerator() {
    const url = `${baseUrl}?timestamp=${Date.now()}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            id.innerHTML = `Advice #${data.slip.id}`;
            advice.innerHTML = `"${data.slip.advice}"`;
        })
        .catch((error) => {
            console.error("Error fetching advice:", error);
            id.innerHTML = "Error";
            advice.innerHTML = "Could not fetch advice. Please try again later.";
        });
}
btn.addEventListener("click", adviceGenerator);