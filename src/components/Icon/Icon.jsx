import { memo } from 'react'
import {FaPen,FaTimes,FaRegCircle} from 'react-icons/fa'

const Icon=({name})=>{
    if(name=='circle'){
        return <FaRegCircle/>
    }else if(name=='cross'){
        return <FaTimes /> 
    }else{
        return <FaPen/>
    }
}

export default memo(Icon)