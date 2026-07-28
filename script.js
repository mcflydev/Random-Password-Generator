function generatePassword(quantidade){
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let charArr = characters.split("");
  const passwordArray = [];
  for(let i = 0; i < quantidade; i++){
    let generated = Math.floor(Math.random() * charArr.length);
    passwordArray.push(charArr[generated]);
  }
  return passwordArray.join('');
}

let password = generatePassword(8); //Insira a quantidade de caracteres de sua senha dentro do parenteses, se preferir. 
console.log(`Generated password: ${password}`);