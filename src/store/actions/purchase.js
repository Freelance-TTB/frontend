import { FETCH_SUPPLIERS, FETCH_SUPPLIER, FETCH_TOP_ITEMS } from '../keys'
export function fetchSuppliers (payload) {
  return {
    type: FETCH_SUPPLIERS,
    payload
  }
}

export function fetchSupplier (payload) {
  return {
    type: FETCH_SUPPLIER,
    payload
  }
}

export function fetchItems (payload) {
  return {
    type: FETCH_TOP_ITEMS,
    payload
  }
}

export function actionFetchSuppliers () {
  return async function (dispatch) {
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

export function actionDetailSuppliers (payload) {
  return function (dispatch, getState) {
    try {
      const { suppliers } = getState().purchaseState
      const supplier = suppliers.find(supply => supply.id === Number(payload))
      dispatch(fetchSupplier(supplier))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionFetchItems () {
  return function (dispatch, getState) {
    try {
      const items = [
        {
          id: 1,
          name: 'Cangkir Kopi',
          price: 50000,
          sold_unit: 50,
          image:
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/8/9/d00ba2ba-0863-45b3-ac71-b88132245070.jpg'
        },
        {
          id: 2,
          name: 'Kursi Unik',
          price: 1000000,
          sold_unit: 30,
          image:
            'https://cb2.scene7.com/is/image/CB2/GPGwynethBclChrBlcWhtSHF18_1x1/$web_pdp_main_carousel_xs$/190905023639/gwyneth-boucle-chair.jpg'
        },
        {
          id: 3,
          name: 'Table Portable',
          price: 1500000,
          sold_unit: 20,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTHJq11V0fjxUTIPcXMdDYaTtviED9m6aeQ&usqp=CAU'
        },
        {
          id: 4,
          name: 'Study Lamp',
          price: 55500000,
          sold_unit: 30,
          image:
            'https://4.imimg.com/data4/CX/BU/MY-8035696/flexi-study-lamp-500x500.jpg'
        }
      ]

      dispatch(fetchItems(items))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionFetchSortSuppliers (name, typeSort) {
  return function (dispatch, getState) {
    try {
      const { suppliers } = getState().purchaseState
      const sortSuppliers = suppliers.sort((a, b) => {
        if (name === 'alamat' || name === 'nama') {
          let fa = a[name].toLowerCase()
          let fb = b[name].toLowerCase()
          if (typeSort === 'DESC') {
            if (fb < fa) {
              return -1
            }
            if (fb > fa) {
              return 1
            }
          } else {
            if (fa < fb) {
              return -1
            }
            if (fa > fb) {
              return 1
            }
          }
        } else if (name === 'total_deposit') {
          if (typeSort === 'DESC') {
            return b.total_deposit - a.total_deposit
          } else {
            return a.total_deposit - b.total_deposit
          }
        }
        return 0
      })

      dispatch(fetchSuppliers(sortSuppliers))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionAddCustomer (payload) {
  return function (dispatch, getState) {
    try {
      let { suppliers } = getState().purchaseState
      const { nama, alamat, total_deposit } = payload
      const payloadCustomer = {
        id: suppliers[suppliers.length - 1].id + 1,
        nama: nama,
        alamat: alamat,
        total_deposit: +total_deposit
      }
      suppliers = [...suppliers, payloadCustomer]
      dispatch(fetchSuppliers(suppliers))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionSearchSupplier (payload) {
  return function (dispatch, getState) {
    try {
      let { suppliers } = getState().purchaseState
      const searchSuppliers = suppliers.filter(supplier => {
        return supplier.nama.indexOf(payload) !== -1
      })

      const newSearchSupplier = searchSuppliers

      console.log('SUPPLIERS >>>>>>>>>>>', newSearchSupplier)
      // dispatch(fetchSuppliers(newSearchSupplier))
    } catch (err) {
      console.log(err)
    }
  }
}
