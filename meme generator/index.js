const title = document.querySelector(".title");
const meme = document.querySelector(".meme");
const gen = document.querySelector(".generate");
const choose = document.getElementById("mems");

async function generatememe() {
    var c = choose.options[choose.selectedIndex].text;;
    const response = await fetch(`https://meme-api.com/gimme/${c}`).then((res) => res.json());
    title.innerHTML = response.title;
    meme.setAttribute("src", response.url);


}
choose.addEventListener("click", generatememe)

gen.addEventListener("click", generatememe)
generatememe();
