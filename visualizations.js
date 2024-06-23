var speed = 100;

inp_aspeed.addEventListener("input", vis_speed);

function vis_speed() {
    var array_speed = inp_aspeed.value;
    document.getElementById("speed_value").innerText = array_speed;
    switch (parseInt(array_speed)) {
        case 1: speed = 1; break;
        case 2: speed = 10; break;
        case 3: speed = 100; break;
        case 4: speed = 1000; break;
        case 5: speed = 10000; break;
    }
    
    delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed);
var c_delay = 0;

function div_update(cont, height, color) {
    window.setTimeout(function () {
        cont.style = "margin:0% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        cont.firstChild.innerText = height; // Update the value above the bar
    }, c_delay += delay_time);
}

function enable_buttons() {
    window.setTimeout(function () {
        for (var i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
        }
    }, c_delay += delay_time);
}

// Example sorting algorithm (Bubble Sort) for demonstration purposes
function Bubble() {
    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            if (div_sizes[j] > div_sizes[j + 1]) {
                // Swap values
                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                // Update the divs visually
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");
            }
        }
        // Mark the last sorted element
        div_update(divs[array_size - i - 1], div_sizes[array_size - i - 1], "green");
    }
    enable_buttons();
}
