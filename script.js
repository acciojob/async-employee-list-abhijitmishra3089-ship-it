//your JS code here. If required.
async function getEmployees(){
	try {
	const response= await fetch('employees.json');
	const data=await response.json();
	console.log(data)
	}catch (err) {
		console.error(err)
	
}
	getEmployees();