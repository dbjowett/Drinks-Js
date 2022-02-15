import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

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
    })
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
