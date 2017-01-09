// Helper functions
function htmlReplace(htmlStr, data) {
    return htmlStr.replace("%data%", data);
}


// Resume builder objects

var bio = {
    name: "Saikat Sinha",
    role: "Front-End Web Developer",
    contacts: {
        email: "saikat30.2008@gmail.com",
        mobile: "8682957086",
        github: "Saikat-Sinha",
        twitter: "AskSaikatSinha",
        location: "Kolkata, India"
    },
    welcomeMessage: "Hi, I Design Applications for Web. Need a designer? let's talk...",
    biopic: "images/saikat.JPG",
    skills: ["HTML", "CSS", "Javascript", "Python", "C++", "Data Science"],
    display: function() {
        $("#header").prepend(htmlReplace(HTMLheaderName, this.name));
        $("#name").after(htmlReplace(HTMLheaderRole, this.role));
        $("#topContacts, #footerContacts").append(htmlReplace(HTMLemail, this.contacts.email));
        $("#topContacts, #footerContacts").append(htmlReplace(HTMLmobile, this.contacts.mobile));
        $("#topContacts, #footerContacts").append(htmlReplace(HTMLtwitter, this.contacts.twitter));
        $("#topContacts, #footerContacts").append(htmlReplace(HTMLgithub, this.contacts.github));
        $("#topContacts, #footerContacts").append(htmlReplace(HTMLlocation, this.contacts.location));
        $("#header").append(htmlReplace(HTMLbioPic, this.biopic));
        $("#header").append(htmlReplace(HTMLwelcomeMsg, this.welcomeMessage));
        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            this.skills.forEach(function(skill) {
                $("#skills").append(htmlReplace(HTMLskills, skill));
            });
        }
    }
};

var work = {
    jobs: [{
        employer: "Robert Bosch",
        title: "Data Science Intern",
        location: "Bangalore, India",
        dates: "August 2016-present",
        description: "Realtime web Analytics platform development."
    }, {
        employer: "WebTek Labs",
        title: "PHP Developer",
        location: "Kolkata, India",
        dates: "January 2015- April 2015",
        description: "Created e-commerce website using MySQL and PHP."
    }],

    display: function() {
        if (this.jobs.length > 0) {
            this.jobs.forEach(function(job) {
                $("#workExperience").append(HTMLworkStart);
                $(".work-entry:last").append(htmlReplace(HTMLworkEmployer, job.employer) + htmlReplace(HTMLworkTitle, job.title));
                $(".work-entry:last").append(htmlReplace(HTMLworkDates, job.dates));
                $(".work-entry:last").append(htmlReplace(HTMLworkLocation, job.location));
                $(".work-entry:last").append(htmlReplace(HTMLworkDescription, job.description));
            });
        }
    }
};


var education = {
    schools: [{
        name: "SRM University",
        location: "Kolkata, India",
        degree: "B.Tech",
        majors: ["Computer Engineering"],
        dates: "2013-2017",
        url: "http://srmuniv.ac.in"
    }, {
        name: "K.V IIMC Joka",
        location: "Kolkata, India",
        degree: "Intermediate",
        majors: ["Science"],
        dates: "2011-2013",
        url: "http://kvsangathan.nic.in/"
    }],
    onlineCourses: [{
        title: "HTML, CSS and JS",
        school: "Coursera",
        date: "2016",
        url: "https://www.coursera.org/account/accomplishments/verify/874ZXRKEK9MC"
    }, {
        title: "Certified Python Programmer",
        school: "Global Accredidation Board",
        date: "2014-2015",
        url: "http://www.hrmi.org/gacc.htm"
    }],
    display: function() {
          if (this.schools.length > 0) {
              this.schools.forEach(function(school) {
                  $("#education").append(HTMLschoolStart);
                  $(".education-entry:last").append(htmlReplace(HTMLschoolName, school.name) + htmlReplace(HTMLschoolDegree, school.degree));
                  $(".education-entry:last").append(htmlReplace(HTMLschoolDates, school.dates));
                  $(".education-entry:last").append(htmlReplace(HTMLschoolLocation, school.location));
                  if (school.majors.length > 0) {
                      school.majors.forEach(function(major) {
                          $(".education-entry:last").append(htmlReplace(HTMLschoolMajor, major));
                      });
                  }
              });
          }
          if (this.onlineCourses.length > 0) {
              $("#education").append(HTMLonlineClasses);
              this.onlineCourses.forEach(function(course) {
                  $("#education").append(HTMLschoolStart);
                  $(".education-entry:last").append(htmlReplace(HTMLonlineTitle, course.title) + htmlReplace(HTMLonlineSchool, course.school));
                  $(".education-entry:last").append(htmlReplace(HTMLonlineDates, course.date));
                  $(".education-entry:last").append(htmlReplace(HTMLonlineURL, course.url));
              });
          }
      }
  };
var projects = {
    projects: [{
        title: "Neighbourhood Map",
        dates: "Jan 2017 - Jan 2017",
        description: "Created Using Google Maps API",
        images: ["images/map.jpg"]
    }, {
        title: "Arcade Game Clone",
        dates: "Jan 2017 - Jan 2017",
        description: "Cloning a Arcade game in HTML canvas.",
        images: ["images/arcade.jpg"]
    },
	],

    display: function() {
        if (this.projects.length > 0) {
            this.projects.forEach(function(project) {
                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(htmlReplace(HTMLprojectTitle, project.title));
                $(".project-entry:last").append(htmlReplace(HTMLprojectDates, project.dates));
                $(".project-entry:last").append(htmlReplace(HTMLprojectDescription, project.description));
                project.images.forEach(function(image) {
                    $(".project-entry:last").append(htmlReplace(HTMLprojectImage, image));
                });
            });
        }
    }
};


// Display objects and add interactivity

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
