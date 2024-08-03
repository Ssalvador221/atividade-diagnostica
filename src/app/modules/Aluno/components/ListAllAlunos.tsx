"use client"

import { useEffect, useState } from "react"
import { Aluno } from "../types/types"

function ListAllAlunos() {

  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    const alunosString = localStorage.getItem('alunos')
    if (alunosString) {
      setAlunos(JSON.parse(alunosString))
    }
  }, [])

  const onClickRemove = (email: string) => {
    try {
        const alunosString = localStorage.getItem('alunos');
        if (!alunosString) {
          console.log('Nenhum aluno encontrado para remoção.');
          return;
        }
    
        let alunos: Aluno[] = JSON.parse(alunosString);
    
        alunos = alunos.filter(aluno => aluno.email !== email);
    
        localStorage.setItem('alunos', JSON.stringify(alunos));
    
        alert('Aluno removido com sucesso!');
        window.location.reload();
      } catch (error) {
        console.log('Erro ao remover aluno:', error);
      }
  }

  return (
    <div className="flex justify-center mt-7">
        <table className='w-[700px] border-collapse'>
          <thead className="border rounded  bg-slate-300">
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {alunos.map((aluno: any) => (
            <>
              <tr key={aluno.email}>
                <td>{aluno.nome}</td>
                <td>{aluno.email}</td>
                <td>{aluno.idade}</td>
              </tr>
                <button className="text-red-500" onClick={() => onClickRemove(aluno.email)}>Remover</button>
            </>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default ListAllAlunos