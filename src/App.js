import './App.css';
import ImageSelector from './ImageSelector';
import { useEffect, useState } from 'react';
import Discussion from './Discussion';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);
  const handleFileSelect = (file) => {
    setFile(file);
  };

  useEffect(() => {
    console.log(file);
    if (file) setImg(URL.createObjectURL(file))
  }, [file]);

  const handleClose = () => {
    setFile(null);
  }

  return (
    <div className="App">
      {
        file ?
          <Discussion handleClose={handleClose} img={img} />
          :
          <ImageSelector handleFileSelect={handleFileSelect} className="image-sector-container" />
      }
    </div>
  );
}

export default App;
