  "use client"

  const handleContextMenu = (e : React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const Home: React.FC = () => {
    
    return (
      <div 
      onContextMenu={(e) => handleContextMenu(e)}
      className="w-screen h-screen bg-cover bg-center bg-fixed overflow-hidden bg-red-500" 
         style={{backgroundImage: 'url("/background.jpg")' , backgroundColor : 'red'}}>
    </div>
    );
  };

  export default Home;
