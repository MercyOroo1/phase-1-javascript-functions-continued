// code your solution here
function saturdayFun ( activity = "roller-skate") {
    let result =`This Saturday, I want to ${activity}!` 
    return result
   
}

function mondayWork (activity2 = "go to the office") {
    let result2 = `This Monday, I will ${activity2}.`
    return result2 
}
// function wrapAdjective (adj = "*") {
//     let innerFunction = function (description = 'special') {
//         return `You are ${description} !`
//         }
// return innerFunction
// }
function wrapAdjective (highlight = "*") {
    return function ( adjective = "special") {
      return `You are ${highlight}${adjective}${highlight}!`
    };
  }
  