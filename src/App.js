import { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Get All Possible Color CombinationS
    const color = [];
    function addColor() {
      for (var i = 1; i < 33; i++) {
        for (var j = 1; j < 33; j++) {
          for (var k = 1; k < 33; k++) {
            color.push({ red: 8 * i, green: 8 * j, blue: 8 * k });
          }
        }
      }
    }
    addColor();
    //Get Element className = "App-header"
    const mainArea = document.querySelector(".App-header");
    for (var i = 1; i < 129; i++) {
      for (var j = 0; j < 256; j++) {
        //Create little Color Square Boxes
        var span = document.createElement("span");
        var index = i * j;
        // Add a unique background color in the box
        span.style.backgroundColor =
          "rgb(" +
          color[index].red +
          "," +
          color[index].green +
          "," +
          color[index].blue +
          ")";
        // Append this span tag
        mainArea.append(span);
        // Move it to the right position
        span.style.top = i * 5 + "px";
        span.style.left = j * 5 + "px";
      }
    }
  }, []);
  return (
    <div className="App">
      <div className="App-header"></div>
    </div>
  );
};

export default App;
