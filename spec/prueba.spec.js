// Traer repositorios del index.js
const { Activity, Repository } = require("../scripts/index.js");



describe("Repository", function() {
    let repository;

    beforeEach(function() {
        repository = new Repository();
    });

    it("Debe crear una activity", function() {
        repository.createActivity(1, "Activity 1", "Description 1", "img1.jpg");
        expect(repository.getAllActivities().length).toBe(1);
    });

    it("Debe eliminar una activity", function() {
        repository.createActivity(1, "Activity 1", "Description 1", "img1.jpg");
        repository.deleteActivity(1);
        expect(repository.getAllActivities().length).toBe(0);
    });

});

describe("createActivityElement", function() {
    it("Debería crear un elemento HTML para activity", function() {
        const activity = new Activity(1, "Activity 1", "Description 1", "img1.jpg");
        const card = createActivityElement(activity);
        expect(card.tagName).toBe("DIV");
        expect(card.classList.contains('activity-card')).toBe(true);
        expect(card.querySelector('h3').textContent).toBe("Activity 1");
    });

});
