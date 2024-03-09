let inp=document.querySelector('.inp')
let btn= document.querySelector('.btn')
let totaldata= document.querySelector('.alldata')
let img= document.querySelector('.img')
let day= document.querySelector('.day')

async function datafetch(inp){
let url=`https://api.weatherapi.com/v1/current.json?key=0dd0164bbe704a839a1105729240403&q=${inp}&aqi=no
`
try{
let datas=  await fetch(url)
let data= await datas.json()
disp(data)
console.log(data)

}
catch(erroe){
console.log(erroe,'this will throw an error')
}
}

btn.addEventListener('click',()=>{
    let inp= document.querySelector('.inp').value
    datafetch(inp)
    if(inp==''){
        alert('please enter here')
    }
})
 
function disp(data){
   let total=  `
<h1>${data.location.name}</h1>
<h1>${data.current.temp_c}°C</h1>
`
totaldata.innerHTML=total

let days=  new Date(data.location.localtime);

let dayy=['sunday','monday','tuesday','wednesday','thruesday','friday','saturday']
let dayofweek=dayy[days.getDay()]
// let dd= days.toLocaleDateString('en-US', { weekday: 'long' })


day.innerHTML=`${dayofweek}`
img.src=`${data.current.condition.icon}`

}