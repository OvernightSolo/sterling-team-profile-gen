function genHTML(employees) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
  </head>
  <body>
     <h1>${employees.managerName}</h1>
  </body>
  </html>`;
}

module.exports = genHTML;

//This is the next step. Get all this written.
