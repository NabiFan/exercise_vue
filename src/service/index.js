const localUrl = location.origin

const api = {
    user_get_login: `${localUrl}/user/login`
}

module.exports = Object.assign({}, api);