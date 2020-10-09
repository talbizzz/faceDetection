import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '7cf823fa43de4a13892e150bde1185b6'
});

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      route: 'Signin', 
<<<<<<< HEAD
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries : 0,
        joined: ''
      }
=======
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
=======
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
=======
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
=======
      isSignedIn: false
>>>>>>> parent of c47946a... connnecting the backEnd without Databases
=======
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
    }
  }

  calculateFaceLocation= (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width), 
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  } 

  onInputChange= (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
      )
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))        
      .catch(err => console.log(err));
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box:box});
  }

  render(){
    return(
      <div className="App">
        <Particles className="particles" 
          params={particlesOptions}
        />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' 
          ?<div>
              <Logo/>
              <Rank/>
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onSubmit={this.onSubmit}
              />
              <FaceRecognition box={this.state.box} imageUrl= {this.state.imageUrl}/>
          </div> 
          :(this.state.route === 'Signin'  
            ?<Signin onRouteChange={this.onRouteChange}/>
            :<Register onRouteChange={this.onRouteChange}/> 
          )         
        }
        </div>
=======
=======
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
=======
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
=======
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
        <Navigation />
        <Logo/>
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl= {this.state.imageUrl}/>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
=======
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
=======
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
=======
>>>>>>> parent of 31f92be... added the forms BACKEND officially done
    );
  }
}

export default App;
