import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { SignOut } from '../components/SignOut';
import UserAvatar from '../components/UserAvatar';

const Admin = async () => {
  const session = await auth();
  if (!session) redirect('/register');

  return (
    <div className={'flex flex-col min-h-screen justify-center items-center gap-6'}>
      <h2 className={'text-3xl'}>Welcome to Admin Session</h2>
      <UserAvatar className="rounded-full" dim={80} />
      <SignOut />
    </div>
  );
};

export default Admin;
