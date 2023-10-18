<template>
    <div class="bg-black/50 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-start p-4 pt-20">
        
        <div class="max-w-lg bg-white rounded-2xl flex flex-col items-center px-8 py-10 text-center space-y-4">
            <img src="../assets/bmi-illustration.svg" alt="" class="mx-auto w-44">
            <h1 class="text-primaryColor text-4xl font-bold">{{ bmiResult }}</h1>
            <div v-html="output" class="text-lg"></div>
            <AppBtn width="w-44" @click="$emit('close-modal')">Close</AppBtn>
        </div>
    </div>
</template>

<script setup>

import AppBtn from './AppBtn.vue';

const props = defineProps(['bmiResult','output','advice'])

</script>