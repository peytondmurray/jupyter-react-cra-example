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
          jupyterServerHttpUrl='http://localhost:8888'
          jupyterServerWsUrl='http://localhost:8888'
          jupyterToken='f65518b22e5cd157a0947b4d79f991e422639bc1fb8606fe'
        >
          <Notebook
            path='../notebooks/test.ipynb'
            ipywidgets='classic'
          />
        </Jupyter>
      </ThemeProvider>
    </div>
  );
}
