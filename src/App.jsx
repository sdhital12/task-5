import './App.css'

function App() {
  const menu1 = ["Combo Meal","$5"]
  const menu2 =["NUGGETS","$10"]
  const menu3 =["SANDWICHES","$10"]
  return (
    <>
    
    
      <header>
        <nav className="topMenu">
          
          <div className ="logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" alt="" />
          </div>
          
          <div className='menu'>
          <ul>
            <li>Menu </li>
            <li>Careers</li>
            <li>About</li>
            <li>Find a KFC</li>
          </ul>
          </div>
          
          <div>
          <button>order here</button>
         
          
             </div>
          
          
        </nav>
      </header>
      
      <div className='popUp'>
        <p>
          Start an order for pickup or Delivery

        </p>
        
      </div>
      
      <div className="banner">
        <img src="https://cdn.dribbble.com/users/1191636/screenshots/6720916/kfc_website-redesign-concept.jpg?compress=1&resize=400x300&vertical=top" alt="" />
        
        <div className="bannerText">
          <h1>SPICY SANDWICH. HOT REWARDS.</h1>
        </div>
      </div>

      <div className ="menu">
        
        <div className="menu-1">
        <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-cknsndcombo?q=75" alt="" />
        <h3>{menu1[0]}</h3>
        <h4>{menu1[1]}</h4>
        </div>

        <div className="menu-1">
        <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-JamalMurray12pcNugCombo?q=75&w=1280" alt="" />
        <h3>{menu2[0]}</h3>
        <h4>{menu2[1]}</h4>
        </div>
        
        <div className="menu-1">
        <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-AlcChLtl?q=75" alt="" />
        <h3>{menu3[0]}</h3>
        <h4>{menu3[1]}</h4>
        </div>
        
        </div>
        
     
  
     
      
    
    
        
    </>
  )
}

export default App
