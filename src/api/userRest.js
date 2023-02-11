import axios from 'axios'
import config from '../config'
import store from '../store'

export const getplayer = async () => {
  try {
    const res = await axios.get(
      `${config.REST_API_URL}/accounts/getfavoritecoachplayers/1`,
    )
    return res.data.favorite_coach_player_list
  } catch (e) {
    return {}
  }
}
export const getNewlist = async () => {
  const res = await axios.get(`${config.REST_API_URL}/accounts/getcoachlist/1`)
  const response = res.data.coach_list.reverse()
  store.commit('setCoaches', response)
  const resThree = []
  for (let i = 0; i < 3; i++) {
    resThree.push(response[i])
  }
  store.commit('setThreeCoaches', resThree)
  return resThree
}

export const getlist = async (increaseNumber) => {
  try {
    const res = store.getters['getCoaches']
    const response = res
    const resThree = []
    for (let j = 0; j < increaseNumber + 3; j++) {
      if (increaseNumber < response.length) {
        resThree.push(response[j])
      }
    }
    return resThree
  } catch (e) {
    return false
  }
}

export const getlesslist = async (increaseNumber) => {
  try {
    const res = store.getters['getCoaches']
    const response = res
    const resThree = []
    for (let j = 0; j < increaseNumber + 3; j++) {
      resThree.push(response[j])
      if (j > response.length) {
      }
    }
    return resThree
  } catch (e) {
    return false
  }
}

export const addplayer = async (data) => {
  try {
    const res = await axios.post(
      `${config.REST_API_URL}/accounts/addcoachlist`,
      data,
    )
    // const resOne = await axios.get(
    //   `${config.REST_API_URL}/accounts/getcoachlist/1`,
    // )
    // const response = resOne.data.coach_list.reverse()
    // store.commit('setCoaches', response)
    // await getAgain()
    return true
  } catch (e) {
    return false
  }
}
export const getAgain = async (increaseNumber) => {
  try {
    const res = await axios.get(
      `${config.REST_API_URL}/accounts/getcoachlist/1`,
    )
    const response = res.data.coach_list.reverse()
    store.commit('setCoaches', response)
    const resThree = []
    for (let j = 0; j < increaseNumber + 3; j++) {
      if (increaseNumber < response.length) {
        resThree.push(response[j])
      }
    }
    return resThree
  } catch (e) {
    return e
  }
}
