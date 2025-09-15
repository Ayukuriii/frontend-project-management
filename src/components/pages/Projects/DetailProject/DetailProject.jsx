import { Stack } from '@mui/material';
import DropDown from '../../../ui/DropDown';
import { Settings } from '@mui/icons-material';
import Avatar from '../../../ui/Avatar';

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
      <Avatar
        text={'Ekadian'}
        onClick={() => console.log('Avatar Clicked')}
      />
      
      <DropDown
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
