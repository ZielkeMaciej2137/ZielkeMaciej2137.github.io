function crock(input) {

    const choices = {
        "k": "Kamień",
        "p": "Papier",
        "n": "Nożyce"
    };

    let odp = ["n", "p", "k"][Math.floor(Math.random() * 3)];
    let wynik;

    
    if (input === odp) {
        wynik = "Remis";
    } else if ((input === "k" && odp === "n") || (input === "p" && odp === "k") || (input === "n" && odp === "p")) {
        wynik = "Wygrywasz";
    } else {
        wynik = "Przegrywasz";
    }


    document.getElementById("losowanie").innerText = "Komputer wybrał: " + choices[odp];
    document.querySelector(".uz").innerText = "Twój wynik: " + wynik;
}
