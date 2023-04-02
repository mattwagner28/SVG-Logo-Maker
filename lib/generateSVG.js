function renderShape(shape) {
    if (shape === 'Circle') {
        return `circle cx="300" cy="200" r="160"`
    } else if (shape === 'Square') {
        return 'rect width="320" height="320" x="140" y="50"'
    } else if (shape === 'Triangle') {
        return `polygon points="300 50, 500 350, 100 350"`
    } return console.log("ERROR");
} 



function generateSVG(answers) {
    return  `<svg version="1.1"
     width="600" height="400"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="white" />

  <${renderShape(answers.shape)} fill="${answers.backgroundColor}" />

  <text x="300" y="225" font-size="70" text-anchor="middle" fill="${answers.textColor}">${answers.chars}</text>

</svg>`;
}

module.exports = generateSVG;