const projectsData = [
    { name: 'Project 1', technology: 'C#' },
    { name: 'Project 2', technology: 'Java' },
    { name: 'Project 3', technology: 'Node.js' },
    { name: 'Project 4', technology: 'React.js' },
    { name: 'Project 5', technology: 'HTML' },
    { name: 'Project 6', technology: 'Python' }
];

const educationData = [
    { course: 'Computer Science', grade: '9th Grade' },
    { course: 'Mathematics', grade: '10th Grade' },
    { course: 'Chemistry', grade: '11th Grade' },
    { course: 'Physics', grade: '12th Grade' },
    { course: 'Programming Fundamentals', grade: '1st year' },
    { course: 'Object Oriented Programming', grade: '2nd year' }
];

const certificationsData = [
    'Certification 1',
    'Certification 2',
   
];

function filterProjects() {
    const filterText = document.getElementById('techFilter').value.toLowerCase();
    const projectList = document.getElementById('projectList');

    projectList.innerHTML = '';

    projectsData.forEach(project => {
        if (project.technology.toLowerCase().includes(filterText)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${project.name} - ${project.technology}`;
            projectList.appendChild(listItem);
        }
    });
}

function populateEducation() {
    const educationList = document.getElementById('educationList');

    educationData.forEach(edu => {
        const listItem = document.createElement('li');
        listItem.textContent = `${edu.course} - ${edu.grade}`;
        educationList.appendChild(listItem);
    });
}

function populateCertifications() {
    const certificationsList = document.getElementById('certificationsList');

    certificationsData.forEach(certification => {
        const listItem = document.createElement('li');
        listItem.textContent = certification;
        certificationsList.appendChild(listItem);
    });
}


window.onload = function () {
    populateEducation();
    populateCertifications();
};
