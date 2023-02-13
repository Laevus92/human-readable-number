module.exports = function toReadable (number) {
    if (number === 0) return 'zero'; // Handle special case for 0
  
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    number = number.toString();
    let result = ''
    
    if (number.length === 1) {
        result = ones[+number]
    } else if (number.length === 2 && +number < 20) {
        result = teens[+number-10]
    } else if (number.length === 2 && +number >= 20) {
        result = `${tens[Math.trunc(+number/10)]} ${ones[+number - (Math.trunc(+number/10)*10)]}`
    } else if (number.length === 3) {
        let hundreds = Math.trunc(+number/100);
        if (number - hundreds * 100 < 10) {
            result = `${ones[hundreds]} hundred ${ones[+number - hundreds * 100]}`
        } else if (number - hundreds * 100 >= 10 && +number - hundreds * 100 < 20) {
            result = `${ones[hundreds]} hundred ${teens[(+number - hundreds * 100) - 10]}`
        } else if (+number - hundreds * 100 >= 20) {
            result = `${ones[hundreds]} hundred ${tens[Math.floor((+number - hundreds * 100)/10)]} ${ones[+number - (hundreds * 100) - (Math.floor((+number - hundreds * 100)/10)*10)]}`
        }
    }
  
    return result.trim()
  }