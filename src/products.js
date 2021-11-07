const availableSizes = [
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [5, 1],
  [2, 2],
  [3, 2],
  [5, 2],
  [6, 2],
];

let availableColors = [
  { hex: "#f3be38", ral: "RAL 1003" },
  { hex: "#d81a21", ral: "RAL 3020" },
  { hex: "#007cb6", ral: "RAL 5015" },
  { hex: "#48A43F", ral: "RAL 6018" },
  { hex: "#999999", ral: "RAL 7001" },
  { hex: "#383e42", ral: "RAL 7016" },
];

let containerNrs = {
  "5x3": "SB 32",
  "6x5": "SB 353",
  "7x5": "SB 43",
  "8x6": "SB 443",
  "11x7": "SB 64",
};

export { availableSizes, availableColors, containerNrs };
