function dis(val)
{
	document.getElementById("result").value+=val
}
function solve()
{
	let x = document.getElementById("result").value
    try {
        let y = eval(x);
        document.getElementById("result").value = y
        confirm("Are you confirm with the input?");
      }
      catch(err) {
          console.log(err);
        alert("Provide proper inputs!!");
      }
}
function clr()
{
	document.getElementById("result").value = ""
}
