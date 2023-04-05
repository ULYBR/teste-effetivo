-- Verifica se já existe o cargo "Desenvolvedor"
SELECT COUNT(*) FROM Cargo WHERE DESC_CARGO = 'Desenvolvedor';

-- Se não existir, insere o novo cargo "Desenvolvedor"
INSERT INTO Cargo (DESC_CARGO) SELECT 'Desenvolvedor' WHERE NOT EXISTS (SELECT * FROM Cargo WHERE DESC_CARGO = 'Desenvolvedor');

-- Insere o novo usuário com o cargo "Desenvolvedor"
INSERT INTO Usuario (DESC_NOME, DATA_NASCIMENTO, CODG_CARGO) VALUES ('João Silva', '1990-01-01', (SELECT CODG_CARGO FROM Cargo WHERE DESC_CARGO = 'Desenvolvedor'));
