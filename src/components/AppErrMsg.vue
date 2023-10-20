<template>
    <span class="text-red-500">{{ props.errTxt }}</span>
</template>

<script setup>

const props = defineProps(['errTxt'])

</script>