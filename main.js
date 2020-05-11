var tableElement = document.querySelector('table');
var header = document.querySelector('header');
var form = document.querySelector('form');

var pageHeader = new PageHeader(header);

var newGradeTable = new GradeTable(tableElement);

var newGradeForm = new GradeForm(form);

var application = new App(newGradeTable, pageHeader, newGradeForm);

    application.start();