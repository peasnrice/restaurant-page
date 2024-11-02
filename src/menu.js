// menu.js
export function createMenuContent() {
  const heroDiv = document.createElement("div");
  heroDiv.setAttribute("id", "hero");

  const menuDictionary = [
    {
      title: "Our Menu Highlights",
      text: [
        "Avocado Toast Supreme - Sourdough topped with smashed avocado, cherry tomatoes, and a drizzle of balsamic glaze. - $12.99",
        "Guac Burger - A plant-based patty with guacamole, lettuce, and our house-made avocado aioli. - $14.99",
        "Avocado Smoothie - A creamy blend of avocado, banana, and a hint of lime. - $6.99",
        "Avo Tacos - Soft corn tortillas filled with grilled avocado, salsa, and cilantro. - $10.99",
        "Avocado Brownie - A rich, fudgy dessert made with real avocado for a unique twist. - $4.99",
      ],
    },
  ];

  menuDictionary.forEach((section) => {
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
