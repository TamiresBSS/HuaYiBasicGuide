import { allLanguages } from "./idiomas.js";

var lang = document.getElementById('languages');
// Define hash & language
document.getElementById("languages").onchange = function switchLocation () {
    let selected = lang.value;

    if (selected == "pt") {
        window.location.assign("#pt");
    } else if (selected == "en") { 
        window.location.assign("#en");
    }
    
    refreshAll();
}

function refreshAll () {
    let idiom = lang.value;
    let allnodes = document.body.getElementsByTagName("*");
    //Title
    document.title = allLanguages[idiom].title;
    //All others elements with IDs
    for (let i = 0, max = allnodes.length; i < max; i++) {
        let idname = allnodes[i].id;
        //Check the whole html collection
        if (idname != '') {
            //Check if the ID is present inside the Language List
            if (allLanguages[idiom].hasOwnProperty(idname)) {
                console.log(idname);
                allnodes[i].textContent = allLanguages[idiom][idname];
            };
        };
    };


}

