const fetchData = async() =>{
    try{
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data = await response.json();
        data = data.results ;
        data =data.filter(d => d.status==="Alive");
        return data;

    }catch(error){
        console.error(error);
    }  
}
const main = async () => {
    let list=document.getElementById("characterList");
    let result="<li> </li>";
      let data = await fetchData();
      if(data.length > 50){
        data=data.slice(0,50);
      }
    for(let i=0;i<data.length;i++){
       result+=`  <img/ src="${data[i].image}"> <br>
       Name:    ${data[i].name}  <br>
       Location:${data[i].location.name} <br>
       Species: ${data[i].species} <br>
       Gender:  ${data[i].gender} <hr>`;
    }
   list.innerHTML=result;
  }
  main();