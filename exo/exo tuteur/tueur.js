let Noms = [
  "Ariane",
  "Roson",
  "Sacha",
  "solal",
  "Hugo",
  "Thomas",
  "Arthur",
  "Lysange",
  "Chloe",
  "Alice",
];

let morts = [];

let Caractéristiques = ["Nerd", "Sportif", "Blonde", "Robuste", "Scout"];

function Aléatoire(x) {
  a = Math.floor(Math.random() * x);
}

function Tueur() {
  let Jason = 100;

  let Personnages = [];
  let b = 0;

  let CaractéristiquesPerso = [];
  let c = 0;
  let d = 4;

  while (b != 5) {
    b += 1;
    Aléatoire(9);
    Personnages.push(Noms[a]);
  }
  console.log(Personnages);

  while (c != 5) {
    c += 1;
    Aléatoire(d);
    CaractéristiquesPerso.push(Caractéristiques[a]);
    Caractéristiques.splice(a, 1);
    d -= 1;
  }
  console.log(CaractéristiquesPerso);

  while (Jason > 0 && Personnages[0] != null) {
    console.log("Il reste " + Jason + " points de vies à Jason.");
    Aléatoire(4);

    if (a === 0) {
      console.log("Jason a tué " + Personnages[0] + ".");
      morts.push(" " + Personnages.shift(0, 1));
    } else if (a === 1) {
      Jason -= 15;
      console.log(
        Personnages[0] +
          " a infligé 15 points de dégats a Jason mais s'est fait tué."
      );
      morts.push(" " + Personnages.shift(0, 1));
    } else if (a >= 2) {
      Jason -= 10;
      console.log(
        Personnages[0] + " a esquivé et a infligé 10 points de dégats à Jason."
      );
    }
  }
  if (Personnages[0] == null && Jason >= 0) {
    console.log("Jason a tué tous les survivants.");
  } else if (Jason <= 0 && Personnages[0] != null) {
    console.log("Les survivants ont gagné");
    console.log("Mais RIP à" + morts + ".");
  } else if (Jason <= 0 && Personnages[0] == null) {
    console.log("Tout le monde est mort");
  }
}

Tueur();