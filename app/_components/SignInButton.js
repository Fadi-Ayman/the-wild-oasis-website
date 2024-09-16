import Image from "next/image";
import { signInWithGoogle } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInWithGoogle}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 lg:px-10 lg:py-4 px-4 py-4 font-medium hover:bg-black/10 duration-200">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}
 
export default SignInButton;
