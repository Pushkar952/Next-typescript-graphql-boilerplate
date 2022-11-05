import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

    ],
    session: { strategy: 'jwt' },
    debug: false,
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            if (account ?.access_token) {
                token.accessToken = account.access_token;
            }
            console.log('jwt', token, user, account, profile, isNewUser);

            return token;
        },
        async signIn({ user, account, profile, email, credentials }) {


            await sleep(1000);
            account.access_token = "123456789";
            console.log("sign in", user, account, profile, email, credentials);
            return true;
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken

            console.log("callback session", session, token, user);
            return session;
        }
    }

};

const Auth = async (req: NextApiRequest, res: NextApiResponse) => {
    return NextAuth(req, res, options);
};


export default Auth;


export const sleep = async (waitTime: number) =>
    new Promise(resolve =>
        setTimeout(resolve, waitTime));