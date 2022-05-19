import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function OptionGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Penjualan</Button>
      <Button>Uang Saya</Button>
      <Button>Uang Muka</Button>
    </ButtonGroup>
  )
}
