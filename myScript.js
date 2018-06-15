/* !Date:12.06.2018 Copyright ©2018 JavaScript & React code by Cătălin Anghel-Ursu @Madness2aMaze (https://codepen.io/Madness2aMaze)
- All Rights Reserved!

MIT License

Copyright (c) 2018 Cătălin Anghel-Ursu (https://github.com/Madness2aMaze/Drum-Machine-App)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

//Title
const Title = () => {
  return (
    <div id="title" className="text-center">
      <h2>The Drum Machine</h2>
    </div>
  );
};

const Footer = () => {
  return (
    <div id="footer" className="navbar-fixed-bottom text-center">
      <h6>Designed and coded by <a href="https://github.com/Madness2aMaze" target="_blank" id="footbar" title="©2018 Cătălin Anghel-Ursu @Madness2aMaze - All Rights Reserved">@Madness2aMaze ©2018 - All Rights Reserved</a> | <a href="http://codepen.io/Madness2aMaze/" title="More of my works" target="_blank"><i className="fab fa-codepen"></i></a> | <a href="https://www.freecodecamp.com/" target="_blank" title="FreeCodeCamp" ><i className="fab fa-free-code-camp"></i></a>
      </h6>
    </div>
  );
};

class DrumApp extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      pads: [
        [
          { id: "Q", sound: "https://goo.gl/4oLZh6" },
          { id: "W", sound: "https://goo.gl/KQms1G" },
          { id: "E", sound: "https://goo.gl/5tpeXQ" }
        ],
        [
          { id: "A", sound: "https://goo.gl/4oLZh6" },
          { id: "S", sound: "https://goo.gl/KQms1G" },
          { id: "D", sound: "https://goo.gl/5tpeXQ" }
        ],
        [
          { id: "Z", sound: "https://goo.gl/4oLZh6" },
          { id: "X", sound: "https://goo.gl/KQms1G" },
          { id: "C", sound: "https://goo.gl/5tpeXQ" }
        ]
      ]
    };
    
    this.playKeys = {}    
  }

  playSound(key) {
    this.playKeys[key].currentTime = 0;
    this.playKeys[key].load();
		this.playKeys[key].play();
	}
  
  render() {
    const { pads } = this.state;

    const row1 = pads[0].map(el => (
      <td
        id={el.id} key={el.id} className="drum-pad"
        data-item={el.id} role="button"
        onClick={ this.playSound.bind(this, el.id) }>       
        <audio
          preload="auto"
          id={el.id} className="clip"          
          ref={(sound) => { this.playKeys[el.id] = sound }}
          src={el.sound} type="audio/mpeg"
          />          
        {el.id}
      </td>
    ));

    const row2 = pads[1].map(el => (
      <td
        id={el.id} key={el.id} className="drum-pad"
        data-item={el.id} role="button"
        onClick={ this.playSound.bind(this, el.id) }>
        {el.id}
        <audio
          preload="auto"
          id={el.id}
          className="clip"
          onClick={ this.playSound }
          ref={(sound) => { this.playKeys[el.id] = sound }}
          src={el.sound} type="audio/mpeg"
          >          
        </audio>
      </td>
    ));

    const row3 = pads[2].map(el => (
      <td
        id={el.id} key={el.id} className="drum-pad"
        data-item={el.id} role="button"
        onClick={ this.playSound.bind(this, el.id) }>
        {el.id}
        <audio
          preload="auto"
          id={el.id}
          className="clip"
          onClick={ this.playSound }
          ref={(sound) => { this.playKeys[el.id] = sound }}
          src={el.sound} type="audio/mpeg"
          >
        </audio>
      </td>
    ));

    return (
      <div>
        <Title />
        <div id="speakers" />
        <div id="drum-machine">
          <div className="row">
            <div className="col col-l">
              <div className="pad-box">
                <table className="pads text-center">
                  <tbody>
                    <tr>{row1}</tr>
                    <tr>{row2}</tr>
                    <tr>{row3}</tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-r">
              <div className="display-panel text-center">
                <div id="display-space">
                  <div id="display" className="sfx">
                    <h6>Sound Effects</h6>
                    <h4>Placeholder</h4>
                  </div>
                  <div className="profiles">
                    <h6>Sound Profiles</h6>
                    <h4>Placeholder</h4>
                  </div>
                  <div className="vol">
                    <h6>Volume</h6>
                    <div className="row justify-content-md-center">
                      <div className="col- down">
                        <i className="fas fa-volume-down" />
                      </div>
                      <div className="col- ctrl">
                        <input
                          id="vol-control"
                          type="range"
                          min="0"
                          max="100"
                          defaultValue="25"
                          step="1"
                          />
                      </div>
                      <div className="col- up">
                        <i className="fas fa-volume-up" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
}

ReactDOM.render(<DrumApp />, document.getElementById("content"));
