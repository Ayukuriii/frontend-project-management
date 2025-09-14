import { Stack } from '@mui/material';
import DropDown from '../../../ui/DropDown';
import { Settings } from '@mui/icons-material';

const DetailProject = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
      }}
      justifyContent={'center'}
      alignItems={'center'}
    >
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
