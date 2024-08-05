const IMAGE_URL= "https://placehold.co/200";


const USER = {
    id: 1,
    username: 'User Name',
    description: 'Me gustan los conejos',
    age: '25',
    fav_music: {
        bands: [
            'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath']},
};

//**Selectores */
const card =document.getElementById("card-container");
const cardImgContainer= document.getElementById("card-img-container");




//Crear elemento img
const imageElement= document.createElement("img");
imageElement.src =IMAGE_URL;
imageElement. alt ="User profile phot";

//Creamos elemento titutolo ----------> card
const cardTitleElement= document.createElement ("h3");
cardTitleElement.classList.add("card-title");//** con esta etiqueta le damos estilo a los elementos h3 en css */
//Creamos elemnto card
const cardAgeElement = document.createElement ("p");
//Creamos elementos descripcion
const cardDescElement = document.createElement ("p");


///poblar
cardTitleElement.textContent = USER.username;
cardAgeElement.textContent = USER.age;
cardDescElement.textContent= USER.description;

//Renderizar
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardAgeElement,cardDescElement);
