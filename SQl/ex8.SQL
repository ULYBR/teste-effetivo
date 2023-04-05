SELECT Usuario.DESC_NOME
FROM Usuario
JOIN Cargo ON Usuario.CODG_CARGO = Cargo.CODG_CARGO
WHERE Cargo.DESC_CARGO = 'desenvolvedor' AND Usuario.FLG_ATIVO = true
ORDER BY Usuario.DESC_NOME;