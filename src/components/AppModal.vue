<template>
    <div>
        <Transition name="backdrop">
            <div class="bg-black/50 fixed top-0 bottom-0 left-0 right-0 min-h-screen flex justify-center items-center p-4" v-if="isVisible"></div>
        </Transition>
        <Transition name="modal">
            <div class="fixed max-w-[550px] flex flex-col items-center w-[90%] bg-white rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-10 text-center space-y-4 md:px-8" v-if="isVisible">
                <img src="../assets/bmi-illustration.svg" alt="" class="mx-auto w-48">
                <h1 class="text-primaryColor text-4xl font-bold">{{ bmi }}</h1>
                <div v-html="advice" class="text-lg"></div>
                <AppBtn size="w-44 h-12" @click="$emit('close-modal')">Close</AppBtn>
            </div>
        </Transition>
    </div>
</template>

<script setup>

import AppBtn from './AppBtn.vue';

const props = defineProps(['bmi','advice','isVisible'])

</script>

<style>

/* modal backdrop */

.backdrop-enter-from {
    opacity: 0;
}
.backdrop-enter-to {
opacity: 1;

}
.backdrop-leave-from {
opacity: 1;

}
.backdrop-leave-to {
opacity: 0;

}
.backdrop-enter-active,
.backdrop-leave-active {
transition: all 0.2s ease;
}

/* actual modal */

.modal-enter-from,
.modal-leave-to {
    top: -100%;
}
.modal-enter-to,
.modal-leave-from  {
    top: 50%;
}
.modal-enter-active,
.modal-leave-active {
    transition: all 0.5s ease; 
}

</style>