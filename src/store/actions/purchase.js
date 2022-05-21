import { FETCH_SUPPLIERS } from '../keys'

export function fetchSuppliers (payload) {
  return {
    type: FETCH_SUPPLIERS,
    payload
  }
}

export function actionFetchSuppliers () {
  return function (dispatch) {
    try {
      const suppliers = [
        {
          id: 1,
          nama: 'Aldhy',
          alamat: 'Jln. Setapak no. 1',
          total_deposit: 500000
        },
        {
          id: 2,
          nama: 'Arul',
          alamat: 'Jln. Setapak no. 2',
          total_deposit: 500000
        },
        {
          id: 3,
          nama: 'Rijal',
          alamat: 'Jln. Setapak no. 3',
          total_deposit: 11100000
        },
        {
          id: 4,
          nama: 'Muh',
          alamat: 'Jln. Setapak no. 4',
          total_deposit: 11500000
        },
        {
          id: 5,
          nama: 'Fakhrul',
          alamat: 'Jln. Setapak no. 5',
          total_deposit: 50000
        },
        {
          id: 6,
          nama: 'Rul',
          alamat: 'Jln. Setapak no. 6',
          total_deposit: 20000
        },
        {
          id: 7,
          nama: 'Ron',
          alamat: 'Jln. Setapak no. 7',
          total_deposit: 100000
        }
      ]

      dispatch(fetchSuppliers(suppliers))
    } catch (err) {
      console.log(err)
    }
  }
}
