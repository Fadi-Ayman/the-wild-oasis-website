import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="lg:text-3xl text-2xl text-center font-semibold">
        Sign in to access your guest area
      </h2>

      <SignInButton />
    </div>
  );
}
