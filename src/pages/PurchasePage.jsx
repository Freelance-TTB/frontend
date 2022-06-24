import {
  Grid,
  Button,
  Link,
  Breadcrumbs,
  Typography,
  Box,
  TextField
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPurchase from '../components/CardPurchase'
import TableSupplier from '../components/TableSupplier'
import {
  actionFetchItems,
  actionFetchSortSuppliers,
  actionFetchSuppliers,
  actionSearchSupplier
} from '../store/actions/purchase'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export default function PurchasePage () {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false)
  const [isName, setIsName] = useState('')
  const [isMenuPurchase, setIsMenuPurchase] = useState([])
  const [isSearch, setIsSearch] = useState('')
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
      },
      {
        name: 'Top Item'
      }
    ]

    setIsMenuPurchase(dataMenuPurchase)
  }, [])

  function clickSortSupplier (name, typeSort) {
    dispatch(actionFetchSortSuppliers(name, typeSort))
  }

  function handleChange (e) {
    dispatch(actionSearchSupplier(e.target.value))
  }

  return (
    <div>
      <div class='container'>
        <Box sx={{ mb: 4 }}>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' href='/'>
              <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
              Home
            </Link>
            <Typography color='text.primary'>
              <ShoppingCartIcon sx={{ mr: 0.5 }} fontSize='inherit' />
              Purchase
            </Typography>
          </Breadcrumbs>
        </Box>
      </div>

      <div class='card container border-bottom'>
        <div class='card-body' style={{ height: 400 }}>
          <Button
            variant='contained'
            onClick={() => {
              setIsName('Top Item')
              setIsActive(true)
            }}
            sx={{
              borderRadius: 50,
              bgcolor: '#2170a5',
              '&:hover': {
                background: '#f4a64e'
              }
            }}
          >
            Top Item
          </Button>

          <div>
            {isActive === true ? (
              isMenuPurchase
                .filter(purchase => purchase.name === isName)
                .map(purchase => {
                  return <CardPurchase purchase={purchase} />
                })
            ) : (
              <div>
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
                  <div class='center-col-card-purchase'>Bulan Ini</div>
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
                  <div class='left-col-card-purchase'>Rp.0.00,-</div>
                  <div class='center-col-card-purchase'>Rp.0.00,-</div>
                  <div class='right-col-card-purchase'>Rp.0.00,-</div>
                </div>
              </div>
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
              bgcolor: '#2170a5',
              borderRadius: 20
            }}
          >
            <Grid item xs={3}>
              <Button
                variant='contained'
                name='Pembelian'
                onClick={() => {
                  setIsName('Pembelian')
                  setIsActive(true)
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
                Pembelian
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='contained'
                name='Hutang'
                onClick={() => {
                  setIsName('Hutang')
                  setIsActive(true)
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
                Hutang
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='contained'
                name='Pembayaran'
                onClick={() => {
                  setIsName('Pembayaran')
                  setIsActive(true)
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
                  setIsActive(true)
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

      <div class='container' style={{ marginBottom: 70, marginTop: 120 }}>
        <h3 style={{ textAlign: 'center', marginTop: 70, marginBottom: 50 }}>
          List Supplier
        </h3>

        <TextField
          autoFocus
          margin='dense'
          id='Search'
          label='Search'
          type='text'
          onChange={e => handleChange(e)}
          fullWidth
          variant='outlined'
          sx={{
            marginBottom: 3
          }}
        />
        <div class='table-wrapper-scroll-y my-custom-scrollbar'>
          <table class='table table-borderless table-striped-purchase table-hover'>
            <thead>
              <tr>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#205375',
                    color: 'white',
                    width: '6%'
                  }}
                >
                  No
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#205375',
                    color: 'white',
                    width: '35%'
                  }}
                >
                  Nama
                  <ArrowUpwardIcon
                    onClick={() => {
                      clickSortSupplier('nama', 'DESC')
                    }}
                    style={{
                      float: 'right',
                      width: '5%'
                    }}
                  />
                  <ArrowDownwardIcon
                    onClick={() => {
                      clickSortSupplier('nama', 'ASC')
                    }}
                    style={{
                      float: 'right',
                      width: '8%'
                    }}
                  />
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#205375',
                    color: 'white',
                    width: '35%'
                  }}
                >
                  Alamat
                  <ArrowUpwardIcon
                    onClick={() => {
                      clickSortSupplier('alamat', 'DESC')
                    }}
                    style={{
                      float: 'right',
                      width: '5%'
                    }}
                  />
                  <ArrowDownwardIcon
                    onClick={() => {
                      clickSortSupplier('alamat', 'ASC')
                    }}
                    style={{
                      float: 'right',
                      width: '8%'
                    }}
                  />
                </th>
                <th
                  scope='col'
                  style={{
                    backgroundColor: '#205375',
                    color: 'white',
                    width: '35%'
                  }}
                >
                  Total Deposit
                  <ArrowUpwardIcon
                    onClick={() => {
                      clickSortSupplier('total_deposit', 'DESC')
                    }}
                    style={{
                      float: 'right',
                      width: '15%'
                    }}
                  />
                  <ArrowDownwardIcon
                    onClick={() => {
                      clickSortSupplier('total_deposit', 'ASC')
                    }}
                    style={{
                      float: 'right',
                      width: '8%'
                    }}
                  />
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
