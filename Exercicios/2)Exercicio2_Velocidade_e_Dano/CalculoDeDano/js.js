let pers01nome = prompt("Digite o nome do personagem que vai atacar!");
let pers01ataq = Number(
  prompt("Digite o poder de ataque do personagem que vai atacar!")
);
let pers02nome = prompt("Digite o nome do personagem que vai ser atacado!");
let pers02vida = Number(
  prompt(
    "Digite a quantidade de pontos de vida do personagem que vai ser atacado!"
  )
);
let pers02defe = Number(
  prompt("Digite o poder de defesa do personagem que vai ser atacado!")
);
let pers02escu = prompt(
  "Digite se o pesonagem que vai ser atacado tem escudo! S / N"
);

if (pers01ataq > pers02defe && (pers02escu == "N" || pers02escu == "n")) {
  danoCausado = pers01ataq - pers02defe;
  pers02vida -= danoCausado;
  alert(pers01nome + " causou " + danoCausado + " de dano a " + pers02nome);
} else if (
  pers01ataq > pers02defe &&
  (pers02escu == "S" || pers02escu == "n")
) {
  danoCausado = (pers01ataq - pers02defe) / 2;
  pers02vida -= danoCausado;
  alert(pers01nome + " causou " + danoCausado + " de dano a " + pers02nome);
} else if (pers01ataq <= pers02defe) {
  alert(pers01nome + " não conseguiu causar dano a " + pers02nome);
}

alert(pers02nome + " tem " + pers02vida + " de vida");
