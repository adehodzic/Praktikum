function sales(fruits) {
    const sale = ((total, num) => total - num)
    return fruits.reduce(sale);
  }
  
  function dollars(array){
      const reducer = ((total, amount) => total + amount);
      return array.reduce(reducer); 
  }
  
  
  function removeTwins(twins){
    let uniqueTwins = twins.reduce(function (accumulator, currentValue) {
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []
    );
    return uniqueTwins; 
  }
  
  function division(array) {
      const reducer = (sum, val) => sum / val;
      return array.reduce(reducer);
  }
  
  function merge(arr){
      const arrays = ((accumulator, item) =>accumulator.concat(item));
      return arr.reduce(arrays)
  }
  
  
  
  module.exports = {sales,dollars, removeTwins, division,merge}