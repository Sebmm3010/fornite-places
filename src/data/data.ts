import {
  aldea,
  bahia,
  bastion,
  cantera,
  ciudad,
  ciudadela,
  cruce,
  granja,
  lab,
  muelle,
  plaza,
  termas
} from '../../assets';

interface Lugar {
  name: string;
  img: string;
}

interface Data {
  lugares: Lugar[];
}

export const data: Data = {
  lugares: [
    {
      name: 'Aldea aislada',
      img: aldea
    },
    {
      name: 'Bahia burbujeante',
      img: bahia
    },
    {
      name: 'Bastion brutal',
      img: bastion
    },
    {
      name: 'Cantera cinetica',
      img: cantera
    },
    {
      name: 'Ciudad MEGA',
      img: ciudad
    },
    {
      name: 'Cruce Kenjutsu',
      img: cruce
    },
    {
      name: 'Granja Grandiosa',
      img: granja
    },
    {
      name: 'Laboratorios Lejanos',
      img: lab
    },
    {
      name: 'La Ciudadela',
      img: ciudadela
    },
    {
      name: 'Muelle Medieval',
      img: muelle
    },
    {
      name: 'Plaza Pintoresca',
      img: plaza
    },
    {
      name: 'Termas Tranquilas',
      img: termas
    }
  ]
};
