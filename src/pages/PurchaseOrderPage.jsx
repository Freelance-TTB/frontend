import {
  Paper,
  Box,
  Button,
  Card,
  InputBase,
  Divider,
  IconButton,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function PurchaseOrderPage () {
  return (
    <div class='container'>
      <div
        class='card container border-bottom'
        style={{ width: '98%', height: 210, marginTop: 28 }}
      >
        <div
          style={{
            float: 'left',
            marginLeft: 15,
            marginTop: 28
          }}
        >
          <h4>Alamat Pengiriman</h4>
          <br />
        </div>
        <div
          style={{
            marginLeft: 20
          }}
        >
          <div>
            <div
              style={{
                float: 'left',
                width: '25%',
                textAlign: 'left'
              }}
            >
              <h5>Aldhly</h5>
              <h5>087872633182</h5>
            </div>
            <div
              style={{
                float: 'left',
                width: '75%',
                textAlign: 'left',
                fontSize: '15.5px'
              }}
            >
              <p>
                Jl. Setapakno1 Blok o-B2 no.6 Kecamatan Jatinegara Keluarahan
                Klender Kota Jakarta Timur, DKI JAKARTA 13430
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class='card container border-bottom'
        style={{ width: '98%', marginTop: 28 }}
      >
        <Box sx={{my: 3, mx: 1}}>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
        </Box>
        <div>
          <div
            class='table-wrapper-scroll-y my-custom-scrollbar-order'
            style={{
              width: '100%'
            }}
          >

            <table class='table border-bottom table-striped-purchased table-hover'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      width: '25%'
                    }}
                  >
                    Produk Dipesan
                  </th>
                  <th
                    scope='col'
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      width: '20%'
                    }}
                  >
                    Harga Satuan
                  </th>
                  <th
                    scope='col'
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      width: '15%'
                    }}
                  >
                    Jumlah
                  </th>
                  <th
                    scope='col'
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      width: '25%'
                    }}
                  >
                    Subtotal Product
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td colspan='2'>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>

                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>

                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>

                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div 
        class='card container border-bottom'
        style={{ width: '98%', marginTop: 28 }}
      >
        <Box sx={{py: 1, px: 2}}>
          <Typography sx={{py: 1, fontWeight: 'bold'}}>
            Tanggal :
          </Typography>
          <Typography sx={{py: 1, fontWeight: 'bold'}}>
            Note :
          </Typography>
          <Typography sx={{py: 1, fontWeight: 'bold'}}>
            Voucher Number :
          </Typography>
        </Box>
      </div>

      <div
        class='card container border-bottom'
        style={{ width: '98%', marginTop: 28, marginBottom: 70 }}
      >
        <div
          style={{
            float: 'left',
            marginLeft: 15,
            marginTop: 22
          }}
        >
          <h5
            style={{
              float: 'left',
              textAlign: 'left',
              width: '25%'
            }}
          >
            Total Unit
          </h5>
          <h6>4 Unit</h6>
          <br />
          <h5
            style={{
              float: 'left',
              textAlign: 'left',
              width: '25%'
            }}
          >
            Subtotal
          </h5>
          <h6>Rp. 240.000,-</h6>
          <br />
          <h5
            style={{
              float: 'left',
              textAlign: 'left',
              width: '25%'
            }}
          >
            PPN
          </h5>
          <h6>Rp.0,00,-</h6>
          <br />
          <h5
            style={{
              float: 'left',
              textAlign: 'left',
              width: '25%'
            }}
          >
            Total
          </h5>
          <h6>Rp. 240.000,-</h6>
        </div>
        
        <Box 
          sx={{
            my: 2,
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button 
            variant="contained"
            sx={{ 
              mr: 2,
              backgroundColor: '#f4a64e',
              color: 'white',
              '&:hover': {
                backgroundColor: "#bc8342",
              }, 
              textTransform: 'none'
            }}
          >
            Kirim Barang
          </Button>
          <Button
            variant="contained"
            // onClick={() => {
            //   navigate('/order_purchases')
            // }}
            sx={{ 
              mr: 2,
              backgroundColor: '#2763a6',
              color: 'white',
              '&:hover': {
                backgroundColor: "#254364",
              }, 
              textTransform: 'none'
            }}
          >
            Simpan Dulu
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ 
              color: 'white',
              textTransform: 'none'
            }}
          >
            Batalkan
          </Button>
        </Box>

      </div>
    </div>
  )
}
