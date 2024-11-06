// Write a function letterGrade(grade) that takes a number, `grade`, and
// returns a letter based on the grade:
// 100-93 => A
// 92-82 => B
// 81-70 => C
// 69-0 => F

function letterGrade(grade){
 
  if(  grade >= 93){
    return "A"
  }else if ( grade >= 82){
    return "B"
  }else if ( grade >= 70){
    return "C"
  }else {
    return "F"
  
}
}

console.log(letterGrade(95));
console.log(letterGrade(83));
console.log(letterGrade(78));
console.log(letterGrade(64));