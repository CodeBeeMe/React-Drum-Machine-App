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
      pads: [["Q", "W", "E"], ["A", "S", "D"], ["Z", "X", "C"]]
    };
    
  }

  render() {
    //Logs
    
    const { pads } = this.state;

    const row1 = pads[0].map(key => (
      <td id={key} key={key} className="drum-pad" data-item={key} role="button">
        {key}
        <audio src="" id={key} className="clip" />
      </td>
    ));

    const row2 = pads[1].map(key => (
      <td id={key} key={key} className="drum-pad" data-item={key} role="button">
        {key}
        <audio src="" id={key} className="clip" />
      </td>
    ));

    const row3 = pads[2].map(key => (
      <td id={key} key={key} className="drum-pad" data-item={key} role="button">
        {key}
        <audio src="" id={key} className="clip" />
      </td>
    ));

    return (
      <div>
        <Title />
        <div id="speakers">
        </div>
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
                <div id="display">
                  <div id="sfx">
                    <h6>Sound Effects</h6>
                    <h4>Placeholder</h4>
                  </div>                  
                  <div id="profiles">
                    <h6>Sound Profiles</h6>
                    <h4>Placeholder</h4>
                  </div>
                  <div id="vol">
                    <h6>Volume</h6>
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
