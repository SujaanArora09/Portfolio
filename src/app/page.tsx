    "use client"

    const handleContextMenu = (e : React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
    }

    const Home: React.FC = () => {
      
      return (
        <div 
        onContextMenu={(e) => handleContextMenu(e)}
        className="wallpaper w-screen  overflow-hidden" 
          style={{backgroundImage: 'url("") ', backgroundRepeat:'none', backgroundSize : 'cover' }}>
      </div>
      );
    };

    export default Home;
