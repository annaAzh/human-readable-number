module.exports = function toReadable (number) {
  let num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let num2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let arr = number.toString().split('');
  
  
  if (number == 0) {
    return `zero`;
  } else if (number > 0 && number < 20) {
    return `${num[number - 1]}`;  
  } else if (number >= 20 && number < 100 && arr[1] == 0) {
    return `${num2[arr[0] - 2]}`; 
  } else if (number >= 20 && number < 100 && arr[1] != 0) {
    return `${num2[arr[0] - 2]} ${num[arr[1] - 1]}`; 
  } else if (number >= 100 && arr[1] == 0 && arr[2] == 0) {
    return `${num[arr[0] - 1]} hundred`; 
  } else if (number > 100 && arr[1] == 1) {
      return `${num[arr[0] - 1]} hundred ${num[+(arr[1] + arr[2]) - 1]}`; 
    } else if (arr[2] == 0) {
      return `${num[arr[0] - 1]} hundred ${num2[arr[1] - 2]}`; 
    } else if (arr[1] == 0  && arr[2] != 0) {
      return `${num[arr[0] - 1]} hundred ${num[arr[2] - 1]}`;
    } else {
      return `${num[arr[0] - 1]} hundred ${num2[arr[1] - 2]} ${num[arr[2] - 1]}`; 
    }
  }


