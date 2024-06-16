<template>
    <VeeForm v-slot="{ values, meta: formMeta }" :initial-values="initialValues" :validation-schema="schema"
        class="flex flex-col gap-7">
        <button @click="signInWithGithub($event)">
            Sign in with Github
        </button>

        <FieldInput name="email" type="email" placeholder="Your Email" />

        <button @click="onSubmit($event, values)" :rounded="true" :disabled="!formMeta.valid">
            sign in
        </button>
    </VeeForm>
</template>

<script setup lang="ts">
import { object, string } from 'yup'

const { signIn } = useAuth()

const initialValues = {
    email: '',
}

const schema = object({
    email: string().email().required("Email is required"),
})


const onSubmit = async (e: any, values: any) => {
    e.preventDefault()

    await signIn('credentials', { username: values.email })
}

const signInWithGithub = async ($event: Event) => {
    $event.preventDefault()

    await signIn('github')
}


</script>