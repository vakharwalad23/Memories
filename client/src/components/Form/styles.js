import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textFields:{
    marginBottom: 8,
  },
  fileInput: {
    width: '97%',
    margin: '8px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));