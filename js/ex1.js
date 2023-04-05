// lê o número de maçãs compradas
let quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas:"));

// verifica se a quantidade é maior ou igual a 12
if (quantidade >= 12) {
  // calcula o custo total das maçãs
  let precoUnitario = 1.00;
  let custoTotal = quantidade * precoUnitario;

  // exibe o custo total da compra
  console.log(`O custo total da compra é R$${custoTotal.toFixed(2)}.`);
} else {
  // calcula o custo total das maçãs
  let precoUnitario = 1.30;
  let custoTotal = quantidade * precoUnitario;

  // exibe o custo total da compra
  console.log(`O custo total da compra é R$${custoTotal.toFixed(2)}.`);
}