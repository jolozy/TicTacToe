// function resetPage () {
//   document.location.reload();
// }
// reset.addEventListener('click', resetPage )

var reset = document.getElementById('clearboard')
reset.addEventListener("click", function() {
document.location.reload();
})

var body = document.querySelector('body');
var currentPlayer = "x";

body.addEventListener('click', function(event) {
  var grid = event.target
  if (grid.textContent) return
  if (grid.className !== "grid") return
  if (currentPlayer == "x") {
    grid.textContent = "x"
    currentPlayer = "o"//switch player to O after x turn
  } else {
    grid.textContent = "o"
    currentPlayer = "x"//switch player to O after x turn
  }
  var B1 = document.getElementById("B1").textContent
  console.log(B1)
  var B2 = document.getElementById("B2").textContent
  console.log(B2)
  var B3 = document.getElementById("B3").textContent
  console.log(B3)
  var B4 = document.getElementById("B4").textContent
  console.log(B4)
  var B5 = document.getElementById("B5").textContent
  console.log(B5)
  var B6 = document.getElementById("B6").textContent
  console.log(B6)
  var B7 = document.getElementById("B7").textContent
  console.log(B7)
  var B8 = document.getElementById("B8").textContent
  console.log(B8)
  var B9 = document.getElementById("B9").textContent
  console.log(B9)

//x wins horizontal
  var a = (B1 === "x" && B2 === "x" && B3 === "x")
  var b = (B4 === "x" && B5 === "x" && B6 === "x")
  var c = (B7 === "x" && B8 === "x" && B9 === "x")
  if ( a || b || c ) {
    prompt("Player x wins!")
    console.log("Player x wins!")
  }

//x wins vertical
  var d = (B1 === "x" && B4 === "x" && B7 === "x")
  var e = (B2 === "x" && B5 === "x" && B8 === "x")
  var f = (B3 === "x" && B6 === "x" && B9 === "x")
  if ( d || e || f) {
    prompt("Player x wins!")
    console.log("Player x wins!")
  }

//x wins diagonal
  var g = (B1 === "x" && B5 === "x" && B9 === "x")
  var h = (B3 === "x" && B5 === "x" && B7 === "x")
  if (g || h) {
    prompt("Player x wins!")
    console.log("Player x wins!")
  }

  //y wins horizontal
    var rowB1 = (B1 === "o" && B2 === "o" && B3 === "o")
    var rowB4 = (B4 === "o" && B5 === "o" && B6 === "o")
    var rowB7 = (B7 === "o" && B8 === "o" && B9 === "o")
    if (rowB1 || rowB4 || rowB7) {
      prompt("Player o wins!")
      console.log("Player o wins!")
    }

  //y wins vertical
    var rowB1 = (B1 === "o" && B4 === "o" && B7 === "o")
    var rowB2 = (B2 === "o" && B5 === "o" && B8 === "o")
    var rowB3 = (B3 === "o" && B6 === "o" && B9 === "o")
    if (rowB1 || rowB2 || rowB3) {
      prompt("Player o wins!")
      console.log("Player o wins!")
    }

  //x wins diagonal
    var rowB7 = (B1 === "o" && B2 === "o" && B3 === "o")
    var rowB9 = (B4 === "o" && B5 === "o" && B6 === "o")
    if (rowB7 || rowB9) {
      prompt("Player o wins!")
      console.log("Player o wins!")
    }

  // console.log(currentPlayer);
  // console.log(grid);
})
