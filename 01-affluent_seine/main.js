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

d3.select("div.content")
  .selectAll("div.name")
  .data(source)
  .join("div")
  .text((d) => d[0]);

d3.select("div.content")
  .selectAll("div.bar")
  .data(source)
  .join("div")
  .text((d) => d[1]);
