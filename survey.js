const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.question('What is your name? ', (name) => {
    console.log(`Hi ${name} I hope you are doing well. May I ask you a couple questions? `);
    rl.question('What is an activity you like doing? ', (activity) => {
      rl.question('What do you listen to while doing that? ', (music) => {
        rl.question('What kind of pets you like? ', (kindOfPets) =>{
          rl.close();
          console.log(`Thank you ${name} for your valuable feedback. ${name} like ${activity} and while ${activity}, ${name} likes to listen ${music}. ${name} likes ${kindOfPets}`);
        
            
        });
      });
    });
  });
});