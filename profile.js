class Profile{
    constructor(){
        this.clientId='';
        this.clientSected='';
    }

    async getProfile(username){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        const profile = await profileResponse.json();

        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);
        const todo = await todoResponse.json();

        const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${profile[0].id}`);
        const photo = await photosResponse.json();

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${profile[0].id}`);
        const comments = await commentsResponse.json();
        return{
            profile,
            todo,
            photo,
            comments
        }
    }
}