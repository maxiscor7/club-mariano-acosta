import React, { useState, useEffect } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const FirebaseImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Tu configuración de Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyANcY8NlrV4ovezhhPZiGe_L58O6OXi0n4",
      authDomain: "club-mariano-acosta.firebaseapp.com",
      projectId: "club-mariano-acosta",
      storageBucket: "club-mariano-acosta.appspot.com",
      messagingSenderId: "322877744542",
      appId: "1:322877744542:web:8e8a55bb8b23d45a11228f"
    };

    // Inicializar Firebase
    const app = initializeApp(firebaseConfig);

    // Obtener la instancia de Firebase Storage
    const storage = getStorage(app);

    // Obtener referencia a la carpeta de imágenes en Firebase Storage
    const imageFolderRef = ref(storage, 'galeriaImagenes');

    // Lista las imágenes en la carpeta y obtiene sus URLs
    listAll(imageFolderRef)
      .then((res) => {
        const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
        Promise.all(promises)
          .then((urls) => {
            setImageUrls(urls);
          })
          .catch((error) => {
            console.error('Error al obtener las URLs de las imágenes:', error);
          });
      })
      .catch((error) => {
        console.error('Error al obtener las imágenes:', error);
      });
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h1>Imágenes desde Firebase Storage</h1>
      <div>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Imagen ${index}`} style={{ width: '150px', height: 'auto', margin: '5px' }} />
        ))}
      </div>
    </div>
  );
};

export default FirebaseImageGallery;