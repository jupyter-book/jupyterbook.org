// A few semi-random categories. The widget just looks for the words anywhere in the cards HTML.
const CATEGORIES = [
  { label: "Education", words: ["course", "textbook", "student"] },
  { label: "Science", words: ["physics", "mechanics", "molecular"] },
  { label: "Data", words: ["analytics", "numpy", "probability"] },
];

function render({ el }) {
  let active = null;

  // Select the cards so we can do stuff with them later
  const cards = [...document.querySelectorAll(".myst-card")].map((card) => ({
    el: card,
    text: card.textContent.toLowerCase(),
  }));

  // Create the buttons for clicking
  function addBtn(label, onClick) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = "gallery-filter-btn";
    btn.addEventListener("click", onClick);
    el.appendChild(btn);
    return btn;
  }

  const allBtn = addBtn("All", () => { active = null; update(); });
  const catBtns = CATEGORIES.map((cat) => ({
    btn: addBtn(cat.label, () => { active = cat; update(); }),
    cat,
  }));

  // Find the active category and filter the cards using its words
  function update() {
    allBtn.classList.toggle("active", !active);
    catBtns.forEach((c) => c.btn.classList.toggle("active", c.cat === active));
    cards.forEach(({ el, text }) => {
      el.style.display = !active || active.words.some((w) => text.includes(w)) ? "" : "none";
    });
  }
  update();
}

export default { render };
