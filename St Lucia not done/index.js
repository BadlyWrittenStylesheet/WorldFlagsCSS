const whiteTriangle = document.getElementById("white");
const unit = getComputedStyle(root).getPropertyValue("--unit");

const whiteBottomBorder = parseFloat(unit) * Math.sqrt(55);

whiteTriangle.style.setProperty("--border-bottom", `${whiteBottomBorder}px solid`);
