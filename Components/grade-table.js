class GradeTable {
    constructor(tableElement) {
        this.tableElement = tableElement;
    }
    updateGrades(grades) {
        var treeBody = this.tableElement.querySelector("tbody");
            treeBody.innerHTML = "";
            for(var i = 0; i < grades.length; i++) {
                var newTreeRow = document.createElement("tr");
                var studentName = document.createElement("td");
                var studentCourse = document.createElement("td");
                var studentGrade = document.createElement("td");
                studentName.textContent = grades[i].name;
                studentCourse.textContent = grades[i].course;
                studentGrade.textContent = grades[i].grade;
                newTreeRow.append(studentName, studentCourse, studentGrade);
                treeBody.appendChild(newTreeRow);
            }
    }
}