const { user, todoItem, todo } = require("./models");

// async function listsWithUsers() {
//     const lists = await todo.findAll({
//         include: [{ model: user, attributes: ["name"] }],
//     });

//     return lists.map((list) => list.get({ plain: true }));
// }

// listsWithUsers().then((lists) => console.log(lists));
// async function getUsers() {
//     const allUsers = await user.findAll({
//         include: { model: todo, attributes: ["name"] },
//     });
//     return allUsers.map((user) => user.get({ plain: true }));
// }

// getUsers().then((users) => console.log(users));
async function getUser() {
    const dauser = await user.findByPk(1, { include: [todo] });

    return dauser.get({ plain: true });
}
getUser().then(data => console.log(data));