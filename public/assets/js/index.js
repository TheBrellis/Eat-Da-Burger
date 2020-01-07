$(function() {
    $('#submit-burger').on("click", (event)=> {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#new-burger").val().trim(),
            devoured: false
        };

        $.ajax("/api/add", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Burger added");
                location.reload();
            }
        )
    });
    










})
