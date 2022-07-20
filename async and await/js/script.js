function loaddata(){
    const posts = async() => {
        const postdata = await fetch("https://jsonplaceholder.typicode.com/posts");
        const finalpostdata = postdata.json();
        return finalpostdata;
    }
    const users = async() => {
        const userdata = await fetch("https://jsonplaceholder.typicode.com/users");
        const finaluserdata = userdata.json();
        return finaluserdata;
    }
    const display = async() => {
        const userpost = await posts();
        const username = await users();
        let str = ""
        userpost.forEach((value) => {
            username.forEach((v) => {
                if(value.userId == v.id){
                    str += `<tr>
                    <td>${v.username}</td>
                    <td>${value.title}</td>
                  </tr>`
                }
            })
        })
        document.getElementById("addhere").innerHTML = str;
    }
    display();
}