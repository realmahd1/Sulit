import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="py-12">
      <img className="w-[8.5rem] h-[8.5rem] bg-black dark:rounded-none rounded-full mb-2 dark:-mb-4 dark:bg-transparent block mx-auto" src='/images/logo.png' alt="logo" />
      <p className="ssm:text-2xl text-xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
