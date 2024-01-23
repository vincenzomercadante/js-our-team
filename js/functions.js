/**
 *
 * @param {object} persona Persona da cui generare la card
 */

function generateCard(persona) {
  // creo l'elemento colonna
  const col = document.createElement("div");
  col.classList.add("col-4");
  col.innerHTML += `
  <div class="custom-card">
    <img src="./img/${persona.image}" alt"image ${persona.name}">
    <h2 class="fs-3">${persona.name}</h2>
    <h3 class="fs-5">${persona.role}</h2>
  </div>`;
  cardsContainer.append(col);
}
