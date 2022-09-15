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
        <h1>JupyterLite Notebook</h1>
        <Jupyter lite={true}>
          <Notebook
            path='/test.ipynb'
            ipywidgets='classic'
          />
        </Jupyter>
      </ThemeProvider>
    </div>
  );
}
