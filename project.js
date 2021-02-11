const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

//Starting UI Object
const ui = new UI();

//produce storage object
const storage = new Storage();

//Loading all events
eventListeners(); 

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Fill all blanks...","danger");

    }
    else{
        //New Film
        const newFilm = new Film(title,director,url);

        //Adding movie to ui
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Movie has been added successfully...","success");
    }


    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function deleteFilm(e){

    if(e.target.id == "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); 

        ui.displayMessages("Delete operatin was successfull...","success");
     }
}

function clearAllFilms(){

    if(confirm("Are you sure?")){
       ui.clearAllFilmsFromUI();
       storage.clearAllFilmsFromStorage();
    }
}