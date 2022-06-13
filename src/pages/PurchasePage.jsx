import { Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPurchase from '../components/CardPurchase'
import CarouselTopItems from '../components/CarouselTopItems'
import TableSupplier from '../components/TableSupplier'
import {
  actionFetchItems,
  actionFetchSuppliers
} from '../store/actions/purchase'

export default function PurchasePage () {
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
        name: 'Pembelian',
        title: 'Total Pembelian',
        subtitle1: 'Hari Ini',
        subtitle2: 'Bulan Ini',
        subtitle3: 'Tahun Ini'
      },
      {
        name: 'Hutang',
        title: 'Total Hutang',
        subtitle1: '0 Hari ini',
        subtitle2: '0-30 Hari ini',
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
        title: 'Uang Muka',
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
    <div class='container'>
      {/* Total Pembelian // */}
      <div>
        {isMenuActive === true ? (
          isMenuPurchase
            .filter(purchase => purchase.name === isName)
            .map(purchase => {
              return (
                <CardPurchase
                  purchase={purchase}
                  clickCarouselActive={clickCarouselActive}
                  clickMenuActive={clickMenuActive}
                />
              )
            })
        ) : isMenuActive === false && isCarouselActive === true ? (
          <CarouselTopItems />
        ) : (
          <div
            class='card container border-bottom'
            style={{ width: '92%', height: 370 }}
          >
            <div class='card-body'>
              <button
                type='button'
                class='btn btn-outline-primary mt-4 ml-3'
                style={{ borderRadius: '20%', width: 100 }}
                onClick={() => {
                  clickCarouselActive(true)
                  setIsMenuActive(false)
                }}
              >
                Top Items
              </button>
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
                name='Pembelian'
                onClick={() => {
                  setIsName('Pembelian')
                  clickMenuActive(true)
                  clickCarouselActive(false)
                }}
              >
                Pembelian
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                type='button'
                class='btn btn-danger btn-menu-purchase'
                name='Hutang'
                onClick={() => {
                  setIsName('Hutang')
                  clickMenuActive(true)
                  clickCarouselActive(false)
                }}
              >
                Hutang
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                type='button'
                class='btn btn-primary btn-menu-purchase'
                name='Pembayaran'
                onClick={() => {
                  setIsName('Pembayaran')
                  clickMenuActive(true)
                  clickCarouselActive(false)
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
                  clickMenuActive(true)
                  clickCarouselActive(false)
                }}
              >
                Uang Muka
              </button>
            </Grid>
          </Grid>
          <h3 style={{ textAlign: 'center', marginTop: 10 }}>List Supplier</h3>
        </div>
      </div>

      <div class='container' style={{ marginBottom: 70, marginTop: 25 }}>
        <div class='table-wrapper-scroll-y my-custom-scrollbar'>
          <table
            class='table table-borderless table-striped-purchase
 table-hover'
          >
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
      <div
        class='container'
        style={{
          marginBottom: 75
        }}
      >
        <CarouselTopItems />
      </div>
    </div>
  )
}
