import { Grid, Button, ButtonGroup, Link } from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardSales from '../components/CardSales'
import TableSupplier from '../components/TableSupplier'
import {
  actionFetchItems,
  actionFetchSuppliers
} from '../store/actions/purchase'
import SalesTable from '../components/SalesTable'
import ChartPenjualan from '../components/ChartPenjualan'
import CarouselTopItems from '../components/CarouselTopItems'

export default function SalesPage () {
  const dispatch = useDispatch()
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isCarouselActive, setIsCarouselActive] = useState(false)
  const [isName, setIsName] = useState('')
  const [isMenuPurchase, setIsMenuPurchase] = useState([])
  const { suppliers } = useSelector(state => state.purchaseState)
  useEffect(() => {
    dispatch(actionFetchSuppliers())
    dispatch(actionFetchItems())
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

  function clickCarouselActive (params) {
    setIsCarouselActive(true)
  }

  function clickMenuActive (params) {
    // console.log(params)
    setIsMenuActive(params)
  }

  return (
    <div>
      {/* Total Pembelian // */}
      <div>
        {isMenuActive === true ? (
          isMenuPurchase
            .filter(purchase => purchase.name === isName)
            .map(purchase => {
              return (
                <CardSales
                  purchase={purchase}
                  clickCarouselActive={clickCarouselActive}
                  clickMenuActive={clickMenuActive}
                />
              )
            })
        ) : isMenuActive === false && isCarouselActive === true ? (
          <CarouselTopItems />
        ) : (
          <div class='card container border-bottom'>
            <div class='card-body' style={{ height: 400 }}>
              <Button
                variant='contained'
                sx={{ borderRadius: 50 }}
                onClick={() => {
                  clickCarouselActive(true)
                  setIsMenuActive(false)
                }}
              >
                Top Item
              </Button>

              <ChartPenjualan />
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
            sx={{
              bgcolor: '#2170a5',
              borderRadius: 20
            }}
          >
            <Grid item xs={3}>
              <Button
                variant='contained'
                name='Penjualan'
                onClick={() => {
                  setIsName('Penjualan')
                  clickMenuActive(true)
                  clickCarouselActive(false)
                }}
                sx={{
                  width: '100%',
                  boxShadow: 'none',
                  bgcolor: '#2170a5',
                  '&:hover': {
                    background: '#205375'
                  },
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                }}
              >
                Penjualan
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='contained'
                name='Uang Saya'
                onClick={() => {
                  setIsName('Uang Saya')
                  clickMenuActive(true)
                  clickCarouselActive(false)
                }}
                sx={{
                  width: '100%',
                  boxShadow: 'none',
                  bgcolor: '#2170a5',
                  '&:hover': {
                    background: '#205375'
                  },
                  borderRadius: 0
                }}
              >
                Uang Saya
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='contained'
                name='Pembayaran'
                onClick={() => {
                  setIsName('Pembayaran')
                  clickMenuActive(true)
                  clickCarouselActive(false)
                }}
                sx={{
                  width: '100%',
                  boxShadow: 'none',
                  bgcolor: '#2170a5',
                  '&:hover': {
                    background: '#205375'
                  },
                  borderRadius: 0
                }}
              >
                Pembayaran
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='contained'
                name='Uang Muka'
                onClick={() => {
                  setIsName('Uang Muka')
                  clickMenuActive(true)
                  clickCarouselActive(false)
                }}
                sx={{
                  width: '100%',
                  boxShadow: 'none',
                  bgcolor: '#2170a5',
                  '&:hover': {
                    background: '#205375'
                  },
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20
                }}
              >
                Uang Muka
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
      <div class='container' style={{ marginBottom: 70, marginTop: 25 }}>
        <h3 style={{ textAlign: 'center', marginTop: 70, marginBottom: 50 }}>
          List Supplier
        </h3>
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
