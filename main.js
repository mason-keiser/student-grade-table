var tableElement = document.querySelector('table');
var header = document.querySelector('header');
var form = document.querySelector('form');
var noGradesElement = document.querySelector('p');

var pageHeader = new PageHeader(header);

var newGradeTable = new GradeTable(tableElement, noGradesElement);

var newGradeForm = new GradeForm(form);

var application = new App(newGradeTable, pageHeader, newGradeForm);

    application.start();