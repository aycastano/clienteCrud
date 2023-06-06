import  {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {createCliente,deleteCLiente,updateCliente,getcliente} from '../api/cliente.api'
import  {useNavigate, useParams} from 'react-router-dom'
import  {toast} from 'react-hot-toast'
export function ClienteFormPage(){

    const {register,handleSubmit,formState:{
        errors},
    setValue} = useForm();
    const navigate = useNavigate();
    const params = useParams();
   

    const onSubmit = handleSubmit(async data =>{
       if(params.id){
        await updateCliente(params.id,data)
        toast.success('Cliente actualizado exitosamente',{
            position:"bottom-right",
            style:{background:"#101010",
            color:"white"}
        });
       }else{
        await createCliente(data)
        toast.success('Cliente creado exitosamente',{
            position:"bottom-right",
            style:{background:"#101010",
            color:"white"}
        });
        
       }
       navigate("/cliente_crud")
        
    })

    useEffect(()=>{
        async function loadcliente(){
            if(params.id){
                const resp = await getcliente(params.id);
                setValue('nombrecompleto',resp.data.nombrecompleto);
                setValue('email',resp.data.email);
                setValue('fechanacimiento',resp.data.fechanacimiento);
                setValue('fechacreacion',resp.data.fechacreacion);

            }
        }
        loadcliente();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div className='max-w-xl mx-auto'>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Nombre Completo" 
            {...register("nombrecompleto",{required:true})}
            className='bg-zinc-700 p-3 rounded-lg  block w-full mb-3'/>
            {errors.nombrecompleto && <span>this field is required</span>}
            <input type="text" placeholder="Email" 
            {...register("email",{required:true})}
            className='bg-zinc-700 p-3 rounded-lg  block w-full mb-3'/>
            {errors.email && <span>this field is required</span>}
            <input type="text" placeholder="Fecha Nacimiento"
            {...register("fechanacimiento",{required:true})} 
            className='bg-zinc-700 p-3 rounded-lg  block w-full mb-3'/>
            {errors.fechanacimiento && <span>this field is required</span>}
            <input type="text" placeholder="Fecha Creación" 
            {...register("fechacreacion",{required:true})}
            className='bg-zinc-700 p-3 rounded-lg  block w-full mb-3'/>
            {errors.fechacreacion && <span>this field is required</span>}
            <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
        </form>
        {params.id && 
            <div className ="flex justify-end">
            <button onClick={async()=>{
                const accepted =  window.confirm('are you sure?');
                 if(accepted){
                  await deleteCLiente(params.id)
                  toast.success('Cliente eliminado exitosamente',{
                     position:"bottom-right",
                     style:{background:"#101010",
                     color:"white"}
                 });
                  navigate("/cliente_crud")
                }
             }} className='bg-red-500 p-3 rounded-lg w48 mt-3'>Delete</button>
            </div>
        }
    </div>
    )
}