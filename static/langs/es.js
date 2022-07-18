export default async (context, locale) => {
    return await Promise.resolve({
        lingua:"Espanõl",
        pagina2:'page2',
        bandeira:'esp',
        footer:'todos los derechos reservados',
        sections:[ 
            {
                id:1,
                title:'Home',
                idSection:'#home',
            },
            {
                id:2,
                title:'Sobre mi',
                idSection:'#about'
            },
            {
                id:3,
                title:'experiencia',
                idSection:'#experience'
            },
            {
                id:4,
                title:'trabajos',
                idSection:'#jobs'
            },
            {
                id:5,
                title:'Habilidades',
                idSection:'#skills'
            }
        ],
        content:{
            name: 'Everton Vargas Guetierres',
            title:'Soy un desarrollador front-end y construyo pantallas de sitios web para computadoras de escritorio y dispositivos móviles.',
            althcj:'imagen html css y javascript',
            more:'sepa mas'
            
        }
    })
}
  

  
