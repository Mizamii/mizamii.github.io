// Banco de Perguntas Ampliado com Dificuldade - TEMA POKÉMON
const questions = {
    singleplayer: {
        easy: [
            {
                question: "Qual o nome do professor que entrega o primeiro Pokémon em Kanto?",
                correctAnswer: "Professor Carvalho",
                incorrectOptions: ["Professor Juniper", "Professor Ivy", "Professor Elm"],
                difficulty: "easy"
            },
            {
                question: "Qual é o tipo do Pokémon Pikachu?",
                correctAnswer: "Elétrico",
                incorrectOptions: ["Água", "Fogo", "Pedra"],
                difficulty: "easy"
            },
            {
                question: "Qual destes Pokémon é do tipo Fogo?",
                correctAnswer: "Charmander",
                incorrectOptions: ["Squirtle", "Bulbasaur", "Pidgey"],
                difficulty: "easy"
            },
            {
                question: "Quantas evoluções o Pokémon Eevee pode ter?",
                correctAnswer: "8",
                incorrectOptions: ["3", "5", "10"],
                difficulty: "easy"
            },
            {
                question: "Qual é a pedra evolutiva que evolui Vulpix para Ninetales?",
                correctAnswer: "Pedra do Fogo",
                incorrectOptions: ["Pedra da Água", "Pedra do Trovão", "Pedra da Lua"],
                difficulty: "easy"
            },
            {
                question: "Qual Pokémon é conhecido como o Pokémon Semente?",
                correctAnswer: "Bulbasaur",
                incorrectOptions: ["Charmander", "Squirtle", "Caterpie"],
                difficulty: "easy"
            },
            {
                question: "Qual é o primeiro Pokémon na Pokédex Nacional?",
                correctAnswer: "Bulbasaur",
                incorrectOptions: ["Pikachu", "Charmander", "Mew"],
                difficulty: "easy"
            },
            {
                question: "Qual Pokémon evolui para Butterfree?",
                correctAnswer: "Metapod",
                incorrectOptions: ["Caterpie", "Weedle", "Kakuna"],
                difficulty: "easy"
            },
            {
                question: "Qual tipo é super efetivo contra Pokémon do tipo Água?",
                correctAnswer: "Elétrico",
                incorrectOptions: ["Fogo", "Grama", "Normal"],
                difficulty: "easy"
            },
            {
                question: "Qual Pokémon é a evolução do Pikachu?",
                correctAnswer: "Raichu",
                incorrectOptions: ["Electabuzz", "Jolteon", "Zapdos"],
                difficulty: "easy"
            }
        ],
        medium: [
            {
                question: "Quantas gerações de Pokémon existem atualmente?",
                correctAnswer: "9",
                incorrectOptions: ["5", "7", "10"],
                difficulty: "medium"
            },
            {
                question: "Qual Pokémon lendário é conhecido como a Deusa dos Mares?",
                correctAnswer: "Lugia",
                incorrectOptions: ["Ho-Oh", "Kyogre", "Suicune"],
                difficulty: "medium"
            },
            {
                question: "Em qual região fica a cidade de Pewter?",
                correctAnswer: "Kanto",
                incorrectOptions: ["Johto", "Hoenn", "Sinnoh"],
                difficulty: "medium"
            },
            {
                question: "Qual destes NÃO é um Pokémon inicial?",
                correctAnswer: "Eevee",
                incorrectOptions: ["Chikorita", "Treecko", "Piplup"],
                difficulty: "medium"
            },
            {
                question: "Qual o nome do time vilão na primeira geração?",
                correctAnswer: "Team Rocket",
                incorrectOptions: ["Team Magma", "Team Aqua", "Team Plasma"],
                difficulty: "medium"
            },
            {
                question: "Qual Pokémon tem o número #151 na Pokédex de Kanto?",
                correctAnswer: "Mew",
                incorrectOptions: ["Mewtwo", "Arceus", "Celebi"],
                difficulty: "medium"
            },
            {
                question: "Qual tipo é imune a ataques do tipo Fantasma?",
                correctAnswer: "Normal",
                incorrectOptions: ["Lutador", "Psíquico", "Sombrio"],
                difficulty: "medium"
            },
            {
                question: "Qual destes Pokémon é do tipo Dragão?",
                correctAnswer: "Dragonite",
                incorrectOptions: ["Charizard", "Gyarados", "Aerodactyl"],
                difficulty: "medium"
            },
            {
                question: "Qual cidade é conhecida como a Cidade do Amor?",
                correctAnswer: "Lavender Town",
                incorrectOptions: ["Celadon City", "Saffron City", "Vermilion City"],
                difficulty: "medium"
            },
            {
                question: "Qual Pokémon evolui usando uma Pedra da Água?",
                correctAnswer: "Poliwhirl",
                incorrectOptions: ["Staryu", "Shellder", "Horsea"],
                difficulty: "medium"
            }
        ],
        hard: [
            {
                question: "Qual é o nome do criador de Pokémon?",
                correctAnswer: "Satoshi Tajiri",
                incorrectOptions: ["Shigeru Miyamoto", "Ken Sugimori", "Junichi Masuda"],
                difficulty: "hard"
            },
            {
                question: "Qual Pokémon tem a maior quantidade de formas diferentes?",
                correctAnswer: "Unown",
                incorrectOptions: ["Castform", "Deoxys", "Rotom"],
                difficulty: "hard"
            },
            {
                question: "Em que ano foi lançado o primeiro jogo de Pokémon?",
                correctAnswer: "1996",
                incorrectOptions: ["1995", "1997", "1998"],
                difficulty: "hard"
            },
            {
                question: "Qual Pokémon tem a habilidade 'Wonder Guard'?",
                correctAnswer: "Shedinja",
                incorrectOptions: ["Ninjask", "Yanma", "Scizor"],
                difficulty: "hard"
            },
            {
                question: "Quantos pontos de dano causa o movimento 'Self-Destruct'?",
                correctAnswer: "200",
                incorrectOptions: ["150", "250", "300"],
                difficulty: "hard"
            },
            {
                question: "Qual destes NÃO é um Pokémon mítico?",
                correctAnswer: "Latias",
                incorrectOptions: ["Celebi", "Jirachi", "Manaphy"],
                difficulty: "hard"
            },
            {
                question: "Qual o nome do campeão da região de Sinnoh?",
                correctAnswer: "Cynthia",
                incorrectOptions: ["Steven", "Wallace", "Alder"],
                difficulty: "hard"
            },
            {
                question: "Qual Pokémon tem o maior status base de Ataque?",
                correctAnswer: "Deoxys-Ataque",
                incorrectOptions: ["Rayquaza", "Mewtwo", "Groudon"],
                difficulty: "hard"
            },
            {
                question: "Qual tipo foi introduzido na segunda geração?",
                correctAnswer: "Sombrio",
                incorrectOptions: ["Aço", "Fada", "Psíquico"],
                difficulty: "hard"
            },
            {
                question: "Qual Pokémon é conhecido como 'The Continent Pokémon'?",
                correctAnswer: "Groudon",
                incorrectOptions: ["Kyogre", "Rayquaza", "Regigigas"],
                difficulty: "hard"
            }
        ]
    },
    multiplayer: [
        {
            question: "O Pokémon Magikarp evolui para Gyarados?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "easy"
        },
        {
            question: "Psyduck é um Pokémon do tipo Água?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "easy"
        },
        {
            question: "O Pokémon Ditto pode se transformar em qualquer outro Pokémon?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "easy"
        },
        {
            question: "Existe um Pokémon de tipo Sombrio na primeira geração?",
            correctAnswer: "Não",
            incorrectOptions: ["Sim"],
            difficulty: "medium"
        },
        {
            question: "O movimento 'Hyper Beam' é do tipo Normal?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "medium"
        },
        {
            question: "Pikachu é a forma evoluída de Pichu?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "medium"
        },
        {
            question: "Charizard é um Pokémon do tipo Dragão?",
            correctAnswer: "Não",
            incorrectOptions: ["Sim"],
            difficulty: "medium"
        },
        {
            question: "Mewtwo foi criado a partir do DNA de Mew?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "hard"
        },
        {
            question: "Existem Pokémon de tipo Fada na primeira geração?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "hard"
        },
        {
            question: "Arceus é considerado o deus do universo Pokémon?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"],
            difficulty: "hard"
        }
    ]
};

// Estado do Jogo
const gameState = {
    mode: null,
    difficulty: null,
    pokemon: null,
    questions: [],
    currentQuestionIndex: 0,
    currentQuestion: null,
    scores: { team1: 0, team2: 0, player: 0 },
    timer: null,
    timeLeft: 20,
    port: null,
    reader: null,
    answerLock: false,
    multiplayerAnswered: { team1: false, team2: false },
    firstAnswerTeam: null,
    questionStartTime: 0,
    totalTimeTaken: 0,
    showSaveScoreDialog: false,
    nextQuestionButton: null,
    arduinoConnected: false
};

// Variáveis para controle do duplo clique
let lastButtonAPress = 0;
const DOUBLE_CLICK_DELAY = 500;

// Variável para Pokémon selecionado
let selectedPokemon = null;

// URLs das imagens dos Pokémon
const pokemonImages = {
    dewott: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/502.png",
    floatzel: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/419.png"
};

// URLs dos GIFs de pontuação
const pointGifs = {
    dewott: "static/images/gifs/gifdewot.gif",
    floatzel: "/static/images/gifs/giflaranja.gif"
};

// Elementos DOM
const elements = {
    modeSelection: document.getElementById('mode-selection'),
    difficultySelection: document.getElementById('difficulty-selection'),
    pokemonSelection: document.getElementById('pokemon-selection'),
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
    playerPokemonImg: document.getElementById('player-pokemon-img'),
    opponentPokemonImg: document.getElementById('opponent-pokemon-img'),
    connectBtn: document.getElementById('connect-btn'),
    restartBtn: document.getElementById('restart-btn')
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
    
    elements.startGameBtn.addEventListener('click', startGame);
    elements.connectBtn.addEventListener('click', connectArduino);
    elements.restartBtn.addEventListener('click', () => {
        if (gameState.mode) startGame();
    });
    
    // Adicionar evento para o botão de continuar na seleção de Pokémon
    const continuePokemonBtn = document.getElementById('continue-pokemon-btn');
    if (continuePokemonBtn) {
        continuePokemonBtn.addEventListener('click', showMission);
    }
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
    showPokemonSelection();
}

// Mostrar seleção de Pokémon
function showPokemonSelection() {
    elements.pokemonSelection.style.display = 'flex';
    // Garantir que o botão de continuar esteja escondido inicialmente
    const continueBtn = document.getElementById('continue-pokemon-btn');
    if (continueBtn) {
        continueBtn.style.display = 'none';
    }
}

// Seleção de Pokémon
function selectPokemon(pokemon) {
    // Remover seleção anterior
    document.querySelectorAll('.pokemon-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Adicionar seleção atual
    event.currentTarget.classList.add('selected');
    
    selectedPokemon = pokemon;
    
    // Mostrar botão de continuar
    const continueBtn = document.getElementById('continue-pokemon-btn');
    if (continueBtn) {
        continueBtn.style.display = 'block';
    }
    
    // Aplicar o tema correspondente
    if (pokemon === 'dewott') {
        document.body.classList.add('dewott-theme');
        document.body.classList.remove('floatzel-theme', 'pokemon-theme');
    } else {
        document.body.classList.add('floatzel-theme');
        document.body.classList.remove('dewott-theme', 'pokemon-theme');
    }
}

// Mostrar missão
function showMission() {
    if (!selectedPokemon) {
        alert('Por favor, selecione um Pokémon primeiro!');
        return;
    }
    
    gameState.pokemon = selectedPokemon;
    elements.pokemonSelection.style.display = 'none';
    elements.missionScreen.style.display = 'flex';
    
    const pokemonName = selectedPokemon === 'dewott' ? 'Dewott' : 'Floatzel';
    
    elements.missionText.textContent = `Agora é hora de treinar com ${pokemonName}! Responda corretamente às perguntas para ganhar pontos e se tornar um Mestre Pokémon! Cada resposta certa fortalece seu vínculo com ${pokemonName}.`;
    
    // Aplicar o tema na tela de missão também
    if (selectedPokemon === 'dewott') {
        elements.missionScreen.classList.add('dewott-theme');
        elements.missionScreen.classList.remove('floatzel-theme', 'pokemon-theme');
    } else {
        elements.missionScreen.classList.add('floatzel-theme');
        elements.missionScreen.classList.remove('dewott-theme', 'pokemon-theme');
    }
}

// Configuração Multiplayer
function setupMultiplayer() {
    gameState.pokemon = { team1: 'dewott', team2: 'floatzel' };
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
        elements.gameContainer.className = `singleplayer ${gameState.pokemon}-theme`;
        document.getElementById('opponent-score').style.display = 'none';
        
        const pokemonImg = pokemonImages[gameState.pokemon];
        elements.playerPokemonImg.src = pokemonImg;
    } else {
        elements.gameContainer.className = 'multiplayer-layout';
        document.getElementById('opponent-score').style.display = 'flex';
        
        elements.playerPokemonImg.src = pokemonImages.dewott;
        elements.opponentPokemonImg.src = pokemonImages.floatzel;
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
            
            gameState.answerLock = true;
            highlightCorrectAnswer();
            createNextQuestionButton();
        }
    }, 1000);
}

function updateTimer() {
    if (elements.timer) {
        elements.timer.textContent = gameState.timeLeft;
        
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
        
        if (gameState.mode === 'singleplayer') {
            button.onclick = () => {
                const previouslySelected = elements.optionsContainer.querySelector('.selected');
                if (previouslySelected) {
                    previouslySelected.classList.remove('selected');
                }
                
                button.classList.add('selected');
                checkAnswer(option.correct);
            };
        } else {
            button.onclick = () => checkAnswer(option.correct);
        }
        
        elements.optionsContainer.appendChild(button);
    });
    
    elements.optionsContainer.style.gridTemplateColumns = 
        gameState.mode === 'multiplayer' ? '1fr' : '1fr 1fr';
    
    showBackToHomeButton();
    startTimer(20);
}

// Embaralha array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Função para mostrar animação de pontuação
function showPointAnimation(pokemon) {
    const animationDiv = document.createElement('div');
    animationDiv.className = `point-animation ${pokemon}-point`;
    
    const pokemonName = pokemon === 'dewott' ? 'Dewott' : 'Floatzel';
    
    animationDiv.innerHTML = `
        <img src="${pointGifs[pokemon]}" alt="${pokemonName} celebration">
        <h3>${pokemonName} ganhou um ponto! 🎉</h3>
    `;
    
    document.body.appendChild(animationDiv);
    
    // Remover a animação após 2 segundos
    setTimeout(() => {
        if (animationDiv.parentNode) {
            animationDiv.parentNode.removeChild(animationDiv);
        }
    }, 2000);
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
            
            // Mostrar animação do Pokémon
            showPointAnimation(gameState.pokemon);
            
            if (selectedButton) {
                selectedButton.classList.add('selected-correct');
            }
        } else {
            elements.status.textContent = "❌ Resposta incorreta!";
            
            if (selectedButton) {
                selectedButton.classList.add('selected-incorrect');
            }
            
            highlightCorrectAnswer();
        }
    } else {
        if (gameState.firstAnswerTeam === null) {
            gameState.firstAnswerTeam = team;
            
            if (isCorrect) {
                if (team === 'team1') {
                    gameState.scores.team1++;
                    elements.status.textContent = "✅ Time Dewott acertou primeiro! +1 ponto";
                    showPointAnimation('dewott');
                } else if (team === 'team2') {
                    gameState.scores.team2++;
                    elements.status.textContent = "✅ Time Floatzel acertou primeiro! +1 ponto";
                    showPointAnimation('floatzel');
                }
            } else {
                if (team === 'team1') {
                    gameState.scores.team2++;
                    elements.status.textContent = "❌ Time Dewott errou! Ponto para Floatzel";
                    showPointAnimation('floatzel');
                    highlightCorrectAnswer();
                } else if (team === 'team2') {
                    gameState.scores.team1++;
                    elements.status.textContent = "❌ Time Floatzel errou! Ponto para Dewott";
                    showPointAnimation('dewott');
                    highlightCorrectAnswer();
                }
            }
        }
    }
    
    updateScores();
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
        background: #ff0000;
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
    
    // Adicionar instrução para o Arduino apenas se estiver conectado
    if (gameState.arduinoConnected) {
        elements.status.innerHTML += '<p>🎮 Pressione o botão A duas vezes para próxima pergunta</p>';
    } else {
        elements.status.innerHTML += '<p>💡 Clique no botão acima ou use o mouse para continuar</p>';
    }
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
        elements.status.textContent = `🏆 Placar final: Dewott ${gameState.scores.team1} x ${gameState.scores.team2} Floatzel`;
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
                <button onclick="saveScore()" style="padding: 0.5rem 1rem; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">Salvar</button>
            </div>
            <div>
                <button onclick="document.getElementById('score-form').style.display = 'block'; this.style.display = 'none'" 
                        style="padding: 0.8rem 1.5rem; margin: 0.5rem; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">
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
                team: gameState.pokemon
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
    gameState.pokemon = null;
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
    selectedPokemon = null;
    
    // Resetar temas
    document.body.classList.remove('dewott-theme', 'floatzel-theme');
    document.body.classList.add('pokemon-theme');
    
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    if (gameState.nextQuestionButton) {
        gameState.nextQuestionButton.remove();
        gameState.nextQuestionButton = null;
    }
    
    hideBackToHomeButton();
}

// Função para mostrar a tela de seleção de modo
function showModeSelection() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    elements.modeSelection.style.display = 'flex';
    elements.gameContainer.style.display = 'none';
    
    // Resetar para tema neutro
    document.body.classList.remove('dewott-theme', 'floatzel-theme');
    document.body.classList.add('pokemon-theme');
    
    // Resetar seleção de Pokémon
    document.querySelectorAll('.pokemon-option').forEach(option => {
        option.classList.remove('selected');
    });
    selectedPokemon = null;
    
    // Esconder botão de continuar
    const continueBtn = document.getElementById('continue-pokemon-btn');
    if (continueBtn) {
        continueBtn.style.display = 'none';
    }
    
    hideBackToHomeButton();
}

// Função para ir para próxima pergunta (duplo clique no botão A)
function goToNextQuestion() {
    if (gameState.answerLock) {
        gameState.currentQuestionIndex++;
        
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
        gameState.arduinoConnected = true;
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
        gameState.arduinoConnected = false;
    }
}

// Função principal para lidar com botões do Arduino
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
        return;
    }
    
    if (gameState.answerLock) return;
    
    const options = elements.optionsContainer.querySelectorAll('.option-btn');
    
    if (gameState.mode === 'singleplayer') {
        let optionIndex = -1;
        
        switch(buttonPin) {
            case 2: optionIndex = 0; break;
            case 3: optionIndex = 1; break;
            case 4: optionIndex = 2; break;
            case 5: optionIndex = 3; break;
        }
        
        if (optionIndex >= 0 && optionIndex < options.length) {
            const previouslySelected = elements.optionsContainer.querySelector('.selected');
            if (previouslySelected) {
                previouslySelected.classList.remove('selected');
            }
            
            options[optionIndex].classList.add('selected');
            
            const isCorrect = options[optionIndex].textContent.includes(gameState.currentQuestion.correctAnswer);
            checkAnswer(isCorrect);
        }
    } else {
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

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);