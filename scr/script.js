const generateBody = (intern) => {
  return `<head>
    <!-- CSS only -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <body>
    <header class="header">
 <h1>My Team</h1>
    </header> 
    <container class="box" id="main">`;
};


const generateIntern = (intern) => {
  return `
        <div class="card employee-card">
          <div class="row">
             <div class="col">
                <div class="class-header">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="glyphicon glyphicon-education"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                   <ul class="list-group">
                     <li class="list-group-item">Emp ID: ${intern.getID()}</li>'
                     <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>'
                     <li class="list-group-item">School:${intern.getSchool()}</li>'
                    </ul>
                </div>
             </div>
           </div>
        </div>
                `;
};

const generateManager = (manager) => {
  console.log(manager);
  return `
<div class="card employee-card">
<div class="row">
<div class="col">
    <div class="class-header">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
         <ul class="list-group">
            <li class="list-group-item">Emp ID: ${manager.getID()}</li>'
            <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>'
            <li class="list-group-item">Office no.: ${manager.officeNumber}</li>'
        </ul>
  </div>
  </div>
  </div>
  </div>`;
};


 const generateEngineer = (engineer) => {
  return `
    <div class="card employee-card">
    <div class="row">
    <div class="col">
                <div class="class-header">
                      <h2 class="card-title">${engineer.getName()}</h2>
                      <h3 class="card-title"><i class="fas fa-glasses"></i>${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                     <ul class="list-group">
                        <li class="list-group-item">Emp ID: ${engineer.getID()}</li>'
                        <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>'
                        <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()} </a></li>'
                    </ul>
              </div>
              </div>
              </div>
              </div>`;
};

module.exports = {generateEngineer, generateBody, generateIntern, generateManager}