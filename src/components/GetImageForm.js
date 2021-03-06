import React, { Component } from 'react';


import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

const API_KEY = "y7ojwMkndFNa6FiLuazStGQHhKXFwIJ5RTHiRg36";


export default class GetImageForm extends Component {
  constructor(props){
    super(props);

    this.fetchRoverImage = this.fetchRoverImage.bind(this);

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "",
    }
  }
  handleSol = (e) => {
    e.preventDefault(e);
    this.setState({sol: e.target.value});
  }
  handleRover = (e) => {
    e.preventDefault();
    this.setState({rover: e.target.value });

  }
  handleCamera = (e) => {
    e.preventDefault();
    this.setState({camera: e.target.value });
  }
  fetchRoverImage(e) {
    e.preventDefault();
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`

    fetch(imageUrl)
    .then(results => {
   return results.json();
 })
 .then(data => {
   console.log("data", data.photos);
   this.setState({images: data.photos})
 })
 .catch(error =>
 alert(error))}
  render() {
    return (
      <div>
        <form>

          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
          <GetImageButton onClick={this.fetchRoverImage} />

          <ImageDisplay pictures={this.state.images} rover={this.state.rover}
          />
        </form>
      </div>
    )
  }
}


//<ChuckedList jokes={this.state.jokes} />
