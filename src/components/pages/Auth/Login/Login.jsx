import { Paper, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';

import DatePicker from '../../../ui/Forms/DatePicker/DatePicker';
import Select from '../../../ui/Forms/Select';
import TextField from '../../../ui/Forms/TextField/TextField';

const Login = () => {
  const { control, watch } = useForm({
    defaultValues:{
      dateFilter: dayjs()
    }
  });

  const username = watch('username');
  const category = watch('category');
  const dateFilter = watch('dateFilter');

  console.log('username', username);
  console.log('category', category);
  console.log('dateFilter', dateFilter);

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
        <TextField name={'username'} control={control} label={'Username'} />

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

        <DatePicker
          name={'dateFilter'}
          control={control}
          label={'Filter by date'}
        />
      </Paper>
    </Stack>
  );
};

export default Login;
