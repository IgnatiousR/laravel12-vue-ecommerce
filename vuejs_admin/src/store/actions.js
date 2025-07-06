import axiosClient from "../axios";

export function getUser({commit}) {
    return axiosClient.get('/user')
    .then(({data}) => {
        commit('setUser', data);
        return response;
    })
}

export function login({commit}, data) {
    console.log("trying to login")
    // if (axiosClient.post('/login', data)){
    //     console.log("Login accessed")
    // }
    // else console.log("Login denied")
    return axiosClient.post('/login', data)
    .then(({data}) => {
        commit('setUser', data.user);
        commit('setToken', data.token);
        console.log(data);
        return data;
    })
}

export function logout({commit}) {
    return axiosClient.post('/logout')
    .then((response) => {
        commit('setToken', null)

        return response;
    })
}
