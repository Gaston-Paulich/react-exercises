
import {useState} from 'react'
import { AgregarTarea } from './components/AgregarTarea'

const Item = ({nombre, visto}) => {

    return(
        <li>
        {nombre}
        {visto ? "✅" : "⛔"}
        </li>

    )

}



 export const App = () => {

    let listadoTareas = [
        {nombre: "Compras en la carnicería" , visto: true},
        {nombre: "Lavar el auto" , visto: false},
        {nombre: "Compras en el vivero" , visto: false},
        {nombre: "Compras en la granja" , visto: true},
        {nombre: "Compras en la coto" , visto: true},
        {nombre: "Codear 1 hora react" , visto: true},

    ]
    
    
    
    const [arreglo, setArreglo] = useState(listadoTareas)
    
    const addTarea = () => {
        setArreglo([...arreglo,{nombre: "colgar la luz del indoor", visto: false}])
    }
    
    return (

        <>
        
           <AgregarTarea></AgregarTarea>
        
           <ol>
                {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item>  )}
           
           </ol>

          
        
        </>
    

    )
}

