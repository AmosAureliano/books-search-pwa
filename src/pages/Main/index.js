import React, { useEffect } from 'react';
import Quagga from 'quagga';



import { Video } from './styles';

function Main() {
  useEffect(() => {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#video"),
          constraints: {
            facingMode: 'environment'
          },
        },
        numOfWorkers: 1,
        locate: true,
        decoder: {
          readers: ['ean_reader'],
        },
      },
      err => {
        if(err){
          console.error(err);
          alert("Erro ao abrir câmera");
          return;
        }

        Quagga.start();
      }
      )
    }
  }, [])

  return (
    <Video id="video"/>
    
  );
}

export default Main;
