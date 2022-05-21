import { useParams } from 'react-router-dom'

export default function DetailSupplierPage () {
  const { id } = useParams()
  console.log(id)
}
