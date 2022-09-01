function genHTML(employees) {
  console.log(employees);
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
      <link rel="stylesheet" href="../dist/styles.css">
      <title>Document</title>
    </head>
    <body>
      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-3">
            <div class="card">
              <div class="card-content has-background-danger-dark has-text-light">
                <p class="is-success">
                  <p class="name">${employees[0].name}</p>
                  <p class="role">${employees[0].role}</p>
                  <p>Employee ID: ${employees[0].id}</p>
                  <p><a href="mailto:${employees[0].email}">Email: ${employees[0].email}</a></p>
                  <p>Office# ${employees[0].officeNumber}</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-3">
            <div class="card">
              <div class="card-content has-background-warning-dark has-text-light">
                <p class="is-success">
                  <p class="name">${employees[1].name}</p>
                  <p class="role">${employees[1].role}</p>
                  <p>Employee ID: ${employees[1].id}</p>
                  <p><a href="mailto:${employees[1].email}">Email: ${employees[1].email}</a></p>
                  <p><a href="http://github.com/${employees[1].github}"><i class="fa-brands fa-github"></i> github.com/${employees[1].github}</a></p>
                </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-3">
            <div class="card">
              <div class="card-content has-background-success-dark has-text-light">
                <p class="is-success">
                  <p class="name">${employees[2].name}</p>
                  <p class="role">${employees[2].role}</p>
                  <p>Employee ID: ${employees[2].id}</p>
                  <p><a href="mailto:${employees[0].email}">Email: ${employees[2].email}</a></p>
                  <p>Student at ${employees[2].school}</p>
                </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://kit.fontawesome.com/5111a16a3a.js" crossorigin="anonymous"></script>
    </body>
  </html>
  `;
}

module.exports = genHTML;
