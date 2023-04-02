const renderShape = require("./shapes");

//Tests the renderShape function when "Circle" is passed in from prompt
test("Returns the SVG code properties for a circle", () => {
  expect(renderShape("Circle")).toEqual(`circle cx="150" cy="100" r="80"`);
});

//Tests the renderShape function when "Square" is passed in from prompt
test("Returns the SVG code properties for a square", () => {
  expect(renderShape("Square")).toEqual(
    'rect width="160" height="160" x="70" y="25"'
  );
});

//Tests the renderShape function when "Triangle" is passed in from prompt
test("Returns the SVG code properties for a triangle", () => {
  expect(renderShape("Triangle")).toEqual(
    `polygon points="50 15, 100 100, 0 100"`
  );
});

//Tests the renderShape function if there is an error
test("Returns ERROR if an incorrect shape is entered", () => {
  expect(renderShape("Rhombus")).toEqual(
    console.log("ERROR")
  );
});