import { 
  Grid,
  Button,
  ButtonGroup,
  Link,
  Breadcrumbs,
  Typography,
  Box
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardSales from '../components/CardSales'
import TableSupplier from '../components/TableSupplier'
import { actionFetchSuppliers } from '../store/actions/purchase'
import ChartPenjualan from '../components/ChartPenjualan'
import HomeIcon from '@mui/icons-material/Home';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

export default function SalesPage () {
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
      },
      {
        name: 'Top Item'
      }
    ]

    setIsMenuPurchase(dataMenuPurchase)
  }, [])
  return (
    <div>

      <div class='container'>
        <Box sx={{mb: 4}}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Typography color="text.primary">
              <PointOfSaleIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Sales
            </Typography>
          </Breadcrumbs>
        </Box>
      </div>

      <div
        class='card container border-bottom'
      >
        <div class='card-body' style={{ height: 400 }}>
          <Button 
            variant="contained" 
            onClick={() => {
              setIsName('Top Item')
              setIsActive(true)
            }}
            sx={{borderRadius: 50}}
          >
            Top Item
          </Button>

          <div>
            {isActive === true ? (
              isMenuPurchase
                .filter(purchase => purchase.name === isName)
                .map(purchase => {
                  return <CardSales purchase={purchase} />
                })
            ) : (
              <ChartPenjualan/>
            )}
          </div>
        </div>
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
              bgcolor: "#2170a5", 
              borderRadius: 20
            }}
          >
            <Grid item xs={3}>
              <Button
                variant="contained"
                name='Penjualan'
                onClick={() => {
                  setIsName('Penjualan')
                  setIsActive(true)
                }}
                sx={{
                  width: '100%', 
                  boxShadow: "none",
                  bgcolor: "#2170a5",
                  '&:hover': {
                    background: "#205375",
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
                variant="contained"
                name='Uang Saya'
                onClick={() => {
                  setIsName('Uang Saya')
                  setIsActive(true)
                }}
                sx={{ 
                  width: '100%', 
                  boxShadow: "none",
                  bgcolor: "#2170a5",
                  '&:hover': {
                    background: "#205375",
                  }, 
                  borderRadius: 0
                }}
              >
                Uang Saya
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                name='Pembayaran'
                onClick={() => {
                  setIsName('Pembayaran')
                  setIsActive(true)
                }}
                sx={{ 
                  width: '100%', 
                  boxShadow: "none",
                  bgcolor: "#2170a5", 
                  '&:hover': {
                    background: "#205375",
                  },
                  borderRadius: 0
                }}
              >
                Pembayaran
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                name='Uang Muka'
                onClick={() => {
                  setIsName('Uang Muka')
                  setIsActive(true)
                }}
                sx={{ 
                  width: '100%', 
                  boxShadow: "none",
                  bgcolor: "#2170a5", 
                  '&:hover': {
                    background: "#205375",
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
        <h3 style={{ textAlign: 'center', marginTop: 70, marginBottom: 50 }}>List Supplier</h3>
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
                    width: '35%'
                  }}
                >
                  Nama
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#254364',
                    color: 'white',
                    width: '35%'
                  }}
                >
                  Alamat
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#254364',
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
