'use strict';

const createEmployeeCard = (employeeName, job, skills, country, avatarUrl) => {
  const innerFlex = document.createElement('div');
  innerFlex.classList.add('d-flex', 'align-items-center', 'col-md-7', 'col-10', 'm-1');

  // profile card
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('d-flex', 'col-12', 'profile-card');
  innerFlex.append(cardDiv);

  // left info
  const leftInfo = document.createElement('div');
  leftInfo.classList.add('col-8', 'py-3');

  const div1 = document.createElement('div');
  div1.classList.add('py-2');
  const div2 = div1.cloneNode(true);
  const div3 = div1.cloneNode(true);

  const nameTitle = document.createElement('h4');
  nameTitle.innerHTML = `${employeeName}`;

  const employeeJob = document.createElement('p');
  const employeeSkill = document.createElement('p');
  const employeeCountry = document.createElement('p');

  employeeJob.innerHTML = 'Job: ' + '<br>' + `${job}`;
  div1.append(employeeJob);

  employeeSkill.innerHTML = 'Skill: ' + '<br>' + `${skills}`;
  div2.append(employeeSkill);

  employeeCountry.innerHTML = 'Country : ' + '<br>' + `${country}`;
  div3.append(employeeCountry);

  leftInfo.append(nameTitle);
  leftInfo.append(div1);
  leftInfo.append(div2);
  leftInfo.append(div3);
  // end of left info

  // right info
  const rightInfo = document.createElement('div');
  rightInfo.classList.add('col-4', 'd-flex', 'justify-content-center', 'align-items-center');

  const div4 = document.createElement('div');
  const avatar = document.createElement('img');

  avatar.classList.add('avatar');
  avatar.src = `${avatarUrl}`;

  div4.append(avatar);
  rightInfo.append(div4);
  // end of right info

  cardDiv.append(rightInfo);
  cardDiv.append(leftInfo);

  return innerFlex;
};

// inputting data
let employee1 = createEmployeeCard(
  'Kaiden Herman',
  'Software Engineer',
  'C++, C#, Java, PHP, JavaScript, Python',
  'United States',
  'https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg'
);
let employee2 = createEmployeeCard('Elizabeth Dunn', 'Accountant', 'Excel, Word, Quickbooks', 'England', 'https://randomuser.me/api/portraits/women/76.jpg');
let employee3 = createEmployeeCard('Duan Moreno', 'Teacher', 'Working with children, History, Word', 'Argentina', 'https://randomuser.me/api/portraits/med/men/93.jpg');

const profilesDiv = document.getElementById('profiles');
profilesDiv.append(employee1);
profilesDiv.append(employee2);
profilesDiv.append(employee3);
