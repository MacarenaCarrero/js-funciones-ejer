function addNumbers(numberA, numberB) {
  const result = numberA + numberB;
  return result;
}

function dividerNumber(numberA, numberB) {
  const result = numberA / numberB;
  return result;
}

function multiplyNumbers(numberA, numberB) {
  const result = numberA * numberB;
  return result;
}

function restNumbers(numberA, numberB) {
  const result = numberA % numberB;
  return result;
}
function lessNumbers(numberA, numberB) {
  const result = numberA - numberB;
  return result;
}

//uno
function camilaJob(calls, hours) {
  const callsCamila = dividerNumber(calls, hours);
  console.log("El total de llamadas que atiende es " + callsCamila);
}

camilaJob(120, 4);

//dos

function begoPencil(box, pencils) {
  const pencilsBego = multiplyNumbers(box, pencils);
  console.log("El total de lápices es " + pencilsBego);
}
begoPencil(5, 12);

//tres
function camilaCandy(candy, divider) {
  const getCamilaCandy = restNumbers(candy, divider);
  console.log(
    "A Camila le sobrarán " + getCamilaCandy + " después del reparto."
  );
}

camilaCandy(25, 4);

//cuatro

//cinco

function appleMacarena(manzanas, cajas) {
  const boxApple = dividerNumber(manzanas, cajas);
  console.log("Cada caja tendrá " + boxApple + " manzanas.");
}
appleMacarena(240, 8);

//seis

function screwsBego(screws, littleBox) {
  const boxScrews = restNumbers(screws, littleBox);
  console.log("Quedan fuera " + boxScrews + " tornillos.");
}
screwsBego(57, 10);
//siete

function moneyAbby(euros, cuantity) {
  const cuantityMission = multiplyNumbers(euros, cuantity);

  console.log("Cobrará un toral de " + cuantityMission + " euros al día.");
}
moneyAbby(35, 5);
//ocho

function cookiesSabrina(cuantity, bags) {
  const cookiesRest = restNumbers(cuantity, bags);
  console.log("Sobrarán " + cookiesRest + " galletas");
}
cookiesSabrina(92, 8);
//nueve

function booksCamila(books, newBooks) {
  const addBooks = addNumbers(books, newBooks);

  console.log("Camila ahora tiene " + addBooks + " libros.");
}
booksCamila(45, 23);
//diez

function oldCoins(coins, showcase) {
  const coinRest = restNumbers(coins, showcase);
  console.log("No cabrán en la vitrina " + coinRest + " monedas.");
}
oldCoins(123, 5);
//once

function calculateKm(liters, ability) {
  const kilometers = dividerNumber(ability * 100, liters);
  console.log("Bego recorrerá con 42 litros, " + kilometers + " kilómetros.");
}
calculateKm(7, 42);

//doce
function calculateChickens(chickenCoop, chicken) {
  const calculateAll = multiplyNumbers(chickenCoop, chicken);
  console.log("En total hay " + calculateAll + " gallinas.");
}
calculateChickens(6, 25);
//trece

//catorce

function begoRun(km, kilometers) {
  const addKm = addNumbers(km, kilometers);

  console.log("Bego corrió en total " + addKm + " kilómetros.");
}
begoRun(3, 4);
//quince

function cuantityPapers(papers, group) {
  const groupPapers = restNumbers(papers, group);

  console.log("Quedan fuera " + groupPapers + " hojas.");
}
cuantityPapers(100, 6);
//dieciseis

function distributeMoney(money, accounts) {
  const divideMoney = dividerNumber(money, accounts);
  console.log("Cada cuenta tendrá " + distributeMoney + " euros. De nada.");
}
distributeMoney(30000, 4);

//diecisiete

function zombies(killed) {
  const cuantityKilled = dividerNumber(killed);
  console.log("Al día mató " + cuantityKilled + " zombies.");
}
zombies(5201);

//dieciocho

function marblesCuantity(package, marbles) {
  const addMarbles = multiplyNumbers(package, marbles);
  console.log("Bego tiene en total " + addMarbles + " canicas.");
}
marblesCuantity(3, 24);

//diecinueve

function coinsBrothers(coins, inputCamila) {
  const totallyCoins = lessNumbers(coins, inputCamila);
  console.log("El hermano de Camila ha aportado " + totallyCoins + " monedas.");
}
coinsBrothers(135, 78);

//veinte

function legoPiece(pieces, lot) {
  const totalPieces = restNumbers(pieces, lot);
  console.log("Quedarán " + totalPieces + " piezas sueltas.");
}
legoPiece(500, 80);

//veintiuno

function distribute(cookies, dogs) {
  const distributeCookies = dividerNumber(cookies, dogs);
  console.log("Cada perro tendrá " + distributeCookies + " galletas.");
}
distribute(72, 9);

//veintidos

function knives(cuantity, price) {
  const pricesTotally = multiplyNumbers(cuantity, price);
  console.log("Tendrá que pagar un total de " + pricesTotally + " euros.");
}
knives(5, 18);

//veintitres

function bagsCookies(cookies, bags) {
  const addCookies = dividerNumber(cookies, bags);
  console.log("Llenará un total de " + addCookies + " bolsas.");
}
bagsCookies(480, 40);

//veinticuatro
function kmDay(km, days) {
  const kilometersXday = dividerNumber(km, days);
  console.log("Recorrerá " + kilometersXday + " kilómetros por día.");
}
kmDay(1200, 4);

//veinticinco
function saving(month1, month2) {
  const totallySaving = addNumbers(month1, month2);
  console.log("Sabrian ha ahorrado en total " + totallySaving + " euros.");
}
saving(120, 85);

//veintiseis
function candyMaca(candy, distribution) {
  const distributionCandyMaca = restNumbers(candy, distribution);
  console.log("Sobrará " + distributionCandyMaca + " caramelo.");
}
candyMaca(73, 6);
//veintisiete

function record(morning, afternoon) {
  const recordAbby = addNumbers(morning, afternoon);
  console.log("En total registro un total de " + recordAbby + " casas.");
}
record(17, 8);

//veintiocho
function photosCuantity(photos, albums) {
  const photosTotally = restNumbers(photos, albums);
  console.log("Tendrá que dejar " + photosTotally + " fuera.");
}
photosCuantity(95, 12);

//veintinueve
function calculateDiscount(money, discount) {
  const totallyDiscount = lessNumbers(money, discount);
  console.log(
    "El producto tiene un precio final de " + calculateDiscount + " euros."
  );
}
calculateDiscount(120, 15);

//treinta

function flour(grams, portions) {
  const portionsFlour = restNumbers(grams, portions);
  console.log("Sobrará " + portionsFlour + " gramos de harina.");
}
flour(500, 24);
