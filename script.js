
/* =========================================
   MEMIZA BALLON D'OR
   JavaScript — Interfaz de demostración
========================================= */



/* =========================================
   1. DATOS DE LA GALA
========================================= */

// -----------------------------------------
// PARTICIPANTES
// Cada amigo se registra una sola vez.
// -----------------------------------------

const participants = {

    memo: {
        name: "MEMO",
        initials: "ME",
        photo: "images/memo.jpg"
    },

    bringas: {
        name: "BRINGAS",
        initials: "BR",
        photo: "images/bringas.jpg"
    },

    gas: {
        name: "GAS",
        initials: "GA",
        photo: "images/gas.jpg"
    },

    rulo: {
        name: "RULO",
        initials: "RU",
        photo: "images/rulo.jpg"
    },

    pique: {
        name: "PIQUÉ",
        initials: "PI",
        photo: "images/pique.jpg"
    },

    padilla: {
        name: "PADILLA",
        initials: "PA",
        photo: "images/padilla.jpg"
    },

    urias: {
        name: "URÍAS",
        initials: "UR",
        photo: "images/urias.jpg"
    },

    tasuko: {
        name: "TASUKO",
        initials: "TA",
        photo: "images/tasuko.jpg"
    },

    robi: {
        name: "ROBI",
        initials: "RO",
        photo: "images/robi.jpg"
    },

    juan: {
        name: "JUAN",
        initials: "JU",
        photo: "images/juan.jpg"
    },

    kirby: {
        name: "KIRBY",
        initials: "KI",
        photo: "images/kirby.jpg"
    },

    pasos: {
        name: "PASOS",
        initials: "PA",
        photo: "images/pasos.jpg"
    }

};


// -----------------------------------------
// CATEGORÍAS
// Cada nominado hace referencia a un participante.
// -----------------------------------------

const categories = [

    {
        id: 1,

        title: "EL MÁS FANTASMA",

        description:
            "Ese amigo que siempre promete y nunca aparece.",

        nominees: [
            {
                participantId: "memo",
                description: "El desaparecido profesional",
                votes: 8
            },
            {
                participantId: "bringas",
                description: "Siempre tiene una excusa",
                votes: 5
            },
            {
                participantId: "gas",
                description: "Nunca se sabe dónde está",
                votes: 3
            },
            {
                participantId: "rulo",
                description: "Aparece cuando menos lo esperas",
                votes: 6
            }
        ]
    },

    {
        id: 2,

        title: "EL MÁS TRONCO",

        description:
            "El talento futbolístico que simplemente no llegó.",

        nominees: [
            {
                participantId: "pique",
                description: "Un espectáculo diferente",
                votes: 4
            },
            {
                participantId: "padilla",
                description: "El balón y él no se entienden",
                votes: 9
            },
            {
                participantId: "urias",
                description: "La técnica es opcional",
                votes: 5
            },
            {
                participantId: "tasuko",
                description: "El arte de perder el balón",
                votes: 7
            }
        ]
    },

    {
        id: 3,

        title: "EL MÁS FANTASIOSO",

        description:
            "El que cuenta historias que nadie termina de creer.",

        nominees: [
            {
                participantId: "robi",
                description: "Una historia por cada ocasión",
                votes: 7
            },
            {
                participantId: "bringas",
                description: "La realidad es negociable",
                votes: 4
            },
            {
                participantId: "gas",
                description: "El protagonista de todo",
                votes: 6
            },
            {
                participantId: "memo",
                description: "Siempre tiene una versión",
                votes: 3
            }
        ]
    },

    {
        id: 4,

        title: "EL MÁS SALADO",

        description:
            "El que parece tener una maldición permanente.",

        nominees: [
            {
                participantId: "rulo",
                description: "La suerte nunca lo acompaña",
                votes: 5
            },
            {
                participantId: "padilla",
                description: "Todo puede salir peor",
                votes: 8
            },
            {
                participantId: "urias",
                description: "Un imán para el desastre",
                votes: 6
            },
            {
                participantId: "pique",
                description: "La mala suerte hecha persona",
                votes: 2
            }
        ]
    },

    {
        id: 5,

        title: "EL MVP DEL GRUPO",

        description:
            "El amigo que se lleva el reconocimiento de todos.",

        nominees: [
            {
                participantId: "memo",
                description: "El jugador más valioso",
                votes: 10
            },
            {
                participantId: "robi",
                description: "Siempre aparece en momentos clave",
                votes: 7
            },
            {
                participantId: "tasuko",
                description: "Un referente del grupo",
                votes: 5
            },
            {
                participantId: "gas",
                description: "El que nunca falla",
                votes: 8
            }
        ]
    },

    {
        id: 6,

        title: "LEYENDA DEL AÑO",

        description:
            "Un premio para alguien que dejó huella en el grupo.",

        nominees: [
            {
                participantId: "bringas",
                description: "Una trayectoria inolvidable",
                votes: 6
            },
            {
                participantId: "memo",
                description: "Un nombre que hace historia",
                votes: 9
            },
            {
                participantId: "rulo",
                description: "Una leyenda viviente",
                votes: 7
            },
            {
                participantId: "robi",
                description: "El legado continúa",
                votes: 4
            }
        ]
    }

];

/* =========================================
   2. ESTADO DE LA APLICACIÓN
========================================= */

// Pantalla actual.

let currentScreen = "homeScreen";

// Categoría actual.

let currentCategoryIndex = 0;

// Nominado seleccionado en la demostración.

let selectedNomineeIndex = null;

// Resultados de las categorías.

const categoryResults = {};
/* =========================================
   MAPA DE FOTOGRAFÍAS DE LOS AMIGOS
========================================= */

const winnerPhotos = {
    "MEMO": "images/memo.jpg",
    "BRINGAS": "images/bringas.jpg",
    "GAS": "images/gas.jpg",
    "RULO": "images/rulo.jpg",
    "PIQUÉ": "images/pique.jpg",
    "PADILLA": "images/padilla.jpg",
    "JUAN": "images/juan.jpg",
    "TASUKO": "images/tasuko.jpg",
    "ROBI": "images/robi.jpg",
   "KIRBY": "images/kirby.jpg",
   "PASOS": "images/pasos.jpg",
   
};

/* =========================================
   3. ELEMENTOS HTML
========================================= */

const homeScreen =
    document.getElementById("homeScreen");

const presenterScreen =
    document.getElementById("presenterScreen");

const winnerScreen =
    document.getElementById("winnerScreen");

const startCeremonyBtn =
    document.getElementById("startCeremonyBtn");

const homeBtn =
    document.getElementById("homeBtn");

const previousCategoryBtn =
    document.getElementById("previousCategoryBtn");

const revealWinnerBtn =
    document.getElementById("revealWinnerBtn");

const nextCategoryBtn =
    document.getElementById("nextCategoryBtn");

const categoryTitle =
    document.getElementById("categoryTitle");

const categoryDescription =
    document.getElementById("categoryDescription");

const categoryCounter =
    document.getElementById("categoryCounter");

const totalCategories =
    document.getElementById("totalCategories");

const nomineesContainer =
    document.getElementById("nomineesContainer");

const votingStatus =
    document.getElementById("votingStatus");

const winnerName =
    document.getElementById("winnerName");

const winnerPhoto =
    document.getElementById("winnerPhoto");

const winnerPhotoContainer =
    document.querySelector(".winner-photo-container");

const winnerCategory =
    document.getElementById("winnerCategory");

const winnerVotes =
    document.getElementById("winnerVotes");

const winnerPercentage =
    document.getElementById("winnerPercentage");


/* =========================================
   4. CAMBIAR DE PANTALLA
========================================= */

function showScreen(screenId) {

    const screens = [
        homeScreen,
        presenterScreen,
        winnerScreen
    ];

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    const targetScreen =
        document.getElementById(screenId);

    targetScreen.classList.add("active");

    currentScreen = screenId;

}


/* =========================================
   5. OBTENER CATEGORÍA ACTUAL
========================================= */

function getCurrentCategory() {

    return categories[currentCategoryIndex];

}


/* =========================================
   6. ACTUALIZAR INFORMACIÓN
========================================= */

function updateCategoryInformation() {

    const category = getCurrentCategory();

    categoryTitle.textContent =
        category.title;

    categoryDescription.textContent =
        category.description;

    categoryCounter.textContent =
        `CATEGORÍA ${String(category.id).padStart(2, "0")}`;

    totalCategories.textContent =
        String(categories.length).padStart(2, "0");

    previousCategoryBtn.disabled =
        currentCategoryIndex === 0;

}


/* =========================================
   7. CREAR TARJETAS DE NOMINADOS
========================================= */


function renderNominees() {

    const category = getCurrentCategory();

    nomineesContainer.innerHTML = "";

    category.nominees.forEach((nominee, index) => {

        // Obtenemos los datos generales del participante.
        const participant =
            participants[nominee.participantId];

        const card =
            document.createElement("article");

        card.className = "nominee-card";

        if (selectedNomineeIndex === index) {

            card.classList.add("selected");

        }

        const nomineeNumber =
            String(index + 1).padStart(2, "0");

        card.innerHTML = `

            <span class="nominee-number">
                ${nomineeNumber}
            </span>

            <div class="nominee-avatar">
                ${participant.initials}
            </div>

            <h3 class="nominee-name">
                ${participant.name}
            </h3>

            <p class="nominee-description">
                ${nominee.description}
            </p>

            <button
                class="nominee-vote-btn"
                data-index="${index}">

                ${selectedNomineeIndex === index
                    ? "VOTO REGISTRADO"
                    : "SELECCIONAR"}

            </button>

        `;

        const voteButton =
            card.querySelector(".nominee-vote-btn");

        voteButton.addEventListener("click", () => {

            selectNominee(index);

        });

        nomineesContainer.appendChild(card);

    });

}



/* =========================================
   8. SELECCIONAR NOMINADO
========================================= */

function selectNominee(index) {

    selectedNomineeIndex = index;

    const category = getCurrentCategory();

    const nominee = category.nominees[index];

    votingStatus.textContent =
        `SELECCIONADO: ${nominee.name}`;

    renderNominees();

}


/* =========================================
   9. REVELAR GANADOR
========================================= */

function revealWinner() {

    const category = getCurrentCategory();

    // Si no se ha seleccionado un nominado,
    // se utiliza el de mayor cantidad de votos
    // de demostración.

    let winningIndex = 0;

    if (selectedNomineeIndex !== null) {

        winningIndex = selectedNomineeIndex;

    } else {

        category.nominees.forEach((nominee, index) => {

            if (
                nominee.votes >
                category.nominees[winningIndex].votes
            ) {

                winningIndex = index;

            }

        });

    }

    const winner =
    category.nominees[winningIndex];

const winnerParticipant =
    participants[winner.participantId];

    // Guardamos el resultado de la categoría.

    categoryResults[category.id] = {
        winner: winner.name,
        votes: winner.votes,
        category: category.title
    };

  // Actualizamos la pantalla dorada.

winnerName.textContent =
    winnerParticipant.name;

winnerCategory.textContent =
    category.title;

winnerVotes.textContent =
    winner.votes;


// -----------------------------------------
// ACTUALIZAR FOTOGRAFÍA DEL GANADOR
// -----------------------------------------


const photoPath =
    winnerParticipant.photo;

if (photoPath) {

    winnerPhotoContainer.style.display = "flex";

    winnerPhoto.src = photoPath;

    winnerPhoto.alt =
        `Fotografía de ${winnerParticipant.name}`;

} else {

    winnerPhotoContainer.style.display = "none";

}


    const totalVotes =
        category.nominees.reduce(
            (total, nominee) => total + nominee.votes,
            0
        );

    const percentage =
        totalVotes > 0
            ? Math.round(
                (winner.votes / totalVotes) * 100
            )
            : 0;

    winnerPercentage.textContent =
        `${percentage}%`;

    // Si es la última categoría,
    // cambiamos el texto del botón.

    if (
        currentCategoryIndex ===
        categories.length - 1
    ) {

        nextCategoryBtn.textContent =
            "FINALIZAR GALA";

    } else {

        nextCategoryBtn.textContent =
            "SIGUIENTE CATEGORÍA →";

    }

    showScreen("winnerScreen");

}


/* =========================================
   10. AVANZAR A LA SIGUIENTE CATEGORÍA
========================================= */

function nextCategory() {

    // Si estamos en la última categoría,
    // regresamos a la portada.

    if (
        currentCategoryIndex >=
        categories.length - 1
    ) {

        currentCategoryIndex = 0;

        selectedNomineeIndex = null;

        showScreen("homeScreen");

        return;

    }

    currentCategoryIndex++;

    selectedNomineeIndex = null;

    updateCategoryInformation();

    renderNominees();

    votingStatus.textContent =
        "VOTACIÓN DE DEMOSTRACIÓN";

    showScreen("presenterScreen");

}


/* =========================================
   11. REGRESAR A LA CATEGORÍA ANTERIOR
========================================= */

function previousCategory() {

    if (currentCategoryIndex === 0) {

        return;

    }

    currentCategoryIndex--;

    selectedNomineeIndex = null;

    updateCategoryInformation();

    renderNominees();

    votingStatus.textContent =
        "VOTACIÓN DE DEMOSTRACIÓN";

}


/* =========================================
   12. INICIAR CEREMONIA
========================================= */

function startCeremony() {

    currentCategoryIndex = 0;

    selectedNomineeIndex = null;

    updateCategoryInformation();

    renderNominees();

    votingStatus.textContent =
        "VOTACIÓN DE DEMOSTRACIÓN";

    showScreen("presenterScreen");

}


/* =========================================
   13. REGRESAR AL INICIO
========================================= */

function returnHome() {

    showScreen("homeScreen");

}


/* =========================================
   14. EVENTOS DE LOS BOTONES
========================================= */

startCeremonyBtn.addEventListener(
    "click",
    startCeremony
);

homeBtn.addEventListener(
    "click",
    returnHome
);

previousCategoryBtn.addEventListener(
    "click",
    previousCategory
);

revealWinnerBtn.addEventListener(
    "click",
    revealWinner
);

nextCategoryBtn.addEventListener(
    "click",
    nextCategory
);

/* =========================================
   RESPALDO SI NO EXISTE UNA FOTOGRAFÍA
========================================= */

winnerPhoto.addEventListener("error", () => {

    winnerPhotoContainer.style.display = "none";

});
/* =========================================
   15. INICIALIZAR APLICACIÓN
========================================= */

totalCategories.textContent =
    String(categories.length).padStart(2, "0");

showScreen("homeScreen");
