import { Component } from '@angular/core';
import { Badge } from '../../../../shared/components/badge/badge';
import { Title } from '../../../../shared/components/title/title';
import { Search } from '../../components/search/search';
import { CV } from '../../../../core/domain/models/cv.model';
import { TableCv } from '../../components/table-cv/table-cv';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cvs',
  imports: [
    Title,
    Search,
    Badge,
    TableCv
  ],
  templateUrl: './view-cvs.html',
  styleUrl: './view-cvs.scss',
})
export class ViewCvs {

  term: string = '';

  mock: CV[] = [
    {
      name: 'Juan David Pérez',
      profession: 'Frontend Developer',
      email: 'juan.perez@gmail.com',
      age: 24,
      phone: 3001234567,
      city: 'Cali',
      profile: 'Desarrollador frontend especializado en Angular y diseño de interfaces responsivas.',
      linkedin: 'https://linkedin.com/in/juanperez',
      github: 'https://github.com/juanperez'
    },
    {
      name: 'María Fernanda Gómez',
      profession: 'UX/UI Designer',
      email: 'maria.gomez@gmail.com',
      age: 27,
      phone: 3019876543,
      city: 'Bogotá',
      profile: 'Diseñadora UX/UI enfocada en experiencia de usuario y prototipado moderno.',
      linkedin: 'https://linkedin.com/in/mariagomez',
      github: 'https://github.com/mariagomez'
    },
    {
      name: 'Carlos Andrés Ruiz',
      profession: 'Backend Developer',
      email: 'carlos.ruiz@gmail.com',
      age: 29,
      phone: 3024567890,
      city: 'Medellín',
      profile: 'Desarrollador backend con experiencia en Node.js, NestJS y bases de datos SQL.',
      linkedin: 'https://linkedin.com/in/carlosruiz',
      github: 'https://github.com/carlosruiz'
    },
    {
      name: 'Laura Sofía Martínez',
      profession: 'Data Analyst',
      email: 'laura.martinez@gmail.com',
      age: 26,
      phone: 3206547891,
      city: 'Barranquilla',
      profile: 'Analista de datos con experiencia en Power BI, Python y visualización de información.',
      linkedin: 'https://linkedin.com/in/lauramartinez',
      github: 'https://github.com/lauramartinez'
    },
    {
      name: 'Andrés Felipe Castro',
      profession: 'DevOps Engineer',
      email: 'andres.castro@gmail.com',
      age: 31,
      phone: 3104561237,
      city: 'Bucaramanga',
      profile: 'Ingeniero DevOps especializado en AWS, Docker y CI/CD.',
      linkedin: 'https://linkedin.com/in/andrescastro',
      github: 'https://github.com/andrescastro'
    },
    {
      name: 'Camila Torres',
      profession: 'Mobile Developer',
      email: 'camila.torres@gmail.com',
      age: 23,
      phone: 3157894561,
      city: 'Cartagena',
      profile: 'Desarrolladora mobile con experiencia en Flutter y aplicaciones híbridas.',
      linkedin: 'https://linkedin.com/in/camilatorres',
      github: 'https://github.com/camilatorres'
    },
    {
      name: 'Sebastián Ramírez',
      profession: 'QA Engineer',
      email: 'sebastian.ramirez@gmail.com',
      age: 28,
      phone: 3169513574,
      city: 'Pereira',
      profile: 'QA Engineer con experiencia en automatización de pruebas usando Playwright.',
      linkedin: 'https://linkedin.com/in/sebastianramirez',
      github: 'https://github.com/sebastianramirez'
    },
    {
      name: 'Valentina Herrera',
      profession: 'Full Stack Developer',
      email: 'valentina.herrera@gmail.com',
      age: 30,
      phone: 3172583691,
      city: 'Manizales',
      profile: 'Full Stack Developer con experiencia en Angular, Java y microservicios.',
      linkedin: 'https://linkedin.com/in/valentinaherrera',
      github: 'https://github.com/valentinaherrera'
    },
    {
      name: 'Daniel Moreno',
      profession: 'Cybersecurity Analyst',
      email: 'daniel.moreno@gmail.com',
      age: 32,
      phone: 3184567892,
      city: 'Cúcuta',
      profile: 'Especialista en ciberseguridad y monitoreo de vulnerabilidades.',
      linkedin: 'https://linkedin.com/in/danielmoreno',
      github: 'https://github.com/danielmoreno'
    },
    {
      name: 'Paula Andrea Silva',
      profession: 'Software Engineer',
      email: 'paula.silva@gmail.com',
      age: 25,
      phone: 3197531598,
      city: 'Santa Marta',
      profile: 'Ingeniera de software apasionada por el desarrollo web y arquitecturas escalables.',
      linkedin: 'https://linkedin.com/in/paulasilva',
      github: 'https://github.com/paulasilva'
    },
    {
      name: 'Juan David Pérez',
      profession: 'Frontend Developer',
      email: 'juan.perez@gmail.com',
      age: 24,
      phone: 3001234567,
      city: 'Cali',
      profile: 'Desarrollador frontend especializado en Angular y diseño de interfaces responsivas.',
      linkedin: 'https://linkedin.com/in/juanperez',
      github: 'https://github.com/juanperez'
    },
    {
      name: 'María Fernanda Gómez',
      profession: 'UX/UI Designer',
      email: 'maria.gomez@gmail.com',
      age: 27,
      phone: 3019876543,
      city: 'Bogotá',
      profile: 'Diseñadora UX/UI enfocada en experiencia de usuario y prototipado moderno.',
      linkedin: 'https://linkedin.com/in/mariagomez',
      github: 'https://github.com/mariagomez'
    },
    {
      name: 'Carlos Andrés Ruiz',
      profession: 'Backend Developer',
      email: 'carlos.ruiz@gmail.com',
      age: 29,
      phone: 3024567890,
      city: 'Medellín',
      profile: 'Desarrollador backend con experiencia en Node.js, NestJS y bases de datos SQL.',
      linkedin: 'https://linkedin.com/in/carlosruiz',
      github: 'https://github.com/carlosruiz'
    },
    {
      name: 'Laura Sofía Martínez',
      profession: 'Data Analyst',
      email: 'laura.martinez@gmail.com',
      age: 26,
      phone: 3206547891,
      city: 'Barranquilla',
      profile: 'Analista de datos con experiencia en Power BI, Python y visualización de información.',
      linkedin: 'https://linkedin.com/in/lauramartinez',
      github: 'https://github.com/lauramartinez'
    },
    {
      name: 'Andrés Felipe Castro',
      profession: 'DevOps Engineer',
      email: 'andres.castro@gmail.com',
      age: 31,
      phone: 3104561237,
      city: 'Bucaramanga',
      profile: 'Ingeniero DevOps especializado en AWS, Docker y CI/CD.',
      linkedin: 'https://linkedin.com/in/andrescastro',
      github: 'https://github.com/andrescastro'
    },
    {
      name: 'Camila Torres',
      profession: 'Mobile Developer',
      email: 'camila.torres@gmail.com',
      age: 23,
      phone: 3157894561,
      city: 'Cartagena',
      profile: 'Desarrolladora mobile con experiencia en Flutter y aplicaciones híbridas.',
      linkedin: 'https://linkedin.com/in/camilatorres',
      github: 'https://github.com/camilatorres'
    },
    {
      name: 'Sebastián Ramírez',
      profession: 'QA Engineer',
      email: 'sebastian.ramirez@gmail.com',
      age: 28,
      phone: 3169513574,
      city: 'Pereira',
      profile: 'QA Engineer con experiencia en automatización de pruebas usando Playwright.',
      linkedin: 'https://linkedin.com/in/sebastianramirez',
      github: 'https://github.com/sebastianramirez'
    },
    {
      name: 'Valentina Herrera',
      profession: 'Full Stack Developer',
      email: 'valentina.herrera@gmail.com',
      age: 30,
      phone: 3172583691,
      city: 'Manizales',
      profile: 'Full Stack Developer con experiencia en Angular, Java y microservicios.',
      linkedin: 'https://linkedin.com/in/valentinaherrera',
      github: 'https://github.com/valentinaherrera'
    },
    {
      name: 'Daniel Moreno',
      profession: 'Cybersecurity Analyst',
      email: 'daniel.moreno@gmail.com',
      age: 32,
      phone: 3184567892,
      city: 'Cúcuta',
      profile: 'Especialista en ciberseguridad y monitoreo de vulnerabilidades.',
      linkedin: 'https://linkedin.com/in/danielmoreno',
      github: 'https://github.com/danielmoreno'
    },
    {
      name: 'Paula Andrea Silva',
      profession: 'Software Engineer',
      email: 'paula.silva@gmail.com',
      age: 25,
      phone: 3197531598,
      city: 'Santa Marta',
      profile: 'Ingeniera de software apasionada por el desarrollo web y arquitecturas escalables.',
      linkedin: 'https://linkedin.com/in/paulasilva',
      github: 'https://github.com/paulasilva'
    }
  ];

  constructor(private router: Router){}

  searchCVs(term: string) {
    this.term = term;
  }

  viewCV(email: string){
    console.log()
    this.router.navigateByUrl(`/home/view-cv/${email}`);
  }

}
