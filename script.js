const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");
const button11 = document.getElementById("button11");
const button12 = document.getElementById("button12");
const button13 = document.getElementById("button13");
const button14 = document.getElementById("button14");
const button15 = document.getElementById("button15");
const button16 = document.getElementById("button16");
const button17 = document.getElementById("button17");
const button18 = document.getElementById("button18");

button1.addEventListener("click", () => {
  span1.innerHTML = null;
  span2.innerHTML = 0;
});
button2.addEventListener("click", () => {
  if (span2.innerHTML.length > 1) {
    let value = span2.innerHTML;
    let len = value.length;
    span2.innerHTML = value.substring(0, len - 1);
  } else {
    if (span2.innerHTML.length == 1 && Number(span2.innerHTML) == 0) {
      span1.innerHTML = null;
      span2.innerHTML = 0;
    } else {
      let value2 = span1.innerHTML;
      span1.innerHTML = null;
      span2.innerHTML = value2.substring(0, value2.length);
    }
  }
});
button3.addEventListener("click", () => {
  span1.innerHTML = span2.innerHTML.substring(0, span2.length);
  span1.innerHTML = span1.innerHTML + "➗";
  span2.innerHTML = null;
});
button7.addEventListener("click", () => {
  span1.innerHTML = span2.innerHTML.substring(0, span2.length);
  span1.innerHTML = span1.innerHTML + "x";
  span2.innerHTML = null;
});
button11.addEventListener("click", () => {
  if (span1.innerHTML == null) {
    span1.innerHTML = span2.innerHTML.substring(0, span2.length);
    span1.innerHTML = span1.innerHTML + "+";
    span2.innerHTML = null;
  } else {
    let v =
      Number(span1.innerHTML.substring(0, span1.innerHTML.length - 1)) +
      Number(span2.innerHTML);
    let text = v.toString();
    span1.innerHTML = text.substring(0, text.length) + "+";
    span2.innerHTML = null;
  }
});
button15.addEventListener("click", () => {
  span1.innerHTML = span2.innerHTML.substring(0, span2.length);
  span1.innerHTML = span1.innerHTML + "-";
  span2.innerHTML = null;
});
button4.addEventListener("click", () => {
  let num = 0;
  for (let i = 0; i < span2.innerHTML.length; i++) {
    if (span2.innerHTML.substring(i, i + 1) == ".") {
      span2.innerHTML = span2.innerHTML + "1";
      num += 1;
      break;
    }
  }
  if (num == 0) {
    if (Number(span2.innerHTML) == 0) {
      span2.innerHTML = "1";
    } else {
      span2.innerHTML = span2.innerHTML + "1";
    }
  }
});
button5.addEventListener("click", () => {
  let num = 0;
  for (let i = 0; i < span2.innerHTML.length; i++) {
    if (span2.innerHTML.substring(i, i + 1) == ".") {
      span2.innerHTML = span2.innerHTML + "2";
      num += 1;
      break;
    }
  }
  if (num == 0) {
    if (Number(span2.innerHTML) == 0) {
      span2.innerHTML = "2";
    } else {
      span2.innerHTML = span2.innerHTML + "2";
    }
  }
});
button6.addEventListener("click", () => {
  let num = 0;
  for (let i = 0; i < span2.innerHTML.length; i++) {
    if (span2.innerHTML.substring(i, i + 1) == ".") {
      span2.innerHTML = span2.innerHTML + "3";
      num += 1;
      break;
    }
  }
  if (num == 0) {
    if (Number(span2.innerHTML) == 0) {
      span2.innerHTML = "3";
    } else {
      span2.innerHTML = span2.innerHTML + "3";
    }
  }
});
button8.addEventListener("click", () => {
  let num = 0;
  for (let i = 0; i < span2.innerHTML.length; i++) {
    if (span2.innerHTML.substring(i, i + 1) == ".") {
      span2.innerHTML = span2.innerHTML + "4";
      num += 1;
      break;
    }
  }
  if (num == 0) {
    if (Number(span2.innerHTML) == 0) {
      span2.innerHTML = "4";
    } else {
      span2.innerHTML = span2.innerHTML + "4";
    }
  }
});
button9.addEventListener("click", () => {
  let num = 0;
  for (let i = 0; i < span2.innerHTML.length; i++) {
    if (span2.innerHTML.substring(i, i + 1) == ".") {
      span2.innerHTML = span2.innerHTML + "5";
      num += 1;
      break;
    }
  }
  if (num == 0) {
    if (Number(span2.innerHTML) == 0) {
      span2.innerHTML = "5";
    } else {
      span2.innerHTML = span2.innerHTML + "5";
    }
  }
});
button10.addEventListener("click", () => {
  let num = 0;
  for (let i = 0; i < span2.innerHTML.length; i++) {
    if (span2.innerHTML.substring(i, i + 1) == ".") {
      span2.innerHTML = span2.innerHTML + "6";
      num += 1;
      break;
    }
  }
  if (num == 0) {
    if (Number(span2.innerHTML) == 0) {
      span2.innerHTML = "6";
    } else {
      span2.innerHTML = span2.innerHTML + "6";
    }
  }
});
button12.addEventListener("click", () => {
  let num = 0;
  for (let i = 0; i < span2.innerHTML.length; i++) {
    if (span2.innerHTML.substring(i, i + 1) == ".") {
      span2.innerHTML = span2.innerHTML + "7";
      num += 1;
      break;
    }
  }
  if (num == 0) {
    if (Number(span2.innerHTML) == 0) {
      span2.innerHTML = "7";
    } else {
      span2.innerHTML = span2.innerHTML + "7";
    }
  }
});
button13.addEventListener("click", () => {
  let num = 0;
  for (let i = 0; i < span2.innerHTML.length; i++) {
    if (span2.innerHTML.substring(i, i + 1) == ".") {
      span2.innerHTML = span2.innerHTML + "8";
      num += 1;
      break;
    }
  }
  if (num == 0) {
    if (Number(span2.innerHTML) == 0) {
      span2.innerHTML = "8";
    } else {
      span2.innerHTML = span2.innerHTML + "8";
    }
  }
});
button14.addEventListener("click", () => {
  let num = 0;
  for (let i = 0; i < span2.innerHTML.length; i++) {
    if (span2.innerHTML.substring(i, i + 1) == ".") {
      span2.innerHTML = span2.innerHTML + "9";
      num += 1;
      break;
    }
  }
  if (num == 0) {
    if (Number(span2.innerHTML) == 0) {
      span2.innerHTML = "9";
    } else {
      span2.innerHTML = span2.innerHTML + "9";
    }
  }
});
button16.addEventListener("click", () => {
  let len2 = span2.innerHTML.length;
  let j = 0;
  for (let i = 0; i < len2; i++) {
    if (span2.innerHTML.substring(i, i + 1) === ".") {
      j += 1;
      break;
    }
  }
  if (j == 0) {
    span2.innerHTML = span2.innerHTML + ".";
  }
});
button17.addEventListener("click", () => {
  if (Number(span2.innerHTML) == 0) {
    span2.innerHTML = "0";
  } else {
    span2.innerHTML = span2.innerHTML + "0";
  }
});
button18.addEventListener("click", () => {
  if (span1.innerHTML.endsWith("➗")) {
    span2.innerHTML =
      parseFloat(span1.innerHTML.substring(0, span1.innerHTML.length - 1)) /
      parseFloat(span2.innerHTML);
    span1.innerHTML = null;
  } else if (span1.innerHTML.endsWith("x")) {
    span2.innerHTML =
      parseFloat(span1.innerHTML.substring(0, span1.innerHTML.length - 1)) *
      parseFloat(span2.innerHTML);
    span1.innerHTML = null;
  } else if (span1.innerHTML.endsWith("+")) {
    span2.innerHTML =
      parseFloat(span1.innerHTML.substring(0, span1.innerHTML.length - 1)) +
      parseFloat(span2.innerHTML);
    span1.innerHTML = null;
  } else
    span2.innerHTML =
      parseFloat(span1.innerHTML.substring(0, span1.innerHTML.length - 1)) -
      parseFloat(span2.innerHTML);
  span1.innerHTML = null;
});
