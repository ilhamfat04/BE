function myAlert() {
  alert("Hai haiii");
}

// ==========================

function showPrompt() {
  const firstName = prompt("your first name");
  const lastName = prompt("your last name");

  myName(firstName, lastName);
}

function myName(firstName, lastName) {
  alert(firstName + " " + lastName);
}

// ==========================

function showPromptReturn() {
  const condition = prompt("Apakah hujan? (Y/N)");

  weather(condition);
}

function weather(condition) {
  if (condition == "Y") {
    return alert("Kamu harus bawa payung nihhh, awas sakit kena hujan");
  }

  return alert(
    "Hari cerah kok jadi ga usah bawa payung, tetap jaga kesehatan ya"
  );
}

// ==========================
const showLoveCalculator = () => {
  const firstPerson = prompt("First person name...");
  const secondPerson = prompt("Second person name...");

  //  ✅ should declare first
  const calculateLove = (firstPerson, secondPerson) => {
    const randomNumber = Math.ceil(Math.random() * 100);
    alert(
      firstPerson +
        " with " +
        secondPerson +
        " is " +
        randomNumber +
        "% matched!"
    );
  };

  // ✅ then call it here
  calculateLove(firstPerson, secondPerson);

  // ❌ arrow function and anonymous function is not hoisted
  //   const calculateLove = (firstPerson, secondPerson) => {
  //     const randomNumber = Math.ceil(Math.random() * 100);
  //     alert(
  //       firstPerson +
  //         " with " +
  //         secondPerson +
  //         " is " +
  //         randomNumber +
  //         "% matched!"
  //     );
  //   };
};

// ==========================

const showPromptRandom = function () {
  //  ✅ should declare first
    const calculateRandomNumber = function () {
      const randomNumber = Math.ceil(Math.random() * 100);
      alert("Your random number is: " + randomNumber);
    };

  // ✅ then call it here
  calculateRandomNumber();

  // ❌ same like arrow function, it's not hoisted
  //   const calculateRandomNumber = function () {
  //     const randomNumber = Math.ceil(Math.random() * 100);
  //     alert("Your random number is: " + randomNumber);
  //   };
};
