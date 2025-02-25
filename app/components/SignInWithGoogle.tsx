import { Button } from '@/components/ui/button';
import { FaGoogle } from 'react-icons/fa';
import { handleSignInWithGoogle } from '../lib/server-actions';

export default function SignInWithGoogle() {
  return (
    <form action={handleSignInWithGoogle}>
      <Button type={'submit'} className={'w-full p-7 text-xl'} variant={'outline'}>
        <FaGoogle /> Continue with Github
      </Button>
    </form>
  );
}

const Loading = () => {
  return <div>Loading...</div>;
};
