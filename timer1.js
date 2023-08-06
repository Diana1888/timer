const args = process.argv;

const makeBeep = (count) => {
  //return everything was typed on the command line, exept path to node.
  count = args.slice(2);

  //If no input provided, end function
  if (typeof count === "undefined") {
    return;
  }

  //iterate over every element in array (input)
  for (const element of count) {
    // Ignore negative numbers and process only with Number data type.
    if (element > 0 && typeof Number(element) === "number") {
    //convert number into seconds
      let seconds = element * 1000;
      setTimeout(() => {
      //make a beep after seconds passed
        process.stdout.write('\x07');
      }, seconds);
    }
  }
};
makeBeep();
