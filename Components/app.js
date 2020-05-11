class App {
    constructor (gradeTable,pageHeader,gradeForm){
        this.gradeTable = gradeTable;
        this.gradeForm = gradeForm;
        this.pageHeader = pageHeader;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
        this.deleteGrade = this.deleteGrade.bind(this);
        this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
        this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
            if(grades.length === 0) {
                gradeAverage = "N/A"
            }
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
        this.gradeForm.onSubmit(this.createGrade);
        this.gradeTable.onDeleteClick(this.deleteGrade);
    }
    createGrade(name,course,grade) {
        $.ajax({
            method: "POST",
            url:"https://sgt.lfzprototypes.com/api/grades",
            data: {
                "name": name,
                "course": course,
                "grade": grade,
            },
            headers: {"X-Access-Token": "KvOOyLVu"},
            success: this.handleCreateGradeSuccess,
            error: this.handleCreateGradeError,
        })
    }
    handleCreateGradeError(error) {
        console.log(error);
    }
    handleCreateGradeSuccess() {
        this.getGrades();
    }
    deleteGrade(grade_id) {
        $.ajax({
            method: "DELETE",
            url: "https://sgt.lfzprototypes.com/api/grades/" + grade_id,
            headers: {"X-Access-Token": "KvOOyLVu"},
            success: this.handleCreateGradeSuccess,
            error: this.handleCreateGradeError,
        })
    }
    handleDeleteGradeError(error) {
        console.error(error);
    }
    handleDeleteGradeSuccess() {
        this.getGrades;
    }
}