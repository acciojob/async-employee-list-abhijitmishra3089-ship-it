//your JS code here. If required.
async function getEmployees(){
	try {
	const response= await fetch('employees.json');
	const data=await response.json();
	data.sort((a,b)=>a.age-b.age)
	console.log(data)
	}catch (err) {
		console.error(err)
	}
}
	getEmployees();