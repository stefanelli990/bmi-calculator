<template>
    <div class="bg-white rounded-2xl shadow-md shadow-black/5  mx-auto max-w-md px-4 w-full pt-10 pb-14 md:px-8">
        <AppHeader/>
        <AppForm @submit-bmi="submitBmi"/>
      
            <AppModal :is-visible="modalIsVisible" @close-modal="closeModal" :bmi="bmiResult" :advice="adviceText"/>
     
    </div>
</template>

<script setup>

import { computed, ref } from 'vue'
import AppForm from './AppForm.vue'
import AppHeader from '../components/AppHeader.vue'
import AppModal from './AppModal.vue'

const modalIsVisible = ref(false)
const bmiResult = ref(null)

const submitBmi = (bmiVal) => {
    modalIsVisible.value = true
    bmiResult.value = bmiVal
    console.log(bmiResult)
}

const closeModal = () => {
    modalIsVisible.value = false
}

const adviceText = computed(() => {
    if(!bmiResult.value || isNaN(bmiResult.value)) {
        return ''
    } else if(bmiResult.value < 18.5) {
        return `<p class="mb-2">BMI less than <strong>18.5</strong> is considered underweight.</p>
                           <p><strong>Advise:</strong> Focus on healthy weight gain through a balanced diet and strength training.</p>`
    } else if(bmiResult.value >= 18.5 && bmiResult.value <= 24.9) {
        return `<p class="mb-2">BMI between <strong>18.5</strong> and <strong>24.9</strong> is considered healthy.</p>
                           <p><strong>Advise:</strong> Maintain your weight by staying active and eating a balanced diet.</p>`
    } else if(bmiResult.value >= 25 && bmiResult.value <= 29.9) {
        return `<p class="mb-2">BMI between <strong>25</strong> and <strong>29.9</strong> is considered overweight.</p>
                           <p><strong>Advise:</strong> Focus on weight loss through dietary changes and regular exercise.</p>`
    } else if(bmiResult.value >= 30 && bmiResult.value <= 34.9) {
        return `<p class="mb-2">BMI between <strong>30</strong> and <strong>34.9</strong> is considered obesity (Class 1).</p>
                           <p><strong>Advise:</strong> Make significant dietary changes and incorporate regular exercise to improve your health.</p>`
    } else if(bmiResult.value >= 35 && bmiResult.value <= 39.9) {
        return `<p class="mb-2">BMI between <strong>35</strong> and <strong>39.9</strong> is considered obesity (Class 2).</p>
                           <p><strong>Advise:</strong> Seek professional help for weight management, including significant dietary changes, regular exercise, and potentially medical treatments or weight loss surgery.</p>`
    } else if(bmiResult.value > 40) {
        return `<p class="mb-2">BMI greater than <strong>40</strong> is considered obesity (Class 3).</p>
                           <p><strong>Advise:</strong> Seek immediate professional help for weight management, including potentially intensive medical interventions.</p>`
    }
})

</script>

<style>



</style>