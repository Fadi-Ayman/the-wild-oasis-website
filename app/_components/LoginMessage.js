function LoginMessage() {
  return (
    <div className='grid bg-primary-800 size-full min-h-[200px] '>
      <p className='text-center text-xl py-12 self-center'>
        Please
        <a href='/login' className='underline mx-2 text-accent-500'>
          login
        </a>
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
