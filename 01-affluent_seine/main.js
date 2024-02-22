//@ts-nocheck
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

const height = 1.8;
const duration = 1000;

d3.select("div.content")
  .selectAll("div.name")
  .data(source)
  .join("div")
  .classed("name", true)
  .style("transform", (d, i) => `translate(0, ${i * height}em)`)
  .style("opacity", 0)
  .text((d) => d[0])
  .transition()
  .duration(duration)
  .style("opacity", 1);

d3.select("div.content")
  .selectAll("div.bar")
  .data(source)
  .join("div")
  .classed("bar", true)
  .style("width", 0)
  .style("transform", (d, i) => `translate(10.5em, ${i * height}em)`)
  .text((d) => d[1])
  .style("opacity", 0)
  .transition()
  .duration(duration)
  .style("width", (d) => `${d[1] / 16}em`)
  .style("opacity", 1);
