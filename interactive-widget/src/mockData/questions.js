export default [
  {
    id: 1,
    text: "What category does your issue fall under?",
    type: "text-enum",
    options: ["Software", "Hardware", "Other"],
  },
  {
    id: 2,
    text: "Choose an image similar to the issue",
    type: "image-enum",
    options: ["/hardware.png", "/software.png"],
  },
  { id: 3, text: "How severe is the issue?", type: "number" },
  { id: 4, text: "Any additional information we should know", type: "text" },
];
