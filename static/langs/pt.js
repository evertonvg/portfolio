export default async (context, locale) => {
    return await Promise.resolve({
        lingua:"Português",
        pagina2:'pagina2',
        bandeira:'bra',
        footer:'Todos os direitos reservados',
        sections:[
            {
                id:1,
                title:'Home',
                idSection:'#home',
            },
            {
                id:2,
                title:'Sobre mim',
                idSection:'#about'
            },
            {
                id:3,
                title:'Experiência',
                idSection:'#experience'
            },
            {
                id:4,
                title:'Trabalhos',
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
            title: 'Sou desenvolvedor front-end e construo telas de sites para desktop e mobile',
            althcj: 'imagem de html css e javascript',
            more:'Saiba mais'
        }
    })
}
  

  
