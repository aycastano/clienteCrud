import axios from 'axios'

const clientesApi = axios.create({
    baseURL:'http://localhost:8000/cliente_crud/api/v1/cliente_crud/'
})

export const getAllClientes = () => clientesApi.get('/');
export const getcliente = (id) => clientesApi.get(`/${id}/`);
export const createCliente = (cliente) => clientesApi.post('/',cliente);
export const deleteCLiente = (id) => clientesApi.delete(`${id}` );
export const updateCliente = (id,cliente) => clientesApi.put(`${id}/`,cliente);