(function() {
  const buttons = document.querySelectorAll('.btn');
  const screen = document.querySelector('.screen');
  const clearButton = document.querySelector('.btn-clear');
  const equalButton = document.querySelector('#equals');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const value = this.dataset.num;
          if (value !== undefined) {
              screen.value += value;
          }
      });
  });

  equalButton.addEventListener('click', function() {
      if (screen.value === '') {
          alert('Please enter a value!');
      } else {
          try {
              const result = eval(screen.value);
              screen.value = result;
          } catch {
              alert('Invalid input!');
              screen.value = '';
          }
      }
  });

  clearButton.addEventListener('click', function() {
      screen.value = '';
  });
})();