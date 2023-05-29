<template>
    <VDropdown>
        <div class="status-col flex column">
            <div class="status flex" :class="className(order.status)">
                <span class="regular">{{ order.status }}</span>
            </div>
        </div>
        <template #popper>
            <div class="dash-options">
                <button @click="changeStatus('Completed', order)" class="completed dash-options-btn">Completed</button>
                <button @click="changeStatus('Progress', order)" class="Progress dash-options-btn">Progress</button>
                <button @click="changeStatus('Rejected', order)" class="rejected dash-options-btn">Rejected</button>
            </div>

        </template>
    </VDropdown>
</template>
<script>
export default {
    props: {
        order: Object
    },
    data() {
        return {

            setOpen: false,
        }
    },
    methods: {
        className(str) {
            if (str === 'Pending') return 'pending'
            if (str === 'Completed') return 'completed'
            if (str === 'Progress') return 'Progress'
            if (str === 'Rejected') return 'rejected'
        },


        changeStatus(status, order) {
            console.log('order', status, order);
            event.stopPropagation()
            this.$emit('change', status, order)
            // this.toggleSet()
        },
    },
}
</script>

<style>
.dash-options {
    display: flex;
    flex-direction: column;
    padding: .5em;
}

.pending {
    color: #62646a;
}

.Progress {
    color: #ffbe5b;
}

.completed {
    background-color: none;
    color: #1dbf73;
}

.rejected {
    color: #c43333;
}

.completed:hover {
    cursor: pointer;
}

.rejected:hover {
    cursor: pointer;
}

.Progress:hover {
    cursor: pointer;
}

.dash-options-btn:first-child {
    color: white;
    background-color: #1dbf73;
    border-radius: 4px;
}

.dash-options-btn:nth-child(2) {
    color: white;
    background-color: #ffbe5b;
    border-radius: 4px;
}

.dash-options-btn:nth-child(3) {
    color: white;
    background-color: #c43333;
    border-radius: 4px;
} 




</style>


