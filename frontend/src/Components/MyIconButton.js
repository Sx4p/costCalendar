import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';


export default function MyIconButton({icon, handleOnClick}) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton onClick={handleOnClick}>
          {icon}
      </IconButton>
    </Stack>
  );
}