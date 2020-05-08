var tableElement = document.querySelector('table');
var header = document.querySelector('header');
var form = document.querySelector('form');

var pageHeader = new PageHeader(header);

var newGradeTable = new GradeTable(tableElement);

var gradeForm = new GradeForm(form);

var application = new App(newGradeTable, pageHeader, gradeForm);

    application.start();