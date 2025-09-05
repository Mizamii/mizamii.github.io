// Banco de Perguntas Ampliado com Dificuldade
const questions = {
    singleplayer: {
        easy: [
            {
                question: "Qual o nome do cachorro?",
                correctAnswer: "Carla",
                incorrectOptions: ["Rodrigo", "Luis", "Gorila"],
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
                question: "Quem descobriu a penicilina?",
                correctAnswer: "Alexander Fleming",
                incorrectOptions: ["Louis Pasteur", "Marie Curie", "Robert Koch"],
                difficulty: "hard"
            }
        ]
    },
    multiplayer: [
        {
            question: "O cachorro se chama Carla?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "easy"
        },
        {
            question: "Brasília é a capital do Brasil?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "easy"
        },
        {
            question: "A Terra é plana?",
            correctAnswer: "Não",
            incorrectOptions: ["Sim"],
            difficulty: "easy"
        },
        {
            question: "O sol é uma estrela?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "medium"
        },
        {
            question: "Shakespeare escreveu Romeu e Julieta?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "medium"
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
    timeLeft: 10,
    port: null,
    reader: null,
    answerLock: false, // Bloqueio para evitar múltiplas respostas
    multiplayerAnswered: { team1: false, team2: false }, // Controle de respostas no multiplayer
    firstAnswerTeam: null, // Armazena qual time respondeu primeiro
    questionStartTime: 0, // Timestamp de quando a pergunta foi exibida
    totalTimeTaken: 0, // Tempo total gasto nas respostas
    showSaveScoreDialog: false // Controla se deve mostrar o diálogo de salvar pontuação
};

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
        OPTION_A: 2, // Pino 2 - Opção A
        OPTION_B: 3, // Pino 3 - Opção B
        OPTION_C: 4, // Pino 4 - Opção C
        OPTION_D: 5  // Pino 5 - Opção D
    },
    MULTIPLAYER: {
        TEAM1_A: 2,  // Pino 2 - Time 1, Opção A
        TEAM1_B: 4,  // Pino 4 - Time 1, Opção B
        TEAM2_A: 3,  // Pino 3 - Time 2, Opção A
        TEAM2_B: 5   // Pino 5 - Time 2, Opção B
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
    
    // Event listeners para as novas telas
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
        showDifficultySelection(); // Mostrar seleção de dificuldade
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

// Continuação do script.js
function showStory() {
    elements.storyScreen.style.display = 'flex';
    
    // Texto da história com efeito de digitação
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
    gameState.difficulty = 'easy'; // Dificuldade padrão para multiplayer
    startGame();
}

// Inicia o Jogo
function startGame() {
    elements.missionScreen.style.display = 'none';
    elements.gameContainer.style.display = 'flex';
    
    // Resetar estado do jogo
    gameState.answerLock = false;
    gameState.multiplayerAnswered = { team1: false, team2: false };
    gameState.firstAnswerTeam = null;
    gameState.totalTimeTaken = 0;
    gameState.showSaveScoreDialog = false;
    
    if (gameState.mode === 'singleplayer') {
        elements.gameContainer.className = `singleplayer ${gameState.animal}-theme`;
        document.getElementById('opponent-score').style.display = 'none';
        
        // Define a imagem do animal escolhido
        const animalImg = animalImages[gameState.animal];
        elements.playerAnimalImg.src = animalImg;
    } else {
        elements.gameContainer.className = 'multiplayer-layout';
        document.getElementById('opponent-score').style.display = 'flex';
        
        // Define as imagens para multiplayer
        elements.playerAnimalImg.src = animalImages.cat; // Gato
        elements.opponentAnimalImg.src = animalImages.dog; // Cachorro
    }
    
    loadQuestions();
    showQuestion();
}

// Carrega perguntas aleatórias baseadas na dificuldade
function loadQuestions() {
    let questionSet;
    
    if (gameState.mode === 'singleplayer') {
        // Carrega perguntas baseadas na dificuldade escolhida
        questionSet = questions.singleplayer[gameState.difficulty];
    } else {
        questionSet = questions.multiplayer;
    }
    
    gameState.questions = [...questionSet].sort(() => Math.random() - 0.5);
    gameState.currentQuestionIndex = 0;
    gameState.scores = { team1: 0, team2: 0, player: 0 };
    updateScores();
}

// Mostra a pergunta atual
function showQuestion() {
    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        endGame();
        return;
    }
    
    // Resetar estado para nova pergunta
    gameState.answerLock = false;
    gameState.multiplayerAnswered = { team1: false, team2: false };
    gameState.firstAnswerTeam = null;
    
    // Registrar o tempo de início da pergunta
    gameState.questionStartTime = Date.now();
    
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    gameState.currentQuestion = currentQuestion;
    elements.question.textContent = currentQuestion.question;
    elements.optionsContainer.innerHTML = '';
    elements.status.textContent = '';
    
    // Cria array de opções
    const options = [
        { text: currentQuestion.correctAnswer, correct: true },
        ...currentQuestion.incorrectOptions.map(text => ({ text, correct: false }))
    ];
    
    // Embaralha as opções
    shuffleArray(options);
    
    // Cria os botões de opção
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${String.fromCharCode(65 + index)}) ${option.text}`;
        button.onclick = () => checkAnswer(option.correct);
        elements.optionsContainer.appendChild(button);
    });
    
    // Ajusta o layout
    elements.optionsContainer.style.gridTemplateColumns = 
        gameState.mode === 'multiplayer' ? '1fr' : '1fr 1fr';
    
    startTimer(10);
}

// Função para embaralhar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Verifica a resposta
function checkAnswer(isCorrect, team = null) {
    if (gameState.answerLock) return; // Evita múltiplas respostas
    
    // Calcular o tempo gasto para responder
    const timeTaken = (Date.now() - gameState.questionStartTime) / 1000; // em segundos
    gameState.totalTimeTaken += timeTaken;
    
    clearInterval(gameState.timer);
    gameState.answerLock = true; // Bloqueia outras respostas
    
    // Sistema de pontuação baseado no tempo (apenas singleplayer)
    let pointsEarned = 0;
    
    if (gameState.mode === 'singleplayer') {
        if (isCorrect) {
            // Quanto mais rápido, mais pontos (máximo 1000, mínimo 100)
            pointsEarned = Math.max(100, 1000 - Math.floor(timeTaken * 100));
            gameState.scores.player += pointsEarned;
            elements.status.textContent = `✅ Resposta correta! +${pointsEarned} pontos (${timeTaken.toFixed(1)}s)`;
        } else {
            elements.status.textContent = "❌ Resposta incorreta!";
        }
    } else {
        // Modo multiplayer - apenas a primeira resposta conta
        if (gameState.firstAnswerTeam === null) {
            gameState.firstAnswerTeam = team;
            
            if (isCorrect) {
                // Time que respondeu primeiro acertou
                if (team === 'team1') {
                    gameState.scores.team1++;
                    elements.status.textContent = "✅ Time Gato acertou primeiro! +1 ponto";
                } else if (team === 'team2') {
                    gameState.scores.team2++;
                    elements.status.textContent = "✅ Time Cachorro acertou primeiro! +1 ponto";
                }
            } else {
                // Time que respondeu primeiro errou - ponto vai para o outro time
                if (team === 'team1') {
                    gameState.scores.team2++;
                    elements.status.textContent = "❌ Time Gato errou! Ponto para Time Cachorro";
                } else if (team === 'team2') {
                    gameState.scores.team1++;
                    elements.status.textContent = "❌ Time Cachorro errou! Ponto para Time Gato";
                }
            }
        }
    }
    
    updateScores();
    
    setTimeout(() => {
        gameState.currentQuestionIndex++;
        showQuestion();
    }, 1500);
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

// Timer
function startTimer(seconds) {
    gameState.timeLeft = seconds;
    updateTimer();
    
    clearInterval(gameState.timer);
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateTimer();
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            elements.status.textContent = "⏰ Tempo esgotado!";
            gameState.currentQuestionIndex++;
            setTimeout(showQuestion, 1500);
        }
    }, 1000);
}

function updateTimer() {
    elements.timer.textContent = gameState.timeLeft;
}

// Final do jogo
function endGame() {
    elements.question.textContent = "🏁 Fim do jogo!";
    elements.optionsContainer.innerHTML = '';
    
    if (gameState.mode === 'singleplayer') {
        elements.status.textContent = `🎉 Você fez ${gameState.scores.player} pontos em ${gameState.totalTimeTaken.toFixed(1)} segundos!`;
        
        // Mostrar opção para salvar pontuação
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
// Salvar pontuação no servidor
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
                difficulty: gameState.difficulty
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
            
            // Processa cada linha recebida
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

function handleButtonPress(buttonPin) {
    console.log("Botão pressionado no pino:", buttonPin);
    if (!gameState.currentQuestion || gameState.answerLock) return;
    
    const options = elements.optionsContainer.querySelectorAll('.option-btn');
    
    if (gameState.mode === 'singleplayer') {
        // Modo Singleplayer: botões 2,3,4,5 = A,B,C,D
        let optionIndex = -1;
        
        switch(buttonPin) {
            case ARDUINO_BUTTONS.SINGLEPLAYER.OPTION_A: optionIndex = 0; break;
            case ARDUINO_BUTTONS.SINGLEPLAYER.OPTION_B: optionIndex = 1; break;
            case ARDUINO_BUTTONS.SINGLEPLAYER.OPTION_C: optionIndex = 2; break;
            case ARDUINO_BUTTONS.SINGLEPLAYER.OPTION_D: optionIndex = 3; break;
        }
        
        if (optionIndex >= 0 && optionIndex < options.length) {
            const isCorrect = options[optionIndex].textContent.includes(gameState.currentQuestion.correctAnswer);
            checkAnswer(isCorrect);
        }
    } else {
        // Modo Multiplayer
        let team = null;
        let isCorrect = false;
        
        // Time 1 (Gato) - Botões 2 e 4
        if (buttonPin === ARDUINO_BUTTONS.MULTIPLAYER.TEAM1_A || 
            buttonPin === ARDUINO_BUTTONS.MULTIPLAYER.TEAM1_B) {
            
            if (gameState.multiplayerAnswered.team1) return; // Time já respondeu
            gameState.multiplayerAnswered.team1 = true;
            team = 'team1';
            
            // Verifica se a resposta está correta
            const selectedOption = (buttonPin === ARDUINO_BUTTONS.MULTIPLAYER.TEAM1_A) ? 0 : 1;
            isCorrect = options[selectedOption].textContent.includes(gameState.currentQuestion.correctAnswer);
            
        } 
        // Time 2 (Cachorro) - Botões 3 e 5
        else if (buttonPin === ARDUINO_BUTTONS.MULTIPLAYER.TEAM2_A || 
                 buttonPin === ARDUINO_BUTTONS.MULTIPLAYER.TEAM2_B) {
            
            if (gameState.multiplayerAnswered.team2) return; // Time já respondeu
            gameState.multiplayerAnswered.team2 = true;
            team = 'team2';
            
            // Verifica se a resposta está correta
            const selectedOption = (buttonPin === ARDUINO_BUTTONS.MULTIPLAYER.TEAM2_A) ? 0 : 1;
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
