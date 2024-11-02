// home.js
export function createHomeContent() {
  const heroDiv = document.createElement("div");
  heroDiv.setAttribute("id", "hero");

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

  contentDictionary.forEach((section) => {
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
