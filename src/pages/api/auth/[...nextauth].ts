import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook";

const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
            client: {
                token_endpoint_auth_method: "client_secret_post",
            },
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        })


    ],
    session: { strategy: 'jwt' },
    debug: false,
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            if (account ?.access_token) {
                token.accessToken = account.access_token;
            }
            console.log('jwt', token);

            return token;
        },
        async signIn({ user, account, profile, email, credentials }) {
            // account.access_token = "123456789";
            user.name = "test";
            account.refresh = true;
            console.log("sign in", user, account, profile, email, credentials);
            return true;
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            console.log('after');

            console.log("callback session", session);
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