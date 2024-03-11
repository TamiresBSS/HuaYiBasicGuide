// Languages 
const translate = { 
    pt : {
        title : "Codinome Flower",
        subtitle : "Guia Básico feito por um fã para fãs. Tradução feita via Google Tradutor",
        desc : "Jogo criado pela Nuverse"
    },
    en : {
        title : "Codename Flower",
        subtitle : "Basic Guide made by a fan for fans. Translation done by Google Translator",
        desc : "Game created by Nuverse"
    }
}

const languageSelectop = document.querySelector("select");
let subt = document.getElementById("subTitle");
let desc = document.getElementById("description");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "en") {
        document.title = translate.en.title;
        subt.innerText = translate.en.subtitle;
        desc.innerHTML = translate.en.desc;
    } else if (language == "pt") {
        document.title = translate.pt.title;
        subt.innerText = translate.pt.subtitle;
        desc.innerHTML = translate.pt.desc;
    }
}

