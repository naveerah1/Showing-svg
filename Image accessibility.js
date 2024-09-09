import ProfileCard from './ProfileCard';
import Alexaimage from './images/alexa.png';
import Ryleimage from './images/ryle.png';
import Margotimage from './images/margot.png';

// console.log(Alexaimage);
// console.log(Ryleimage);
// console.log(Margotimage);

function App(){
    return(
<div>
    <div>Personal Digital Assistants</div>

{/* /* <img src={Alexaimage} />
<img src = {Ryleimage} /> */ }

    <ProfileCard title="Alexa" handle="@Alexa990" image = {Alexaimage}/>
    <ProfileCard title="Ryle" handle="@Ryle432" image={Ryleimage}/>
    <ProfileCard title="Margot" handle="@Margot653"image={Margotimage}/>
</div>


    );
}
export default App;