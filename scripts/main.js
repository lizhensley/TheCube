let chart = new Chart({
    names: [],
    x: [],
    y: [],
    z: []
})

let numLevels = 1;

$(function() {
    connectButtons();
});

function connectButtons() {
    $("#add-line").on("click", handleAddNewLine);
    $("#update").on("click", handleChartUpdate);

    $(".data-level .trash").on("click", handleDeleteLine)
}

function handleAddNewLine() {
    numLevels++;
    $("#buttons").before($("<div>").addClass("level data-level is-mobile").attr({id: `data-${numLevels}`}).append(
        `<div class="level-item">
        <div class="field">
          <div class="control">
            <h1 class="heading">Name</h1>
            <input class="input is-rounded is-medium" type="text" placeholder="whomst">
          </div>
        </div>
      </div>
      <div class="level-item">
        <div class="field">
          <div class="control">
            <h1 class="heading">scrawny-beefy</h1>
            <div class="select is-red is-rounded">
              <select class="scrawny-beefy">
                <option value="0">0 (scrawny)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 (beefy)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="level-item">
        <div class="field">
          <div class="control">
            <h1 class="heading">stupid-smart</h1>
            <div class="select is-light-blue is-rounded">
              <select class="stupid-smart">
                <option value="0">0 (stupid)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 (smart)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="level-item">
        <div class="field">
          <div class="control">
            <h1 class="heading">kind-mean</h1>
            <div class="select is-purple is-rounded">
              <select class="kind-mean">
                <option value="0">0 (kind)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 (mean)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="level-item">
        <div class="trash">
          <span></span>
          <i></i>
        </div>
      </div>`))
}

function handleDeleteLine() {
    
}

function handleChartUpdate() {
    let data = {
        names: [],
        x: [],
        y: [],
        z: []
    }
    for (let i = 0; i < numLines; i++) {
        let form = $(`#data-${i}`);
    }
}