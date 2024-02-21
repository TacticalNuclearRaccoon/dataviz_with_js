const source = [
  ["Marne", 514],
  ["Oise", 341.1],
  ["Yonne", 292.3],
  ["Aube", 248.3],
  ["Eure", 228.7],
  ["Risle", 145],
  ["Loing", 142.7],
  ["Epte", 113],
  ["Ource", 100.4],
  ["Yerres", 97.5],
  ["Essonne", 97.1],
  ["Andelle", 56.8],
  ["Barse", 50.1],
  ["Orge", 50.1],
  ["Voulzie", 43.9],
  ["Almont", 42.1],
  ["Orvin", 38.1],
];

const elt = document.querySelector("div.content");
if (elt === null) {
  throw new Error("cannot find div.content element");
}

let templates = "";
for (const item of source) {
  const name = item[0];
  /** @type number */
  // @ts-ignore
  const length = item[1];
  const template = `
  <div class="item">
    <div class="name">${name}</div>
    <div class="bar" style="width: ${length / 16}em">${length}</div>
  </div>
  `;
  templates = templates + template;
}

elt.innerHTML = templates;
