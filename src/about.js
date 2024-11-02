// about.js
export function createAboutContent() {
  const heroDiv = document.createElement("div");
  heroDiv.setAttribute("id", "hero");

  const aboutDictionary = [
    {
      title: "About Us",
      text: [
        "Founded in the heart of Pitville, Avocado Everything started as a dream to bring the love of avocados to everyone.",
        "Our mission is to create delicious, avocado-inspired dishes that delight and nourish our guests.",
        "Come visit us and see why we believe in the power of the mighty avocado!",
      ],
    },
  ];

  aboutDictionary.forEach((section) => {
    const infoBorder = document.createElement("div");
    infoBorder.classList.add("info-border");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const h2 = document.createElement("h2");
    h2.textContent = section.title;
    infoDiv.appendChild(h2);

    section.text.forEach((paragraphText) => {
      const p = document.createElement("p");
      p.textContent = paragraphText;
      infoDiv.appendChild(p);
    });

    infoBorder.appendChild(infoDiv);
    heroDiv.appendChild(infoBorder);
  });

  document.getElementById("content").appendChild(heroDiv);
}
