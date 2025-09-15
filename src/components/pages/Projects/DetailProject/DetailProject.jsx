import { Settings } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Avatar from '../../../ui/Avatar';
import Dropdown from '../../../ui/Dropdown';

const DetailProject = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
      }}
      justifyContent={'center'}
      alignItems={'center'}
      direction={'row'}
      spacing={2}
    >
      <Avatar text={'Ekadian'} onClick={() => console.log('Avatar Clicked')} />

      <Dropdown
        icon={<Settings />}
        options={[
          {
            label: 'Tutup proyek ini',
            onClick() {
              console.log('Tutup proyek ini');
            },
          },
          {
            label: 'Ubah deadline',
            onClick() {
              console.log('Ubah deadline');
            },
          },
        ]}
      />
    </Stack>
  );
};

export default DetailProject;
