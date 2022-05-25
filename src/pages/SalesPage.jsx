import { 
  Grid,
  Button
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardSales from '../components/CardSales'
import TableSupplier from '../components/TableSupplier'
import { actionFetchSuppliers } from '../store/actions/purchase'
import SalesTable from '../components/SalesTable'

export default function PurchasePage () {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false)
  const [isName, setIsName] = useState('')
  const [isMenuPurchase, setIsMenuPurchase] = useState([])
  const { suppliers } = useSelector(state => state.purchaseState)
  useEffect(() => {
    dispatch(actionFetchSuppliers())
  }, [])

  useEffect(() => {
    const dataMenuPurchase = [
      {
        name: 'Penjualan',
        title: 'Total Penjualan',
        subtitle1: 'Hari Ini',
        subtitle2: 'Bulan Ini',
        subtitle3: 'Tahun Ini'
      },
      {
        name: 'Uang Saya',
        title: 'Total Uang Saya',
        subtitle1: '0 Hari',
        subtitle2: '0-30 Hari',
        subtitle3: '> 30 Hari'
      },
      {
        name: 'Pembayaran',
        title: 'Total Pembayaran',
        subtitle1: 'Hari Ini',
        subtitle2: 'Bulan Ini',
        subtitle3: 'Tahun Ini'
      },
      {
        name: 'Uang Muka',
        title: 'Total Uang Muka',
        subtitle1: 'DP Keluar',
        subtitle2: 'DP Masuk',
        subtitle3: 'Saldo DP'
      }
    ]

    setIsMenuPurchase(dataMenuPurchase)
  }, [])
  return (
    <div>
      {/* Total Pembelian // */}
      <div>
        {isActive === true ? (
          isMenuPurchase
            .filter(purchase => purchase.name === isName)
            .map(purchase => {
              return <CardSales purchase={purchase} />
            })
        ) : (
          <div
            class='card container border-bottom'
            style={{ width: '92%', height: 370 }}
          >
            <div class='card-body'>
              <Button variant="contained" sx={{borderRadius: 50}}>
                Top Item
              </Button>
              <div
                style={{
                  textAlign: 'center',
                  marginTop: 20
                }}
              >
                <h1>Total Pembayaran</h1>
              </div>
              <div
                style={{
                  marginLeft: 70,
                  marginTop: 20
                }}
              >
                <div class='left-col-card-purchase'>Hari Ini</div>
                <div class='center-col-card-purchase'>Bulan ini</div>
                <div class='right-col-card-purchase'>Tahun Ini</div>
              </div>
              <div
                style={{
                  marginTop: 90
                }}
              >
                <hr class='hr-line-purchase-card' />
              </div>

              <div
                style={{
                  marginLeft: 70,
                  marginTop: 38
                }}
              >
                <div class='left-col-card-purchase'>Hari Ini</div>
                <div class='center-col-card-purchase'>Bulan Ini</div>
                <div class='right-col-card-purchase'>Tahun Ini</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        class='container'
        style={{
          marginTop: 50
        }}
      >
        <div>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <button
                type='button'
                class='btn btn-success btn-menu-purchase'
                name='Penjualan'
                onClick={() => {
                  setIsName('Penjualan')
                  setIsActive(true)
                }}
              >
                Penjualan
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                type='button'
                class='btn btn-danger btn-menu-purchase'
                name='Uang Saya'
                onClick={() => {
                  setIsName('Uang Saya')
                  setIsActive(true)
                }}
              >
                Uang Saya
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                type='button'
                class='btn btn-primary btn-menu-purchase'
                name='Pembayaran'
                onClick={() => {
                  setIsName('Pembayaran')
                  setIsActive(true)
                }}
              >
                Pembayaran
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                type='button'
                class='btn btn-info btn-menu-purchase'
                name='Uang Muka'
                onClick={() => {
                  setIsName('Uang Muka')
                  setIsActive(true)
                }}
              >
                Uang Muka
              </button>
            </Grid>
          </Grid>
          
        </div>
      </div>

      <div class='container' style={{ marginBottom: 70, marginTop: 25 }}>
        <h3 style={{ textAlign: 'center', marginTop: 70, marginBottom: 50 }}>List Supplier</h3>
        <div class='table-wrapper-scroll-y my-custom-scrollbar'>
          <table class='table table-borderless table-striped-purchase table-hover'>
            <thead>
              <tr>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#026A74',
                    color: 'white',
                    width: '4%'
                  }}
                >
                  No
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#026A74',
                    color: 'white',
                    width: '35%'
                  }}
                >
                  Nama
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#026A74',
                    color: 'white',
                    width: '35%'
                  }}
                >
                  Alamat
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#026A74',
                    color: 'white',
                    width: '35%'
                  }}
                >
                  Total Deposit
                </th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map(supplier => {
                return <TableSupplier key={supplier.id} supplier={supplier} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
