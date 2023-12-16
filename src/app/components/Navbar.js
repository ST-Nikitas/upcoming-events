import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
    <button className='btn'>SHOPPEAL</button>
      <ul>
        <li>
          <Link href="/">
            ForCompanies
          </Link>
        </li>
        <li>
          <Link href="/about">
            For Mentor
          </Link>
        </li>
        <li>
          <Link href="/contact">
            About us
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact us
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Login
          </Link>
        </li>
      </ul>
    </nav>
   
  );
};

export default Navbar;
