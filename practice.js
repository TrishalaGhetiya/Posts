const posts =[];
function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            posts.push(post);
            resolve();
        }, 1000)
    })
}
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}
const user = {
    name: "Trishala",
    lastActivityTime: "5th of June"
}
function updateLastUserActivityTime (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime();
            console.log(user.lastActivityTime);
            resolve(user.lastActivityTime)
        },1000)
    })
}
function getPost() {
    setTimeout( () => {
        // posts.forEach((post) => {
        //     console.log(post.title);
        for(let i=0;i<posts.length;i++)
            console.log(posts[i].title);
    }, 1000);
}
function updatePost(){
    Promise.all([createPost({title: "POST1"}),updateLastUserActivityTime()])
    .then(getPost())
}
updatePost();



