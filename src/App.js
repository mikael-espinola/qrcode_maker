import './App.css';
import QRCode from 'react-qr-code'
import { useState } from 'react'
import QRCodeLink from 'qrcode'


function App() {

  const [link, setLink] = useState('')
  const [qrCodeLink, setQrCodeLink] = useState('')

  function handleGenerateLink(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrCodeLink(url);
    })
  }

  function handleQrCode(e) {
    setLink(e.target.value)
    handleGenerateLink(e.target.value)
  }

  return (
    <div className="container">

      <div className='header'>
        <input className="input" placeholder="Digite o link..."
          value={link}
          onChange={(e) => handleQrCode(e)} />

        <a className='btn-download' href={qrCodeLink} download={`qrcode.png`}>Baixar</a>
      </div>


      <div className='qrcode'>
        <QRCode
          value={link} />
      </div>
    </div>
  );
}

export default App;
