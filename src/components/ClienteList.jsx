import {useEffect, useState} from 'react'
import {getAllClientes} from '../api/cliente.api'
import {ClientesCards} from './ClientesCards'


export function ClientesList(){
    const [clientes, setClientes] = useState([]);
    useEffect(() => {


        async function loadclientes(){
            const res = await getAllClientes();
            setClientes(res.data);
        }

    loadclientes();
    },[])
    return<div className='grid grid-cols-1 gap-3'>
        {clientes.map(clientes =>(
           <ClientesCards clientes={clientes} key={clientes.id
        }/>
        ))}
    </div>

}