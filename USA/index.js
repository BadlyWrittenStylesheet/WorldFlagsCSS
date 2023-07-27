const starContainer = document.getElementById("star-container");
const numberOfRows = 9;
const starsPerRow = [6, 5, 6, 5, 6, 5, 6, 5, 6];

function createStars(rows, starsPerRow) {
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.className = `star-row-${i % 2 === 0 ? 6 : 5}`;

    for (let j = 0; j < starsPerRow[i]; j++) {
      const star = document.createElement("div");
      star.className = "star";
      row.appendChild(star);
    }

    starContainer.appendChild(row);
  }
}

createStars(numberOfRows, starsPerRow);


const rootVars = getComputedStyle(document.documentElement);
const unit = parseInt(rootVars.getPropertyValue('--unit'));
const starWidth = unit * 0.316;
const container6Width = unit * 7.6;
const container5Width = (container6Width - starWidth * 6) / 5 * 4 + starWidth * 5;

const starRow5 = document.getElementsByClassName('star-row-5');

// for (let i = 0; i < starRow5.length; i++) {
//   starRow5[i].style.width = `${container5Width}px`;
// }

console.log(starRow5, container5Width, container6Width)