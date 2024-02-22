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

    d3.select("div.content")
      .selectAll("div.name")
      .data(source, (d) => d.name)
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
      .data(source, (d) => d.name)
      .join("div")
      .classed("bar", true)
      .style("width", 0)
      .style("transform", (d, i) => `translate(10.5em, ${i * height}em)`)
      .style("background-color", state === "length" ? "lightpink" : "lightblue")
      .text((d) => d[1])
      .style("opacity", 0)
      .transition()
      .duration(duration)
      .style("width", (d) => `${d[1] / 16}em`)
      .style("opacity", 1);
  };

  const source = getSource(csv, state);
  update(source, state);
};

main();
