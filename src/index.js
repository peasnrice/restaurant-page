import "./styles-reset.css";
import "./styles.css";

console.log("we are loaded.");
document.addEventListener("DOMContentLoaded", () => {
  // Define the content dictionary for the homepage
  const contentDictionary = [
    {
      title: "Welcome to Avocado Everything!",
      text: [
        "Dive into a world where avocados reign supreme! At Avocado Everything, we're obsessed with turning the green gold into culinary masterpieces.",
        "Are you ready to avo good time?",
      ],
    },
    {
      title: "Try Our Smash Hit: The Avo-Bomb!",
      text: [
        "Exploding with flavor, the Avo-Bomb is stuffed with cheese, wrapped in bacon, and drizzled with our secret avocado sauce.",
        "It's the blast your taste buds have been waiting for!",
      ],
    },
    {
      title: "Find Us at the Heart of Guac City",
      text: [
        "123 Avocado Avenue, Pitville, CA 90210",
        "Open daily from 10am to 10pm. Don't miss our happy hour from 4pm to 6pm!",
      ],
    },
  ];

  // Define the menu section content with 5 items and pricing
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

  // Define the about section content
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

  // Select the content and hero divs
  const contentDiv = document.getElementById("content");

  // Function to create and append content sections
  function appendSections(sections) {
    contentDiv.innerHTML = "";
    const heroDiv = document.createElement("div");
    heroDiv.setAttribute("id", "hero");
    contentDiv.appendChild(heroDiv);

    sections.forEach((section) => {
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
  }

  appendSections(contentDictionary);

  // Append the homepage, menu, and about sections
  nav.addEventListener("click", (e) => {
    let target = e.target;
    if (target.id === "home") {
      appendSections(contentDictionary);
    }
    if (target.id === "menu") {
      appendSections(menuDictionary);
    }
    if (target.id === "about") {
      appendSections(aboutDictionary);
    }
  });
});
