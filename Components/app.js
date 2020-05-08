class App {
    constructor (gradeTable,pageHeader){
        this.gradeTable = gradeTable;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.pageHeader = pageHeader;
    }
    handleGetGradesError(error) {
        console.error(error);
    }
    handleGetGradesSuccess(grades) {
        this.gradeTable.updateGrades(grades);

        var gradeSum = 0;
        for (var i = 0; i < grades.length; i++) {
            gradeSum += grades[i].grade;
        }
        var gradeAverage = (gradeSum/ grades.length);
            this.pageHeader.updateAverage(gradeAverage);
    }
    getGrades() {
        $.ajax({
            method: "GET",
            url: "https://sgt.lfzprototypes.com/api/grades",
            headers: {"X-Access-Token": "KvOOyLVu"},
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError,
        })
    }
    start() {
        this.getGrades();
    }
}