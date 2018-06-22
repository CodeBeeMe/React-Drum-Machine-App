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

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    
  }  
  componentDidMount() {
    window.focus();
    function handleKeyPress(event) {
      const char =
            document.getElementById(event.key) ||
            document.getElementById(event.key.toUpperCase());
      const id = event.key.toUpperCase();
      const name = document.getElementById(id);
      const musicIcon = '...<i class="fas fa-music"></i>...';        
      switch (event.key) {
        case "q":
        case "Q":
        case "w":
        case "W":
        case "e":
        case "E":
        case "a":
        case "A":
        case "s":
        case "S":
        case "d":
        case "D":
        case "z":
        case "Z":
        case "x":
        case "X":
        case "c":
        case "C":
          $("#" + id)
            .parent()
            .addClass("active");
          setTimeout(() => {
            $("#" + id)
            .parent()
            .removeClass("active");
          }, 95);
          char.currentTime = 0;
          char.play();
          //console.log(id);
          $("#name").html(musicIcon + name.dataset.item + musicIcon); 
          break;
        default:
          console.log("Sorry, we are out of sounds for " + event.key + ".");
      }
      //console.log(event);
    }
    window.onkeypress = () => {
      handleKeyPress(event);
    };
  }
  render() {
    return (null);
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    
  }  
  
  render() {
    const { setPresetOne, setPresetTwo } = this.props;
    return (
      <div className="toggle">
        <div className="row justify-content-md-center">
          <div className="col preset-a selected" onClick={setPresetOne}>
            <i className="fas fa-music" /> A
          </div>
          <div className="col">
            <div className="switch">
              <div className="knob">
              </div>
            </div>
          </div>
          <div className="col preset-b" onClick={setPresetTwo}>
            <i className="fas fa-music" /> B
          </div>
        </div>
      </div>
    );
  }
}

class DrumApp extends React.Component {
  constructor(props) {
    super(props);
    this.presetOne = [
      [
        { id: "Q", sound: "https://goo.gl/tqBjNJ", name: "Bass Drum 2" },
        { id: "W", sound: "https://goo.gl/pNdLBt", name: "Snare 2" },
        { id: "E", sound: "https://goo.gl/9m7J8H", name: "MidTom 1" }
      ],
      [
        { id: "A", sound: "https://goo.gl/PaVc3u", name: "Closed Hi Hat" },
        { id: "S", sound: "https://goo.gl/oJ7fF8", name: "Clap" },
        { id: "D", sound: "https://goo.gl/qYdECH", name: "Side Stick" }
      ],
      [
        { id: "Z", sound: "https://goo.gl/teU8GC", name: "High Tom 2" },
        { id: "X", sound: "https://goo.gl/kUvXAh", name: "Ryde Cym 1" },
        { id: "C", sound: "https://goo.gl/tuW68T", name: "Long Crash 1" }
      ],
      [{ title: "Minimal Drums Arena" }]
    ];
    this.presetTwo = [
      [
        { id: "Q", sound: "https://goo.gl/tKGhyx", name: "Bass Drum 2" },
        { id: "W", sound: "https://goo.gl/XFYU1R", name: "Side Stick" },
        { id: "E", sound: "https://goo.gl/h3o5pY", name: "Snare 1" }
      ],
      [
        { id: "A", sound: "https://goo.gl/tZS9QB", name: "Clap" },
        { id: "S", sound: "https://goo.gl/YCSJnc", name: "Snare 2" },
        { id: "D", sound: "https://goo.gl/PjemEr", name: "Low Tom 1" }
      ],
      [
        { id: "Z", sound: "https://goo.gl/bcMKWx", name: "Pedal Hi Hat" },
        { id: "X", sound: "https://goo.gl/dRijyE", name: "Mid Tom " },
        { id: "C", sound: "https://goo.gl/wV6L4u", name: "High Tom 1" }
      ],
      [{ title: "Dubstep Kit Stadium" }]
    ];
    this.state = {
      pads: this.presetOne
    };

    this.playKeys = {};
    this.setPresetOne = this.setPresetOne.bind(this);
    this.setPresetTwo = this.setPresetTwo.bind(this);
  }

  playSound(key) {
    this.playKeys[key].currentTime = 0;
    //this.playKeys[key].load();
    this.playKeys[key].play();
    const name = document.getElementById(key);
    const musicIcon = '...<i class="fas fa-music"></i>...';
    $("#name").html(musicIcon + name.dataset.item + musicIcon);    
    //console.log(key);
    //console.log(this.playKeys[key]);
  }
  
  setPresetOne() {
    this.setState({
      pads: this.presetOne
    });
    if(this.state.pads !== this.presetOne) {
      $(".knob").addClass("slide-l");
      $(".knob").removeClass("slide-r");
      //$(".preset-a").css("color", "#fff");
      //$(".preset-b").css("color", "#616a72");
      $(".preset-a").addClass("selected");
      $(".preset-b").removeClass("selected");
    }
  }
  
  setPresetTwo() {
    this.setState({
      pads: this.presetTwo
    });
    $(".knob").addClass("slide-r");
    $(".knob").removeClass("slide-l");
    //$(".preset-b").css("color", "#fff");
    //$(".preset-a").css("color", "#616a72");
    $(".preset-b").addClass("selected");
    $(".preset-a").removeClass("selected");
  }

  render() {
    //Logs
    //console.log(this.state.pads);

    const { pads } = this.state;

    const rowOne = pads[0].map(el => (
      <td
        id={el.name}
        key={el.id}
        className="drum-pad"
        role="button"
        onClick={this.playSound.bind(this, el.id)}
        >
        <audio
          preload="auto"
          data-item={el.name}
          id={el.id}
          className="clip"
          ref={sound => {
            this.playKeys[el.id] = sound;
          }}
          src={el.sound}
          type="audio/mpeg"
          />
        {el.id}
      </td>
    ));

    const rowTwo = pads[1].map(el => (
      <td
        id={el.name}
        key={el.id}
        className="drum-pad"
        role="button"
        onClick={this.playSound.bind(this, el.id)}
        >
        {el.id}
        <audio
          preload="auto"
          data-item={el.name}
          id={el.id}
          className="clip"
          onClick={this.playSound}
          ref={sound => {
            this.playKeys[el.id] = sound;
          }}
          src={el.sound}
          type="audio/mpeg"
          />
      </td>
    ));

    const rowThree = pads[2].map(el => (
      <td
        id={el.name}
        key={el.id}
        className="drum-pad"
        role="button"
        onClick={this.playSound.bind(this, el.id)}
        >
        {el.id}
        <audio
          preload="auto"
          data-item={el.name}
          id={el.id}
          className="clip"
          onClick={this.playSound}
          ref={sound => {
            this.playKeys[el.id] = sound;
          }}
          src={el.sound}
          type="audio/mpeg"
          />
      </td>
    ));

    const presetTitle = pads[3][0].title;

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
                    <tr>{rowOne}</tr>
                    <tr>{rowTwo}</tr>
                    <tr>{rowThree}</tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-r">
              <div className="display-panel text-center">
                <div id="display-space">
                  <div id="display" className="sfx">
                    <h6>Sound Effects</h6>
                    <h5 id="name">
                      ...<i className="fas fa-music" />...<i className="fas fa-music" />...<i className="fas fa-music" />...
                    </h5>
                  </div>
                  <div className="preset">
                    <h6>Preset Title</h6>
                    <h5>{presetTitle}</h5>
                  </div>
                  <div className="library">
                    <h6>Preset Library</h6>
                    <Toggle
                      setPresetOne={this.setPresetOne}
                      setPresetTwo={this.setPresetTwo}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Keyboard />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<DrumApp />, document.getElementById("content"));
