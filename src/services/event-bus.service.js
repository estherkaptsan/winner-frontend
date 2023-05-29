export const SHOW_MSG = 'show-msg'

function createEventEmitter() {
    const listenersMap = {}
    return {
        on(evName, listener) {
            listenersMap[evName] = (listenersMap[evName]) ? [...listenersMap[evName], listener] : [listener]
            return () => {
                listenersMap[evName] = listenersMap[evName].filter(func => func !== listener)
            }
        },
        emit(evName, data) {
            if (!listenersMap[evName]) return
            listenersMap[evName].forEach(listener => listener(data))
        }
    }
}

export const eventBus = createEventEmitter()

export function showUserMsg(msg) {
    eventBus.emit('show-msg', msg)
}

export function showSuccessMsg(txt) {
    showUserMsg({ txt, type: 'success' })
}
export function showErrorMsg(txt) {
    showUserMsg({ txt, type: 'error' })
}


export function emitToFilter(txt) {
    console.log('im from event bus', txt)
    eventBus.emit('setFeltirBy', txt)
}
export function getFilterFrom(txt) {

    console.log('got your event bus dude', txt)
    eventBus.on('setFeltirBy', txt)
}

