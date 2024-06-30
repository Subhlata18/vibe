
import iconn from "./n.jpeg";
// import IconText from "../components/IconText";
import home from "./ho.jpg";
import search from "./search.png";
import lib from "./lib.jpeg";
import React from "react";
import playlist from "./playlist.jpeg";
import like from "./like.svg";
const Home = ()=>{
  let mystyle={
    backgroundColor:"red"
  }
  const FocusCard= [
    {title:"peace",
    description:"relax with me baby",
    imgurl:"https://th.bing.com/th/id/R.c7251c1fc5029e5e43b256df66918d82?rik=2Z5863efmqVYkA&riu=http%3a%2f%2fwallpapers13.com%2fwp-content%2fuploads%2f2016%2f04%2fSunset-romantic-couple-in-an-embrace-love-Wallpaper-HD.jpg&ehk=9VesCl54LWbKdsSZzWTXdQux%2fYAP%2fr0lLpmZlAIGuMY%3d&risl=&pid=ImgRaw&r=0"
  },

  {title:"soft",
    description:"by hugging and eye contacts",
    imgurl:"https://th.bing.com/th/id/OIP.Qkzg-O63WBzHdawMgYEWfgHaFj?rs=1&pid=ImgDetMain"
  },

  {title:"hard",
    description:"by kissing and hand movement",
    imgurl:"https://th.bing.com/th/id/OIP.ijc3wQApoBOdGXDphFE8wAHaE8?rs=1&pid=ImgDetMain"
  },

  {title:"study",
    description:"daat k or thappad maar k",
    imgurl:"https://th.bing.com/th/id/OIP.EzaQRQNkCV2a6p8SkR1NYQHaEK?rs=1&pid=ImgDetMain"
  },

  {title:"love",
    description:"caring ,loving and respect",
    imgurl:"https://th.bing.com/th?id=OIP.NFnY5SpkkvqvAjXlWJ6IQwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  },
];
    return(
        <div className="h-full w-full flex">
            <div className="h-full w-1/5 bg-black flex item-center justify-start cursor-pointer ">
               <div className="py-3 ">
             <img className="mx-auto h-10 w-auto mt-3  " src={iconn} alt="Your Company"/>

             <img className="mx-auto h-10 w-auto mt-3 flex py-2 " src={home}  alt="Your Company"/>
             
             <img className="mx-auto h-10 w-auto mt-1 flex bg-white py-2 " src={search}  alt="Your Company"/>

             <img className="mx-auto h-10 w-auto mt-1 flex py-2 " src={lib}  alt="Your Company"/>
              
             <img className="mx-auto h-10 w-auto mt-5 flex py-2 "src={playlist} alt="Your Company"/>

             <img className="mx-auto h-10 w-auto mt-1 flex py-2" src={like}  alt="Your Company" />
             

             </div> 
             <div className="py-3 mr-20 overflow-auto">
             <div className="text-white text-2xl font-bold hover:text-gray mt-3 my-100  mr-10 ml-2 "><h1>Spotify</h1></div>
                
                
                  {/* className="text-white size-200px font-bold mx-5 my-3 " */}
            
                  <div className="text-white  font-bold hover:text-gray  font-size:60px  mt-10  ">Home</div>

                  <div className="text-grey  font-bold hover:text-white font-size:100px mt-3">Search</div>

                  <div className="text-grey  font-bold hover:text-white  mt-4  ">library</div>
                  
                  <br/>

                  <div className="text-grey font-size:200px font-bold hover:text-white mt-4 text-sm py-3"> Playlist</div>
                    

                  <div className="text-grey font-size:200px font-bold hover:text-white mx-1 text-sm mt-2">Liked Songs</div>

                    <br/>
                    <br/>
                    <br/>

                    <br/>
                  <div className="mt-20 mr-12">
              <button type="submit" className=" border border-gray-100 flex w-full justify-center rounded-full bg-black px-3 py-1.5  font-bold leading-6 text-white shadow-sm hover:text-gray "style={mystyle}>English</button>
              </div>
             </div>

             
             
               
               </div>



               <div className="h-full w-4/5 bg-app-black justify-end justify-around overflow-auto">
                <div className="navbar  w-full h-1/10 bg-black opacity-30 justify-end">
                    <div className="w-1/2 flex justify-end justify-around"></div>

                  <div className=" w-3/5 text-white flex">
                  <div className="hover:text-red cursor-pointer ml-2 "> premium </div>

                  <div className="  hover:text-red  cursor-pointer  ml-10"> support </div>
                  <div className="  hover:text-red cursor-pointer ml-10"> download</div>
                  <div className="  hover:text-red cursor-pointer ml-10"> Sign In</div>
                  </div>
                  <div className="bg-white h-2/3 px-8 flex mr-4 items-center justify-center rounded-full">Sign Up</div>
                  
                    
                </div>
                <div className="content P-10 overflow-auto">
                <PlaylistView titleText="Focus" cardsData={FocusCard}/>
                <PlaylistView titleText="Focus" cardsData={FocusCard}/>
                <PlaylistView titleText="Focus" cardsData={FocusCard}/>
                
                {/* <PlaylistView titleText="my favourites"/> */}
                </div>

               
              
               </div>
              

           
        </div>
    );
};

const PlaylistView=({titleText,cardsData}) =>{
  return <div className="text-white">
    
    <div className="text-2xl font-semibold">{titleText}</div>
    <div className="w-full  flex justify-between space-x-3">
      {
        cardsData.map((item)=>{
          return <Card title={item.title} description={item.description} imgurl={item.imgurl}/>
        })
      }
      {/* <Card 
      title="peaceful piano"
      description="relax with me baby"
      imgurl={like}/>


      <Card 
      title="peaceful piano"
      description="relax with me baby"
      imgurl={like}/>

      <Card 
      title="peaceful piano"
      description="relax with me baby"
      imgurl={lib}/>

      <Card 
      title="peaceful piano"
      description="relax with me baby"
      imgurl={home}/>

      <Card 
      title="peaceful piano"
      description="relax with me baby"
      imgurl={like}/>
    </div>
    </div>; */}
    </div>
    </div>
    
};

const Card = ({title, description,imgurl}) =>{
  return (
    <div className="bg-black bg-opacity-50 w-1/6 p-4 rounded-lg ml-2 mt-3">
      <div className="py-4">
      <img className="w-full rounded-md"
      src={imgurl}
      alt="label img"/>
      </div>
      <div className="text-white font-semibold">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  )
}
export default Home;