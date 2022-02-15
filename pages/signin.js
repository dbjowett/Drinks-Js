// import { useSession, signIn, signOut } from 'next-auth/react';
// import { useEffect } from 'react';

// export default function SignInPage() {
//   const { data: session, status } = useSession();
//   console.log(status);

//   if (session) {
//     console.log(session);
//     return (
//       <>
//         Signed in as a user.
//         <button onClick={() => signOut()}>Sign Out</button>
//       </>
//     );
//   }
//   return (
//     <div>
//       <div>Please Sign In</div>
//       <button onClick={() => signIn()}>Sign In</button>
//     </div>
//   );
// }
