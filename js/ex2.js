function calcularDuracaoJogo(horaInicio, horaFim) {
    let duracaoJogo = 0;
  
    // Se a hora de fim for maior que a hora de início,
    // a duração do jogo é simplesmente a diferença entre as duas horas
    if (horaFim > horaInicio) {
      duracaoJogo = horaFim - horaInicio;
    } 
    // Caso contrário, o jogo terminou no dia seguinte
    else {
      duracaoJogo = 24 - horaInicio + horaFim;
    }
  
    return duracaoJogo;
  }
  
  // Lê a hora de início e de fim do jogo
  const horaInicio = parseInt(prompt("Digite a hora de início do jogo:"));
  const horaFim = parseInt(prompt("Digite a hora de fim do jogo:"));
  
  // Calcula a duração do jogo
  const duracaoJogo = calcularDuracaoJogo(horaInicio, horaFim);
  
  // Exibe a duração do jogo em horas
  console.log(`A duração do jogo foi de ${duracaoJogo} horas.`);