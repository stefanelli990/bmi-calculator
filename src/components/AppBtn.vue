<template>
    <button class="p-4 bg-primaryColor rounded-xl text-white flex justify-center items-center font-medium space-x-2 hover:opacity-90" :class="props.width">
        <slot></slot>
    </button>
</template>

<script setup>

const props = defineProps(['width'])

</script>