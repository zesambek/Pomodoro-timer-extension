const timeOption = document.getElementById("time-option")
const saveBtn = document.getElementById("save-btn")

timeOption.addEventListener("change",(event)=> {
	const val =  event.target.value
	if(val < 1 || val > 60){
	  timeOption.value = 25
	}
	console.log(val)

})


saveBtn.addEventListener("click",()=>{
	chrome.storage.local.set({
		timer:0,
		isRunning:false,
		timeOption : timeOption.value


	})
})

chrome.storage.local.get(["timeOption"], (res) =>{
	timeOption.value = res.timeOption

})
