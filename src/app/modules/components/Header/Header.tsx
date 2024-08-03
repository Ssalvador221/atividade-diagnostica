"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {
  const router = useRouter()

  return (
    <div className="flex items-center w-full h-20 bg-slate-300">
      <p className="ml-5 w-1/3" >Atividade Diagnostica</p>
      <div className='flex flex-row justify-end w-full mr-5'> 
        <ul className='flex flex-row gap-5 cursor-pointer'>
          <a onClick={() => router.push('/')}>Home</a>
          <a onClick={() => router.push('/aluno/list')}>Alunos</a>
          <a onClick={() => router.push('/aluno/add')}>Adicionar Alunos</a>
        </ul>
      </div>
    </div>
  )
}

export default Header