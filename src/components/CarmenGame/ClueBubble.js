import React, { Component } from 'react'
import Villain from './Villain'
import './Styles/ClueBubble.css'

class ClueBubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVillainPlayed: false
    }
  }

  changeVillainPlayed = () => this.setState({ isVillainPlayed: true })

  componentDidMount() {
    if (
      this.props.userStep === 0 ||
      Object.keys(this.props.HISTORY[this.props.HISTORY.length - 1]).length > 1
    ) {
      this.changeVillainPlayed()
    }
  }

  render() {
    const { clue, userStep, Cases, userCase, lang, HISTORY } = this.props
    return (
      <div className='cs-bubble-wrapper'>
        {userStep > 0 &&
        Object.keys(HISTORY[HISTORY.length - 1]).length === 2 ? (
          <Villain
            changeVillainPlayed={this.changeVillainPlayed}
            userStep={userStep}
            userCase={userCase}
            Cases={Cases}
            lang={lang}
          ></Villain>
        ) : (
          ''
        )}
        {this.state.isVillainPlayed ? (
          <div className='cs-bubble-inner'>
            <div className='cs-bubble'>{clue.Clue}</div>
            <div className='cs-guy'>
              {clue.Guy.key === 'curator' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  👩
                </span>
              ) : (
                ''
              )}
              {clue.Guy.key === 'pilot' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  👨
                </span>
              ) : (
                ''
              )}
              {clue.Guy.key === 'soldier' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  💂
                </span>
              ) : (
                ''
              )}
              {clue.Guy.key === 'housedetective' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  🕵
                </span>
              ) : (
                ''
              )}
              {clue.Guy.key === 'privycouncillor' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  👩
                </span>
              ) : (
                ''
              )}
              {clue.Guy.key === 'bankguard' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  🧛‍♂️
                </span>
              ) : (
                ''
              )}
              {clue.Guy.key === 'referencelibrarian' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  🧟‍♀️
                </span>
              ) : (
                ''
              )}
              {clue.Guy.key === 'undersecretary' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  💁
                </span>
              ) : (
                ''
              )}
              {clue.Guy.key === 'sailorssnail' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  🐌
                </span>
              ) : (
                ''
              )}
              {clue.Guy.key === 'sailor' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  🧜‍♂️
                </span>
              ) : (
                ''
              )}
              {clue.Guy.key === 'palaceguard' ? (
                <span role='img' className='cs-emoji' aria-label='emoji'>
                  💂
                </span>
              ) : (
                ''
              )}
              <br />
              {clue.Guy.value}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default ClueBubble
