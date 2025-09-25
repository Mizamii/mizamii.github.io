// Banco de Perguntas Ampliado com Dificuldade
const questions = {
    singleplayer: {
        easy: [
            {
                question: "Por que o céu é azul?",
                correctAnswer: "Porque a luz do sol se espalha na atmosfera",
                incorrectOptions: ["Porque Deus pintou assim", "Porque o mar reflete nele", "Por causa das nuvens"],
                difficulty: "easy"
            },
            {
                question: "Qual é a capital do Brasil?",
                correctAnswer: "Brasília",
                incorrectOptions: ["Rio de Janeiro", "São Paulo", "Salvador"],
                difficulty: "easy"
            },
            {
                question: "Quantos dias tem uma semana?",
                correctAnswer: "7",
                incorrectOptions: ["5", "6", "8"],
                difficulty: "easy"
            },
            {
                question: "Qual é a cor do céu em um dia claro?",
                correctAnswer: "Azul",
                incorrectOptions: ["Verde", "Vermelho", "Amarelo"],
                difficulty: "easy"
            },
            {
                question: "Quantas patas tem um cachorro?",
                correctAnswer: "4",
                incorrectOptions: ["2", "6", "8"],
                difficulty: "easy"
            },
            {
                question: "Que animal mia?",
                correctAnswer: "Gato",
                incorrectOptions: ["Cachorro", "Vaca", "Pássaro"],
                difficulty: "easy"
            },
            {
                question: "Que som faz a vaca?",
                correctAnswer: "Muu",
                incorrectOptions: ["Au au", "Miau", "Cócóricó"],
                difficulty: "easy"
            },
            {
                question: "Qual fruta é conhecida por ser amarela?",
                correctAnswer: "Banana",
                incorrectOptions: ["Maçã", "Uva", "Laranja"],
                difficulty: "easy"
            },
            {
                question: "Quantos dedos temos em uma mão?",
                correctAnswer: "5",
                incorrectOptions: ["4", "6", "10"],
                difficulty: "easy"
            },
            {
                question: "Que estação vem depois do verão?",
                correctAnswer: "Outono",
                incorrectOptions: ["Primavera", "Inverno", "Chuvosa"],
                difficulty: "easy"
            },
            {
                question: "Que animal tem listras pretas e brancas?",
                correctAnswer: "Zebra",
                incorrectOptions: ["Leão", "Elefante", "Girafa"],
                difficulty: "easy"
            },
            {
                question: "O que as plantas precisam para crescer?",
                correctAnswer: "Água e sol",
                incorrectOptions: ["Doces e bolos", "Brinquedos", "Roupas"],
                difficulty: "easy"
            },
            {
                question: "Que forma tem uma bola?",
                correctAnswer: "Redonda",
                incorrectOptions: ["Quadrada", "Triangular", "Retangular"],
                difficulty: "easy"
            },
            {
                question: "Que cor é uma folha saudável?",
                correctAnswer: "Verde",
                incorrectOptions: ["Azul", "Vermelha", "Roxa"],
                difficulty: "easy"
            },
            {
                question: "Que animal vive na água e tem barbatanas?",
                correctAnswer: "Peixe",
                incorrectOptions: ["Gato", "Pássaro", "Coelho"],
                difficulty: "easy"
            },
            {
                question: "Que dia vem depois de terça-feira?",
                correctAnswer: "Quarta-feira",
                incorrectOptions: ["Segunda-feira", "Sexta-feira", "Domingo"],
                difficulty: "easy"
            },
            {
                question: "Que cor se forma ao misturar azul e amarelo?",
                correctAnswer: "Verde",
                incorrectOptions: ["Roxo", "Laranja", "Rosa"],
                difficulty: "easy"
            },
            {
                question: "Que animal é o rei da selva?",
                correctAnswer: "Leão",
                incorrectOptions: ["Macaco", "Elefante", "Tigre"],
                difficulty: "easy"
            },
            {
                question: "Que fruto é usado para fazer vinho?",
                correctAnswer: "Uva",
                incorrectOptions: ["Maçã", "Laranja", "Banana"],
                difficulty: "easy"
            },
            {
                question: "Quantos meses tem um ano?",
                correctAnswer: "12",
                incorrectOptions: ["6", "10", "24"],
                difficulty: "easy"
            }
        ],
        medium: [
            {
                question: "Quem pintou a Mona Lisa?",
                correctAnswer: "Leonardo da Vinci",
                incorrectOptions: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
                difficulty: "medium"
            },
            {
                question: "Qual é o maior planeta do sistema solar?",
                correctAnswer: "Júpiter",
                incorrectOptions: ["Saturno", "Terra", "Marte"],
                difficulty: "medium"
            },
            {
                question: "Em que ano o homem pisou na Lua pela primeira vez?",
                correctAnswer: "1969",
                incorrectOptions: ["1959", "1979", "1989"],
                difficulty: "medium"
            },
            {
                question: "Qual é o maior oceano do mundo?",
                correctAnswer: "Oceano Pacífico",
                incorrectOptions: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico"],
                difficulty: "medium"
            },
            {
                question: "Quantos elementos tem a tabela periódica?",
                correctAnswer: "118",
                incorrectOptions: ["100", "150", "92"],
                difficulty: "medium"
            },
            {
                question: "Qual é a capital da Austrália?",
                correctAnswer: "Camberra",
                incorrectOptions: ["Sydney", "Melbourne", "Perth"],
                difficulty: "medium"
            },
            {
                question: "Quem escreveu 'Dom Quixote'?",
                correctAnswer: "Miguel de Cervantes",
                incorrectOptions: ["William Shakespeare", "Machado de Assis", "Gabriel García Márquez"],
                difficulty: "medium"
            },
            {
                question: "Qual é o metal mais condutor de eletricidade?",
                correctAnswer: "Prata",
                incorrectOptions: ["Cobre", "Ouro", "Alumínio"],
                difficulty: "medium"
            },
            {
                question: "Em que continente fica o Egito?",
                correctAnswer: "África",
                incorrectOptions: ["Ásia", "Europa", "América do Sul"],
                difficulty: "medium"
            },
            {
                question: "Qual é a montanha mais alta do mundo?",
                correctAnswer: "Monte Everest",
                incorrectOptions: ["Monte Kilimanjaro", "Monte Fuji", "Monte McKinley"],
                difficulty: "medium"
            },
            {
                question: "Quantos lados tem um heptágono?",
                correctAnswer: "7",
                incorrectOptions: ["5", "6", "8"],
                difficulty: "medium"
            },
            {
                question: "Qual é o maior mamífero do mundo?",
                correctAnswer: "Baleia-azul",
                incorrectOptions: ["Elefante-africano", "Girafa", "Urso-polar"],
                difficulty: "medium"
            },
            {
                question: "Quem foi o primeiro presidente do Brasil?",
                correctAnswer: "Deodoro da Fonseca",
                incorrectOptions: ["Getúlio Vargas", "Juscelino Kubitschek", "Prudente de Morais"],
                difficulty: "medium"
            },
            {
                question: "Qual é o símbolo químico do oxigênio?",
                correctAnswer: "O",
                incorrectOptions: ["Ox", "Og", "Oi"],
                difficulty: "medium"
            },
            {
                question: "Qual é o país mais populoso do mundo?",
                correctAnswer: "Índia",
                incorrectOptions: ["China", "Estados Unidos", "Indonésia"],
                difficulty: "medium"
            },
            {
                question: "Quem descobriu a penicilina?",
                correctAnswer: "Alexander Fleming",
                incorrectOptions: ["Louis Pasteur", "Marie Curie", "Robert Koch"],
                difficulty: "medium"
            },
            {
                question: "Qual é o maior deserto do mundo?",
                correctAnswer: "Antártida",
                incorrectOptions: ["Saara", "Arábico", "Gobi"],
                difficulty: "medium"
            },
            {
                question: "Quantos ossos tem o corpo humano?",
                correctAnswer: "206",
                incorrectOptions: ["200", "250", "300"],
                difficulty: "medium"
            },
            {
                question: "Qual é a capital do Canadá?",
                correctAnswer: "Ottawa",
                incorrectOptions: ["Toronto", "Vancouver", "Montreal"],
                difficulty: "medium"
            },
            {
                question: "Quem pintou 'O Grito'?",
                correctAnswer: "Edvard Munch",
                incorrectOptions: ["Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
                difficulty: "medium"
            }
        ],
        hard: [
            {
                question: "Qual é a fórmula química da água?",
                correctAnswer: "H₂O",
                incorrectOptions: ["CO₂", "NaCl", "O₂"],
                difficulty: "hard"
            },
            {
                question: "Quem escreveu '1984'?",
                correctAnswer: "George Orwell",
                incorrectOptions: ["Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                difficulty: "hard"
            },
            {
                question: "Qual é a capital do Butão?",
                correctAnswer: "Thimbu",
                incorrectOptions: ["Katmandu", "Daca", "Islamabad"],
                difficulty: "hard"
            },
            {
                question: "Qual é o elemento químico com o símbolo 'Au'?",
                correctAnswer: "Ouro",
                incorrectOptions: ["Prata", "Alumínio", "Cobre"],
                difficulty: "hard"
            },
            {
                question: "Quem descobriu a estrutura do DNA?",
                correctAnswer: "Watson e Crick",
                incorrectOptions: ["Einstein e Newton", "Darwin e Mendel", "Curie e Pasteur"],
                difficulty: "hard"
            },
            {
                question: "Qual é a velocidade da luz no vácuo?",
                correctAnswer: "299.792.458 m/s",
                incorrectOptions: ["150.000.000 m/s", "450.000.000 m/s", "100.000.000 m/s"],
                difficulty: "hard"
            },
            {
                question: "Quem foi o autor de 'O Príncipe'?",
                correctAnswer: "Nicolau Maquiavel",
                incorrectOptions: ["Thomas Hobbes", "John Locke", "Jean-Jacques Rousseau"],
                difficulty: "hard"
            },
            {
                question: "Qual é a unidade de medida da resistência elétrica?",
                correctAnswer: "Ohm",
                incorrectOptions: ["Volt", "Ampère", "Watt"],
                difficulty: "hard"
            },
            {
                question: "Em que ano ocorreu a Revolução Francesa?",
                correctAnswer: "1789",
                incorrectOptions: ["1776", "1799", "1812"],
                difficulty: "hard"
            },
            {
                question: "Qual é o país com a maior área territorial do mundo?",
                correctAnswer: "Rússia",
                incorrectOptions: ["Canadá", "China", "Estados Unidos"],
                difficulty: "hard"
            },
            {
                question: "Quem compôs a 'Nona Sinfonia'?",
                correctAnswer: "Ludwig van Beethoven",
                incorrectOptions: ["Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Frédéric Chopin"],
                difficulty: "hard"
            },
            {
                question: "Qual é o processo de divisão celular que forma gametas?",
                correctAnswer: "Meiose",
                incorrectOptions: ["Mitose", "Clivagem", "Fissão binária"],
                difficulty: "hard"
            },
            {
                question: "Qual é a capital da Mongólia?",
                correctAnswer: "Ulan Bator",
                incorrectOptions: ["Astana", "Bishkek", "Dushanbe"],
                difficulty: "hard"
            },
            {
                question: "Quem foi o primeiro imperador de Roma?",
                correctAnswer: "Augusto",
                incorrectOptions: ["Júlio César", "Nero", "Constantino"],
                difficulty: "hard"
            },
            {
                question: "Qual é o elemento mais abundante na crosta terrestre?",
                correctAnswer: "Oxigênio",
                incorrectOptions: ["Silício", "Alumínio", "Ferro"],
                difficulty: "hard"
            },
            {
                question: "Quem desenvolveu a teoria da relatividade?",
                correctAnswer: "Albert Einstein",
                incorrectOptions: ["Isaac Newton", "Niels Bohr", "Stephen Hawking"],
                difficulty: "hard"
            },
            {
                question: "Qual é o maior lago de água doce do mundo?",
                correctAnswer: "Lago Superior",
                incorrectOptions: ["Lago Vitória", "Lago Tanganica", "Lago Baikal"],
                difficulty: "hard"
            },
            {
                question: "Quem escreveu 'Ulisses'?",
                correctAnswer: "James Joyce",
                incorrectOptions: ["Virginia Woolf", "T.S. Eliot", "Franz Kafka"],
                difficulty: "hard"
            },
            {
                question: "Qual é a fórmula do teorema de Pitágoras?",
                correctAnswer: "a² + b² = c²",
                incorrectOptions: ["E = mc²", "F = ma", "V = πr²h"],
                difficulty: "hard"
            },
            {
                question: "Qual é o mineral mais duro da natureza?",
                correctAnswer: "Diamante",
                incorrectOptions: ["Quartzo", "Rubi", "Safira"],
                difficulty: "hard"
            }
        ]
    },
    multiplayer: [
        {
            question: "Qual animal é conhecido como o rei da selva?",
            correctAnswer: "O leão",
            incorrectOptions: ["O elefante"],
            difficulty: "easy"
        },
        {
            question: "De que cor é o céu em um dia claro e sem nuvens?",
            correctAnswer: "Azul",
            incorrectOptions: ["Verde"],
            difficulty: "easy"
        },
        {
            question: "Quantos dias tem uma semana?",
            correctAnswer: "Sete",
            incorrectOptions: ["Cinco"],
            difficulty: "easy"
        },
        {
            question: "Qual é o maior planeta do nosso Sistema Solar?",
            correctAnswer: "Júpiter",
            incorrectOptions: ["Saturno"],
            difficulty: "medium"
        },
        {
            question: "Quantos lados tem um triângulo?",
            correctAnswer: "Três",
            incorrectOptions: ["Quatro"],
            difficulty: "medium"
        },
        {
            question: "Qual destes NÃO é um oceano da Terra?",
            correctAnswer: "Oceano Solitário",
            incorrectOptions: ["Oceano Pacífico"],
            difficulty: "medium"
        },
        {
            question: "Quem pintou a Mona Lisa?",
            correctAnswer: "Leonardo da Vinci",
            incorrectOptions: ["Pablo Picasso"],
            difficulty: "medium"
        },
        {
            question: "Qual é o principal gás que compõe o ar que respiramos?",
            correctAnswer: "Nitrogênio",
            incorrectOptions: ["Oxigênio"],
            difficulty: "medium"
        },
        {
            question: "Qual é a capital do Brasil?",
            correctAnswer: "Brasília",
            incorrectOptions: ["Rio de Janeiro"],
            difficulty: "medium"
        },
        {
            question: "Em que ano o homem pisou na Lua pela primeira vez?",
            correctAnswer: "1969",
            incorrectOptions: ["1975"],
            difficulty: "medium"
        },
        {
            question: "Qual famoso físico teórico propôs a teoria da relatividade geral?",
            correctAnswer: "Albert Einstein",
            incorrectOptions: ["Isaac Newton"],
            difficulty: "hard"
        },
        {
            question: "Qual elemento químico tem o símbolo 'Au' na tabela periódica?",
            correctAnswer: "Ouro",
            incorrectOptions: ["Prata"],
            difficulty: "hard"
        },
        {
            question: "Qual destas obras épicas foi escrita pelo poeta grego Homero?",
            correctAnswer: "A Odisseia",
            incorrectOptions: ["A Divina Comédia"],
            difficulty: "hard"
        },
        {
            question: "Qual é o nome do fenômeno astronômico em que a Lua bloqueia completamente o Sol?",
            correctAnswer: "Eclipse solar total",
            incorrectOptions: ["Eclipse lunar"],
            difficulty: "hard"
        },
        {
            question: "Quem foi o autor da peça de teatro 'Hamlet'?",
            correctAnswer: "William Shakespeare",
            incorrectOptions: ["Machado de Assis"],
            difficulty: "hard"
        }
    ]
};

// Estado do Jogo
const gameState = {
    mode: null,
    difficulty: null,
    animal: null,
    questions: [],
    currentQuestionIndex: 0,
    currentQuestion: null,
    scores: { team1: 0, team2: 0, player: 0 },
    timer: null,
    timeLeft: 20, // Alterado para 20 segundos
    port: null,
    reader: null,
    answerLock: false,
    multiplayerAnswered: { team1: false, team2: false },
    firstAnswerTeam: null,
    questionStartTime: 0,
    totalTimeTaken: 0,
    showSaveScoreDialog: false,
    nextQuestionButton: null
};

// Variáveis para controle do duplo clique
let lastButtonAPress = 0;
const DOUBLE_CLICK_DELAY = 500; // 500ms entre cliques

// Elementos DOM
const elements = {
    modeSelection: document.getElementById('mode-selection'),
    difficultySelection: document.getElementById('difficulty-selection'),
    storyScreen: document.getElementById('story-screen'),
    storyText: document.getElementById('story-text'),
    continueBtn: document.getElementById('continue-btn'),
    animalSelection: document.getElementById('animal-selection'),
    missionScreen: document.getElementById('mission-screen'),
    missionText: document.getElementById('mission-text'),
    startGameBtn: document.getElementById('start-game-btn'),
    gameContainer: document.getElementById('game-container'),
    question: document.getElementById('question'),
    optionsContainer: document.getElementById('options-container'),
    status: document.getElementById('status'),
    timer: document.getElementById('time'),
    playerScore: document.getElementById('player-points'),
    opponentScore: document.getElementById('opponent-points'),
    playerAnimalImg: document.getElementById('player-animal-img'),
    opponentAnimalImg: document.getElementById('opponent-animal-img'),
    connectBtn: document.getElementById('connect-btn'),
    restartBtn: document.getElementById('restart-btn')
};

// URLs das imagens dos animais
const animalImages = {
    cat: "https://png.pngtree.com/png-clipart/20230322/original/pngtree-black-cat-silhouette-png-image_8999326.png",
    dog: "https://cdn.colab55.com/images/55001/studio/115533/art/238888/stickers.png"
};

// Mapeamento dos botões do Arduino
const ARDUINO_BUTTONS = {
    SINGLEPLAYER: {
        OPTION_A: 2,
        OPTION_B: 3,
        OPTION_C: 4,
        OPTION_D: 5
    },
    MULTIPLAYER: {
        TEAM1_A: 2,
        TEAM1_B: 4,
        TEAM2_A: 3,
        TEAM2_B: 5
    }
};

// Inicialização
function init() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 300);
        });
    });
    
    elements.continueBtn.addEventListener('click', showAnimalSelection);
    elements.startGameBtn.addEventListener('click', startGame);
    elements.connectBtn.addEventListener('click', connectArduino);
    elements.restartBtn.addEventListener('click', () => {
        if (gameState.mode) startGame();
    });
}

// Seleção de Modo
function selectMode(mode) {
    gameState.mode = mode;
    elements.modeSelection.style.display = 'none';
    
    if (mode === 'singleplayer') {
        showDifficultySelection();
    } else {
        setupMultiplayer();
    }
}

// Mostrar seleção de dificuldade
function showDifficultySelection() {
    elements.difficultySelection.style.display = 'flex';
}

// Seleção de Dificuldade
function selectDifficulty(difficulty) {
    gameState.difficulty = difficulty;
    elements.difficultySelection.style.display = 'none';
    showStory();
}

// Mostrar história
function showStory() {
    elements.storyScreen.style.display = 'flex';
    
    const story = "Você estava andando pelo parque e viu...";
    typeText(elements.storyText, story, () => {
        elements.continueBtn.style.display = 'block';
    });
}

// Efeito de digitação
function typeText(element, text, callback) {
    let i = 0;
    element.textContent = '';
    
    const typing = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            if (callback) callback();
        }
    }, 50);
}

// Mostrar seleção de animal
function showAnimalSelection() {
    elements.storyScreen.style.display = 'none';
    elements.animalSelection.style.display = 'flex';
}

// Seleção de Animal
function selectAnimal(animal) {
    gameState.animal = animal;
    elements.animalSelection.style.display = 'none';
    showMission(animal);
}

// Mostrar missão
function showMission(animal) {
    elements.missionScreen.style.display = 'flex';
    const animalName = animal === 'cat' ? 'gato' : 'cachorro';
    
    elements.missionText.textContent = `Agora para ajudar este ${animalName} machucado, você deve acertar as perguntas de conhecimento geral. Cada resposta correta significa um cuidado para o animal!`;
}

// Configuração Multiplayer
function setupMultiplayer() {
    gameState.animal = { team1: 'cat', team2: 'dog' };
    gameState.difficulty = 'easy';
    startGame();
}

// Inicia o Jogo
function startGame() {
    elements.missionScreen.style.display = 'none';
    elements.gameContainer.style.display = 'flex';
    
    gameState.answerLock = false;
    gameState.multiplayerAnswered = { team1: false, team2: false };
    gameState.firstAnswerTeam = null;
    gameState.totalTimeTaken = 0;
    gameState.showSaveScoreDialog = false;
    gameState.currentQuestionIndex = 0;
    
    if (gameState.mode === 'singleplayer') {
        elements.gameContainer.className = `singleplayer ${gameState.animal}-theme`;
        document.getElementById('opponent-score').style.display = 'none';
        
        const animalImg = animalImages[gameState.animal];
        elements.playerAnimalImg.src = animalImg;
    } else {
        elements.gameContainer.className = 'multiplayer-layout';
        document.getElementById('opponent-score').style.display = 'flex';
        
        elements.playerAnimalImg.src = animalImages.cat;
        elements.opponentAnimalImg.src = animalImages.dog;
    }
    
    loadQuestions();
    showQuestion();
    
    // MOSTRAR o botão de voltar ao início
    showBackToHomeButton();
}

// Carrega perguntas
function loadQuestions() {
    let questionSet;
    
    if (gameState.mode === 'singleplayer') {
        questionSet = questions.singleplayer[gameState.difficulty];
    } else {
        questionSet = questions.multiplayer;
    }
    
    gameState.questions = [...questionSet].sort(() => Math.random() - 0.5);
    gameState.scores = { team1: 0, team2: 0, player: 0 };
    updateScores();
}

// Timer com 20 segundos
function startTimer(seconds) {
    gameState.timeLeft = seconds;
    updateTimer();
    
    // Limpar timer anterior se existir
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateTimer();
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            gameState.timer = null;
            elements.status.textContent = "⏰ Tempo esgotado!";
            
            // Bloquear respostas após tempo esgotado
            gameState.answerLock = true;
            
            // Destacar a resposta correta
            highlightCorrectAnswer();
            
            // Criar botão de próxima pergunta
            createNextQuestionButton();
        }
    }, 1000);
}

function updateTimer() {
    if (elements.timer) {
        elements.timer.textContent = gameState.timeLeft;
        
        // Efeito visual quando o tempo está acabando
        if (gameState.timeLeft <= 5) {
            elements.timer.style.color = '#ff4444';
            elements.timer.style.fontWeight = 'bold';
        } else {
            elements.timer.style.color = '';
            elements.timer.style.fontWeight = '';
        }
    }
}

// Mostra a pergunta atual
function showQuestion() {
    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        endGame();
        return;
    }
    
    gameState.answerLock = false;
    gameState.multiplayerAnswered = { team1: false, team2: false };
    gameState.firstAnswerTeam = null;
    
    gameState.questionStartTime = Date.now();
    
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    gameState.currentQuestion = currentQuestion;
    elements.question.textContent = currentQuestion.question;
    elements.optionsContainer.innerHTML = '';
    elements.status.textContent = '';
    
    const options = [
        { text: currentQuestion.correctAnswer, correct: true },
        ...currentQuestion.incorrectOptions.map(text => ({ text, correct: false }))
    ];
    
    shuffleArray(options);
    
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${String.fromCharCode(65 + index)}) ${option.text}`;
        
        // Adicionar evento de clique para singleplayer
        if (gameState.mode === 'singleplayer') {
            button.onclick = () => {
                // Remover seleção anterior
                const previouslySelected = elements.optionsContainer.querySelector('.selected');
                if (previouslySelected) {
                    previouslySelected.classList.remove('selected');
                }
                
                // Marcar como selecionado
                button.classList.add('selected');
                
                // Verificar resposta
                checkAnswer(option.correct);
            };
        } else {
            button.onclick = () => checkAnswer(option.correct);
        }
        
        elements.optionsContainer.appendChild(button);
    });
    
    elements.optionsContainer.style.gridTemplateColumns = 
        gameState.mode === 'multiplayer' ? '1fr' : '1fr 1fr';
    
    // MOSTRAR o botão de voltar ao início
    showBackToHomeButton();
    
    startTimer(20); // 20 segundos
}

// Embaralha array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Verifica a resposta
function checkAnswer(isCorrect, team = null) {
    if (gameState.answerLock) return;
    
    const timeTaken = (Date.now() - gameState.questionStartTime) / 1000;
    gameState.totalTimeTaken += timeTaken;
    
    clearInterval(gameState.timer);
    gameState.answerLock = true;
    
    let pointsEarned = 0;
    let selectedButton = null;
    
    // Encontrar o botão que foi clicado (para singleplayer)
    if (gameState.mode === 'singleplayer' && !team) {
        const options = elements.optionsContainer.querySelectorAll('.option-btn');
        options.forEach(option => {
            if (option.classList.contains('selected')) {
                selectedButton = option;
            }
        });
    }
    
    if (gameState.mode === 'singleplayer') {
        if (isCorrect) {
            pointsEarned = Math.max(100, 1000 - Math.floor(timeTaken * 100));
            gameState.scores.player += pointsEarned;
            elements.status.textContent = `✅ Resposta correta! +${pointsEarned} pontos (${timeTaken.toFixed(1)}s)`;
            
            // Contornar em azul a resposta escolhida (correta)
            if (selectedButton) {
                selectedButton.classList.add('selected-correct');
            }
        } else {
            elements.status.textContent = "❌ Resposta incorreta!";
            
            // Contornar em vermelho a resposta escolhida (incorreta)
            if (selectedButton) {
                selectedButton.classList.add('selected-incorrect');
            }
            
            // Destacar a resposta correta em verde
            highlightCorrectAnswer();
        }
    } else {
        if (gameState.firstAnswerTeam === null) {
            gameState.firstAnswerTeam = team;
            
            if (isCorrect) {
                if (team === 'team1') {
                    gameState.scores.team1++;
                    elements.status.textContent = "✅ Time Gato acertou primeiro! +1 ponto";
                } else if (team === 'team2') {
                    gameState.scores.team2++;
                    elements.status.textContent = "✅ Time Cachorro acertou primeiro! +1 ponto";
                }
            } else {
                if (team === 'team1') {
                    gameState.scores.team2++;
                    elements.status.textContent = "❌ Time Gato errou! Ponto para Time Cachorro";
                    highlightCorrectAnswer();
                } else if (team === 'team2') {
                    gameState.scores.team1++;
                    elements.status.textContent = "❌ Time Cachorro errou! Ponto para Time Gato";
                    highlightCorrectAnswer();
                }
            }
        }
    }
    
    updateScores();
    
    // Criar botão de próxima pergunta
    createNextQuestionButton();
}

// Cria botão de próxima pergunta
function createNextQuestionButton() {
    if (gameState.nextQuestionButton) {
        gameState.nextQuestionButton.remove();
    }
    
    const button = document.createElement('button');
    button.className = 'next-question-btn';
    button.textContent = 'Próxima Pergunta →';
    button.style.cssText = `
        padding: 1rem 2rem;
        background: #2e8b57;
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        margin-top: 1rem;
        transition: all 0.3s ease;
    `;
    
    button.onclick = () => {
        gameState.currentQuestionIndex++;
        button.remove();
        showQuestion();
    };
    
    button.onmouseover = () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    };
    
    button.onmouseout = () => {
        button.style.transform = 'none';
        button.style.boxShadow = 'none';
    };
    
    elements.status.appendChild(button);
    gameState.nextQuestionButton = button;
    
    // Adicionar instrução para o Arduino
    elements.status.innerHTML += '<p>🎮 Pressione o botão A duas vezes para próxima pergunta</p>';
}

// Atualiza o placar
function updateScores() {
    if (gameState.mode === 'singleplayer') {
        elements.playerScore.textContent = gameState.scores.player;
    } else {
        elements.playerScore.textContent = gameState.scores.team1;
        elements.opponentScore.textContent = gameState.scores.team2;
    }
}

// Final do jogo
function endGame() {
    elements.question.textContent = "🏁 Fim do jogo!";
    elements.optionsContainer.innerHTML = '';
    
    if (gameState.mode === 'singleplayer') {
        elements.status.textContent = `🎉 Você fez ${gameState.scores.player} pontos em ${gameState.totalTimeTaken.toFixed(1)} segundos!`;
        
        setTimeout(() => {
            showSaveScoreDialog();
        }, 2000);
    } else {
        elements.status.textContent = `🏆 Placar final: Gato ${gameState.scores.team1} x ${gameState.scores.team2} Cachorro`;
    }
}

// Mostrar diálogo de salvar pontuação
function showSaveScoreDialog() {
    gameState.showSaveScoreDialog = true;
    
    const dialogHTML = `
        <div style="text-align: center; margin-top: 2rem;">
            <h3>Deseja salvar sua pontuação?</h3>
            <div id="score-form" style="display: none; margin: 1rem 0;">
                <input type="text" id="player-name" placeholder="Seu nome" style="padding: 0.5rem; margin: 0.5rem; border-radius: 5px; border: 1px solid #ccc;">
                <input type="email" id="player-email" placeholder="Seu email" style="padding: 0.5rem; margin: 0.5rem; border-radius: 5px; border: 1px solid #ccc;">
                <button onclick="saveScore()" style="padding: 0.5rem 1rem; background: #2e8b57; color: white; border: none; border-radius: 5px; cursor: pointer;">Salvar</button>
            </div>
            <div>
                <button onclick="document.getElementById('score-form').style.display = 'block'; this.style.display = 'none'" 
                        style="padding: 0.8rem 1.5rem; margin: 0.5rem; background: #2e8b57; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Sim
                </button>
                <button onclick="gameState.showSaveScoreDialog = false; elements.status.textContent = 'Pontuação não salva.'" 
                        style="padding: 0.8rem 1.5rem; margin: 0.5rem; background: #f44336; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Não
                </button>
            </div>
        </div>
    `;
    
    elements.status.innerHTML += dialogHTML;
}

// Salvar pontuação no servidor
async function saveScore() {
    const nameInput = document.getElementById('player-name');
    const emailInput = document.getElementById('player-email');
    
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    
    if (!name || !email) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    try {
        const response = await fetch('/api/scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                score: gameState.scores.player,
                time_taken: Math.floor(gameState.totalTimeTaken),
                difficulty: gameState.difficulty,
                team: gameState.animal
            })
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            elements.status.innerHTML = '<p>✅ Pontuação salva com sucesso! 🎉</p>';
        } else {
            const errorMsg = result.error || 'Erro desconhecido';
            elements.status.innerHTML = `<p>❌ Erro: ${errorMsg}</p>`;
        }
    } catch (error) {
        console.error('Erro ao salvar pontuação:', error);
        elements.status.innerHTML = '<p>❌ Erro de conexão com o servidor</p>';
    }
    
    gameState.showSaveScoreDialog = false;
}

// Destacar a resposta correta quando o tempo acabar
function highlightCorrectAnswer() {
    const options = elements.optionsContainer.querySelectorAll('.option-btn');
    options.forEach(option => {
        if (option.textContent.includes(gameState.currentQuestion.correctAnswer)) {
            option.classList.add('correct');
        }
    });
}

// Função para mostrar o botão de voltar ao início
function showBackToHomeButton() {
    const backBtn = document.getElementById('back-to-home-btn');
    if (backBtn) {
        backBtn.style.display = 'flex';
        
        // Adicionar o evento de clique apenas uma vez
        if (!backBtn.hasAttribute('data-listener-added')) {
            backBtn.addEventListener('click', () => {
                if (confirm('Tem certeza que deseja voltar ao início? Todo o progresso atual será perdido.')) {
                    resetGame();
                    showModeSelection();
                }
            });
            backBtn.setAttribute('data-listener-added', 'true');
        }
    }
}

// Função para esconder o botão de voltar ao início
function hideBackToHomeButton() {
    const backBtn = document.getElementById('back-to-home-btn');
    if (backBtn) {
        backBtn.style.display = 'none';
    }
}

// Função para resetar o jogo
function resetGame() {
    gameState.mode = null;
    gameState.difficulty = null;
    gameState.animal = null;
    gameState.questions = [];
    gameState.currentQuestionIndex = 0;
    gameState.currentQuestion = null;
    gameState.scores = { team1: 0, team2: 0, player: 0 };
    gameState.timeLeft = 20;
    gameState.answerLock = false;
    gameState.multiplayerAnswered = { team1: false, team2: false };
    gameState.firstAnswerTeam = null;
    gameState.questionStartTime = 0;
    gameState.totalTimeTaken = 0;
    gameState.showSaveScoreDialog = false;
    
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    if (gameState.nextQuestionButton) {
        gameState.nextQuestionButton.remove();
        gameState.nextQuestionButton = null;
    }
    
    // ESCONDER o botão de voltar ao início
    hideBackToHomeButton();
}

// Função para mostrar a tela de seleção de modo
function showModeSelection() {
    // Esconder todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    // Mostrar tela de seleção de modo
    elements.modeSelection.style.display = 'flex';
    elements.gameContainer.style.display = 'none';
    
    // ESCONDER o botão de voltar ao início
    hideBackToHomeButton();
}

// Função para ir para próxima pergunta (duplo clique no botão A)
function goToNextQuestion() {
    // Só permite ir para próxima pergunta se a resposta estiver bloqueada (já respondeu ou tempo esgotou)
    if (gameState.answerLock) {
        gameState.currentQuestionIndex++;
        
        // Remover botão de próxima pergunta se existir
        if (gameState.nextQuestionButton) {
            gameState.nextQuestionButton.remove();
            gameState.nextQuestionButton = null;
        }
        
        showQuestion();
    }
}

// Arduino
async function connectArduino() {
    try {
        if (!navigator.serial) {
            elements.status.textContent = "⚠️ Seu navegador não suporta WebSerial API";
            return;
        }
        
        gameState.port = await navigator.serial.requestPort();
        await gameState.port.open({ baudRate: 9600 });
        elements.connectBtn.innerHTML = '<span>🎮 Conectado</span>';
        elements.connectBtn.disabled = true;
        listenToArduino();
    } catch (err) {
        elements.status.textContent = "⚠️ Erro na conexão com Arduino";
        console.error(err);
    }
}

async function listenToArduino() {
    try {
        const decoder = new TextDecoder();
        gameState.reader = gameState.port.readable.getReader();
        
        while (true) {
            const { value, done } = await gameState.reader.read();
            if (done) {
                gameState.reader.releaseLock();
                break;
            }
            
            const data = decoder.decode(value).trim();
            console.log("Dados recebidos:", data);
            
            data.split('\n').forEach(line => {
                const buttonPress = line.trim();
                if (buttonPress) {
                    handleButtonPress(parseInt(buttonPress));
                }
            });
        }
    } catch (err) {
        console.error("Erro na leitura do Arduino:", err);
        elements.status.textContent = "⚠️ Erro na comunicação com Arduino";
    }
}

// Função principal para lidar com botões do Arduino (CORRIGIDA)
function handleButtonPress(buttonPin) {
    console.log("Botão pressionado no pino:", buttonPin);
    if (!gameState.currentQuestion) return;
    
    // Verificar duplo clique apenas quando a resposta estiver bloqueada
    if (gameState.answerLock && buttonPin === 2) {
        const currentTime = Date.now();
        
        if (currentTime - lastButtonAPress < DOUBLE_CLICK_DELAY) {
            goToNextQuestion();
            lastButtonAPress = 0;
            return;
        }
        
        lastButtonAPress = currentTime;
        return; // Não processar como resposta normal
    }
    
    // Se não for duplo clique ou resposta não está bloqueada, processar normalmente
    if (gameState.answerLock) return;
    
    const options = elements.optionsContainer.querySelectorAll('.option-btn');
    
    if (gameState.mode === 'singleplayer') {
        let optionIndex = -1;
        
        switch(buttonPin) {
            case 2: optionIndex = 0; break; // Botão A - Opção A
            case 3: optionIndex = 1; break; // Botão B - Opção B  
            case 4: optionIndex = 2; break; // Botão C - Opção C
            case 5: optionIndex = 3; break; // Botão D - Opção D
        }
        
        if (optionIndex >= 0 && optionIndex < options.length) {
            // Remover seleção anterior
            const previouslySelected = elements.optionsContainer.querySelector('.selected');
            if (previouslySelected) {
                previouslySelected.classList.remove('selected');
            }
            
            // Marcar como selecionado
            options[optionIndex].classList.add('selected');
            
            const isCorrect = options[optionIndex].textContent.includes(gameState.currentQuestion.correctAnswer);
            checkAnswer(isCorrect);
        }
    } else {
        // Lógica multiplayer
        let team = null;
        let isCorrect = false;
        
        if (buttonPin === 2 || buttonPin === 4) {
            if (gameState.multiplayerAnswered.team1) return;
            gameState.multiplayerAnswered.team1 = true;
            team = 'team1';
            
            const selectedOption = (buttonPin === 2) ? 0 : 1;
            isCorrect = options[selectedOption].textContent.includes(gameState.currentQuestion.correctAnswer);
            
        } else if (buttonPin === 3 || buttonPin === 5) {
            if (gameState.multiplayerAnswered.team2) return;
            gameState.multiplayerAnswered.team2 = true;
            team = 'team2';
            
            const selectedOption = (buttonPin === 3) ? 0 : 1;
            isCorrect = options[selectedOption].textContent.includes(gameState.currentQuestion.correctAnswer);
        }
        
        if (team) {
            checkAnswer(isCorrect, team);
        }
    }
}

// Fechar a conexão quando a página for fechada
window.addEventListener('beforeunload', async () => {
    if (gameState.reader) {
        await gameState.reader.cancel();
        gameState.reader.releaseLock();
    }
    if (gameState.port) {
        await gameState.port.close();
    }
});

init();
