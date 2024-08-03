"use client"
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Aluno } from '../types/types'
import { useRouter } from 'next/navigation'

function AddNewAlunoComponent() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Aluno>()
  const router = useRouter()

  const onSubmit: SubmitHandler<Aluno> = (data) => {  
    try {
      const alunosString = localStorage.getItem('alunos');
      let alunos: Aluno[] = [];
  
      if (alunosString) {
        alunos = JSON.parse(alunosString);
      }
      alunos.push(data);
  
      localStorage.setItem('alunos', JSON.stringify(alunos));
      
      reset();
      alert('Aluno adicionado com sucesso!');
      router.push('/aluno/list');
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full h-screen justify-center items-center'>
        <div className='flex flex-col gap-24 w-[400px] h-[500px] bg-slate-300 bd rounded items-center'>
          <h1 className='text-[19px] mt-7 ml-2'>Adicionar Aluno</h1>
          <div className='flex flex-col  items-center gap-5 w-full h-full'>
            <input
              type="text"
              placeholder="Nome"
              className='w-[320px] p-1 border rounded'
              {...register("nome", { 
                required: true
              })}
            />
            {errors.nome && <span className='text-red-500'>Por favor digite seu nome</span>}
            <input
              type="text"
              placeholder="Email"
              className='w-[320px] p-1 border rounded'
              {...register("email", { required: true })}
            />
            {errors.email && <span className='text-red-500'>Por favor digite seu email</span>}
            <input
              type="number"
              placeholder="Idade"
              className='w-[320px] p-1 border rounded'
              {...register("idade", { required: true })}
            />
            {errors.idade && <span className='text-red-500'>Por favor digite sua idade</span>}
            <button
              className='w-[320px] p-1 border rounded bg-black text-white'
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </div>
    </form>
  )
}

export default AddNewAlunoComponent