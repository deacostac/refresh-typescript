import { useEffect, useState } from 'react';
import { reqResApi } from "../api/reqRes"
import { ReqResList, Usuario} from '../interfaces/reqRes';

const useUsarios = () => {

    const [ usuarios, setUsuarios ] = useState<Usuario[]>([])
    const [currentPage] = useState<number>(1)

    useEffect(() => {
      reqResApi.get<ReqResList>('/users')
        .then( resp => {
            setUsuarios(resp.data.data)
        })
        .catch( console.log )
    }, [])

   const handlePage = (page: number = 0) => {
    reqResApi.get<ReqResList>(`/users?page=${currentPage+page}`)
        .then( resp => {
            setUsuarios(resp.data.data)
        })
        .catch( console.log )
   
   }
  return {
    usuarios,
    handlePage
  }
}

export default useUsarios