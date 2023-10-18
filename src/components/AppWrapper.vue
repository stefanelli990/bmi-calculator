<template>
    <div class="bg-white rounded-2xl shadow-md shadow-black/5  mx-auto max-w-md px-8 pt-10 pb-14 mt-20">
        <AppHeader/>
        <AppToggle @toggle="toggleForm" :label="formMetricIsVisible ? 'US Units' : 'Metric Units'"/>
        <AppFormMetric v-if="formMetricIsVisible" @submit-metric="submitMetric"/>
        <AppFormUs v-else/>
        <AppModal v-show="modalIsVisible" @close-modal="closeModal" :bmi-result="bmi" :output="bmiOutput"/>
    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import AppFormMetric from './AppFormMetric.vue';
import AppFormUs from './AppFormUs.vue';
import AppHeader from './AppHeader.vue';
import AppToggle from './AppToggle.vue';
import AppModal from './AppModal.vue';

const formMetricIsVisible = ref(true)
const modalIsVisible = ref(false)
const bmi = ref(null)
const bmiOutput = ref(null)


const toggleForm = () => {
    formMetricIsVisible.value = !formMetricIsVisible.value
}

const submitMetric = (metric) => {
    modalIsVisible.value = true
    bmi.value = metric
    console.log(bmi.value)
}


const closeModal = () => {
    modalIsVisible.value = false
}


watchEffect(() => {
    if(bmi.value < 18.5) {
        bmiOutput.value = `<p class="mb-2">BMI less than <strong>18.5</strong> is considered underweight.</p>
                           <p><strong>Advise:</strong> Focus on healthy weight gain through a balanced diet and strength training.</p>`
    } else if(bmi.value >= 18.5 && bmi.value <= 24.9) {
        bmiOutput.value = `<p class="mb-2">BMI between <strong>18.5</strong> and <strong>24.9</strong> is considered healthy.</p>
                           <p><strong>Advise:</strong> Maintain your weight by staying active and eating a balanced diet.</p>`
  
    } else if(bmi.value >= 25 && bmi.value <= 29.9) {
        bmiOutput.value = `<p class="mb-2">BMI between <strong>25</strong> and <strong>29.9</strong> is considered overweight.</p>
                           <p><strong>Advise:</strong> Focus on weight loss through dietary changes and regular exercise.</p>`
        
    } else if(bmi.value >= 30 && bmi.value <= 34.9) {
        bmiOutput.value = `<p class="mb-2">BMI between <strong>30</strong> and <strong>34.9</strong> is considered obesity (Class 1).</p>
                           <p><strong>Advise:</strong> Make significant dietary changes and incorporate regular exercise to improve your health.</p>`
     
    } else if(bmi.value >= 35 && bmi.value <= 39.9) {
        bmiOutput.value = `<p class="mb-2">BMI between <strong>35</strong> and <strong>39.9</strong> is considered obesity (Class 2).</p>
                           <p><strong>Advise:</strong> Seek professional help for weight management, including significant dietary changes, regular exercise, and potentially medical treatments or weight loss surgery.</p>`
         
    } else if(bmi.value > 40) {
        bmiOutput.value = `<p class="mb-2">BMI greater than <strong>40</strong> is considered obesity (Class 3).</p>
                           <p><strong>Advise:</strong> Seek immediate professional help for weight management, including potentially intensive medical interventions.</p>`
        
    }
})



</script>