window.onload = function() {
  let happyButton = document.getElementById('happy');
  let sadButton = document.getElementById('sad');
  let angryButton = document.getElementById('angry');
  let confusedButton = document.getElementById('confused');
  let display = document.getElementById('face');

  // Extra animation variables, not related to exercise
  let tableFlip = document.getElementById('table-flip');
  let counterTable = 0;
  let dance = document.getElementById('dance');
  let counter = 0;

  let tableArr = '(╯ಠ‿ಠ)╯︵┻━┻,┬─┬ノ(ಠ_ಠノ)'.split(',');
  let danceArr = '└|ﾟεﾟ|┐,┌|ﾟεﾟ|┘'.split(',');

  setInterval(() => {
    dance.innerText = danceArr[counter];
    counter++;
    if (counter >= danceArr.length) counter = 0;
  }, 500);

  setInterval(() => {
    tableFlip.innerText = tableArr[counterTable];
    counterTable++;
    if (counterTable >= tableArr.length) counterTable = 0;
  }, 1000);
  // End of animations (not related to exercise)

  // updates the store state
  function setMood() {
    let mood = store.getState().mood;
    display.innerText = mood;
  }

  // store.subscribe runs setMood AFTER every dispatch
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
