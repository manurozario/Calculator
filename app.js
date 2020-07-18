let num1 = 0;
let num2 = 0;
let str = "";
let val = 1;
let sign = [];
let signCount = 0;


$(".btn").click(function(){
  const $this = $(this);

  switch ($this.html()) {
    case ".":
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":

      instantPress($this);
      str += $this.html();
      $("p").html(str);

    break;

    case "-":
    case "+":
    case "x":
    case "÷":


      if(signCount === 0) {
        sign = $this;
        sign.addClass("pressed");
        num1 = Number(str);
        str = "";
        $("p").html(0);
        val = 2;
        signCount++;
      }

      else if(signCount > 0) {
        num2 = Number(str);
        str = "";
        let result = calc(num1, num2, sign);
        $("p").html(result);
        num1 = result;

        if ($this.html() !== sign.html()){
          sign.removeClass("pressed");
          $this.addClass("pressed");
          sign = $this;
        }
      }

    break;

    case "%":
    if(val === 1) {
      instantPress($this);
      num1 = Number(str);
      str = "";
      let result = calc(num1, num2, $this);
      $("p").html(result);
    }
    break;

    case "=":
      sign.removeClass("pressed");
      if(val === 2) {
        instantPress($this);
        num2 = Number(str);
        str = "";
        let result = calc(num1, num2, sign);
        $("p").html(result);
        num1 = 0;
        num2 = 0;
        str = "";
        val = 1;
        sign = [];
        signCount = 0;
      }

    break;

    case "AC":
      instantPress($this);
      if(val === 2) {
        sign.removeClass("pressed");
      }
      num1 = 0;
      num2 = 0;
      str = "";
      val = 1;
      sign = [];
      signCount = 0;
      $("p").html(0);
    break;

    case "DEL":
      str = str.slice(0, -1);
      $("p").html(str);
    break;

    default: console.log($this.html());
  }



});


function instantPress(button) {

  button.addClass("pressed");

  setTimeout(function(){
    button.removeClass("pressed");
  }, 200);

};

// function longPress(button) {
//   button.toggleClass("pressed");
// };

function calc(n1, n2, sgn) {


  switch(sgn.html()) {
    case "-":
      return num1 - num2;
    break;
    case "+":
      return num1 + num2;
    break;
    case "x":
      return num1 * num2;
    break;
    case "÷":
      return num1 / num2;
    break;

    case "%":
      return num1 / 100;
    break;

    default: console.log($(this).html());
  }

}
