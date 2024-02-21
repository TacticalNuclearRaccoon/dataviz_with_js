/** @type HTMLElement | null*/
const chartDom = document.querySelector("div.content");
if (chartDom === null) {
  throw new Error("div.content not found");
}

const source = [
  ["Marne", 514.0],
  ["Oise", 341.1],
  ["Yonne", 292.3],
  ["Aube", 248.3],
  ["Eure", 228.7],
  ["Risle", 145.0],
  ["Loing", 142.7],
  ["Epte", 113.0],
  ["Ource", 100.4],
  ["Yerres", 97.5],
  ["Essonne", 97.1],
  ["Andelle", 56.8],
  ["Barse", 50.1],
  ["Orge", 50.1],
  ["Voulzie", 43.9],
  ["Almont", 42.1],
  ["Orvin", 38.1],
  ["nom", "longueur"],
];
source.reverse();
const myChart = echarts.init(chartDom);
const option = {
  dataset: {
    source: source,
  },
  grid: { containLabel: true },
  xAxis: { name: "nom" },
  yAxis: { type: "category" },
  series: [
    {
      type: "bar",
      encode: {
        // Map the "amount" column to X axis.
        x: "longueur",
        // Map the "product" column to Y axis
        y: "nom",
      },
    },
  ],
};

myChart.setOption(option);
