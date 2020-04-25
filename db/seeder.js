module.exports = () => {
    const data = {
        users: []
    }
    const totalUsers = 50;
    for (let i = 0; i < totalUsers; i++) {
        data.users.push({
            id: i,
            name: `user ${i}`,
            title: `title ${i}`
        });
    }
    return data
}