class GradeForm {
    constructor (formElement) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener('submit', this.handleSubmit);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(createGrade) {
        this.createGrade = createGrade;
    }
    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData(event.target);

        var name = formData.get('name');
        var course = formData.get('course');
        var grade = formData.get('grade');
        
        this.createGrade(name,course,grade);
        event.target.reset();
    }
}