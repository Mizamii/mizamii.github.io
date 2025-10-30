const int buttonPins[] = {2, 3, 4, 5}; // Botões para A, B, C, D
const int numButtons = 4;
int lastButtonState[] = {HIGH, HIGH, HIGH, HIGH}; // Estado anterior dos botões (pull-up)

void setup() {
  Serial.begin(9600);
  
  // Configurar os pinos dos botões como entrada com pull-up
  for (int i = 0; i < numButtons; i++) {
    pinMode(buttonPins[i], INPUT_PULLUP);
  }
}

void loop() {
  for (int i = 0; i < numButtons; i++) {
    int buttonState = digitalRead(buttonPins[i]);
    
    // Verifica se o botão foi pressionado (mudou de HIGH para LOW)
    if (buttonState == LOW && lastButtonState[i] == HIGH) {
      // Envia o número do PINO (2, 3, 4, 5) pela serial
      Serial.println(buttonPins[i]);
      
      // Pequeno delay para evitar múltiplos envios
      delay(200);
    }
    
    // Atualiza o estado anterior do botão
    lastButtonState[i] = buttonState;
  }
  
  // Pequeno delay para estabilidade
  delay(10);
}
