function locar1() {
    let preço = 10
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma1", soma);
    window.location.replace("home.html");
}
function locar2() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma2", soma);
    window.location.replace("home.html");
}
function locar3() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma3", soma);
    window.location.replace("home.html");
}
function locar4() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma4", soma);
    window.location.replace("home.html");
}
function locar5() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma5", soma);
    window.location.replace("home.html");
}
function locar6() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma6", soma);
    window.location.replace("home.html");
}
function locar7() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma7", soma);
    window.location.replace("home.html");
}
function locar8() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma8", soma);
    window.location.replace("home.html");
}
function locar9() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma9", soma);
    window.location.replace("home.html");
}
function locar10() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma10", soma);
    window.location.replace("home.html");
}
function locar11() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma11", soma);
    window.location.replace("home.html");
}
function locar12() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma12", soma);
    window.location.replace("home.html");
}
function locar13() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma13", soma);
    window.location.replace("home.html");
}
function locar14() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma14", soma);
    window.location.replace("home.html");
}
function locar15() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma15", soma);
    window.location.replace("home.html");
}
function locar16() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma16", soma);
    window.location.replace("home.html");
}
function locar17() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma17", soma);
    window.location.replace("home.html");
}
function locar18() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma18", soma);
    window.location.replace("home.html");
}
function locar19() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma19", soma);
    window.location.replace("home.html");
}
function locar20() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma20", soma);
    window.location.replace("home.html");
}
function locar21() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma21", soma);
    window.location.replace("home.html");
}
function locar22() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma22", soma);
    window.location.replace("home.html");
}
function locar23() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma23", soma);
    window.location.replace("home.html");
}
function locar24() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma24", soma);
    window.location.replace("home.html");
}
function locar25() {
    let preço = 10
    let quantidade = document.getElementById("qt").value
    let soma = preço * quantidade;
    sessionStorage.setItem("soma25", soma);
    window.location.replace("home.html");
}
function carrinho() {
    let totalCard = parseFloat(sessionStorage.getItem("soma1")) +
                    parseFloat(sessionStorage.getItem("soma2")) +
                    parseFloat(sessionStorage.getItem("soma3")) +
                    parseFloat(sessionStorage.getItem("soma4")) +
                    parseFloat(sessionStorage.getItem("soma5")) +
                    parseFloat(sessionStorage.getItem("soma6")) +
                    parseFloat(sessionStorage.getItem("soma7")) +
                    parseFloat(sessionStorage.getItem("soma8")) +
                    parseFloat(sessionStorage.getItem("soma9")) +
                    parseFloat(sessionStorage.getItem("soma10")) +
                    parseFloat(sessionStorage.getItem("soma11")) +
                    parseFloat(sessionStorage.getItem("soma12")) +
                    parseFloat(sessionStorage.getItem("soma12")) +
                    parseFloat(sessionStorage.getItem("soma14")) +
                    parseFloat(sessionStorage.getItem("soma15")) +
                    parseFloat(sessionStorage.getItem("soma16")) +
                    parseFloat(sessionStorage.getItem("soma17")) +
                    parseFloat(sessionStorage.getItem("soma18")) +
                    parseFloat(sessionStorage.getItem("soma19")) +
                    parseFloat(sessionStorage.getItem("soma20")) +
                    parseFloat(sessionStorage.getItem("soma21")) +
                    parseFloat(sessionStorage.getItem("soma22")) +
                    parseFloat(sessionStorage.getItem("soma23")) +
                    parseFloat(sessionStorage.getItem("soma24")) +
                    parseFloat(sessionStorage.getItem("soma25"));

    document.getElementById("totalCard").value = "R$" + totalCard + ",00"

    let parcela = document.getElementById("parcela");
    parcela.addEventListener("click", (e) => {
        switch (parcela.value) {
            case "1":
                document.getElementById("card").value = "R$" + (totalCard / 1).toFixed(2)

                break;


            case "2":
                document.getElementById("card").value = "R$" + (totalCard / 2).toFixed(2)

                break;

            case "3":
                document.getElementById("card").value = "R$" + (totalCard / 3).toFixed(2)

                break;

        }
    })
}

function session() {
    sessionStorage.setItem("soma1", 0);
    sessionStorage.setItem("soma2", 0);
    sessionStorage.setItem("soma3", 0);
    sessionStorage.setItem("soma4", 0);
    sessionStorage.setItem("soma5", 0);
    sessionStorage.setItem("soma6", 0);
    sessionStorage.setItem("soma7", 0);
    sessionStorage.setItem("soma8", 0);
    sessionStorage.setItem("soma9", 0);
    sessionStorage.setItem("soma10", 0);
    sessionStorage.setItem("soma11", 0);
    sessionStorage.setItem("soma12", 0);
    sessionStorage.setItem("soma13", 0);
    sessionStorage.setItem("soma14", 0);
    sessionStorage.setItem("soma15", 0);
    sessionStorage.setItem("soma16", 0);
    sessionStorage.setItem("soma17", 0);
    sessionStorage.setItem("soma18", 0);
    sessionStorage.setItem("soma19", 0);
    sessionStorage.setItem("soma20", 0);
    sessionStorage.setItem("soma21", 0);
    sessionStorage.setItem("soma22", 0);
    sessionStorage.setItem("soma23", 0);
    sessionStorage.setItem("soma24", 0);
    sessionStorage.setItem("soma25", 0);




}




