// Banco de Perguntas Ampliado
const questions = {
    singleplayer: [
        {
            question: "Qual o nome do cachorro?",
            correctAnswer: "Carla",
            incorrectOptions: ["Rodrigo", "Luis", "Gorila"]
        },
        {
            question: "Qual é a capital do Brasil?",
            correctAnswer: "Brasília",
            incorrectOptions: ["Rio de Janeiro", "São Paulo", "Salvador"]
        },
        {
            question: "Quem pintou a Mona Lisa?",
            correctAnswer: "Leonardo da Vinci",
            incorrectOptions: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet"]
        },
        {
            question: "Quantos planetas existem no sistema solar?",
            correctAnswer: "8",
            incorrectOptions: ["7", "9", "10"]
        },
        {
            question: "Qual é o maior mamífero do mundo?",
            correctAnswer: "Baleia-azul",
            incorrectOptions: ["Elefante", "Girafa", "Hipopótamo"]
        }
    ],
    multiplayer: [
        {
            question: "O cachorro se chama Carla?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"]
        },
        {
            question: "Brasília é a capital do Brasil?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"]
        },
        {
            question: "A Terra é plana?",
            correctAnswer: "Não",
            incorrectOptions: ["Sim"]
        },
        {
            question: "O sol é uma estrela?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"]
        },
        {
            question: "Python é uma linguagem de programação?",
            correctAnswer: "Sim",
            incorrectOptions: ["Não"]
        }
    ]
};

// UUID padrão para SPP Bluetooth
const BLUETOOTH_SERVICE_UUID = '00001101-0000-1000-8000-00805f9b34fb';

// Estado do Jogo
const gameState = {
    mode: null,
    animal: null,
    questions: [],
    currentQuestionIndex: 0,
    currentQuestion: null,
    scores: { team1: 0, team2: 0, player: 0 },
    timer: null,
    timeLeft: 10,
    port: null,
    reader: null,
    bluetooth: null,
    bluetoothPolling: null,
    answerLock: false,
    multiplayerAnswered: { team1: false, team2: false },
    firstAnswerTeam: null
};

// Elementos DOM
const elements = {
    modeSelection: document.getElementById('mode-selection'),
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
        OPTION_A: 4, // Pino 4 - Opção A
        OPTION_B: 5, // Pino 5 - Opção B
        OPTION_C: 6, // Pino 6 - Opção C
        OPTION_D: 7  // Pino 7 - Opção D
    },
    MULTIPLAYER: {
        TEAM1_A: 4,  // Pino 4 - Time 1, Opção A
        TEAM1_B: 6,  // Pino 6 - Time 1, Opção B
        TEAM2_A: 5,  // Pino 5 - Time 2, Opção A
        TEAM2_B: 7   // Pino 7 - Time 2, Opção B
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
    
    // Event listeners para as telas
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
        showStory();
    } else {
        setupMultiplayer();
    }
}

// Mostrar história
function showStory() {
    elements.storyScreen.style.display = 'flex';
    
    // Texto da história com efeito de digitação
    const story = "Você estava andando pelo parque quando encontrou um animal machucado precisando de ajuda. Para curá-lo, você precisa responder corretamente às perguntas que surgirão no caminho. Cada resposta correta é um cuidado para o animal!";
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
    showMultiplayerMission();
}

// Mostrar missão multiplayer
function showMultiplayerMission() {
    elements.modeSelection.style.display = 'none';
    elements.missionScreen.style.display = 'flex';
    
    elements.missionText.textContent = "Modo Duelo Animal! Dois times competirão para ver quem sabe mais sobre animais e natureza. O Time Gato versus Time Cachorro! Cada resposta correta vale um ponto.";
}

// Inicia o Jogo
function startGame() {
    elements.missionScreen.style.display = 'none';
    elements.gameContainer.style.display = 'flex';
    
    // Resetar estado do jogo
    gameState.answerLock = false;
    gameState.multiplayerAnswered = { team1: false, team2: false };
    gameState.firstAnswerTeam = null;
    
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

// Carrega perguntas aleatórias
function loadQuestions() {
    const questionSet = questions[gameState.mode];
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
    
    startTimer(15);
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
    
    clearInterval(gameState.timer);
    gameState.answerLock = true; // Bloqueia outras respostas
    
    if (gameState.mode === 'singleplayer') {
        if (isCorrect) {
            gameState.scores.player++;
            elements.status.textContent = "✅ Resposta correta! +1 cuidado para o animal";
            elements.status.style.color = "green";
        } else {
            elements.status.textContent = "❌ Resposta incorreta!";
            elements.status.style.color = "red";
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
                    elements.status.style.color = "green";
                } else if (team === 'team2') {
                    gameState.scores.team2++;
                    elements.status.textContent = "✅ Time Cachorro acertou primeiro! +1 ponto";
                    elements.status.style.color = "green";
                }
            } else {
                // Time que respondeu primeiro errou - ponto vai para o outro time
                if (team === 'team1') {
                    gameState.scores.team2++;
                    elements.status.textContent = "❌ Time Gato errou! Ponto para Time Cachorro";
                    elements.status.style.color = "red";
                } else if (team === 'team2') {
                    gameState.scores.team1++;
                    elements.status.textContent = "❌ Time Cachorro errou! Ponto para Time Gato";
                    elements.status.style.color = "red";
                }
            }
        }
    }
    
    updateScores();
    
    setTimeout(() => {
        gameState.currentQuestionIndex++;
        showQuestion();
    }, 2000);
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
            elements.status.style.color = "orange";
            gameState.currentQuestionIndex++;
            setTimeout(showQuestion, 1500);
        }
    }, 1000);
}

function updateTimer() {
    elements.timer.textContent = gameState.timeLeft;
    
    // Mudar cor do timer conforme o tempo passa
    if (gameState.timeLeft <= 5) {
        elements.timer.style.color = "red";
    } else if (gameState.timeLeft <= 10) {
        elements.timer.style.color = "orange";
    } else {
        elements.timer.style.color = "black";
    }
}

// Final do jogo
function endGame() {
    elements.question.textContent = "🏁 Fim do jogo!";
    elements.optionsContainer.innerHTML = '';
    elements.status.style.color = "blue";
    
    if (gameState.mode === 'singleplayer') {
        let message;
        const percentage = (gameState.scores.player / gameState.questions.length) * 100;
        
        if (percentage >= 80) {
            message = `🎉 Excelente! Você acertou ${gameState.scores.player} de ${gameState.questions.length} perguntas! O animal está curado!`;
        } else if (percentage >= 60) {
            message = `👍 Bom trabalho! Você acertou ${gameState.scores.player} de ${gameState.questions.length} perguntas! O animal está melhor.`;
        } else {
            message = `😔 Você acertou ${gameState.scores.player} de ${gameState.questions.length} perguntas. Tente novamente para ajudar o animal.`;
        }
        
        elements.status.textContent = message;
    } else {
        let message;
        if (gameState.scores.team1 > gameState.scores.team2) {
            message = `🏆 Time Gato venceu! Placar: ${gameState.scores.team1} x ${gameState.scores.team2}`;
        } else if (gameState.scores.team2 > gameState.scores.team1) {
            message = `🏆 Time Cachorro venceu! Placar: ${gameState.scores.team1} x ${gameState.scores.team2}`;
        } else {
            message = `🤝 Empate! Placar: ${gameState.scores.team1} x ${gameState.scores.team2}`;
        }
        
        elements.status.textContent = message;
    }
    
    // Botão para reiniciar
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Jogar Novamente';
    restartButton.className = 'restart-btn';
    restartButton.onclick = () => {
        window.location.reload();
    };
    elements.optionsContainer.appendChild(restartButton);
}

// Função para lidar com dados recebidos via Bluetooth
function handleBluetoothData(event) {
    try {
        const value = event.target.value;
        // Converter os dados recebidos para string
        const decoder = new TextDecoder();
        const data = decoder.decode(value).trim();
        
        console.log("Dados recebidos via Bluetooth:", data);
        
        // Processar cada linha recebida
        if (data) {
            data.split('\n').forEach(line => {
                const buttonPress = line.trim();
                if (buttonPress) {
                    handleButtonPress(parseInt(buttonPress));
                }
            });
        }
    } catch (error) {
        console.error("Erro ao processar dados Bluetooth:", error);
    }
}

// Função chamada quando a conexão Bluetooth é perdida
function onBluetoothDisconnected() {
    elements.status.textContent = "⚠️ Conexão Bluetooth perdida";
    elements.connectBtn.innerHTML = '<span>🎮 Conectar Arduino</span>';
    elements.connectBtn.disabled = false;
    
    if (gameState.bluetoothPolling) {
        clearInterval(gameState.bluetoothPolling);
        gameState.bluetoothPolling = null;
    }
    
    if (gameState.bluetooth) {
        gameState.bluetooth = null;
    }
}

// Conexão Serial (USB)
async function connectSerial() {
    try {
        if (!navigator.serial) {
            elements.status.textContent = "⚠️ Seu navegador não suporta WebSerial API";
            return;
        }
        
        gameState.port = await navigator.serial.requestPort();
        await gameState.port.open({ baudRate: 9600 });
        elements.connectBtn.innerHTML = '<span>🎮 Conectado Serial</span>';
        elements.connectBtn.disabled = true;
        elements.status.textContent = "✅ Conectado via USB Serial!";
        listenToArduino();
    } catch (err) {
        elements.status.textContent = "⚠️ Erro na conexão serial com Arduino";
        elements.connectBtn.disabled = false;
        console.error(err);
    }
}

// Conexão Bluetooth - Versão melhorada
async function connectBluetooth() {
    try {
        if (!navigator.bluetooth) {
            elements.status.textContent = "⚠️ Seu navegador não suporta WebBluetooth API. Use Chrome ou Edge.";
            return;
        }
        
        elements.status.textContent = "🔍 Procurando dispositivo Bluetooth...";
        elements.connectBtn.disabled = true;
        
        // Adicionar mais opções de filtro para dispositivos Bluetooth
        const device = await navigator.bluetooth.requestDevice({
            filters: [
                { name: 'HC-05' },
                { name: 'HC-06' },
                { namePrefix: 'HC-' }, // Prefixo comum para módulos HC
                { services: [BLUETOOTH_SERVICE_UUID] } // Procurar por serviços SPP
            ],
            optionalServices: [BLUETOOTH_SERVICE_UUID]
        }).catch(error => {
            elements.status.textContent = "❌ Nenhum dispositivo selecionado ou encontrado";
            elements.connectBtn.disabled = false;
            console.error("Erro ao solicitar dispositivo:", error);
            throw error;
        });
        
        if (!device) {
            elements.connectBtn.disabled = false;
            return;
        }
        
        elements.status.textContent = "📱 Conectando ao dispositivo...";
        
        // Adicionar timeout para a conexão
        const connectionTimeout = setTimeout(() => {
            elements.status.textContent = "⚠️ Tempo esgotado na conexão. Tente novamente.";
            elements.connectBtn.disabled = false;
        }, 15000); // 15 segundos timeout
        
        // Conectar ao servidor GATT
        const server = await device.gatt.connect();
        clearTimeout(connectionTimeout);
        
        elements.status.textContent = "✅ Conectado! Obtendo serviços...";
        
        // Obter o serviço
        const service = await server.getPrimaryService(BLUETOOTH_SERVICE_UUID);
        
        // Obter características para leitura e escrita
        const characteristics = await service.getCharacteristics();
        
        // Encontrar a característica para receber dados
        let readCharacteristic = null;
        for (const char of characteristics) {
            // Priorizar características com notificação
            if (char.properties.notify) {
                readCharacteristic = char;
                break;
            }
        }
        
        // Se não encontrou notificação, procurar indicação
        if (!readCharacteristic) {
            for (const char of characteristics) {
                if (char.properties.indicate) {
                    readCharacteristic = char;
                    break;
                }
            }
        }
        
        // Se ainda não encontrou, usar a primeira característica disponível
        if (!readCharacteristic && characteristics.length > 0) {
            readCharacteristic = characteristics[0];
        }
        
        if (!readCharacteristic) {
            throw new Error("Nenhuma característica adequada encontrada");
        }
        
        // Configurar notificações se suportado
        if (readCharacteristic.properties.notify || readCharacteristic.properties.indicate) {
            await readCharacteristic.startNotifications();
            readCharacteristic.addEventListener('characteristicvaluechanged', handleBluetoothData);
        } else {
            // Se não suportar notificações, usar polling
            elements.status.textContent = "⚠️ Dispositivo não suporta notificações. Usando modo de verificação.";
            startBluetoothPolling(readCharacteristic);
        }
        
        // Atualizar interface
        elements.connectBtn.innerHTML = '<span>📱 Conectado Bluetooth</span>';
        elements.connectBtn.disabled = true;
        elements.status.textContent = "✅ Conectado via Bluetooth!";
        
        // Armazenar a característica para possível uso futuro
        gameState.bluetooth = {
            device: device,
            server: server,
            characteristic: readCharacteristic,
            supportsNotifications: (readCharacteristic.properties.notify || readCharacteristic.properties.indicate)
        };
        
        // Configurar evento de desconexão
        device.addEventListener('gattserverdisconnected', onBluetoothDisconnected);
        
    } catch (err) {
        elements.status.textContent = "⚠️ Erro na conexão Bluetooth: " + err.message;
        elements.connectBtn.disabled = false;
        console.error("Erro detalhado:", err);
    }
}

// Polling para dispositivos que não suportam notificações
function startBluetoothPolling(characteristic) {
    if (gameState.bluetoothPolling) {
        clearInterval(gameState.bluetoothPolling);
    }
    
    gameState.bluetoothPolling = setInterval(async () => {
        try {
            if (gameState.bluetooth && gameState.bluetooth.device.gatt.connected) {
                const value = await characteristic.readValue();
                const decoder = new TextDecoder();
                const data = decoder.decode(value).trim();
                
                if (data) {
                    console.log("Dados recebidos via polling:", data);
                    data.split('\n').forEach(line => {
                        const buttonPress = line.trim();
                        if (buttonPress) {
                            handleButtonPress(parseInt(buttonPress));
                        }
                    });
                }
            } else {
                clearInterval(gameState.bluetoothPolling);
                gameState.bluetoothPolling = null;
            }
        } catch (error) {
            console.error("Erro no polling Bluetooth:", error);
        }
    }, 100); // Verificar a cada 100ms
}

// Função principal de conexão com Arduino
async function connectArduino() {
    // Perguntar ao usuário qual conexão deseja usar
    const useBluetooth = confirm("Pressione OK para Bluetooth ou Cancelar para USB Serial");
    
    if (useBluetooth) {
        await connectBluetooth();
    } else {
        await connectSerial();
    }
}

// Escuta dados do Arduino (Serial)
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
        // Modo Singleplayer: botões 4,5,6,7 = A,B,C,D
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
        
        // Time 1 (Gato) - Botões 4 e 6
        if (buttonPin === ARDUINO_BUTTONS.MULTIPLAYER.TEAM1_A || 
            buttonPin === ARDUINO_BUTTONS.MULTIPLAYER.TEAM1_B) {
            
            if (gameState.multiplayerAnswered.team1) return; // Time já respondeu
            gameState.multiplayerAnswered.team1 = true;
            team = 'team1';
            
            // Verifica se a resposta está correta
            const selectedOption = (buttonPin === ARDUINO_BUTTONS.MULTIPLAYER.TEAM1_A) ? 0 : 1;
            isCorrect = options[selectedOption].textContent.includes(gameState.currentQuestion.correctAnswer);
            
        } 
        // Time 2 (Cachorro) - Botões 5 e 7
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
    if (gameState.bluetooth && gameState.bluetooth.device.gatt.connected) {
        gameState.bluetooth.device.gatt.disconnect();
    }
    if (gameState.bluetoothPolling) {
        clearInterval(gameState.bluetoothPolling);
    }
});

// Inicializar o jogo quando a página carregar
window.addEventListener('load', init);