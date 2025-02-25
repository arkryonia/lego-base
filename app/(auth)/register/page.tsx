import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import SignInWithGoogle from '../../components/SignInWithGoogle';

const Register = () => {
  return (
    <div className={'flex min-h-screen justify-center items-center'}>
      <Card className={'w-1/3 p-10'}>
        <CardHeader>
          <CardTitle className={'text-center text-4xl'}>Connection</CardTitle>
        </CardHeader>
        <CardContent className={'space-y-6'}>
          <SignInWithGoogle />
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;

function RegisterForm() {
  return (
    <>
      <div className={'flex justify-between h-full items-center text-xl'}>
        <div className={'w-2/6'}>
          <Separator />
        </div>
        <div className={'w-2/3 text-center'}> Or continue with email</div>
        <div className={'w-2/6'}>
          <Separator />
        </div>
      </div>
      <form
        className={'space-y-6'}
        action={async formData => {
          'use server';
          await signIn('credentials', formData);
        }}
      >
        <div>
          <label htmlFor="email"></label>
          <Input name="email" id="email" type="email" className={'p-7'} placeholder={'Email'} />
        </div>
        <div>
          <label htmlFor="password"></label>
          <Input
            name="password"
            id="password"
            type="password"
            className={'p-7'}
            placeholder={'Password'}
          />
        </div>
        <Button type="submit" className={'p-7 w-full text-xl'}>
          Sign Up
        </Button>
      </form>
    </>
  );
}

function AlreadyExitButton() {
  return (
    <p className={'text-center'}>
      Already have an account ?{' '}
      <Link href={'/login'} className={'text-blue-400 font-bold'}>
        Sign In
      </Link>
    </p>
  );
}
