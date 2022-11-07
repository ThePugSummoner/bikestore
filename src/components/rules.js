import React from 'react'

const styles = {
    width: '500px',
    textAlign: 'center',
    margin: 'auto',
}


function Rules() {
  return (
    <div style={styles} className="main">
        <h1 style={{marginTop: 10}}>Tietoturvakäytäntö</h1>
        <h2 style={{marginTop: 10}}>TIETOSUOJASELOSTE JA EVÄSTEET</h2>
        <p style={{marginTop: 20}}>Henkilötietolaki (523/99) 10 §</p>
        <h3 style={{marginTop: 10}}>Rekisterinpitäjä</h3>
        <p>AngularBikes Oy ("AngularBikes")</p>
            <p>Herkola 12</p>
            <p>01235 Naantali</p>
            <p>Y-tunnus: 1234567-*</p>
    </div>
  )
}

export default Rules