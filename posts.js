const posts =[];
const postCreation = async () => {
    
    const createPost = new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        },1000)
    })

    const getPost = createPost.then(post => {
        return new Promise((resolve,reject) => {
            for(let i=0;i<posts.length;i++)
                console.log(posts[i].title);
        })
    let postupdate = await createPost;
    return postupdate;
}