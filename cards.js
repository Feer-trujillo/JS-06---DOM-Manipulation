const users = [
    {
        id: 1,
        user_name: 'Fernanda',
        description: 'Developer',
        age: '26',
        imageUrl: "https://via.placeholder.com/300x200?text=User1", 
        fav_music: {
            bands: [
                'Heaven al hell', 'Rammstein', 'Def leppard', 
            ]
        }
    },
    {
        id: 2,
        user_name: 'Héctor',
        description: 'Gerente TI',
        age: '35',
        imageUrl: "https://via.placeholder.com/300x200?text=User2",
        fav_music: {
            bands: [
               'Suffocation', 'Candlemass', 'Incatation',
            ]
        }
    },
    {
        id: 3,
        user_name: 'Luis',
        description: 'Scrum',
        age: '40',
        imageUrl: "https://via.placeholder.com/300x200?text=User3",
        fav_music: {
            bands: [
               'Seguimos Perdiendo', 'Panteon Rococo', 'Tijuana No', 
            ]
        }
    }
]



// Función para crear tarjeta
function createCard(user) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');// Nombre del usuario
    img.src = user.imageUrl;
    img.alt = user.user_name; 

    const title = document.createElement('h2');//Muestra los nombres de usuario
    title.textContent = user.user_name; 
    title.append(" - Nombre");
    title.classList.add("card-title");




    const id = document.createElement('h4');//Muestra los nombres de usuario
    id.textContent = user.id; 
    id.append(" - ID");




    const edad = document.createElement('h4');//Muestra la edad
    edad.textContent = user.age; 
    edad.append(" - Edad");
    



    const description = document.createElement('p'); //Muestra la descripcion
    description.textContent = user.description;



    const bandas = document.createElement('p');
    bandas.textContent = user.fav_music.bands;



    //Mostrar en el card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(id);
    card.appendChild(edad);
    card.appendChild(description);
    card.appendChild(bandas);

    return card;
}





//Contenedor y tarjetas
const container = document.getElementById('card-container');
users.forEach(user => { // por cada usuario dentro del objeto
    const card = createCard(user); //se crea la card
    container.appendChild(card);
});