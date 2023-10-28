<template>
    <div class="bg-white rounded-2xl shadow-md shadow-black/5  mx-auto max-w-md px-4 w-full pt-10 pb-14 md:px-8">
        <AppHeader/>
        <AppForm @submit-bmi="submitBmi"/>
        <AppModal :is-visible="modalIsVisible" @close-modal="closeModal" :bmi-result="bmiResult" :category-result="categoryResult" :category-text="categoryText" :advice-text="adviceText" :category-result-color="categoryResultColor"/>
    </div>
</template>

<script setup>

import { watchEffect, ref } from 'vue'
import AppForm from './AppForm.vue'
import AppHeader from '../components/AppHeader.vue'
import AppModal from './AppModal.vue'

const modalIsVisible = ref(false)
const bmiResult = ref(null)
const categoryResult = ref(null)
const categoryText = ref(null)
const adviceText = ref(null)
const categoryResultColor = ref(null)

const submitBmi = (bmiVal) => {
    modalIsVisible.value = true
    bmiResult.value = bmiVal
    console.log(bmiResult)
}

watchEffect(() => {
    if(bmiResult.value < 18.5) {
        categoryResult.value = "Underweight"
        categoryText.value = "BMI less than 18.5 is considered Underweight."
        adviceText.value = "Focus on healthy weight gain through a balanced diet and strength training."
        categoryResultColor.value = 'text-red-500'
    } else if(bmiResult.value >= 18.5 && bmiResult.value <= 24.9) {
        categoryResult.value = "Healthy"
        categoryText.value = "BMI between 18.5 and 24.9 is considered Healthy."
        adviceText.value = "Maintain your weight by staying active and eating a balanced diet."
        categoryResultColor.value = 'text-green-500'
    } else if(bmiResult.value >= 25 && bmiResult.value <= 29.9) {
        categoryResult.value = "Overweight"
        categoryText.value = "BMI between 25 and 29.9 is considered Overweight."
        adviceText.value = "Focus on weight loss through dietary changes and regular exercise."
        categoryResultColor.value = 'text-yellow-500'
    } else if(bmiResult.value >= 30 && bmiResult.value <= 34.9) {
        categoryResult.value = "Obesity(Class 1)"
        categoryText.value = "BMI between 30 and 34.9 is considered Obesity (Class 1)."
        adviceText.value = "Make significant dietary changes and incorporate regular exercise to improve your health."
        categoryResultColor.value = 'text-red-600'
    } else if(bmiResult.value >= 35 && bmiResult.value <= 39.9) {
        categoryResult.value = "Obesity(Class 2)"
        categoryText.value = "BMI between 35 and 39.9 is considered Obesity (Class 2)."
        adviceText.value = "Seek professional help for weight management, including significant dietary changes, regular exercise, and potentially medical treatments or weight loss surgery."
        categoryResultColor.value = 'text-red-700'
    } else {
        categoryResult.value = "Obesity(Class 3)"
        categoryText.value = "BMI greater than 40 is considered Obesity (Class 3)."
        adviceText.value = "Seek immediate professional help for weight management, including potentially intensive medical interventions."
        categoryResultColor.value = 'text-red-800'
    }
})

const closeModal = () => {
    modalIsVisible.value = false
}

</script>