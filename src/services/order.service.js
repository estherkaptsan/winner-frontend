import { httpService } from './http.service'

import { userService } from './user.service'

import { store } from '../store/store'
import { socketService } from './socket.service'

// const ORDER_STORAGE_KEY = 'order'
// const orderChannel = new BroadcastChannel('orderChannel')

const ORDER_URL = 'order/'

// ;(() => {
//   setTimeout(() => {
//     socketService.on('new-order-seller', (order) => {
//       store.commit({ type: 'saveOrder', order })
//     })

//     socketService.on('new-order-buyer', (order) => {
//       store.commit({ type: 'saveOrder', order })
//     })

//     socketService.on('order-changed-status', (order) => {
//       store.commit({ type: 'saveOrder', order })
//     })
//   }, 0)
// })()

export const orderService = {
  save,
  query,
  getById,
  remove,
}

async function query() {
  return httpService.get(ORDER_URL)
  // return await storageService.query(ORDER_STORAGE_KEY)
  // var orders = await storageService.query(ORDER_STORAGE_KEY)
}
async function getById(orderId) {
  return httpService.get(ORDER_URL + orderId)
  // var order = await storageService.get(ORDER_STORAGE_KEY, orderId)
  // return order
}
async function remove(orderId) {
  await httpService.delete(ORDER_URL + orderId)
  // await storageService.delete('order', orderId)
  //   orderChannel.postMessage({type: 'removeOrder', orderId})
}
async function save(order) {
    console.log(order)
  var savedOrder
  if (order._id) {
    // savedOrder = await storageService.put(ORDER_STORAGE_KEY, order)
    savedOrder = await httpService.put(ORDER_URL + order._id, order)
  } else {
    // Later, owner is set by the backend
    order.buyer = await userService.getLoggedinUser()
    // savedOrder = await storageService.post(ORDER_STORAGE_KEY, order)
    savedOrder = await httpService.post(ORDER_URL, order)
  }
  return savedOrder
}