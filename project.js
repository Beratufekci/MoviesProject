const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");


//Loading all events
eventListeners(); 

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" | director ==="" | url ===""){
        //Error
        UI.displayMessages("Fill all blanks...","danger");

    }
    else{
        //New Film
        const newFilm = new Film(title,director,url);

        //Adding movie to ui
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Movie has been added successfully...","success");
    }


    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function deleteFilm(e){

    if(e.target.id == "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); 

        UI.displayMessages("Delete operatin was successfull...","success");
     }
}

function clearAllFilms(){

    if(confirm("Are you sure?")){
       UI.clearAllFilmsFromUI();
       Storage.clearAllFilmsFromStorage();
    }
}