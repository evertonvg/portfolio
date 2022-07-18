export default async (context, locale) => {
    return await Promise.resolve({
        lingua:"English",
        pagina2:'page2',
        bandeira:'usa',
        footer:'All rights reserved',
        sections:[ 
            {
                id:1,
                title:'Home',
                idSection:'#home',
            },
            {
                id:2,
                title:'About me',
                idSection:'#about'
            },
            {
                id:3,
                title:'experience',
                idSection:'#experience'
            },
            {
                id:4,
                title:'jobs',
                idSection:'#jobs'
            },
            {
                id:5,
                title:'skills',
                idSection:'#skills'
            }
        ],
        content:{
                name: 'Everton Vargas Guetierres',
                title:'Im a front-end developer and I build website screens for desktop and mobile',
                althcj:'html css and javascript image',
                more:'know more'
        }
    })
}
  

  
