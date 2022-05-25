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
        style={{ width: '98%', height: 370, marginTop: 28 }}
      >
        <div>
          <div
            class='table-wrapper-scroll-y my-custom-scrollbar-order'
            style={{
              marginTop: 190,
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
                      width: '35%'
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
        style={{ width: '98%', height: 260, marginTop: 28, marginBottom: 70 }}
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
              width: '35%'
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
              width: '35%'
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
              width: '35%'
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
              width: '35%'
            }}
          >
            Total
          </h5>
          <h6>Rp. 240.000,-</h6>
        </div>
        <div class='col-md-12 text-right'>
          <button type='button' class='btn btn-info mr-3'>
            Retur Barang
          </button>
          <button type='button' class='btn btn-primary mr-3'>
            Tambah Order
          </button>
          <button type='button' class='btn btn-primary'>
            Tambah Order
          </button>
        </div>
      </div>
    </div>
  )
}
