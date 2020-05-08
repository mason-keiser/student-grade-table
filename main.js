var tableElement = document.querySelector('table');
var header = document.querySelector('header');

var pageHeader = new PageHeader(header);

var newGradeTable = new GradeTable(tableElement);

var application = new App(newGradeTable, pageHeader);

    application.start();