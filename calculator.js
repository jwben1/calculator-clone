let calculation = localStorage.getItem("calculate") || "";

      displayCalculation();

      function updateCalculation(parameter) {
        calculation += parameter;

        localStorage.setItem("calculate", calculation);
        displayCalculation();
      }

      function displayCalculation() {
        document.querySelector(".js-result").innerText = calculation;
      }