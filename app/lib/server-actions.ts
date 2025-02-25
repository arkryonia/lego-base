import { signIn, signOut } from '@/auth';

export const handleSignInWithGoogle = async () => {
  'use server';
  await signIn('google', { redirectTo: '/admin' });
};

export const handleSignOut = async () => {
  'use server';
  await signOut();
};
