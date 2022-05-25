import ChartPenjualan from "./ChartPenjualan"

export default function CardPurchase ({ purchase }) {
  return (
        <div
          class='card container border-bottom'
          // style={{ width: '92%', height: 500 }}
        >
          <div class='card-body'>
            <button
              type='button'
              class='btn btn-outline-primary mt-4 ml-3'
              style={{ borderRadius: '20%', width: 100 }}
            >
              Top Items
            </button>

            {(() => {

            if (purchase.name === 'Penjualan') {
              return (
                <ChartPenjualan/>
              )
            } else {
              return (
                <div>
                  
                  <div
                    style={{
                      textAlign: 'center',
                      marginTop: 20
                    }}
                  >
                    <h1>{purchase.title}</h1>
                  </div>

                  <div
                    style={{
                      marginLeft: 70,
                      marginTop: 20
                    }}
                  >
                    <div class='left-col-card-purchase'>{purchase.subtitle1}</div>
                    <div class='center-col-card-purchase'>{purchase.subtitle2}</div>
                    <div class='right-col-card-purchase'>{purchase.subtitle3}</div>
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
              )
            }
          })()}
          </div>
        </div>
    
  )
}
