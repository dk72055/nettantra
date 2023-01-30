const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");



nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("next");
    });
});
prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("prev");
    });
});



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll("input").forEach((input) => {
        const { name, value } = input;
        inputs.push({ name, value });
    });
    console.log(inputs);
    form.reset();
});
function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".active");
    index = steps.indexOf(active);
    steps[index].classList.remove("active");
    if (btn === "next") {
        index++;
    } else if (btn === "prev") {
        index--;
    }
    steps[index].classList.add("active");
}
function save(){

var fname=document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var date=document.getElementById("date").value;

var email=document.getElementById("email").value;
var f_fname=document.getElementById("f_fname").value;
var f_lname=document.getElementById("f_lname").value;
var m_fname=document.getElementById("m_fname").value;
var m_lname=document.getElementById("m_lname").value;
var gen=document.getElementsByName("gender").value;
var coun=document.getElementsByName("country").value;
var str=document.getElementById("streetaddress").value;
var city=document.getElementById("city").value;
var details=document.getElementById("add_detail").value;
var h_mob=document.getElementById("phone").value;
var t_mob=document.getElementById("phone1").value;

var h_name=document.getElementById("HSE").value;
var ch_board=document.getElementById("Board").value;
var h_percent=document.getElementById("hsepercentage").value;
 
var s_name=document.getElementById("SSC").value;
var s_board=document.getElementById("SSCBoard").value;
var s_percent=document.getElementById("csspercentage").value;

var c_current=document.getElementById("now").value;
var c_edu=document.getElementById("Current").value;
var overall=document.getElementById("Overall").value;
var current_m=document.getElementsByName("backlogs").value;

var photo=document.getElementById("myfile1").document;
var m_sheet1=document.getElementById("myfile2").document;
var m_sheet2=document.getElementById("myfile3").document;
var sem_sheet=document.getElementById("myfile4").document;

//storing data in local storage
var user=localStorage.setItem("fname"+"lname",fname,lname);
var u_date=localStorage.setItem("date",date);
var E_mail=localStorage.setItem("email",email);
var fa_name=localStorage.setItem("f_fname"+"F_lname",f_fname,f_lname);
var mo_name=localStorage.setItem("m_fname"+"m_lname",m_fname,m_lname);
var gender=localStorage.setItem("gen",gen);
var country=localStorage.setItem("coun",coun);
var street=localStorage.setItem("str",str);
var city1=localStorage.setItem("city",city);
var h_telephone=localStorage.setItem("h_mob",h_mob);
var t_telephone=localStorage.setItem("t_mob",t_mob);
var HSE=localStorage.setItem("h_name",h_name);
var HSEBoard=localStorage.setItem("ch_board",ch_board);
var hsepercentage=localStorage.setItem("h_percent",h_percent);
var SSC=localStorage.setItem("s_name",s_name);
var SSCBoard=localStorage.setItem("s_board",s_board);
var csspercentage=localStorage.setItem("s_percent",s_percent);
var now=localStorage.setItem("c_current",c_current);
var Current=localStorage.setItem("c_edu",c_edu);
var Overall=localStorage.setItem("overall",overall);
var backlogs=localStorage.setItem("current_m",current_m);
var myfile1=localStorage.setItem("photo",photo);
var myfile2=localStorage.setItem("m_sheet1",m_sheet1);
var myfile3=localStorage.setItem("m_sheet2",m_sheet2);
var myfile4=localStorage.setItem("sem_sheet",sem_sheet);
}




