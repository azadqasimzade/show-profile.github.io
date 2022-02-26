const profile = new Profile();
const ui = new UI();

document.getElementById('searchProfile').addEventListener('keyup', (event) => {
    ui.clear();
    let text = event.target.value;
    if (text !== '') {
        profile.getProfile(text)
            .then(res => {
                if (res.profile.length === 0) {
                    ui.showAlert(text);
                } else {
                    ui.showProfile(res.profile[0]);
                    ui.showTodo(res.todo);
                    ui.showPhoto(res.photo);
                    ui.showComments(res.comments);
                }
            })
            .catch(err=>{
                ui.showAlert(text);
            });
    }
});