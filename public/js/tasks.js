function deleteTask(id) {
    $.ajax({
        url: '/delete/' + id,
        dataType: 'text',
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