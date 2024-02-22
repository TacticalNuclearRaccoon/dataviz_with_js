// @ts-nocheck
const main = async () => {
  const csv = await d3.dsv(",", "./river_debit.csv");

  const button = document.querySelector("button.switch");

  const getSource = (csv, state) => {
    const source = csv.map((line) => [line.riverLabel, line[state]]);
    source.sort((a, b) => {
      return Math.sign(b[1] - a[1]);
    });
    return source;
  };

  let state = "length";
  button.addEventListener("click", () => {
    state = state === "length" ? "debit" : "length";
    const source = getSource(csv, state);
    console.log("source: ", source);
    button.innerHTML =
      state === "length" ? "Voir les débits" : "Voir les longueurs";

    d3.select("p.unit").text(
      state === "length" ? "Longueur en km" : "Debit en m3/s"
    );
    update(source, state);
  });

  const update = (source, state) => {
    const height = 1.8;
    const duration = 1000;
    const backgroundColor = state === "length" ? "cadetblue" : "blue";
    const coef = state === "length" ? 1 : 3;

    d3.select("div.content")
      .selectAll("div.name")
      .data(source, (d) => d[0])
      .join("div")
      .classed("name", true)
      .text((d) => d[0])
      .transition()
      .duration(duration)
      .style("top", (d, i) => `${i * height}em`);

    d3.select("div.content")
      .selectAll("div.bar")
      .data(source, (d) => d[0])
      .join("div")
      .classed("bar", true)
      .html(
        (d) =>
          `<span class="${d[1] * coef < 30 ? "outside" : ""}" style="left: ${
            (d[1] * coef) / 16 + 0.5
          }em">${d[1]}</span>`
      )
      .transition()
      .duration(duration)
      .style("background-color", backgroundColor)
      .style("top", (d, i) => `${i * height}em`)
      .style("width", (d) => `${(d[1] * coef) / 16}em`);

    d3.select("div.content")
      .selectAll("div.textbar")
      .data(source, (d) => d[0])
      .join("div")
      .classed("textbar", true)
      .transition()
      .duration(duration)
      .text((d) => d[1])
      .style("top", (d, i) => `${i * height}em`)
      .style("left", (d, i) =>
        d[1] * coef < 30 ? `${10.5 + 0.5 + (d[1] * coef) / 16}em` : "10.5em"
      )
      .style("color", (d, i) => (d[1] * coef < 30 ? `black` : "white"))
      .style("width", (d) => `${(d[1] * coef) / 16}em`);
  };

  const source = getSource(csv, state);
  update(source, state);
};

main();
