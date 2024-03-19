// Implementación de clases Activity y Repository
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(id, title, description, imgUrl) {
        const activity = new Activity(id, title, description, imgUrl);
        this.activities.push(activity);
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}

// Crear una instancia de la clase Repository
const repository = new Repository();

// Implementar funciones necesarias para la funcionalidad de "Mis Actividades Favoritas"
function createActivityElement(activity) {
    const { title, description, imgUrl } = activity;
    const card = document.createElement('div');
    card.classList.add('activity-card');
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <img src="${imgUrl}" alt="${title}">
    `;
    return card;
}

function renderActivities() {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Vaciar el contenedor
    const activities = repository.getAllActivities();
    activities.forEach(activity => {
        const card = createActivityElement(activity);
        container.appendChild(card);
    });
}

// Implementar la función handler del botón de agregar actividad
function addActivityHandler() {
    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;
    const imgUrl = document.getElementById('imgUrlInput').value;

    if (!title || !description || !imgUrl) {
        alert('Por favor completa todos los campos.');
        return;
    }

    repository.createActivity(Date.now(), title, description, imgUrl);
    renderActivities();
}

// Agregar event listener al botón de agregar actividad
const addActivityBtn = document.getElementById('addActivityBtn');
addActivityBtn.addEventListener('click', addActivityHandler);

// Implementar la funcionalidad de eliminar tarjetas del contenedor al hacer clic sobre ellas
document.addEventListener('click', event => {
    if (event.target.classList.contains('activity-card')) {
        const id = parseInt(event.target.dataset.id);
        repository.deleteActivity(id);
        renderActivities();
    }
});


// Implementar la función handler del botón de eliminar actividad
function deleteActivityHandler(event) {
    const card = event.target.closest('.activity-card');
    const id = parseInt(card.dataset.id);
    repository.deleteActivity(id);
    renderActivities();
}

// Implementar la función para crear tarjetas de actividad con botón de eliminar
function createActivityElement(activity) {
    const { id, title, description, imgUrl } = activity;
    const card = document.createElement('div');
    card.classList.add('activity-card');
    card.dataset.id = id;
    card.innerHTML = `
        <img src="${imgUrl}" alt="${title}">
        <div class="card-content">
            <h3>${title}</h3>
            <p>${description}</p>
            <button class="delete-btn">Eliminar</button>
        </div>
    `;
    return card;
}

// Implementar la función para manejar clics en el botón de eliminar
function handleDeleteButtonClick(event) {
    if (event.target.classList.contains('delete-btn')) {
        deleteActivityHandler(event);
    }
}

// Implementar la funcionalidad de eliminar tarjetas del contenedor al hacer clic sobre ellas
document.addEventListener('click', handleDeleteButtonClick);
