import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Jupyter, Notebook } from '@datalayer/jupyter-react';
import './App.css';

const appTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <Jupyter
          jupyterServerHttpUrl='http://localhost:8888/api/jupyter'
          jupyterServerWsUrl='http://localhost:8888/api/jupyter'
          jupyterToken='36273d12328f34c3f5b4ffdc45efb8e2e87620e648fcc911'
        >
          <Notebook
            path='../assets/test.ipynb'
            ipywidgets='classic'
          />
        </Jupyter>
      </ThemeProvider>
    </div>
  );
}

export default App;
