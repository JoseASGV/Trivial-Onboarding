let questions = [

    // Preguntas sobre Salesforce
    { question: "¿Qué es Salesforce?", options: ["Un CRM", "Un ERP", "Un sistema operativo", "Un lenguaje de programación"], answer: "Un CRM" },
    { question: "¿Qué componente de Salesforce permite la integración con otras aplicaciones?", options: ["Marketing Cloud", "Mulesoft", "Tableau", "Service Cloud"], answer: "Mulesoft" },
    { question: "¿Cómo se llama la inteligencia artificial integrada en Salesforce?", options: ["Alexa", "Watson", "Einstein AI", "Cortana"], answer: "Einstein AI" },
    { question: "¿Qué solución de IA de Salesforce permite crear agentes virtuales autónomos?", options: ["AgentForce", "AI Cloud", "SageMaker", "Llama"], answer: "AgentForce" },
    { question: "¿Qué es AppExchange en Salesforce?", options: ["Un marketplace de aplicaciones", "Un módulo de ventas", "Un sistema de pago", "Un entorno de desarrollo"], answer: "Un marketplace de aplicaciones" },
    { question: "¿Cuál de estas es una nube de Salesforce?", options: ["Data Cloud", "Compute Cloud", "Service Cloud", "AI Cloud"], answer: "Service Cloud" },
    { question: "¿Qué función tiene Einstein GPT?", options: ["Generación de contenido", "Almacenamiento en la nube", "Gestión de redes", "Seguridad informática"], answer: "Generación de contenido" },
    { question: "¿Qué permite hacer Salesforce Marketing Cloud?", options: ["Automatizar campañas de marketing", "Gestionar inventario", "Administrar bases de datos", "Controlar nóminas"], answer: "Automatizar campañas de marketing" },
    { question: "¿Qué nube de Salesforce está enfocada en servicios financieros?", options: ["Health Cloud", "Financial Services Cloud", "Service Cloud", "Banking Cloud"], answer: "Financial Services Cloud" },
    { question: "¿Qué solución de Salesforce se usa para comercio electrónico?", options: ["Sales Cloud", "Commerce Cloud", "Experience Cloud", "Retail Cloud"], answer: "Commerce Cloud" },
    { question: "¿Cómo se llama la herramienta de Salesforce para análisis de datos avanzados?", options: ["Power BI", "Looker", "Tableau", "Analytics Cloud"], answer: "Tableau" },
    { question: "¿Qué herramienta de Salesforce facilita la integración con APIs?", options: ["Mulesoft", "Apex", "Heroku", "Salesforce Flow"], answer: "Mulesoft" },
    { question: "¿Qué lenguaje de programación se usa en Salesforce?", options: ["Python", "Java", "Apex", "Swift"], answer: "Apex" },
    { question: "¿Cuál es la plataforma sin código de Salesforce?", options: ["Visualforce", "Flow Builder", "Heroku", "LWC"], answer: "Flow Builder" },
    { question: "¿Qué es Salesforce Lightning?", options: ["Una base de datos", "Una herramienta de email", "Un framework de UI", "Un módulo de soporte"], answer: "Un framework de UI" },
    { question: "¿Cuál es la principal ventaja de usar Salesforce?", options: ["Gestión centralizada de clientes", "Base de datos en local", "Interfaz antigua", "Código abierto"], answer: "Gestión centralizada de clientes" },
    { question: "¿Qué herramienta de Salesforce permite automatizar procesos?", options: ["Salesforce Flow", "Mulesoft", "Marketing Cloud", "Tableau"], answer: "Salesforce Flow" },
    { question: "¿Qué permite hacer Heroku en el ecosistema de Salesforce?", options: ["Desplegar aplicaciones", "Crear reportes", "Gestionar bases de datos", "Automatizar emails"], answer: "Desplegar aplicaciones" },
    { question: "¿Qué herramienta se usa para reportes y dashboards en Salesforce?", options: ["Tableau", "Reports & Dashboards", "Power BI", "Marketing Cloud"], answer: "Reports & Dashboards" },
    { question: "¿Cómo se llama el módulo de Salesforce para ONGs y organizaciones sin fines de lucro?", options: ["Nonprofit Cloud", "Service Cloud", "Financial Cloud", "Experience Cloud"], answer: "Nonprofit Cloud" },
    { question: "¿Qué servicio de Salesforce permite gestionar equipos de ventas?", options: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Marketing Cloud"], answer: "Sales Cloud" },

    // Preguntas sobre Stockcrowd
    { question: "¿Stockcrowd está diseñado principalmente para?", options: ["ONGs", "SaaS", "Call centers", "Retail"], answer: "ONGs" },
    { question: "¿Beneficio clave de Stockcrowd?", options: ["Centraliza donantes", "Pagos globales", "Llamadas automáticas", "Análisis de ventas"], answer: "Centraliza donantes" },
    { question: "¿Qué permite gestionar Stockcrowd en Salesforce?", options: ["Donaciones", "Pagos recurrentes", "Facturación", "Soporte técnico"], answer: "Donaciones" },
    { question: "¿Qué herramienta de Salesforce usa Stockcrowd para gestionar recorridos?", options: ["Journey Builder", "Flow", "Service Cloud", "CPQ"], answer: "Journey Builder" },

    // Preguntas sobre Stripe
    { question: "¿Qué gestiona Stripe en Salesforce?", options: ["Pagos", "Emails", "Inventario", "Reportes"], answer: "Pagos" },
    { question: "¿Qué tipo de empresas usan más Stripe?", options: ["SaaS y fintech", "ONGs", "Retail", "Marketing"], answer: "SaaS y fintech" },
    { question: "¿Qué ventaja ofrece Stripe?", options: ["Facturación automatizada", "Análisis de clientes", "Soporte en la nube", "Personalización UI"], answer: "Facturación automatizada" },
    { question: "¿Qué función tiene Stripe CPQ en Salesforce?", options: ["Suscripciones", "Llamadas", "IA conversacional", "Anuncios"], answer: "Suscripciones" },

    // Preguntas sobre Aircall
    { question: "¿Para qué se usa Aircall en Salesforce?", options: ["Gestión de llamadas", "Análisis de ventas", "Facturación", "Campañas"], answer: "Gestión de llamadas" },
    { question: "¿Qué ventaja clave ofrece Aircall?", options: ["Click-to-call", "Generación de leads", "Facturación automática", "Gestión de inventario"], answer: "Click-to-call" },
    { question: "¿Qué función clave tiene Aircall en Salesforce?", options: ["Registro de llamadas", "Creación de contratos", "Análisis de datos", "Automatización de facturas"], answer: "Registro de llamadas" },
    { question: "¿Quién se beneficia más de Aircall?", options: ["Call centers", "Equipos de ventas", "Soporte técnico", "Todas ellas"], answer: "Todas ellas" }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mezcla las preguntas antes de iniciar la partida
shuffleArray(questions);

let currentQuestion = 0;
let score = 0;
let timeLimit = 8; // Segundos por pregunta
let timeLeft;
let timerInterval;

function restartGame() {
    currentQuestion = 0;
    score = 0;
    // Limpia y reestablece los elementos
    document.getElementById("result").innerHTML = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("score").innerText = "Puntuación: 0";
    document.getElementById("questionCounter").innerText = "";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("score").style.display = "block";
    document.getElementById("questionCounter").style.display = "block";
    document.getElementById("restartButton").style.display = "none";
    
    document.getElementById("options").innerHTML = "";

    shuffleArray(questions);
    loadQuestion();
}


function loadQuestion() {
    if (currentQuestion >= questions.length) {
        // Muestra la puntuación final y el botón de reinicio al terminar la partida
        document.getElementById("quiz").style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementById("questionCounter").style.display = "none";
        document.getElementById("result").innerHTML = `Tu puntuación final: ${score}/${questions.length}`;
        document.getElementById("restartButton").style.display = "block";
        return;
    }

    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("feedback").innerText = "";
    document.getElementById("questionCounter").innerText = `Pregunta ${currentQuestion + 1} de ${questions.length}`;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    // Mezcla respuestas antes de mostrarlas
    let shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);

    // Crea botones para cada respuesta
    shuffledOptions.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });

    // Reinicia el temporizador
    startTimer();
}

function startTimer() {
    timeLeft = timeLimit;
    let timeBar = document.getElementById("timeBar");
    timeBar.style.width = "100%"; // Resetea barra de tiempo

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timeBar.style.width = `${(timeLeft / timeLimit) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer("timeout"); // Marca como incorrecto si el tiempo se agota
        }
    }, 1000);
}

function checkAnswer(selected) {
    clearInterval(timerInterval); // Detiene el temporizador

    let feedbackDiv = document.getElementById("feedback");
    let correctAnswer = questions[currentQuestion].answer;
    let buttons = document.querySelectorAll("#options button")

    if (selected === correctAnswer) {
        score++;
        feedbackDiv.innerText = "¡Correcto!";
        feedbackDiv.style.color = "green";
    } else if (selected === "timeout") {
        feedbackDiv.innerText = `⏳ Tiempo agotado. Respuesta: ${correctAnswer}`;
        feedbackDiv.style.color = "orange";
    } else {
        feedbackDiv.innerText = `❌ Incorrecto. Respuesta: ${correctAnswer}`;
        feedbackDiv.style.color = "red";
    }

    buttons.forEach(button => {
        if (button.innerText === correctAnswer) {
            button.style.backgroundColor = "#0ca197";
            button.style.color = "white";
        } else if (button.innerText === selected) {
            button.style.backgroundColor = "#d90e4e"; 
            button.style.color = "white";
        }
        button.disabled = true; 
    });

    document.getElementById("score").innerText = `Puntuación: ${score}`;
    currentQuestion++;
    setTimeout(loadQuestion, 2000);
}

loadQuestion();
