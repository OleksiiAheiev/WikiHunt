import Link from 'next/link';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className='bg-gradient-to-br from-slate-500 to-slate-300 p-4 flex justify-between flex-col md:flex-row
     sticky top-0 drop-shadow-xl'>
      <h1 className='text-3xl font-bold text-slate-700 grid place-content-center mb-2 md:mb-0'>
        <Link href='/'>WikiHunt</Link>
      </h1>
      <Search />
    </nav>
  )
}
