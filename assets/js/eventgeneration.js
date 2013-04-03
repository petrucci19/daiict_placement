// JavaScript Document
function validateUrPw(thisform)
{
	var CName= thisform.cname.value;
	
	var Des= thisform.description.value;
	
	var CPI= thisform.elicri.value;
	
	var cTc= thisform.ctc.value;
	
	var date= thisform.date.value;
	
	console.info("date " + date);
	
	var numbers = /^[0-9]+$/; 
	
	if(CName=="")
	{
		alert("Please enter the Company name");	
		thisform.cname.focus();
		return false;
	}
	
	if((thisform.type[0].checked==false) && (thisform.type[1].checked==false))
		{
			alert("please select your Event");
			thisform.type.focus();
			return false;
		}	
	
	if((thisform.domain[0].checked==false) && (thisform.domain[1].checked==false))
		{
			alert("please select your domain");
			thisform.domain.focus();
			return false;
		}
		
		
	if(cTc=="")
	{
		alert("Please enter your CTC");	
		thisform.ctc.focus();
		return false;
	}
	
	
	if(isNaN(cTc))
	{
		alert("Its not a valid CPI");
		thisform.ctc.focus();
		return false;
	}
		
	if(CPI=="")
	{
		alert("Please enter your CPI");	
		thisform.elicri.focus();
		return false;
	}
	
	if(isNaN(CPI) || CPI < 0 || CPI > 10)
	{
		alert("Its not a valid CPI");
		thisform.elicri.focus();
		return false;
	}
	
	

						
	if(Des=="")
	{
		alert("Please enter the Description");	
	//	thisform.Des.focus();
		return false;
	}
	
	if(date=="")
	{
			console.info("WTF " + date);
	
		alert("Please Select Date of Deadline");	
	//	thisform.Des.focus();
		return false;
	}
	
	return true;
	
	
}

