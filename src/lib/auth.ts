import { NextAuthOptions } from 'next-auth';
import db from './db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';

function getGoogleCredentils() {
  const clientId = process.env.GoogleClient;
  const clientSecret = process.env.Google_Client_Secret;

  if (!clientId || clientId.length === 0) {
    throw new Error('No clientID for google provider set');
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('No clientSecret  for google provider set');
  }
  return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentils().clientId,
      clientSecret: getGoogleCredentils().clientSecret,
    }),
  ],
  callbacks: {
   session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({token, user}) {
      const dbUser = await db.
    }
  },
};
