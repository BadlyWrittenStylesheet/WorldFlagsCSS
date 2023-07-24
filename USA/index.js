const starContainer = document.getElementById("star-container");
const numberOfRows = 13;
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


