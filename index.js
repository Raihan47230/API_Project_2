const loadAllPhones=async(status,brandName)=>{
    console.log(brandName)
     document.getElementById('spinner').style.display='none'
    //  console.log('hello')
    const respons =await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:"iphone"}`)
    const data = await respons.json()
//    console.log(data)
    if(status){
        disAllPhone(data.data)
    }
    else{
        disAllPhone(data.data.slice(0,6))
    }
}
// console.log(first) after func 
const disAllPhone=(phone)=>{
console.log(phone)
phone.forEach(ph => {
    const {brand,phone_name,slug,image}=ph
    const phoneContainer=document.getElementById('phones-container')
    const div= document.createElement('div')

    // {
    //     "brand": "Apple ",
    //     "phone_name": "iPhone 13 mini",
    //     "slug": "apple_iphone_13_mini-11104",
    //     "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
    // }
    div.innerHTML=`
    <div class="card card-compact bg-base-100 w-96 shadow-xl mt-5">
  <figure>
    <img
      src=${image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions justify-end">
      <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
    `
    phoneContainer.appendChild(div)
});
}
// shoBtn 
const hendelShowAll=()=>{
    // console.log('click me')
    loadAllPhones(true)
}

const hendelSearch= () =>{
    const searchText=document.getElementById('search-box').value
document.getElementById('spinner').style.display='block'
    setTimeout(()=>{
        loadAllPhones(false,searchText)
    },3000)
     
    
}

const phoneDetails= async(slugs)=>{
    const respons=await fetch(` https://openapi.programming-hero.com/api/phone/${slugs}`)
    const data=await respons.json();
    console.log(data.data) 
    const {brand,phone_name,slug,image}=data.data
    
    const modele=document.getElementById('modal-container')
    modele.innerHTML=
    `
    <dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">${brand}</h3>
    <p class="py-4">${slug}</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`

    my_modal_1.showModal()
}
loadAllPhones(false,"iphone")













// const loadAllPhone=async(status,search)=>{

//      document.getElementById('spinner').style.display='none'
//      console.log('hello') 
//      const respons=await fetch('https://openapi.programming-hero.com/api/phones?search=${search?search:"iphone"}')
//      const data= await respons.json()
     
     
//      if(status==true){
//      displayAllPhone(data.data)             
//      }
//      else{
//      displayAllPhone(data.data.slice(0,6))             

//      }
// }

// const displayAllPhone=(phones)=>{
//      console.log(phones)
//      const phoneContainer=document.getElementById('phones-container')
    
//      phones.map((phone) => {
//           console.log(phone)
//         const newElelemts=  document.createElement('div').innerHTML=
//           `
//           <div class="card card-compact bg-base-100 w-96 shadow-xl">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div class="card-body">
//     <h2 class="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//           `
//           phoneContainer.appendChild(newElelemts)
//      });
    
// }
// const hendelShowAll=()=>{
//      // console.log('click me')
//      loadAllPhone(true)
// }
// const hendelSearch=()=>{      
//      document.getElementById('spinner').style.display='block'
//      const search=document.getElementById('search-box').value
//      setTimeout(()=>{
//           loadAllPhone(false,search)
//      },2000)
// }
// loadAllPhone(false,"iphone")