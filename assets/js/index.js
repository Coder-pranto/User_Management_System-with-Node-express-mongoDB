$(document).ready(function () {
    $("#add_user").submit(function (e) { 
        //e.preventDefault();
        alert('Data inserted successfully');
    });
});


$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
        //n= index,
        //i = element
    })


    var request = {
        "url" : `http://localhost:8080/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if((window.location.pathname == "/")||window.location.pathname == "/home"){
    $ondelete = $(".table.table-striped tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:8080/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}