import { useEffect, useState } from "react";

// create your App component here
function App(){

    const [dogImg, setDogImg] = useState("");
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>{
           // console.log(data)
            if(data.status==="success"){
                setDogImg(data.message);
            }else{
                //failed request logic here
            }
        })
    },[]);

     return (
        <>
            {dogImg ? <img src={dogImg} alt="A Random Dog" /> : <p>Loading...</p>}
        </>
     );
}

export default App;