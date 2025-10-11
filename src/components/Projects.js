import React from 'react';


const projectData = [
  {
    title: 'Sistem Informasi Perpustakaan Digital (PerpusDigital)',
    description: 'Aplikasi web berbasis Laravel untuk mengelola data buku, peminjaman, dan pengembalian. Memiliki fitur login untuk admin dan anggota, serta operasi CRUD untuk manajemen data.',
    tech: 'Teknologi: PHP, Laravel, MySQL, HTML/CSS.',
    github: 'https://github.com/fatonaturrohma'
  },
  {
    title: 'Website Blog Pribadi dengan CMS',
    description: 'Membangun blog personal dari nol yang dilengkapi halaman admin untuk manajemen konten. Admin dapat membuat, mengedit, dan menghapus artikel serta mengelola kategori.',
    tech: 'Teknologi: PHP, Laravel, MySQL, Git.',
    github: 'https://github.com/fatonaturrohma'
  },
  {
    title: 'Aplikasi Inventaris Barang Sederhana (StokIN)',
    description: 'Aplikasi web untuk mencatat keluar masuknya barang pada sebuah organisasi. Fiturnya meliputi pencatatan data barang, manajemen stok, dan laporan sederhana.',
    tech: 'Teknologi: PHP, Laravel, MySQL.',
    github: 'https://github.com/fatonaturrohma'
  }
];

function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Proyek Unggulan</h2>
      <div className="projects-grid">
        {projectData.map(project => (
          <div key={project.title} className="project-card">
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>{project.tech}</strong></p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Lihat Kode
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;