document.addEventListener("DOMContentLoaded", function () {
    console.log(document.getElementById("inpWeight"));
});

function getValues() {
    var weightInput = document.getElementById("inpWeight");
    var heightInput = document.getElementById("inpHeight");

    if (!weightInput || !heightInput) {
        console.error("Input fields not found!");
        return { weight: NaN, height: NaN };
    }

    return {
        weight: parseFloat(weightInput.value) || NaN,
        height: parseFloat(heightInput.value) || NaN
    };
}

function BMI_Calculator() {
    var { height: h, weight: w } = getValues();  

    if (isNaN(w) || isNaN(h) || h <= 0) {
        document.getElementById("result").innerHTML = "Invalid input.";
        console.log("Weight:", w, "Height:", h);
        return;
    }

    var bmi = w / Math.pow(h, 2);
    document.getElementById("result").innerHTML = "Your BMI is = " + bmi.toFixed(2);
    console.log("BMI:", bmi);
}

function clearField() {
    document.getElementById("inpHeight").value = "";
    document.getElementById("inpWeight").value = "";
    document.getElementById("result").innerHTML = "";
}
