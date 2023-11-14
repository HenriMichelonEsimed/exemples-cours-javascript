console.log("Hello JS !")
document.querySelector("#messages").innerHTML = "Hello JS !"
$("#messages").innerHTML = "Hello ES !!"

// commentaire mono ligne
/*
    commentaire
    multi lignes
 */
// mode strict (ex: déclaration obligatoire des variables)
"use strict"

// function-scoped
var var1

// function-scoped (notez l'écrasement de variable!)
var var1 = "Valeur d'initialisation"

// block-scoped (plus strict)
let var3

// INTERDIT var3 existe déjà
//let var3 = 123

// INTERDIT (const doivent être initialisées)
//const var5

const var6 = 123.45
// INTERDIT
//var6 = 78.9

/* opérateurs :
+, -, *, /, %, ++, --
>, <, >=, <=, ==, ===, !=
&&, ||, !
&, |, ^, ~, <<, >>, >>>
=, +=, -=, *=, /=
 */
console.log(123 == "123")
console.log(123 === "123")

// concatenation de chaînes
console.log("Hello" + "World !")

// chaînes interpolables
const nom = "jean"
const age = 20
console.log(`La personne nommée ${nom} a ${age} ans`)

// chaines
console.log(nom.startsWith("ean", 1))
console.log(nom.endsWith("w"))
console.log(nom.includes("ea"))
console.log(nom.toUpperCase())

// nombres
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NaN)
console.log(parseInt("123"))
console.log(parseFloat("123.45"))
console.log(var6.toString())

// booléens
console.log(true)

// dates
let d1 = new Date()
console.log(d1)
console.log(d1.getTimezoneOffset())
console.log(d1.toISOString())
console.log(d1.toLocaleString())
console.log(d1.toLocaleDateString());
console.log(d1.getFullYear())
d1 = new Date("2018-12-31 03:39")
console.log(d1)
d1 = new Date(2018, 12, 31, 3, 39)
console.log(d1)

// expression rationnelles
let regex1 = new RegExp("^H", "i")
console.log(regex1.test("Jean"))
regex1 = /^H/i
console.log(regex1.test("hello"))
regex1 = /\w*/g
console.log(regex1.exec("hello world")[0])

// opérateur conditionel
console.log(var6 > 100 ? "Oui" : "Non")

// opérateur typeof
console.log(typeof var6)
console.log(typeof var1 === "string")

// if
if(var6 > 0) {
    console.log("var6 est positif")
} else if (var6 < 0) {
    console.log("var6 est négatif")
} else {
    console.log("var6 est autre chose")
}

// switch
let grade = "A"
switch(grade) {
    case "A": {
        console.log("Excellent")
        break
    }
    case "B": {
        console.log("Good")
        break
    }
    case "C": {
        console.log("Fair")
        break
    }
    case "D": {
        console.log("Poor")
        break
    }
    default: {
        console.log("Invalid choice")
        break
    }
}

// for
let num = 5
let factorial = 1
for(let i = num ; i >= 1; i-- ) {
    factorial *= i
}
console.log(`The factorial is ${factorial}`)

// for..in (each key)
// attention parcours des clés et non des valeurs !!
// < ES11 : ordre non garanti et peut différer suivant les navigateurs
// >= ES11 : ordre de parcours standardisé.
let tab1 = [1, 2, 3]
tab1.chaine = "Hello"
for (let cle in tab1) {
    console.log(tab1[cle])
}

// for..of (each value)
for (let val of tab1) {
    console.log(val)
}

// while
num = 5
factorial = 1
while(num >= 1) {
    factorial = factorial * num
    num--
}
console.log(`The factorial is ${factorial}`)

// do..while
let n = 10
do {
    console.log(n)
    n--
}
while(n>=0)

// break, continue : comme les autres langages

// tableaux
let tab2 = [ 6, 4, 5 ]
for (let v of tab2) {
    console.log(v)
}
for (let v of tab2.sort()) {
    console.log(v)
}
tab2.push(18)
for (let v of tab2) {
    console.log(v)
}
tab2.splice(2, 1)
for (let v of tab2) {
    console.log(v)
}

// dictionnaires
let dict1 = { "cle1": 4, "cle2": 5, "cle3" : 6 }
for (let cle in dict1) {
    console.log("dictionnaire[" + cle + "]=" + dict1[cle])
}

// Set (>= ES 6)
let set1 = new Set()
set1.add(4).add(5).add(6)
console.log(set1.has(5))
for (let v of set1) {
    console.log(v)
}

// Map (>= ES 6)
let map1 = new Map()
map1.set("cle1", 4)
map1.set("cle2", 5)
map1.set("cle3", 6)
console.log(map1.get("cle2"))
console.log(map1.has("cle2"))
for (let [k, v] of map1) {
    console.log(`map1[${k}]=${v}`)
}

// fonctions
function f1() {
    console.log("dans la fonction")
}
f1()

// retour de fonction
function f2() {
    return "Hello World!"
}
console.log(f2())

// paramètres de fonction
function f3(a, b) {
    let sum = a + b
    console.log(`sum=${sum}`)
}
f3(3, 5)

// valeurs par défaut des paramètres
function f4(a, b = 10) {
    let sum = a + b
    console.log(`sum=${sum}`)
}
f4(3)

// nombre de paramètres variables
function f5(a, ...valeurs) {
    let sum = a
    for (let v of valeurs) {
        sum += v
    }
    console.log(`sum=${sum}`)
}
f5(2, 3, 4, 5, 6)

// collections et fonctions en paramètres
function afficher(nom, collection) {
    for (let index in collection) {
        console.log(nom + "[" + index + "]=" + collection[index])
    }
}

function exemple_tableau(fonction_affiche) {
    fonction_affiche("tab", [ 4, 5, 6 ])
}

function exemple_dictionnaire(fonction_affiche) {
    fonction_affiche("dict", { "cle1": 4, "cle2": 5, "cle3" : 6 })
}

exemple_tableau(afficher)
exemple_dictionnaire(afficher)

// fonctions anonymes
let f6 = function(nom) { return `Hello ${nom}` }
console.log(f6("Jean"))
function f7(fx) {
    console.log("fx a dit : " + fx("f7"))
}
f7(f6)
f7(function (nom) { return `Heeelllloooo ${nom}`})

// fonctions lambda (ou arrow)
let f8 = (nom, age) => {
    if (age < 18) {
        return `${nom} n'est pas adulte`
    } else {
        return `${nom} est adulte`
    }
}
console.log(f8("Jean", 12))

let f9 = (nom) => `Hello Lambda ${nom}`
console.log(f9("Jean"))
f7(f9)

let f10 = nom => `Hello Lambda2 ${nom}`
f7(f10)

let f11 = () => `Hello Lambda3`
f7(f11)

let f11b = _ => `Hello Lambda3b`
f7(f11b)

tab2.forEach(v => {
    console.log(`valeur=${v}`)
})
console.log(tab2.find( v => v > 4))
console.log(tab2.findIndex( v => v > 4))

set1.forEach(v => {
    console.log(`valeur=${v}`)
})
map1.forEach( (k,v) => {
    console.log(`map1[${k}]=${v}`)
})

// fonctions qui retournent des fonctions
function afficher_factory(message) {
    return function(nom, collection) {
        for (let index in collection) {
            console.log(message + ": " + nom + "[" + index + "]=" + collection[index])
        }
    }
}

let affiche_exemple = afficher_factory("exemple");
exemple_tableau(affiche_exemple);
exemple_dictionnaire(affiche_exemple);
exemple_dictionnaire(afficher_factory("autre exemple"));

// closures
function f12() {
    let locale2 = "locale2"
    return function() {
        // CLOSURE == FERMETURE ==
        // ENFERMEMENT dans une boite de :
        // fonction + variables visibles au moment de la déclaration
        console.log(locale2)
    }
}
let f13 = f12()
f13()
f12()()

function f14() {
    let a = "a"
    let f14interne = function() {
        console.log(`a=${a}`)
        a = "c"
    }
    a = "b"
    return f14interne
}

let f15_interne = f14()
f15_interne() // les closure enferment les références des
// variables, pas les copies de leurs valeurs
// == a est une variable de classe de interne()
f14()()

function makeFunctions() {
    let tab = []
    for (let i = 0; i < 5 ; i++) {
        tab[i] = function (j) {
            console.log(`i: ${i + j}`)
        }
    }
    return tab
}
let functions = makeFunctions()
functions[2](10) // quelle valeur affichée ??. Remplacer let i -> var i, quelle valeur ?

// objets avec notation JSON
let obj1 = {
    "cle1": 4,
    "cle2": 5,
    cle3: 6
} // JSON == JavaScript Object Notation == OO

let personne1 = {
    nom: "Dushmoll",
    prenom: "Jean",
    nomComplet: function (id) {
        return this.prenom + " " + this.nom
    }
}
console.log(personne1.nom)
console.log(personne1.nomComplet())

// Classe avec prototype  (< ES 6)
let personne = function (nom, prenom) {
    this.nom = nom
    this.prenom = prenom
}
personne.prototype.nomComplet = function (id) {
    return this.prenom + " " + this.nom
}
let personne2 = new personne("Serre", "Pierre")
console.log(personne2.nom)
console.log(personne2.nomComplet())

// objets avec notation JSON (>= ES 6)
let personne3 = {
    nom: "Dushmoll",
    prenom: "Jean",
    nomComplet(id) {
        return this.prenom + " " + this.nom
    }
}
console.log(personne3.nom);
console.log(personne3.nomComplet())

// classes (>= ES 6)
class Polygon1 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let p1 = new Polygon1(10,12)
console.log(p1)
console.log(p1.width)

class Polygon3 {
    constructor(height, width) {
        this.h = height;
        this.w = width;
    }
    desc() {
        console.log(`The height of the polygon: ${this.h}`)
        console.log(`The width of the polygon: ${this.w}`)
    }
}

let p2 = new Polygon3(10, 12)
p2.desc()

class Static1 {
    static disp() {
        console.log("Static Function called")
    }
}
Static1.disp()

console.log(p2 instanceof Polygon3)


// Héritage
class Shape {
    constructor(a) {
        this.Area = a
    }
    disp() {
        console.log("Area of the shape :  "+this.Area)
    }
}
class Triangle extends Shape {
    constructor(a, p) {
        super(a)
        this.perimeter = p
    }
}
class Circle extends Shape {
    disp() {
        console.log("Area of the circle:  "+this.Area)
        super.disp()
    }
}
let c1 = new Circle(223);
c1.disp()

// erreurs
let a = 100
let b = 0
try {
    if (b == 0 ) {
        throw("Divide by zero error.")
    } else {
        console.log(c = a / b)
    }
}
catch( e ) {
    console.log("Error: " + e )
}

// Localisation des dates
console.log(new Date("2020-02-02T00:00:00").toISOString())
console.log(new Date("2020-02-02T00:00:00").toLocaleDateString())
console.log(new Date("2020-02-02T00:00:00").toLocaleDateString("sv"))

// >= ES11 (2020)
//https://www.codeheroes.fr/2020/04/06/es2020-quoi-de-neuf-javascript/

// modules (voir hello.js)
// nécessite <script type="module" ...
import * as hello from "./hello.js"
console.log(hello.sayHello("Jean"))
// Attention les fonctions doivent être déclarées comme ceci
// pour être accessible depuis le HTML (évènements) :
window.mafonction = function() {
    //...
}

// Optional chaining
// Comme pour Kotlin et Swift : voir exemple lien ci-dessus

// Nullish coalescing Operator
const area1 = c1.Area || 0
const area2 = c1.Area2 || 0
console.log(area1)
console.log(area2)

