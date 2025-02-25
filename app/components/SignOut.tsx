import { Button } from '@/components/ui/button';
import { FaSignOutAlt } from 'react-icons/fa';
import { handleSignOut } from '../lib/server-actions';

export function SignOut() {
  return (
    <form action={handleSignOut}>
      <Button className={''} type="submit">
        <FaSignOutAlt /> Sign Out
      </Button>
    </form>
  );
}
