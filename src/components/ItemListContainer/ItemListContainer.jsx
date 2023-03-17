import React, { useEffect, useState } from 'react'
import { gFetch } from '../../utils/gFetch'


const ItemListContainer = ({greeting}) => {
  const [productos, setProductos]=useState([])
  const [loading, setLoading]= useState(true)

  useEffect(()=>{
    gFetch()
    .then(res =>{
      setProductos(res)

    })
    .catch(error =>console.log(error))
    .finally(() => setLoading(false))
  },[])
  console.log(productos)

  return (
   /*  <h1>
      {greeting}
    </h1> */
    <div>
      {loading ? <h3 className='bg-warning text-center'>Cargando...</h3>
       :
       productos.map(producto =><div key={producto.id} className='card w-25 mt-2'>
                               <div className= 'card-header'>
                                   Nombre: {producto.name}
                                </div>
                                <div className= 'card-body'>
                                  <img src={producto.foto} alt="foto" className='w-50'/>
                                </div>
                                <div className='card-footer '>
                                    Categoria: {producto.categoria}<br/>
                                    Precio: $ {producto.precio}<br/>
                                    Stock: {producto.stock}<br/>
                                </div>
                                </div>)}
    </div>
  )
}

export default ItemListContainer