/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom'

export function ClientesCards({clientes}){

    const navigate = useNavigate();

    return (
         <div className="bg-zinc-800 p-3 hover:bg-zinc-700
         hover:cursor-pointer"
    
            onClick={()=>{
                 navigate('/cliente_crud/'+clientes.id)
            }}
            
            >
            <p className='text-slate-400'>{clientes.nombrecompleto}</p>
            <p className='text-slate-400'>{clientes.email}</p>
            <p className='text-slate-400'>{clientes.fechanacimiento}</p>
            <p className='text-slate-400'>{clientes.fechacreacion}</p>
            <hr />
        </div>)
}