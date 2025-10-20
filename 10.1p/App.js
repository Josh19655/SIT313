import React from "react";
import Image from './image';
import Largeheader from './Largeheader';
import DividerExampleHorizontal from './DividerExampleHorizontal';
import CardExampleCard from "./cardexamplercard";
import authors from "./authors";
import Navbar from "./Navbar";
import Smallbutton from "./Smallbutton";
import Smallbutton2 from "./Smallbutton2";
import DividerExample2 from "./DividerExample2";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";






function App(){




return(<div >
<Largeheader/>
<Navbar />
<Image/>

<DividerExampleHorizontal />


<div className="row">
<CardExampleCard 
name={authors[0].name}
date={authors[0].date}
img={authors[0].img}
detail={authors[0].detail}
/>
<CardExampleCard
name={authors[1].name}
date={authors[1].date}
img={authors[1].img}
detail={authors[1].detail}
/>
<CardExampleCard
name={authors[2].name}
date={authors[2].date}
img={authors[2].img}
detail={authors[2].detail}
/>
</div>

<Smallbutton/>
<DividerExample2 />


<div className="row">
<CardExampleCard
name={authors[3].name}
date={authors[3].date}
img={authors[3].img}
detail={authors[3].detail}
/>
<CardExampleCard
name={authors[4].name}
date={authors[4].date}
img={authors[4].img}
detail={authors[4].detail}
/>
<CardExampleCard
name={authors[5].name}
date={authors[5].date}
img={authors[5].img}
detail={authors[5].detail}
/>

</div>
<Smallbutton2 />
<Navbar2 />
<Footer />




</div>

)
    
}

export default App



