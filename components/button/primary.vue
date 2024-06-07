<template>
    <button :class="rounded ? 'rounded-full' : 'rounded-md'" :disabled="disabled" class="
    bg-button-800 hover:bg-button-900 text-white px-4 py-2
    dark:bg-button-900 dark:hover:bg-button-800
    transition duration-300 ease-in-out
    disabled:opacity-50 disabled:cursor-not-allowed
    " @click="$emit('click')">
        <slot />
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    rounded: {
        type: Boolean,
        default: true
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

</script>