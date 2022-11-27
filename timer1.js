// take only meaningful arguments, starting from the 2nd index of console input
const seconds = process.argv.slice(2);

// take an array of input values and output system sound accordingly
const timer = array => {
  // iterate through every element of array
  array.forEach(second => {
    // if array element is a number (even in string format), and is not negative
    if (!isNaN(second) && second > 0) {
      // set timeout using the arguments as timer for each system sound
      setTimeout(() => {
        process.stdout.write('\x07');
      }, second * 1000);
    }
  });
};

// function call
timer(seconds);