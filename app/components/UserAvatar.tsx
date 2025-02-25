import { auth } from '@/auth';
import Image from 'next/image';

interface UserAvatarProps {
  className?: string;
  dim: number;
}

export default async function UserAvatar({ className, dim }: UserAvatarProps) {
  const session = await auth();

  if (!session?.user) return null;

  if (!session.user.image) return null;

  console.log(session.user.image);

  return (
    <div>
      <Image
        className={className}
        width={dim}
        height={dim}
        src={session.user.image}
        alt="User Avatar"
      />
    </div>
  );
}
