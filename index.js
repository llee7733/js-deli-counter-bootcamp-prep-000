var katzDeliLine = [];
<<<<<<< HEAD

function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length+1
    katzDeliLine.push(name)
return "Welcome, " + name +". You are number "+ position +" in line."
}

function nowServing (deliLine){
  var name;

if(deliLine.length === 0){
  return "There is nobody waiting to be served!"
}

name = deliLine.shift()
  return "Currently serving "+ name + "."
}

function currentLine (katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
}

var myString = `The line is currently: 1. ${katzDeliLine[0]}`
for(let i = 1; i<katzDeliLine.length;i++){
  myString += `, ${i+1}. ${katzDeliLine[i]}`
}
return myString
}
=======
function takeANumber(katzDeliLine, name) {
  katzDeli.push('${name}');
  return ('Welcome,. ${name}. You are number ${katzDeliLine.length} in line.');
}

function nowServing(katzDeli) {
  let i = 0;
    while (i < katzDeli.length) {
      i++;
}
if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!";
}
else
  return (`Currently serving ${katzDeli.shift()}.`);
}

var line = [];
function currentLine(katzDeli) {
  let i = 0;
    while (i < katzDeli.length) {
      line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
}
if (katzDeli.length === 0) {
  return "The line is currently empty.";
} 
else
  return(`The line is currently:` + line);
}
>>>>>>> 88baa164efb56f0f19ec3b806b341f88c94459ca
