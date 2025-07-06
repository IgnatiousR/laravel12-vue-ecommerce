import axiosCLient from "../axios";

export function getUser({commit}) {
    return axiosCLient.get('/user')
    .then(({data}) => {
        commit('setUser', data);
        return response;
    })
}

export function login({commit}, data) {
    return axiosCLient.post('/login', data)
    .then(({data}) => {
        commit('setUser', data.user);
        commit('setToken', data.token);
        return data;
    })
}

export function logout({commit}) {
    return axiosCLient.post('/logout')
    .then((response) => {
        commit('setToken', null)

        return response;
    })
}