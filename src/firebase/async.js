const myAsyncFunction = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await userResponse.json();
    const firstUser = users[0]
}