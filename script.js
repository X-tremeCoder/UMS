
            function myonclickfn()
            {
                var un=document.forms["myform"] ["user"].value;
                var pas=document.forms["myform"] ["pass"].value;
                if(un == "12013252" && pas == "Adarsh@123")
                {
                    window.location.href="wel.html";
                }
                else if(un == "12005582" && pas == "Albin@123")
                {
                    window.location.href="wel1.html";
                }
                else if(un == "12010343" && pas == "Aswin@123")
                {
                    window.location.href="wel2.html";
                }
                else
                {
                    alert("Invalid Credentials");
                }
            }