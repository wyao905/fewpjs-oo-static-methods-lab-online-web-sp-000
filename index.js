class Formatter {
  //add static methods here
  static capitalize(str) {
    let arr = str.split("")
    let a = arr.splice(0,1)
    let cap = a[0].toUpperCase()
    arr.splice(0, 0, cap)
    return arr.join("")
  }
  
  static sanitize(str) {
    let array = str.split("")
    for(let i in array) {
      if(array[i].search(/[^a-z\d\s'-]/i) !== -1) {
        array[i] = ""
      }
    }
    return array.join("")
  }
  
  static titleize(str) {
    let array = this.capitalize(str).split(" ")
    for(let i = 1; i < array.length; i++) {
      if(array[i] !== "the" && array[i] !== "a" &&array[i] !== "an" &&array[i] !== "but" &&array[i] !== "of" &&array[i] !== "and" &&array[i] !== "for" &&array[i] !== "at" &&array[i] !== "by" &&array[i] !== "from") {
        array[i] = this.capitalize(array[i])
      }
    }
    return array.join(" ")
  }
}