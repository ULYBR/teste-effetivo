const tower = (n, from, to, aux) => {
    if (n === 1) return console.log(`${from} -> ${to}`);
    tower(n - 1, from, aux, to);
    console.log(`${from} -> ${to}`);
    tower(n - 1, aux, to, from);
  };
  
  // Teste a função
  tower(3, "A", "B", "C");