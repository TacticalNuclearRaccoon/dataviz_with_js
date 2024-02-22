// @ts-nocheck
const main = async () => {
  const csv = await d3.dsv(",", "./river_debit.csv");
  const source = csv.map((line) => {
    return [line.riverLabel, line.length, line.debit];
  });

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
};

main();
