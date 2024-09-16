import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOutAction } from '../_lib/actions';

function SignOutButton() {
  return (
    <form action={signOutAction}>
          <button className='py-3 w-full sm:px-10 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold lg:text-primary-200 justify-center lg:bg-inherit bg-red-500 text-white'>
      <ArrowRightOnRectangleIcon className='h-5 w-5 lg:text-primary-600 font-bold' />
      <span className="hidden lg:inline-block">Sign out</span>
    </button>
    </form>
  );
}

export default SignOutButton;
