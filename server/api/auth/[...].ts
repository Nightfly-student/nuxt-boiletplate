import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from '~/server/db';
import GithubProvider from 'next-auth/providers/github'
import { getUserRolesByEmail } from '~/server/db/user';


export default NuxtAuthHandler({
    secret: useRuntimeConfig().AUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    providers: [
        // @ts-ignore: default does exist
        // GoogleProvider.default({
        //     clientId: useRuntimeConfig().GOOGLE_CLIENT_ID,
        //     clientSecret: useRuntimeConfig().GOOGLE_CLIENT_SECRET
        // }),
        // @ts-ignore: default does exist
        GithubProvider.default({
            clientId: useRuntimeConfig().GITHUB_CLIENT_ID,
            clientSecret: useRuntimeConfig().GITHUB_CLIENT_SECRET
        }),
    ],
    callbacks: {
        // If you want to use the role in client components
        async session({ token, session }) {
            if (token) {
                session.user!.roles = token.roles
            }

            return session
        },

        async jwt({ token }) {
            const dbUser = await getUserRolesByEmail(token.email!)

            if (dbUser) {
                token.roles = dbUser
            }

            return token
        },
    }
});