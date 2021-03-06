import React, { Component } from 'react'
// import hache from './hache.mp4';
// import vilain1 from './vilain-1.mp4';
// import vilain2 from './vilain-2.mp4';
// import vilain3 from './vilain-3.mp4';
// import './Styles/Villain.css'

class Villain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: true,
      villain: null
    }
    this.myVideo = null
    this.setMyVideo = (element) => {
      this.myVideo = element
    }
  }

  componentDidMount() {
    const { userCase, userStep, Cases, lang } = this.props
    const villain1 =
      'https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/vilain/vilain-1-compress.mp4'
    const villain2 =
      'https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/vilain/vilain-2-compress.mp4'
    const villain3 =
      'https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/vilain/vilain-3-compress.mp4'
    const hache =
      'https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/vilain/hache-compress.mp4'
    const gun =
      'https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/vilain/gun-compress.mp4'
    let weapon = Math.floor(Math.random() * 2) + 1
    weapon = weapon === 1 ? gun : hache
    if (userStep > 0 && userStep < Cases[userCase][lang].steps.length - 1) {
      if (userStep % 3 === 0) {
        this.setState({ villain: villain3 })
      } else if (userStep % 2 === 0) {
        this.setState({ villain: villain2 })
      } else {
        this.setState({ villain: villain1 })
      }
    } else if (
      this.state.display &&
      Cases[userCase][lang].steps.length - 1 === userStep
    ) {
      this.setState({ villain: weapon })
    } else {
      this.setState({ villain: villain1 })
    }

    if (this.myVideo) {
      let that = this
      this.myVideo.onended = function (e) {
        that.displayFalse()
      }
    }
  }

  displayFalse = () => {
    this.props.changeVillainPlayed()
    this.setState({ display: false })
  }

  render() {
    return (
      <div>
        {this.state.display ? (
          <div className='cs-hache'>
            <video width='600' autoPlay height='440' ref={this.setMyVideo}>
              <source src={this.state.villain} type='video/mp4'></source>
            </video>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default Villain
