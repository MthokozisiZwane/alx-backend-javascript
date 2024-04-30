/**
 * Reads input from the command line and interacts with the user.
 */
function userInteraction() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');

  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    if (name) {
      console.log(`Your name is: ${name}`);
    } else {
      console.log('Your name is: <undefined>');
    }
    process.stdout.write('Welcome to Holberton School, what is your name?\n');
  });

  process.stdin.on('end', () => {
    console.log('\nThis important software is now closing\n');
  });
}

userInteraction();
