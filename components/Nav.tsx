import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          color: red;
        }
      `}</style>
    </>
  );
};

export default Nav;
