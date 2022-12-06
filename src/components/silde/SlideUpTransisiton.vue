<script>
export default {
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.show = true; // might need this.$nextTick
    }
}
</script>

<template>
    <Transition name="slide-fade">
        <div v-if="show">
            <slot></slot>
        </div>
    </Transition>
</template>

<style>
.slide-fade-enter-active {
    transition: all 2s ease-out;
}

.slide-fade-leave-active {
    transition: all 2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translatey(20px);
    opacity: 0;
}
</style>