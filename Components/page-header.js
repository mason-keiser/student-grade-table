class PageHeader {
    constructor(headerElement) {
        this.headerElement = headerElement;
        this.updateAverage = this.updateAverage.bind(this);
    }
    updateAverage(newAverage) {
        var badge = this.headerElement.querySelector(".badge");
        badge.textContent = newAverage;
    }
}