/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom'

export function ClientesCards({clientes}){

    const navigate = useNavigate();

    return (
       <div className="flex justify-between bg-zinc-700 hover:bg-zinc-200  hover:cursor-pointer">
           <div className=" "
    
            onClick={()=>{
                 navigate('/cliente_crud/'+clientes.id)
            }}
          
            >
            <p className='text-slate-400'>{clientes.nombrecompleto}</p>
            <p className='text-slate-400'>{clientes.email}</p>
            <p className='text-slate-400'>{clientes.fechanacimiento}</p>
            <p className='text-slate-400'>{clientes.fechacreacion}</p>
            <hr />
            
        </div>
        <div className=''    onClick={()=>{
                 navigate('/cliente_crud/'+clientes.id)
            }}>
          <img  className='h-10 w-10 mt-8 mr-8' src="/src/resources/editar.png"/>
        </div>
        
       </div>)
         
}