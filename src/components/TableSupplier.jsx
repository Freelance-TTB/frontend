import { useNavigate } from 'react-router-dom'

export default function TableSupplier ({ supplier }) {
  const navigate = useNavigate()
  function clickDetail (id) {
    navigate(`/suppliers/${id}`)
  }
  return (
    <tr onClick={id => clickDetail(supplier.id)}>
      <th scope='row'>
        <a>{supplier.id}</a>
      </th>
      <td>{supplier.nama}</td>
      <td>{supplier.alamat}</td>
      <td>{supplier.total_deposit}</td>
    </tr>
  )
}
