import {
  Grid,
  Button,
  Link,
  Breadcrumbs,
  Typography,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardSales from '../components/CardSales'
import TableSupplier from '../components/TableSupplier'
import {
  actionAddCustomer,
  actionFetchSortSuppliers,
  actionFetchSuppliers
} from '../store/actions/purchase'
import ChartPenjualan from '../components/ChartPenjualan'
import HomeIcon from '@mui/icons-material/Home'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import AddIcon from '@mui/icons-material/Add'

export default function SalesPage () {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false)
  const [isName, setIsName] = useState('')
  const [isMenuPurchase, setIsMenuPurchase] = useState([])
  const [open, setOpen] = useState(false)
  const [isCustomer, setIsCustomer] = useState({})
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

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  function clickSortSupplier (name, typeSort) {
    dispatch(actionFetchSortSuppliers(name, typeSort))
  }

  function handleChange (e) {
    setIsCustomer({
      ...isCustomer,
      [e.target.name]: e.target.value
    })
  }

  function onHandleAddCustomer () {
    dispatch(actionAddCustomer(isCustomer))
    setOpen(false)
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
              <PointOfSaleIcon sx={{ mr: 0.5 }} fontSize='inherit' />
              Sales
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
                  return <CardSales purchase={purchase} />
                })
            ) : (
              <ChartPenjualan />
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
                name='Penjualan'
                onClick={() => {
                  setIsName('Penjualan')
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
                Penjualan
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='contained'
                name='Uang Saya'
                onClick={() => {
                  setIsName('Uang Saya')
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
                Uang Saya
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

      <div class='container' style={{ marginBottom: 70, marginTop: 70 }}>
        <h3 style={{ textAlign: 'center', marginTop: 70, marginBottom: 20 }}>
          List Supplier
        </h3>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' sx={{ mb: 2 }} onClick={handleClickOpen}>
            <AddIcon sx={{ mr: 0.5 }} fontSize='inherit' />
            Customer
          </Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create Customer</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin='dense'
                id='name'
                name='nama'
                label='Nama'
                type='text'
                onChange={e => handleChange(e)}
                fullWidth
                variant='standard'
              />
              <TextField
                autoFocus
                margin='dense'
                id='alamat'
                label='Alamat'
                name='alamat'
                type='text'
                onChange={e => handleChange(e)}
                fullWidth
                variant='standard'
              />
              <TextField
                autoFocus
                margin='dense'
                id='total_deposit'
                label='Total Deposit'
                type='number'
                name='total_deposit'
                onChange={e => handleChange(e)}
                fullWidth
                variant='standard'
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={onHandleAddCustomer}>Create</Button>
            </DialogActions>
          </Dialog>
        </Box>

        <div class='table-wrapper-scroll-y my-custom-scrollbar'>
          <table class='table table-borderless table-striped-purchase table-hover'>
            <thead>
              ;
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
