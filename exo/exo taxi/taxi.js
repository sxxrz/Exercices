const Musiques = [
  "Anissa Wejdene",
  "Kaaris Zoo",
  "Dara interlude",
  "Dara doux comme toi",
  "Booba scareface",
];

function Taxi() {
  let FeuxRouges = 30;
  let seerz = 10;

  function Radio(x) {
    a = Math.floor(Math.random() * x);
  }

  while (FeuxRouges != 0 && seerz != 0) {
    Radio(Musiques.length);
    console.log("Radio : " + Musiques[a] + ".");

    if (a === 0) {
      seerz -= 1;
      console.log("Tu perds 1 vie, il t'en reste " + seerz + ".");
    } else {
      FeuxRouges -= 1;
      console.log(
        "Il te reste " + FeuxRouges + " feux rouges avant d'arriver !"
      );
    }
  }
  if (seerz === 0) {
    console.log("Explosion");
  }
  if (FeuxRouges === 0) {
    let Changements = 10 - seerz;
    console.log("Tu es bien arrivé !");
    console.log("Il t'a fallu " + Changements + " changements de taxi.");
  }
}

Taxi();