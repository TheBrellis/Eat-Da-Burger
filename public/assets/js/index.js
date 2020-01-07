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

    $('.devour-burger').on("click", (event)=> {
        event.preventDefault();
        var id = $(this).data("id");
        console.log(id);
        let updateBurger = {
            devoured: true
        };
        /*
        $.ajax(`/api/update/${id}`, {
            type: "PUT",
            data: updateBurger
        }).then(
            function() {
                console.log("Burger's been devoured");
                location.reload();
            }
        )
*/
    })











})
