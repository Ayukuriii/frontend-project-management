import { Paper, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

import Select from '../../../ui/Forms/Select';

const Login = () => {
  const { control } = useForm();

  return (
    <Stack
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
    >
      <Paper
        sx={{
          width: 600,
          padding: 2,
        }}
      >
        <Select
          name={'category'}
          control={control}
          label={'Category'}
          options={[
            { value: '1', label: 'Category 1' },
            { value: '2', label: 'Category 2' },
            { value: '3', label: 'Category 3' },
            { value: '4', label: 'Category 4' },
          ]}
         />
      </Paper>
    </Stack>
  );
};

export default Login;
