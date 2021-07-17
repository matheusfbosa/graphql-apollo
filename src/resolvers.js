const randomID = () => {
    const min = 1;
    const max = 1000;
    return String(Math.floor(Math.random() * (max - min) + min));
};

const users = [
    { _id: randomID(), name: 'Dave Grohl', email: 'dave@gmail.com', active: true },
    { _id: randomID(), name: 'Kurt Cobain', email: 'kurt@gmail.com', active: false },
    { _id: randomID(), name: 'Bob Marley', email: 'bob@gmail.com', active: false },
];

const getUserByEmail = (email) => users.find(user => user.email === email);

const createUser = (name, email) => {
    const newUser = { _id: randomID(), name, email, active: true };
    users.push(newUser);
    return newUser;
};

const resolvers = {
    Query: {
        users: () => users,
        getUserByEmail: (_, { email }) => getUserByEmail(email),
    },
    Mutation: {
        createUser: (_, { name, email }) => createUser(name, email),
    }
};

module.exports = { resolvers };
