window.onload = function() {
  let happyButton = document.getElementById('happy');
  let sadButton = document.getElementById('sad');
  let angryButton = document.getElementById('angry');
  let confusedButton = document.getElementById('confused');
  let display = document.getElementById('face');
  let tableFlip = document.getElementById('table-flip');
  let counterTable = 0;
  let rollOver = document.getElementById('roll-over');
  let counter = 0;

  function setMood() {
    let mood = store.getState().mood;
    display.innerText = mood;
  }

  // let rollOverArr = '(°o°),(°o。),(。o。),(。o°),(°o°),(°o。),(。o。),(。o°)'.split(
  //   ','
  // );

  // let tableArr = '(╯ಠ_ಠ)╯︵ ┳━┳,(╯ಠ‿ಠ)╯︵┻━┻,┳━┳ノ( OωOノ),(┛ಠДಠ)┛彡┻━┻'.split(
  //   ','
  // );
  let tableArr = '(┛ಠДಠ)┛彡┻━┻(ʘᗩʘ’),(ಠ ∩ಠ)┳━┳ノ( OωOノ)'.split(',');

  // setInterval(() => {
  //   rollOver.innerText = rollOverArr[counter];
  //   counter++;
  //   if (counter >= rollOverArr.length) counter = 0;
  // }, 100);
  setInterval(() => {
    tableFlip.innerText = tableArr[counterTable];
    counterTable++;
    if (counterTable >= tableArr.length) counterTable = 0;
  }, 1000);

  let unsubscribe = store.subscribe(setMood);

  happyButton.addEventListener('click', () => {
    store.dispatch({ type: 'happy' });
    // setMood();
  });
  sadButton.addEventListener('click', () => {
    store.dispatch({ type: 'sad' });
    // setMood();
  });
  angryButton.addEventListener('click', () => {
    store.dispatch({ type: 'angry' });
    // setMood();
  });
  confusedButton.addEventListener('click', () => {
    store.dispatch({ type: 'confused' });
    // setMood();
  });
};
