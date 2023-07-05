'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
  }

  return (
    <form className='w-50 flex justify-center md:justify-between'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='text-white bg-slate-600 p-2 w-80 text-xl rounded-[50px] px-5'
        placeholder='Search'
      />
      <button className='px-3 py-2 text-xl rounded-[50px] bg-slate-600 ml-2 font-bold'>
        🔍
      </button>
    </form>
  )
}
