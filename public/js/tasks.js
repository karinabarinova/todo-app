function deleteTask(id) {
    $.ajax({
        url: '/finish/' + id,
        dataType: 'json',
        data: JSON.stringify({id}),
        type: 'POST',
        success: (res => {
            $("#"+id).remove();
        }),
        error: (error => {
            console.log("Error: ", error)
        })
    })
}

function removeTask(id) {
    $.ajax({
        url: '/delete/' + id,
        dataType: 'json',
        data: JSON.stringify({id}),
        type: 'DELETE',
        success: (res => {
            $("#"+id).remove();
        }),
        error: (error => {
            console.log("Error: ", error)
        })
    })
}