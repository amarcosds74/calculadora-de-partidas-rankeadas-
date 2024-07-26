function calcularSaldoERank(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Determinando o nível com base no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }

    // Retornando a mensagem final
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Função de exemplo para testar a função
function exemplo() {
    let vitorias = 25;  // Exemplo de vitórias
    let derrotas = 10;  // Exemplo de derrotas

    let resultado = calcularSaldoERank(vitorias, derrotas);
    console.log(resultado);
}

// Chamando a função de exemplo
exemplo();
