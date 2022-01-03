import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const fetchUsers = () => {
    return axios.get("http://localhost:3000/product")
}

function Cards(){
    const [data, setData] = useState([]);
    const [isLoding, setIsLoading] = useState(true);

    const handleFetchUsers = async() => {
        try{
            setIsLoading(true);
            const {data} = await fetchUsers();
            setData(data);
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        handleFetchUsers();
    },[])

    if(isLoding){
        return (

            <h3>...Loding</h3>
        )
        
    }
    return(
        <div>
            <h3 style={{textAlign: 'center'}}>Products</h3>
            <div style={{ display: "flex", flexDirection: "column",flexWrap: "wrap", gap: 2 }}>
            {data?.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              margin: "20px",
              padding: 5,
              border: "1px solid gray",
              backgroundColor: "rgb(238, 247, 247)",
            }}
          >
               <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            <h3>Price {item.price}₹</h3>
           
            <Link to={`/home/${item.id}`}>Show more info</Link>
          </div>
        ))}
            </div>
        </div>
    )
}

export default Cards;