/**
 *
 * @param {object} persona Persona da cui generare la card
 */

function generateCard(persona) {
  let cardContent = "";
  const card = document.createElement("div");
  card.classList.add("card-custom");
  for (let attribute in persona) {
    cardContent += `
      <span class="attribute text-uppercase d-block">${attribute}</span>
      <span class="value d-block">${persona[attribute]}</span>
    `;
  }
  card.innerHTML += cardContent;
  cardsContainer.append(card);
}
