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
            'https://images.tokopedia.net/img/cache/500-square/product-1/2019/10/21/778877/778877_23018427-2a04-4d03-b4da-a4caea42c7c0_1080_1080.jpg'
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
            'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw04b3c19c/images/600000/606028.jpg?sfrm=jpg'
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
