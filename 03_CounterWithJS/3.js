document.addEventListener("DOMContentLoaded", function () {
  let count = 0;

  const countDisplay = document.getElementById("count-display");
  const countButton = document.getElementById("count-button");

  countButton.addEventListener("click", function () {
    count++;

    countDisplay.textContent = `You Clicked ${count} Times`;
  });
});
