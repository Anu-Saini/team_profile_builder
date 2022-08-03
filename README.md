# Team Profile card Generator

## The Task

We are generating an team profile webpage using a Node.js command-line application. The node.js prompts for inputs questions and then generates a HTML webpage displaying the key points for each team memeber.
The code is also supported by unit testing to ensure code functionality.

## User Story

```md
As a teamleader
I WANT to generate a webpage that displays my team's basic info and job positions along with their emails contacts as well as Github profiles.
```

## Acceptance Criteria

```md
I am able to enter the details for the team through prompt and user input when I open the command-line application and run the codefile on node.js.
WHEN I am prompted for my team members and their information 
Then I am able to feed in the details.
When I feed in the details of the teammates, 
It then generates an HTML file displaying the details of the team members.
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to exit the application
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Directory Structure

Our directory has the below structure :

```md
.
├── dist/                  // rendered output HTML & CSS sheet  
├── images/                // images used in readme.md.
│                          //showing functionality of the code  
├── lib/                   // classes for employees, manager, engineer and intern 
├── src/                   // template script code 
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
|── .gitignore             //indicate files Git should ignore    
├── index.js               // runs the application
├── package-lock.jso       // locks the version of dependancies
└── package.json
├── README.md       

## Functionality of Code ( Demonstrated by the below video link to Google docs)
The walk through for the functionality of the code is demonstrated in the given video link (https://drive.google.com/file/d/1WVdl_jI9oLSMVedKpE3msolQLeJAfTOF/view)

## Installation 
we need to install npm package for the inquirer, jest, Filesystem using npm init , npm install

## code of Functionality
the walkthrough of the functionality of the code from initiating the application , building up the array of team profile, reviewing the HTML Webpage and then verifying the unit tests is avialable at the following link:(https://drive.google.com/file/d/1WVdl_jI9oLSMVedKpE3msolQLeJAfTOF/view)

## Functionality of code images 
-To initiate our CLI application we need to run ' node index.js'
(.\images\node start.jpg)

-The application will prompt us to enter the details of the employee as a manager followed by the choice of entering another employee or exiting the application.  
(./images/manager details.jpg)

- we choose to enter another employee as engineer position. once details filled, it will again give us choice of entering another employee or exiting the application.
(./images/engineer details.jpg)

- we choose to enter another employee as Intern. once details filled, it will again give us choice of entering another employee or exiting the application.
(./images/intern details.jpg)

- Once we finalise our details and exit, an array of our team will be generated.
(./images/array.jpg)

- This code functionality taking input from this array will generate a HTML page casting our team memebers.
(.images/teamhtml.jpg)

- Through this HTML page we can click to the email or github accounts toemabling opening a new email for communication in a new page and populate the emails TOT field for that respective team memeber.
(.images/contactdetails.jpg)

- To help secure the functionality of our code,we are also running some unit testing on the classes made.
(./images/testrun.jpg)
