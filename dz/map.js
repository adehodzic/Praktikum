function havle(halved) {
    num = halved.map(n => n / 2)
     return num;
  }
  
  function size(lenghts) {
  let sizeOf = lenghts.map(item => item.length);
  return sizeOf; 
  }
  
  function getWholeName(human) {
  function Name(item) {
    var fullname = [item.lastname,item.firstname].join(" ");
    return fullname;
  }
  return human.map(Name);
  }
  
  function Vletter(item){
  const map = Array.prototype.map
  const newItem = map.call(item, eachLetter => {
      return `${eachLetter}v`;
  })
  return newItem;
  }
  
  function insect(myInstects){
  const InsectByLikes = myInstects.map(item => {
    const container = {};
    container[item.name] = item.likes;
    container.legs = item.name.length * 5;
    return container;
  })
    return InsectByLikes;
  }

  function triple(tripled) {
    numb= tripled.map(n => n * 3)
     return numb;
  }
  
  module.exports = {triple, havle, size, getWholeName, Vletter, insect}