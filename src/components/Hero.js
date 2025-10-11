import React from 'react';
import ProfilePic  from '../foto.png';

function Hero() {
  return (
    <section className="hero">
      <img src={ProfilePic} alt="Fatonaturrohma" className='profile-pic' />
      <h1>Siti Nur Fatonatur Rohma</h1>
      <h3>Mahasiswa Teknik Komputer Jaringan | Full-Stack Developer</h3>
      <p>
        "Mengubah ide menjadi kode dan menciptakan aplikasi web yang bermakna,
        satu proyek pada satu waktu."
      </p>
    </section>
  );
}

export default Hero;