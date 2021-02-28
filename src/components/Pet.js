import React from 'react'

class Pet extends React.Component {
  adoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { this.props.pet.gender === 'male' ? '♂' : '♀'}
           {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: PET AGE: {this.props.pet.age}</p>
            <p>Weight: PET WEIGHT: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.pet.isAdopted ?
          <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>:
          <button className="ui disabled button">Already adopted</button>
  }
        </div>
      </div>
    )
  }
}

export default Pet
