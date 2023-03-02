import React from 'react';
import { CardContent, Checkbox, FormControlLabel, TextareaAutosize, TextField } from '@mui/material';
import { Container } from '@mui/system';
import samuel from '../assets/samuel3.png';
import samuel2 from '../assets/samuel2.png';
import '../index.css';
import { useState  } from 'react';

function Home() {
  const [name, setName] = useState('');
  const [rut, setRut] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRutChange = (event) => {
    setRut(event.target.value);
  };

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    
    if (name !== '' && rut !=='') {
      event.preventDefault();
      const formData = new FormData(event.target);
      const response = await fetch("https://formspree.io/f/xgeqdwnn", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
        if (response.ok) {
          event.target.reset();
          return alert('Muchas gracias por confirmar tu asistencia');
        }
        
      // Si alguno de los campos está vacío, mostrar un mensaje de error
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <div className="App">
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={samuel} className="logo" alt="logo" />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#282c32',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
          color: 'white',
          borderRadius: '10px',
          zIndex: 9999,
          padding: '20px',
        }}
      >
        <div>
          <h2>¡ESTAS INVITADO A MI FIESTA DE CUMPLEAÑOS! </h2>
          <h4>Cuándo: El viernes 3 de marzo del 2023</h4>
          <h4>Dónde:  Las Acacias 7604, La Florida. Departamento 515</h4>
          <h4>Desde las 8:00 pm</h4>
        </div>
        <h4>Por favor confirma tu asistencia</h4>
          <form onSubmit={handleSubmit} id="form" method="POST">
              <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                name="name"
                type="text"
                required
                onChange={handleNameChange}
              />
              <TextField  
                id="outlined-basic"
                label="Rut"
                variant="outlined"
                name="rut"
                type="text"
                required
                onChange={handleRutChange}
              />
            <FormControlLabel
              sx={{
                color: '#000',
              }}
              control={<Checkbox 
              onChange={handleCheckboxChange} 
              name="acompanante"
              />}
            label="¡Con acompañante!"
            />
            {isCheckboxChecked && (
              <TextareaAutosize
                name="acompanante"
                placeholder="Ingrese los datos de su acompañante o alguna observación"
                minLength={4}
                rowsMin={3}
              />
            )}
            <button
              type="submit"
              className='btn'
            >
              Confirmar Asistencia
            </button>
          </form>
        <h3>Te esperamos</h3>
      </CardContent>
      <img src={samuel2} className="logo" alt="logo" />
      </Container>
    </div>
  );
}

export default Home;
