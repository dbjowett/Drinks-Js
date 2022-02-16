import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import FacebookProvider from 'next-auth/providers/facebook';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0'
    })
    // FacebookProvider({
    //   client_id: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // })
  ],
  theme: {
    colorScheme: 'dark',
    brandColor: '#e0b77d'
  },
  jwt: {
    encryption: true
  },
  secret: process.env.GOOGLE_SECRET,
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin';
      return token;
    },
    redirect: async (url, _baseUrl) => {
      if (url === '/user') {
        return Promise.resolve('/');
      }

      return Promise.resolve('/');
    }
  }
});
