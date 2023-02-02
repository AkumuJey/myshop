<template>
    <div class="card mt-7 max-w-sm text-center mx-auto">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops..!</p>
        <p class="mt-7">{{ error.message }}</p>
        <div class="flex justify-center gap-4 p-5">
            <button type="buttton" class="btn" @click="back">Back</button>
            <button type="buttton" class="btn" @click="home">Home</button>
        </div>
      </div>
</template>

<script setup>
defineProps(['error'])
const loc = useRouter()
const back = () => {
    loc.go(-1)
}
const home = () => {
    clearError({redirect: '/'})
}
</script>

<style>

</style>