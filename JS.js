function clickcheck() {
  if (document.getElementById("chk").value == "1") {
    document.getElementById("ccl").style.left = "1.35em";
    document.getElementById("chk").value = 0;
    document.getElementById("pa1").style.display = "none";
    document.getElementById("pa2").style.display = "none";
    document.getElementById("pa3").style.display = "none";
    document.getElementById("pm1").style.display = "contents";
    document.getElementById("pm2").style.display = "contents";
    document.getElementById("pm3").style.display = "contents";
  } else {
    document.getElementById("ccl").style.left = "0.15em";
    document.getElementById("chk").value = 1;
    document.getElementById("pa1").style.display = "contents";
    document.getElementById("pa2").style.display = "contents";
    document.getElementById("pa3").style.display = "contents";
    document.getElementById("pm1").style.display = "none";
    document.getElementById("pm2").style.display = "none";
    document.getElementById("pm3").style.display = "none";
  }
}
