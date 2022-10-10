import TextField from '@mui/material/TextField'
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Box } from '@primer/react';

import { useJupyter, Jupyter, Kernel, Notebook, notebookActions } from '@datalayer/jupyter-react'
import { Button } from '@mui/material';

const JUPYTER_SERVER_HTTP_URL = 'http://localhost:8888'
const JUPYTER_SERVER_WS_URL = 'ws://localhost:8888'
const JUPYTER_TOKEN ='60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6'

const NOTEBOOK_UID = 'notebook-id-kernel'

const NotebookKernelChange = () => {
  const { kernelManager } = useJupyter();
  const dispatch = useDispatch();
  const [kernel, setKernel] = useState<Kernel>()

  const inputRef = useRef<HTMLInputElement | null>(null)

  const changeKernel = (kernelName = 'python') => {
    console.log('Requested kernel type:', inputRef.current?.value)
    if (kernelManager) {
      const newKernel = new Kernel({ kernelManager, kernelName });
      newKernel.getJupyterKernel().then(() => {
        dispatch(notebookActions.changeKernel({ uid: NOTEBOOK_UID, kernel: newKernel }));
        setKernel(newKernel)
        console.log('New kernel set: ', {newKernel})
      })
    }
  }

  useEffect(() => {
    if (kernelManager && !kernel) {
      changeKernel()
    }
  }, [kernelManager, kernel])

  return (
    <>
      <Box display="flex">
        <h2>{`Kernel id: ${kernel?.id ?? 'Loading...'}`}</h2>
        <TextField
          id="outlined-basic"
          label="Kernel type"
          variant="outlined"
          inputRef={inputRef}
        />
        <Button onClick={() => changeKernel(inputRef.current?.value)}>Submit</Button>
      </Box>
      <Notebook
        uid={NOTEBOOK_UID}
        path="test.ipynb"
      />
    </>
  );
}

export default function App() {
  return (
    <Jupyter
      jupyterServerHttpUrl={JUPYTER_SERVER_HTTP_URL}
      jupyterServerWsUrl={JUPYTER_SERVER_WS_URL}
      jupyterToken={JUPYTER_TOKEN}
      defaultKernelName="python3"
    >
      <NotebookKernelChange />
    </Jupyter>
  )
}
