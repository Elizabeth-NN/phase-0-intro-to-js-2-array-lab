// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name); // Append the new cat name to the end of the array
  }
cats.destructivelyAppendCat("Ralph")
console.log(cats)

function destructivelyPrependCat(name) {
    cats.unshift(name); // Prepend the new cat name to the beginning of the array
  }
cats.destructivelyPrependCat("Bob")
console.log(cats)


function destructivelyRemoveLastCat(){
    cats.pop()
}
cats.destructivelyRemoveLastCat()
console.log(cats)


function destructivelyRemoveFirstCat(){
    cats.shift()
}
cats.destructivelyRemoveFirstCat()
console.log(cats)

function appendCat(name){
    return [...cats, name]
}
cats.appendCat("Broom")
console.log(cats)

function prependCat(name) {
    return [name, ...cats]; // Return a new array with the new cat name prepended
  }
  cats.prependCat("Arnold")
  console.log(cats)


function removeLastCat() {
    return cats.slice(0, -1); // Return a new array without the last element
 }
cats.removeLastCat()
console.log(cats)


 function removeFirstCat() {
    return cats.slice(1); // Return a new array without the first element
  }
  cats.RemoveFirstCat()
  console.log(cats)
