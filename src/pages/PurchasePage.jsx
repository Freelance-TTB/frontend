import { fontSize, textAlign } from '@mui/system'

export default function PurchasePage () {
  return (
    <div
      class='card container border-bottom'
      style={{ width: 1250, height: 370 }}
    >
      <div class='card-body'>
        <button
          type='button'
          class='btn btn-outline-primary mt-4 ml-3'
          style={{ borderRadius: '20%', width: 100 }}
        >
          Top Items
        </button>
        <div
          style={{
            textAlign: 'center',
            marginTop: 10
          }}
        >
          <h1>Total Pembelian</h1>
        </div>
        <div
          style={{
            marginLeft: 70,
            marginTop: 20
          }}
        >
          <div class='left-col'>purple</div>
          <div class='center-col'>monkey</div>
          <div class='right-col'>dishwasher</div>
        </div>
      </div>
    </div>
  )
}
