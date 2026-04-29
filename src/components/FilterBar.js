import {useState} from 'react';
import PropTypes from 'prop-types';
import {TextField, MenuItem, Button, Stack} from '@mui/material';
import useThrottle from '../hooks/useThrottle';

const FilterBar = ({educationList, salaryList, onSearch}) => {
  const [companyName, setCompanyName] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [salaryLevel, setSalaryLevel] = useState('');

  const handleSearch = () => {
    onSearch({companyName, educationLevel, salaryLevel});
  };

  const handleReset = () => {
    setCompanyName('');
    setEducationLevel('');
    setSalaryLevel('');
    onSearch({companyName: '', educationLevel: '', salaryLevel: ''});
  };

  const throttledSearch = useThrottle(handleSearch);
  const throttledReset = useThrottle(handleReset);

  return (
    <Stack direction="row" spacing={'18px'} useFlexGap>
      <TextField
        className='[&_fieldset]:border-gray-500'
        label="公司名稱"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        size="small"
        placeholder="請輸入公司名稱"
        inputProps={{className: 'text-gray-1000 py-4'}}
        InputLabelProps={{shrink: true, className: 'text-gray-1000'}}
        color='background'
        sx={{flexGrow: 1}}
      />
      <TextField
        select
        className='[&_fieldset]:border-gray-500'
        label="教育程度"
        value={educationLevel}
        onChange={(e) => setEducationLevel(e.target.value)}
        size="small"
        sx={{width: 263.5}}
        inputProps={{className: 'text-gray-1000 py-4'}}
        InputLabelProps={{shrink: true, className: 'text-gray-1000'}}
        SelectProps={{displayEmpty: true}}
        color='background'
      >
        <MenuItem value="">不限</MenuItem>
        {educationList.map((item) => (
          <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        className='[&_fieldset]:border-gray-500'
        label="薪資範圍"
        value={salaryLevel}
        onChange={(e) => setSalaryLevel(e.target.value)}
        size="small"
        sx={{width: 263.5}}
        inputProps={{className: 'text-gray-1000 py-4'}}
        InputLabelProps={{shrink: true, className: 'text-gray-1000'}}
        SelectProps={{displayEmpty: true}}
        color='background'
      >
        <MenuItem value="">不限</MenuItem>
        {salaryList.map((item) => (
          <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
        ))}
      </TextField>
      <Button variant="contained" className='bg-gray-700 hover:bg-gray-800' disableElevation onClick={throttledSearch} sx={{'width': 108, 'padding': '8px 22px'}}>條件搜尋</Button>
      <Button variant="outlined" color="warning" onClick={throttledReset}>重設</Button>
    </Stack>
  );
};

FilterBar.propTypes = {
  educationList: PropTypes.arrayOf(
      PropTypes.shape({id: PropTypes.number, label: PropTypes.string}),
  ).isRequired,
  salaryList: PropTypes.arrayOf(
      PropTypes.shape({id: PropTypes.number, label: PropTypes.string}),
  ).isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default FilterBar;
