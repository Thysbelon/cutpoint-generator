// const testDataInput="54.8\n75.9\n65.2\n56.9\n66.8\n71.9\n68.3\n58.8\n72.2\n54.1\n67.8\n74.2\n52.7\n66.6\n53.8\n61.5\n60.3\n73.9\n57.4\n62.6\n60.3\n60.7\n54.6\n56.2\n65.6\n69.8\n75.9\n65.9\n58.6\n57.2\n55.1\n67.9\n65.9\n61.9\n52.3"
//const testWidthInput="2"
//console.log(testDataInput)
/*
expected output:

52-under 54 | 3
54-under 56 | 4
56-under 58 | 4
...
74-under 76 | 3

*/
function generateDiagram() {
const dataInput=document.getElementById("data").value
if (dataInput.includes(", ")) {
	var FloatArray=dataInput.split(", ")
} else if (dataInput.includes(" \n")) {
	var FloatArray=dataInput.split(" \n")
} else if (dataInput.includes(" ")) {
	var FloatArray=dataInput.split(" ")
} else if (dataInput.includes(",")) {
	var FloatArray=dataInput.split(",")
} else {
	var FloatArray=dataInput.split("\n")
}

console.log(FloatArray)
const l=FloatArray.length
for (let i=0; i<l; i++) {
	FloatArray[i]=parseFloat(FloatArray[i])
}
console.log(FloatArray)
const Width=parseInt(document.getElementById("width").value)
FloatArray.sort(function(a, b){return a-b});
console.log(FloatArray)
const IntArray=[] // used to calculate cutpoints. Unneccessary?
for (let i=0; i<l; i++) {
	let curInt=Math.floor(FloatArray[i]) // will this work for Statistics questions that involve negative numbers?
	if (!IntArray.includes(curInt)) {
		IntArray.push(curInt)
	}
}
console.log(IntArray)
const minInt=IntArray[0]
console.log(minInt)
const maxInt=IntArray[IntArray.length-1]
console.log(maxInt)
const cutpoints=[]
{
	let i=minInt
	console.log(i)
	cutpoints.push(i)
	while (i<=maxInt) {
		i+=Width
		cutpoints.push(i)
	}
	console.log(i)
	console.log(minInt)
}
console.log(cutpoints[cutpoints.length-1])
console.log(cutpoints)
let result=""
for (let i=0, l2=cutpoints.length-1; i<l2; i++) {
	result+=cutpoints[i]+" − <"+cutpoints[i+1]+" | "+CountRange(FloatArray,cutpoints[i],cutpoints[i+1])+"<br>"
}
document.getElementById("result").innerHTML=result


//function Count(Array, Value) {
//// https://stackoverflow.com/questions/61309517/is-there-count-method-in-javascript-like-python
//	let count=0
//	Array.forEach(i => {
//		if (i === Value) {
//			count++
//		}
//    });
//	return count
//}

function CountRange(Array, Value1, Value2) {
// https://stackoverflow.com/questions/61309517/is-there-count-method-in-javascript-like-python
	let count=0
	Array.forEach(i => {
		if (i >= Value1 && i < Value2) {
			count++
		}
    });
	return count
}

}