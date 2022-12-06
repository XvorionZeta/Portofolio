<template>
    <div class="flex justify-center min-h-screen mt-[60vh] md:mt-[10vh] py-20">
        <div class="flex flex-col items-center justify-center w-full gap-10 px-6 md:px-20 max-w-7xl">
            <h3 class="mb-10 text-3xl font-bold text-slate-100 text-center md:text-left">Some Of My Projects</h3>
            <!-- Project 1 -->
            <div class="relative grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <img src="projects/sirine.png"
                    class="z-10 flex-shrink-0 max-w-xs md:max-w-lg border-4 rounded-lg shadow-md border-slate-900 drop-shadow-md mx-auto sm:max-w-sm">
                <div
                    class="md:absolute z-20 flex flex-col md:items-end justify-end gap-2 md:mt-8 md:right-16 items-center">
                    <h6 class="text-base font-medium text-cyan-400 brightness-125">Featured Project</h6>
                    <h5
                        class="mb-3 text-xl font-semibold transition duration-300 text-slate-100 brightness-125 hover:text-cyan-400">
                        SIRINE</h5>
                    <div
                        class="flex flex-wrap px-10 py-6 transition duration-200 ease-in-out rounded-md hover:shadow-md bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 drop-shadow-lg shadow-cyan-400/40 hover:shadow-cyan-400/20 hover:brightness-125">
                        <p class="text-sm leading-normal text-slate-300 max-w-[56ch] md:text-end">A Web Based Decision
                            Support
                            System,
                            Monitor your
                            employe performance, quality and dicipline, in real time based on centralized data,
                            automaticly
                            rank their overall performance,<br> say no more
                            to Subjective assessment.</p>
                    </div>
                    <div class="flex justify-between gap-4 mt-4">
                        <span class=" text-slate-300">Laravel</span>
                        <span class=" text-slate-300">Livewire</span>
                        <span class=" text-slate-300">Tailwind</span>
                        <span class=" text-slate-300">Mysql</span>
                        <span class=" text-slate-300">Alpine</span>
                    </div>
                </div>
            </div>
            <!-- Project 2 -->
            <div class="relative grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 md:mt-28">
                <div
                    class="z-20 flex flex-col items-center md:items-start justify-start gap-2 mt-7 order-last md:order-first">
                    <h6 class="text-base font-medium text-cyan-400 brightness-125">Featured Project</h6>
                    <h5
                        class="mb-3 text-xl font-semibold transition duration-300 text-slate-100 brightness-125 hover:text-cyan-400">
                        ANDON</h5>
                    <div
                        class="flex flex-wrap px-10 py-6 transition duration-200 ease-in-out rounded-md hover:shadow-md bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 drop-shadow-lg shadow-cyan-400/40 hover:shadow-cyan-400/20 hover:brightness-125">
                        <p class="text-sm leading-normal text-slate-300 max-w-[56ch] text-start">ANDON are a lean
                            manufacturing system, that served real time data about ongoing stock and proccess of
                            production. it designed to alert operators and managers of problems in real time so that
                            corrective measures can be taken immediately</p>
                    </div>
                    <div class="flex justify-between gap-4 mt-4">
                        <span class=" text-slate-300">Laravel</span>
                        <span class=" text-slate-300">Bootstrap</span>
                        <span class=" text-slate-300">Vanilla JS</span>
                        <span class=" text-slate-300">SQL Server</span>
                    </div>
                </div>
                <img src="projects/andon.png"
                    class="md:absolute z-10 flex-shrink-0 max-w-xs md:max-w-lg border-4 rounded-lg shadow-md drop-shadow-md right-16 border-slate-900 order-first md:order-last mx-auto sm:max-w-sm">
            </div>
            <!-- Project 1 -->
            <div class="relative grid grid-cols-1 md:grid-cols-2 gap-4 mt-28">
                <img src="projects/tjapri.png"
                    class="z-10 flex-shrink-0 max-w-xs md:max-w-lg border-4 rounded-lg shadow-md border-slate-900 drop-shadow-md mx-auto sm:max-w-sm">
                <div
                    class="md:absolute z-20 flex flex-col md:items-end justify-end gap-2 md:mt-8 md:right-16 items-center">
                    <h6 class="text-base font-medium text-cyan-400 brightness-125">Featured Project</h6>
                    <h5
                        class="mb-3 text-xl font-semibold transition duration-300 text-slate-100 brightness-125 hover:text-cyan-400">
                        Tjapri</h5>
                    <div
                        class="flex flex-wrap px-10 py-6 transition duration-200 ease-in-out rounded-md hover:shadow-md bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 drop-shadow-lg shadow-cyan-400/40 hover:shadow-cyan-400/20 hover:brightness-125">
                        <p class="text-sm leading-normal text-slate-300 max-w-[56ch] text-end">Simple E-Commerce website
                            with Cash On Dellivery system, build for community that having trouble to sell their product
                            via Whatsapp, I decied to made some E-Commerce
                            app as platform with only trusted and truly verified user only can sell their product.</p>
                    </div>
                    <div class="flex justify-between gap-4 mt-4">
                        <span class=" text-slate-300">Laravel</span>
                        <span class=" text-slate-300">Livewire</span>
                        <span class=" text-slate-300">Tailwind</span>
                        <span class=" text-slate-300">Mysql</span>
                        <span class=" text-slate-300">Alpine</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>