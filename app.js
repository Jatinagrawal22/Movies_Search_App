const form=document.querySelector('form')
const list=document.getElementById('list')

function getMovies(searchtext){

    //remove all dispayed movies

    while(list.firstChild){
        list.removeChild(list.firstChild)
    }

    const url=`https://api.tvmaze.com/search/shows?q=${searchtext}`

    axios.get(url)
        .then((res)=>{
            for(let item of res.data){
                if(item.show.image){
                    const img=document.createElement('img')
                    img.src=item.show.image.medium

                    img.style.margin='10px'

                    list.append(img)
                }
                
            }
            //console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inptext=form.elements[0].value
    //console.log('Form Submitted')
    getMovies(inptext)
    form.elements[0].value=""
})