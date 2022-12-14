export default {
  global: {
    componenteFormativo:
      'Evaluación y acciones de mejora en la producción y operación de eventos masivos',
    descripcionCurso:
      'Lograr la satisfacción del cliente es indispensable para obtener un lugar en su corazón. Este tema ya no solo hace parte del departamento de mercadeo, sino de todas las áreas de la organización, por lo cual los empleados deben trabajar de manera eficiente y eficaz, cumpliendo con las expectativas del cliente y contribuyendo al éxito de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Satisfacción del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Indicadores de satisfacción',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Evaluación de servicios tercerizados',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan de mejoramiento continuo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos para su diseño',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Sistema de aseguramiento de calidad ISO 9000, 9001 y 9004',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de mejora',
      referencia:
        'Mancilla Flantermesky (2009). <em>Diseño y documentación de un plan de mejora del proceso “prestación del servicio ferial (evento)” del centro de ferias, exposiciones y convenciones de Bucaramanga, Cenfer s.a.</em> [Trabajo de Grado].',
      tipo: 'Trabajo de grado',
      link:
        'https://repository.upb.edu.co/bitstream/handle/20.500.11912/634/digital_18362.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Evaluación del servicio',
      referencia:
        'Calabuig Moreno; Mundina Gómez; Crespo Hervàs (2019). <em>Eventqual: una medida de la calidad percibida por los espectadores de eventos deportivos Retos</em>. Nuevas Tendencias en Educación Física, Deporte y Recreación, núm. 18, pp. 66-70.',
      tipo: 'Artículo de investigación',
      link: 'https://www.redalyc.org/pdf/3457/345732284013.pdf',
    },
    {
      tema: 'Satisfacción del cliente',
      referencia:
        'Contreras Contreras y Fárez Pucha (2015). <em>Estudio de satisfacción del cliente en el evento festival Fundación de Cuenca 15K 2013 Empresa JP Sport Marketing</em>. Red de Repositorios Latinoamericanos.',
      tipo: 'Artículo de investigación',
      link: 'http://repositorioslatinoamericanos.uchile.cl/handle/2250/1112278',
    },

    {
      tema: 'Norma ISO 9001 en una empresa de eventos',
      referencia:
        'Sandoval Fonseca (2017). <em>Manual de Calidad para Alex Castañeda eventos & refrigerios, basado en la Norma ISO 9001:2015</em>. [Tesis de grado]. ',
      tipo: 'Artículo de investigación',
      link: 'https://core.ac.uk/download/pdf/151074287.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'Es la acción aplicada para eliminar las no conformidades y así evitar que los incumplimientos se vuelvan a presentar.',
    },
    {
      termino: 'Acción preventiva',
      significado:
        'Es una acción tomada para eliminar una situación potencialmente indeseable.',
    },
    {
      termino: 'Cliente',
      significado:
        'Aquella persona natural o jurídica que realiza la transacción comercial denominada compra.',
    },
    {
      termino: 'Evaluación continua',
      significado:
        'Es un método de evaluación en el que periódicamente se realizan pruebas para detectar fallas en los procesos organizacionales, y poder así actuar de manera efectiva en su mejora.  ',
    },
    {
      termino: 'Experiencia del cliente',
      significado:
        'Es la suma de todos los contactos, desde el descubrimiento e investigación de un producto hasta su compra, pasando por su uso real y su seguimiento por parte de la marca.',
    },
    {
      termino: 'Idea de mejora',
      significado:
        'Es una propuesta enfocada en visualizar la situación actual bajo un panorama mejor que venza cualquier dificultad.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Enfoque de gestión organizacional basado en la rectificación continua de los procesos para encontrar fortalezas y debilidades que se puedan mejorar, logrando así una mayor satisfacción del cliente. ',
    },
    {
      termino: 'No conformidad',
      significado:
        'Es el incumplimiento de un requisito preestablecido con respecto a la aplicación de las normas de calidad, los requerimientos de un proveedor o un cliente, o el desarrollo defectuoso de un proceso organizacional. ',
    },
    {
      termino: 'Plan de mejoramiento',
      significado:
        'Es un conjunto de procedimientos con objetivos, acciones y metas orientadas a la mejora continua de la organización.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'Es la medición de la respuesta que los consumidores tienen con respecto a un servicio o producto de una marca en específico. Las calificaciones son referentes para mejorar el servicio que se les ofrece, y también para conocer a detalle lo que necesitan (HubSpot, 2021).',
    },
  ],
  referencias: [
    {
      referencia:
        'Ámbito Jurídico (2018). <em>Tercerización e intermediación laboral: ¿en qué consisten?, ¿cómo se diferencian?</em>',
      link:
        'https://www.ambitojuridico.com/noticias/analisis/constitucional-y-derechos-humanos/tercerizacion-e-intermediacion-laboral-en-que#_ftn2',
    },
    {
      referencia:
        'Cobo (2017). La tercerización como herramienta de Gestión empresarial. [Tesis de maestría]',
      link: 'https://core.ac.uk/download/pdf/153490117.pdf',
    },
    {
      referencia:
        'Colsubsidio (s.f.). <em>Tipos de tercerización para la empresa.</em>',
      link:
        'https://xposible.com/infografia/tipos-de-tercerizacion-para-las-empresas/',
    },
    {
      referencia:
        'HubSpot (2022). <em>Satisfacción del cliente: qué es, sus elementos y cómo medirla.</em>',
      link: 'https://blog.hubspot.es/service/satisfaccion-del-cliente',
    },
    {
      referencia:
        'Pirani (2021). <em>Riesgos que se pueden presentar en la tercerización de servicios.</em>',
      link:
        'https://www.piranirisk.com/es/blog/riesgos-en-la-tercerizacion-de-servicios',
    },
    {
      referencia:
        'Thompson, I. (2005). <em>La satisfacción del cliente</em>. Rev Med (Bolivia), pp. 6-31.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
