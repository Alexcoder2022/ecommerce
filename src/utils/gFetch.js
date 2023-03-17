
let productos = [
    {id:'100', categoria: 'traje de baño', name:'Bikini', precio:'1800', stock: '3', foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_632627-MLA52876774123_122022-F.webp' },
    {id:'101', categoria: 'traje de baño', name:'bikini', precio:'1800', stock: '1', foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_632627-MLA52876774123_122022-F.webp'},
    {id:'200', categoria: 'remeras ', name:'remera deportiva', precio:'2000', stock: '2', foto: 'https://http2.mlstatic.com/D_NQ_NP_743525-MLA53606100485_022023-W.webp'},
    {id:'300', categoria: 'buzos', name:'buzo negro', precio:'3000', stock: '3', foto: 'https://http2.mlstatic.com/D_NQ_NP_740861-MLA54338245372_032023-W.webp'},
    
    
]

export const gFetch = ()=>{
    return new Promise ((res, rej) => {
        setTimeout(()=>{
            res(productos)
        },3000)

    })
}