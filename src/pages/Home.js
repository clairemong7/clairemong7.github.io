import '../App.css';
import myImage from '../utils/ClaireOng.png';


const Home = () => {

  return (
    
    <div class="mx-auto flex-col justify-center px-8">
   
      <body class="flex flex-col items-center">
        <img src={myImage} width="250" height="250" alt="Claire Ong" class="mb-8"/>
        <div class="mb-8">
          <h1 class="mb-1">Claire Ong</h1>
          <h2>Student Marketeer @ Red Bull</h2>
        </div>
      
        <p class="max-w-3xl">
          I work for Red Bull to give students wiiings!
          If you have any events during the winter quarter that you'd like Red Bull to support, whether it's giving students a boost for a large event or a general meeting, let's
          <a id="mailto" href="mailto:claire.ong@redbull.com"> get in touch</a>.
          I'd love to swing by and give everyone a can of Red Bull Energy Drink!
        </p>
      </body>
   
      <div className="Projects">
        
        <p>
          ↘ View projects
        </p>
        
        <a href="https://devpost.com/software/translate-with-t-mobile">
          01 Translate With T-Mobile
        </a>

        <a href="https://youtu.be/UqvALGrGkzo?si=50jyvJh2wxNWMPC8">
          02 DubGrub Reimagined
        </a>

        <a href="https://washington.zoom.us/rec/share/UmkvICbOWIIq5eAYo1vppB90dzLOb_c9l_ruKktjVqHmZogcMPI6fueCTJ6I_RQ0.tI_SnOYJE-QeOrE8?startTime=1698463991000">
          03 Starbucks Mobile Reimagined
        </a>

      </div>
      

      <div id="footer"></div>

    </div>

  );
}

export default Home;
