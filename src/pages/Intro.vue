<script setup>
import SlideUpTransisiton from '../components/silde/SlideUpTransisiton.vue';
</script>
<template>
    <div class="flex h-screen">
        <div class="flex flex-col justify-start max-w-4xl px-6 m-auto gap-7 py-8 md:py-2 md:pr-8">
            <SlideUpTransisiton>
                <h5 class="text-2xl font-medium text-cyan-400">Hi, My Name Is Zulfikar Hidayatullah</h5>
            </SlideUpTransisiton>

            <SlideUpTransisiton>
                <h1 class="text-6xl font-bold leading-tight text-slate-100">Web Developer That Bring
                    Your Idea To Life</h1>
            </SlideUpTransisiton>
            <SlideUpTransisiton>
                <h5 class="max-w-xl mb-4 text-2xl leading-tight font-base text-slate-400">I’m Front End and Back End
                    Developer,
                    That focused on responsive design and accessibility</h5>
            </SlideUpTransisiton>
            <button
                class="px-8 py-4 transition duration-150 ease-in-out border-2 rounded shadow-md border-cyan-400 w-fit brightness-125 shadow-cyan-500/30 drop-shadow-md hover:bg-cyan-900/20 hover:shadow-lg hover:shadow-cyan-500/20">
                <span class="text-xl font-normal text-cyan-400 ">My Resume</span>
            </button>
        </div>
    </div>
</template>