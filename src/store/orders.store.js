// import { orderService } from '../services/order.service.local'
import { orderService } from '../services/order.service'
import { userStore } from '../store/user.store'

export const ordersStore = {
    state: {
        orders: [],
    },

    getters: {
        buyerOrders({ orders }) {
            console.log({ orders })
            console.log(orders)
            const filteredOrders = orders.filter(
                order => order.buyer._id === userStore.state.loggedinUser._id

            )
            console.log('filteredOrders', filteredOrders);
            return filteredOrders
        },

        sellerOrders({ orders }) {

            const filteredOrders = orders.filter(
                order => order.seller._id === userStore.state.loggedinUser._id
            )
            console.log('filteredOrders', filteredOrders);
            return filteredOrders
        },
    },

    // orders({ orders }) {
    //     return orders
    // },
    mutations: {
        saveOrder(state, { order }) {
            console.log('order', order._id);
            const idx = state.orders.findIndex(o => o._id === order._id)
            if (idx !== -1) {
                state.orders.splice(idx, 1, order)
                return
            }
            state.orders.unshift(order)
        },

        setOrders(state, { orders }) {
            state.orders = orders
        },

        removeOrder(state, { orderId }) {
            state.orders = state.orders.filter(order => order._id !== orderId)
        },
    },

    actions: {
        async removeOrder(context, { orderId }) {
            try {
                await orderService.remove(orderId)
                context.commit({ type: 'removeOrder', orderId })
            } catch (err) {
                console.log('orderStore: Error in removeOrder', err)
                throw err
            }
        },

        async saveOrder(context, { order }) {
            console.log('order', { order });

            try {
                order = await orderService.save(order);
                context.commit({ type: 'saveOrder', order })
                return order
            } catch (err) {
                console.log('orderStore: Error in addOrder', err)
                throw err
            }
        },
        async loadOrders(context) {
            try {
                const orders = await orderService.query()
                console.log(orders);

                context.commit({ type: 'setOrders', orders })
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err)
                throw err
            }
        },
    }
}
