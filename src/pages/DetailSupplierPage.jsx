import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { actionDetailSuppliers } from '../store/actions/purchase'
import cashmoney from '../assets/cashmoney.png'
import { 
  Grid,
  Button,
  ButtonGroup,
  Link,
  Breadcrumbs,
  Typography,
  Box
} from '@mui/material'
import cashier from '../assets/transparent-shopping-icon-cashier-icon-5dfcf890eadc28.267830511576859792962.jpg'
import debt from '../assets/debt-icon.png'
import checklist from '../assets/checklist-money.png'
import payment from '../assets/payment-1.png'
import percent from '../assets/percent-icon.png'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

export default function DetailSupplierPage () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { supplier } = useSelector(state => state.purchaseState)
  const [menuDetailSupplier, setMenuDetailSupplier] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [isMenuName, setIsMenuName] = useState('')
  const [isListMenuName, setIsListMenuName] = useState('')
  const [isListTable, setIsListTable] = useState('')

  useEffect(() => {
    let menuData = [
      {
        name: 'Penjualan',
        title: 'Total Penjualan',
        list_menu: 'List DP',
        subtitle1: 'Hari Ini',
        subtitle2: 'Bulan Ini',
        subtitle3: 'Tahun Ini',
        image: cashier
      },
      {
        name: 'Uang Saya',
        title: 'Total Uang Saya',
        list_menu: 'List Piutang',
        subtitle1: 'Belum Jatuh Tempo',
        subtitle2: '0-30 Hari',
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
        title: 'Total Uang Muka',
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

  return (
    <div class='container'>
      <div class='container'>
        <Box sx={{mb: 4}}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Typography color="text.primary">
              <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Detail Supplier
            </Typography>
          </Breadcrumbs>
        </Box>
      </div>
      <ButtonGroup 
        variant="contained" 
        aria-label="outlined primary button group" 
        sx={{
          width: '100%',
          mb: 4,
          borderRadius: 50
        }}
      >
        <Button 
          sx={{
            width: '100%',
            borderRadius: 50,
            bgcolor: "#2170a5",
            '&:hover': {
              background: "#205375",
            },
          }}
          name='Penjualan'
          onClick={() => {
            setIsActive(true)
            setIsMenuName('Penjualan')
            setIsListMenuName('Total Penjualan')
            setIsListTable('List DP')
          }}
        >Penjualan</Button>

        <Button 
          sx={{
            width: '100%',
            bgcolor: "#2170a5",
            '&:hover': {
              background: "#205375",
            }
          }}
          name='Uang Saya'
          onClick={() => {
            setIsActive(true)
            setIsMenuName('Uang Saya')
            setIsListMenuName('Total Uang Saya')
            setIsListTable('List Piutang')
          }}
        >Uang Saya</Button>

        <Button 
          sx={{
            width: '100%',
            bgcolor: "#2170a5",
            '&:hover': {
              background: "#205375",
            },
          }}
          name='Pembayaran'
          onClick={() => {
            setIsActive(true)
            setIsMenuName('Pembayaran')
            setIsListMenuName('Total Pembayaran')
            setIsListTable('List Pembayaran')
          }}
        >Pembayaran</Button>

        <Button  
          sx={{
            width: '100%',
            bgcolor: "#2170a5",
            '&:hover': {
              background: "#205375",
            },
          }}
          name='Uang Muka'
          onClick={() => {
            setIsActive(true)
            setIsMenuName('Uang Muka')
            setIsListMenuName('Total Uang Muka')
            setIsListTable('List Uang Muka')
          }}
        >Uang Muka</Button>

        <Button 
          sx={{
            width: '100%',
            borderRadius: 50,
            bgcolor: "#2170a5",
            '&:hover': {
              background: "#205375",
            },
          }}
          name='Lunas'
          onClick={() => {
            setIsActive(true)
            setIsMenuName('Lunas')
            setIsListMenuName('Total Lunas')
            setIsListTable('List Lunas')
          }}
        >Lunas</Button>
      </ButtonGroup>

      <div>
        {isActive === true ? (
          <>
            {menuDetailSupplier
              .filter(menu => menu.name === isMenuName)
              .map(menu => {
                return (
                  <div
                    class='card border-bottom'
                    style={{ width: '100%', height: 370 }}
                  >
                    <div class='card-body'>
                      <div
                        style={{
                          textAlign: 'center',
                          marginTop: 20
                        }}
                      >
                        <h1>{menu.title}</h1>
                      </div>
                      <div
                        style={{
                          marginLeft: 70,
                          marginTop: 20
                        }}
                      >
                        <div class='left-col-card-purchase'>{menu.subtitle1}</div>
                        <div class='center-col-card-purchase'>{menu.subtitle2}</div>
                        <div class='right-col-card-purchase'>{menu.subtitle3}</div>
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
                )
              })}
          </>
        ) : (
          <div
            class='card container border-bottom'
            style={{ width: '100%', height: 370 }}
          >
            <div class='card-body'>
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
        style={{
          marginTop: 40
        }}
      >
        {isMenuName === 'Uang Saya' ? null : isMenuName === 'Penjualan' ? (
          <div>
            <div class='col-md-12 text-right d-flex justify-content-end'>
              <Button 
                variant="contained"
                sx={{ 
                  mr: 3,
                  backgroundColor: '#f4a64e',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: "#bc8342",
                  }, 
                }}
              >
                Retur DP
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  navigate('/order_purchases')
                }}
                sx={{ 
                  backgroundColor: '#2763a6',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: "#254364",
                  }, 
                }}
              >
                Tambah DP
              </Button>
            </div>
          </div>
        ) : isMenuName === 'Uang Muka' ? (
          <div>
            <div class='col-md-12 text-right d-flex justify-content-end'>
              <Button 
                variant="contained"
                sx={{ 
                  mr: 3,
                  backgroundColor: '#f4a64e',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: "#bc8342",
                  }, 
                }}
              >
                Retur DP
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  navigate('/order_purchases')
                }}
                sx={{ 
                  backgroundColor: '#2763a6',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: "#254364",
                  }, 
                }}
              >
                Tambah DP
              </Button>
            </div>
          </div>
        ) : null}
        <h3 style={{ textAlign: 'center', marginTop: 100 }}>
          {isListMenuName.length === 0 ? 'List DP' : isListTable}
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
                    backgroundColor: '#254364',
                    color: 'white',
                    width: '4%'
                  }}
                >
                  No
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#254364',
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
                      backgroundColor: '#254364',
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
                    backgroundColor: '#254364',
                    color: 'white',
                    width: '20%'
                  }}
                >
                  Status
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#254364',
                    color: 'white',
                    width: '10%'
                  }}
                >
                  {isMenuName === 'Uang Saya' ? 'Piutang' : 'Total'}
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#254364',
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
