var tableElement = document.querySelector('table');
var newGradeTable = new GradeTable(tableElement);
var newApp = new App(newGradeTable);
    newApp.start();