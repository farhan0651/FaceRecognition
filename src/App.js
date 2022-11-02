import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'a7c6b1ce18f84f3ebc116bb4989f2f67'
 });

const particlesParams={
  particles: {
    number:{
      value:90,
      density:{
        enable:true,
        value_area:500
      }
    }
  }
}

class App extends Component  {

  constructor(){
    super();
    this.state={
      input:'',
      imageURL:'',
      box:{},
      route:'signin',
      isSignedIn: false
    }
  }

  // componentDidMount(){
  //   fetch('http://localhost:8000/')
  //   .then(response=>response.json())
  //   .then(console.log);
  // }

  calculateFaceLocation=(data)=>{
    const boxData=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('enteredImage');
    const width=Number(image.width);
    const height=Number(image.height);
    return{
      leftCol:boxData.left_col*width,
      topRow:boxData.top_row*height,
      rightCol:(width-boxData.right_col*width),
      bottomRow:(height-boxData.bottom_row*height)
    }
  }

  displayBox=(box)=>{
    console.log(box);
    this.setState({box});
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }

  onSubmit=()=>{
    this.setState({imageURL:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then((response)=> {
      this.displayBox(this.calculateFaceLocation(response));
    })
    .catch((err)=> {
      console.log(err);
    }
  );
  }

  onRouteChange=(route)=>{
    if(route==='signout')
    {
      this.setState({isSignedIn:false});
    }
    else if(route==='home'){
      this.setState({isSignedIn:true});
    }
    this.setState({route:route});
  }

  render(){
  return (
    <div className="App">
      <Particles className='particles'
       params={particlesParams}
      />
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
      {this.state.route==='home'
      ?
      <div>
      <Logo />
      <Rank />
    <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
     <FaceRecognition imageURL={this.state.imageURL} box={this.state.box} />
     </div>
      :(
        this.state.route==='signin' || this.state.route==='signout'
        ?<Signin onRouteChange={this.onRouteChange} />
        :
        <Register onRouteChange={this.onRouteChange} />
      )
      }
    </div>
  )
}
}

export default App;
