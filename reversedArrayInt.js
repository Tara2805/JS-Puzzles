//8 kyu Convert number to reversed array of digits

function digitize(n) {
    return String(n).split('').reverse().map(Number);
  }

  console.log(digitize(56877538))