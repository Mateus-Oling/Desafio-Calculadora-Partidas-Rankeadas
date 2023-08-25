let victories = 100
let defeats = 30

function rankCalculator(victories, defeats) {
    return victories - defeats
}

let rankResult = rankCalculator(victories, defeats)

function returnRank() {
    if (rankResult <= 10) {
    console.log("O Herói tem saldo de " + rankResult + " vitórias " + "e está no elo " + "Bronze")
    }
    else if (rankResult >= 20 && rankResult <= 50) {
        console.log("O Herói tem saldo de " + rankResult + " vitórias " + "e está no elo " + "Prata")
    }
    else if (rankResult >= 50 && rankResult <= 80) {
        console.log("O Herói tem saldo de " + rankResult + " vitórias " + "e está no elo " + "Ouro")
    }
    else if (rankResult >= 80 && rankResult <= 90) {
        console.log("O Herói tem saldo de " + rankResult + " vitórias " + "e está no elo " + "Diamante")
    }
    else if (rankResult >= 90 && rankResult <= 100) {
        console.log("O Herói tem saldo de " + rankResult + " vitórias " + "e está no elo " + "Lendário")
    }
    else if (rankResult >= 101) {
        console.log("O Herói tem saldo de " + rankResult + " vitórias " + "e está no elo " + "Imortal")
    }
}

returnRank();
