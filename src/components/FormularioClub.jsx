import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './FormularioClub.css'; // Importa el archivo CSS
import logo from '../assets/logo.png'; // Importa la imagen del logo

export default function FormularioClub() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefono: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    // Verifica que el nombre tenga al menos 5 letras
    if (formData.name.length < 5) {
      errors.name = 'Introduce un nombre válido.*';
    }

    // Verifica el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Por favor introduce un correo electrónico válido.*';
    }

    // Verifica que el teléfono tenga al menos 6 dígitos
    if (formData.telefono.length < 6) {
      errors.telefono = 'Introduce un numero válido.*';
    }

    // Verifica que el mensaje tenga al menos 10 caracteres
    if (formData.message.length < 10) {
      errors.message = 'Necesitas completar el mensaje*';
    }

    // Verifica que todos los campos estén completos
    const emptyFieldsArray = [];
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        emptyFieldsArray.push(key);
      }
    });
    setEmptyFields(emptyFieldsArray);

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      return;
    }

    emailjs.sendForm('service_w1j6zq4', 'template_1bbg1nh', e.target, '5GWd55F-GRRwG8euS')
      .then((result) => {
        console.log(result.text);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          window.location.reload();
        }, 3000);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="form-container">
      <img src={logo} alt="Logo del club" className="logo-inside-formulario" /> {/* Agrega el logo del club */}
      {showAlert && (
        <div className="alert">El formulario se ha enviado correctamente.</div>
      )}
      {errorMessage && (
        <div className="error">
          {errorMessage.name && <p>{errorMessage.name}</p>}
          {errorMessage.email && <p>{errorMessage.email}</p>}
          {errorMessage.telefono && <p>{errorMessage.telefono}</p>}
          {errorMessage.message && <p>{errorMessage.message}</p>}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          {emptyFields.includes('name') && <span className="empty-message">* Completar</span>}
          <input type="text" name="name" placeholder="Nombre completo" value={formData.name} onChange={handleChange} className={emptyFields.includes('name') ? 'empty' : ''} />
        </div>
        <div className="input-wrapper">
          {emptyFields.includes('email') && <span className="empty-message">* Completar</span>}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={emptyFields.includes('email') ? 'empty' : ''} />
        </div>
        <div className="input-wrapper">
          {emptyFields.includes('telefono') && <span className="empty-message">* Completar</span>}
          <input type="text" name="telefono" placeholder="Telefono" value={formData.telefono} onChange={handleChange} className={emptyFields.includes('telefono') ? 'empty' : ''} />
        </div>
        <div className="input-wrapper">
          {emptyFields.includes('message') && <span className="empty-message">* Completar</span>}
          <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} className={emptyFields.includes('message') ? 'empty' : ''} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}