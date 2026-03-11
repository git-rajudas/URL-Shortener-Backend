const sessionIdToUserMap = new Map(); 

function setUser(token, user) {
    sessionIdToUserMap.set(token, user);
}

function getUser(token){
    return sessionIdToUserMap.get(token);
}

module.exports = {
    setUser,
    getUser,
};
