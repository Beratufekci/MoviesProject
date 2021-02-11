const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//Starting UI Object
const ui = new UI();

//Loading all events
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
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
        ui.displayMessages("Movie has been added successfully...","success");
    }


    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}