import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { actionDetailSuppliers } from '../store/actions/purchase'
import cashmoney from '../assets/cashmoney.png'
import { Grid } from '@mui/material'
import cashier from '../assets/transparent-shopping-icon-cashier-icon-5dfcf890eadc28.267830511576859792962.jpg'
import debt from '../assets/debt-icon.png'
import checklist from '../assets/checklist-money.png'
import payment from '../assets/payment-1.png'
import percent from '../assets/percent-icon.png'
export default function DetailSupplierPage () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { supplier } = useSelector(state => state.purchaseState)
  const [menuDetailSupplier, setMenuDetailSupplier] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [isMenuName, setIsMenuName] = useState('')
  const [isListMenuName, setIsListMenuName] = useState('')
  useEffect(() => {
    let menuData = [
      {
        name: 'Penjualan',
        title: 'Total Penjualan',
        list_menu: 'List Penjualan',
        subtitle1: 'Hari Ini',
        subtitle2: 'Bulan Ini',
        subtitle3: 'Tahun Ini',
        image: cashier
      },
      {
        name: 'Hutang',
        title: 'Total Hutang',
        list_menu: 'List Hutang',
        subtitle1: '0 Hari ini',
        subtitle2: '0-30 Hari ini',
        subtitle3: '> 30 Hari',
        image: debt
      },
      {
        name: 'Lunas',
        title: 'Total Pelunasan',
        list_menu: 'List Lunas',
        subtitle1: 'Hari Ini',
        subtitle2: 'Bulan Ini',
        subtitle3: 'Tahun Ini',
        image: checklist
      },
      {
        name: 'Pembayaran',
        title: 'Total Pembayaran',
        list_menu: 'List Pembayaran',
        subtitle1: 'Hari Ini',
        subtitle2: 'Bulan Ini',
        subtitle3: 'Tahun Ini',
        image: payment
      },
      {
        name: 'Uang Muka',
        title: 'Uang Muka',
        list_menu: 'List DP',
        subtitle1: 'DP Keluar',
        subtitle2: 'DP Masuk',
        subtitle3: 'Saldo DP',
        image: percent
      }
    ]

    setMenuDetailSupplier(menuData)
  }, [])
  useEffect(() => {
    dispatch(actionDetailSuppliers(id))
  }, [dispatch])

  function clickCoba () {
    console.log('MASUK')
  }

  return (
    <div class='container'>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <button
            type='button'
            class='btn btn-success btn-menu-purchase'
            name='Penjualan'
            onClick={() => {
              setIsActive(true)
              setIsMenuName('Penjualan')
              setIsListMenuName('Total Penjualan')
            }}
          >
            Penjualan
          </button>
        </Grid>
        <Grid item xs={3}>
          <button
            type='button'
            class='btn btn-danger btn-menu-purchase'
            name='Hutang'
            onClick={() => {
              setIsActive(true)
              setIsMenuName('Hutang')
              setIsListMenuName('Total Hutang')
            }}
          >
            Hutang
          </button>
        </Grid>
        <Grid item xs={3}>
          <button
            type='button'
            class='btn btn-primary btn-menu-purchase'
            name='Pembayaran'
            onClick={() => {
              setIsActive(true)
              setIsMenuName('Pembayaran')
              setIsListMenuName('Total Pembayaran')
            }}
          >
            Pembayaran
          </button>
        </Grid>
        <Grid item xs={3}>
          <button
            type='button'
            class='btn btn-info btn-menu-purchase'
            name='Uang Muka'
            onClick={() => {
              setIsActive(true)
              setIsMenuName('Uang Muka')
              setIsListMenuName('Total Uang Muka')
            }}
          >
            Uang Muka
          </button>
        </Grid>
        <Grid item xs={3}>
          <button
            type='button'
            class='btn btn-success btn-menu-purchase'
            name='Lunas'
            onClick={() => {
              setIsActive(true)
              setIsMenuName('Lunas')
              setIsListMenuName('Total Lunas')
            }}
          >
            Lunas
          </button>
        </Grid>
      </Grid>
      <div>
        {isActive === true ? (
          <>
            {menuDetailSupplier
              .filter(menu => menu.name === isMenuName)
              .map(menu => {
                return (
                  <div>
                    <div
                      class='card container border-bottom'
                      style={{ width: '98%', height: 420, marginTop: 28 }}
                    >
                      <div class='card-body'>
                        <img
                          src={menu.image}
                          style={{
                            height: '30%',
                            marginTop: 30,
                            marginRight: 10,
                            float: 'left'
                          }}
                        />
                        <div
                          style={{
                            float: 'left',
                            marginTop: 20,
                            width: '30%',
                            marginRight: 15
                          }}
                        >
                          <h5>{supplier.nama}</h5>
                          <h5>085161069700</h5>
                          <h5>{supplier.alamat}</h5>
                        </div>
                        <div>
                          <h3
                            style={{
                              textAlign: 'center'
                            }}
                          >
                            {menu.title}
                          </h3>
                          <div
                            style={{
                              float: 'left',
                              margin: 1
                            }}
                          >
                            <p>{menu.subtitle1}</p>
                            <p>10.000</p>
                            <p>{menu.subtitle2}</p>
                            <p>10.000</p>
                            <p>{menu.subtitle3}</p>
                            <p>10.0000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </>
        ) : (
          <div
            class='card container border-bottom'
            style={{ width: '98%', height: 420, marginTop: 28 }}
          >
            <div class='card-body'>
              <img
                src={cashmoney}
                style={{
                  height: '30%',
                  marginTop: 30,
                  marginRight: 10,
                  float: 'left'
                }}
              />
              <div
                style={{
                  float: 'left',
                  marginTop: 20,
                  width: '30%',
                  marginRight: 15
                }}
              >
                <h5>{supplier.nama}</h5>
                <h5>085161069700</h5>
                <h5>{supplier.alamat}</h5>
              </div>
              <div>
                <h5
                  style={{
                    textAlign: 'center'
                  }}
                >
                  Total Pembelian
                </h5>
                <div
                  style={{
                    float: 'left',
                    margin: 1
                  }}
                >
                  <h7>Hari Ini</h7>
                  <p>10.000</p>
                  <h7>Bulan Ini</h7>
                  <p>10.000</p>
                  <h7>Tahun Ini</h7>
                  <p>10.0000</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          marginTop: 50
        }}
      >
        {isMenuName === 'Hutang' ? null : isMenuName === 'Penjualan' ? (
          <div class='container'>
            <div class='col-md-12 text-right'>
              <button type='button' class='btn btn-info mr-3'>
                Retur Barang
              </button>
              <button
                type='button'
                class='btn btn-primary'
                onClick={() => {
                  navigate('/order_purchases')
                }}
              >
                Tambah Order
              </button>
            </div>
          </div>
        ) : isMenuName === 'Uang Muka' ? (
          <div class='container'>
            <div class='col-md-12 text-right'>
              <button type='button' class='btn btn-info mr-3'>
                Retur Barang
              </button>
              <button
                type='button'
                class='btn btn-primary'
                onClick={() => {
                  navigate('/order_purchases')
                }}
              >
                Tambah Order
              </button>
            </div>
          </div>
        ) : null}
        <h3 style={{ textAlign: 'center', marginTop: 50 }}>
          {isListMenuName.length === 0 ? 'Total Penjualan' : isListMenuName}
        </h3>
      </div>
      <div class='container' style={{ marginBottom: 70, marginTop: 65 }}>
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
                    width: '20%'
                  }}
                >
                  Order Id
                </th>
                {isMenuName === 'Uang Muka' ? (
                  <th
                    scope='col'
                    style={{
                      backgroundColor: '#026A74',
                      color: 'white',
                      width: '20%'
                    }}
                  >
                    Tanggal
                  </th>
                ) : null}
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#026A74',
                    color: 'white',
                    width: '20%'
                  }}
                >
                  Status
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#026A74',
                    color: 'white',
                    width: '10%'
                  }}
                >
                  {isMenuName === 'Hutang' ? 'Piutang' : 'Total'}
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#026A74',
                    color: 'white',
                    width: '30%'
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>0001</td>
                <td>checkout</td>
                <td>10000</td>
                <td>Belum Checkout</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>0002</td>
                <td>checkout</td>
                <td>10000</td>
                <td>Belum Checkout</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
