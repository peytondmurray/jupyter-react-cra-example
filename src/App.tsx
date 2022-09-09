import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Jupyter, Notebook } from '@datalayer/jupyter-react';
import './App.css';

const appTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <Jupyter
          jupyterServerHttpUrl='http://localhost:8686/api/jupyter'
          jupyterServerWsUrl='ws://localhost:8686/api/jupyter'
          jupyterToken='60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6'
        >
          <Notebook
            path='/test.ipynb'
            ipywidgets='classic'
          />
        </Jupyter>
      </ThemeProvider>
    </div>
  );
}
