function fibonacci(posicao) {
    let num1 = 0, num2 = 1, soma;
    for (let i = 2; i <= posicao; i++) {
      soma = num1 + num2;
      num1 = num2;
      num2 = soma;
    }
    return num2;
  }
  
  const posicao = parseInt(prompt("Digite a posição desejada na sequência de Fibonacci:"));
  
  const resultado = fibonacci(posicao);
  
  console.log(`O número na posição ${posicao} da sequência de Fibonacci é ${resultado}.`);