
function renderShape(shape) {
    if (shape === 'Circle') {
        return `circle cx="150" cy="100" r="80"`
    } else if (shape === 'Square') {
        return 'rect width="160" height="160" x="70" y="25"'
    } else if (shape === 'Triangle') {
        return `polygon points="50 15, 100 100, 0 100"`
    } return console.log("ERROR");
} 

module.exports = renderShape;
