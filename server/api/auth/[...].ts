import { NuxtAuthHandler } from '#auth'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NuxtAuthHandler({
    secret: useRuntimeConfig().AUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    },
    providers: [
        // @ts-ignore: default does exist
        GoogleProvider.default({
            clientId: useRuntimeConfig().GOOGLE_CLIENT_ID,
            clientSecret: useRuntimeConfig().GOOGLE_CLIENT_SECRET
        }),
        // @ts-ignore: default does exist
        CredentialsProvider.default({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials: any) {
                console.log('authorize', credentials);

                return {
                    id: 1,
                    name: 'John Doe',
                    email: 'johndoe@gmail.com'
                };
            }
        })
    ],
    callbacks: {
        signIn: async (params) => {

            console.log('signIn', params);

            return true;
        }
    }
});