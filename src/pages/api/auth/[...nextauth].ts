import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { Account, Awaitable, NextAuthOptions, Profile, User, } from 'next-auth';
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
        // async jwt(token: JWT, account: Account, user: User) {
        //     console.log('jwt', token, account, user);
        //     if (account ?.access_token) {
        //         token.accessToken = account.access_token;
        //     }
        //     return account ? { ...token, ...account } : token;
        // }
        async signIn(user: User, account: Account, profile: Profile) {
            console.log("We will do api call here!");
            await sleep(1000);
            console.log("sign in", user, account, profile);
            console.log("Api call main be success or faliure based on api call and we will retrun true or false based on that!");
            return true;
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