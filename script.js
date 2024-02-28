
function transition(selection){

    home = document.getElementById("menu-home");
    portfolio = document.getElementById("menu-portfolio");
    projects = document.getElementById("menu-projects");
    contact = document.getElementById("menu-contact");
    menubar = document.getElementById("menu-bar");
    intialname = document.getElementById("intial-name");
    sree = document.getElementById("name");
    home_about=document.getElementById("home-about");
    profile=document.getElementById("profile");
    info = document.getElementById("info");
    content1 = document.getElementById("menu");
    content2 = document.getElementById("profile-descrip");
    verticalText = document.getElementById("vertical-name");
    cvbutton = document.getElementById("cvbtn");
    boxes = document.getElementById("boxes");
    boxes2 = document.getElementById("boxes2");
    skills = document.getElementById("skills");
    experince = document.getElementById("exp");
    project = document.getElementById("projects");
    contactme=document.getElementById("contact");
    logo = document.getElementById("logo");


    if( selection == 'home'){


        home.style.margin = "10px";
        home.style.padding ="10px";
        home.style.borderRadius="50%";
        home.style.backgroundColor="orange";
        home.style.transition="0.4s ease-in-out";

        intialname.style.opacity=1;
        intialname.style.transition = "0.4s ease-in-out";
        intialname.margin="20px 0px 200px 0px";

        sree.style.opacity=0;
        sree.style.transition="0.4s ease-in-out";

        home_about.style.marginTop="-90px";

        home_about.style.opacity=1;
        home_about.transition="0.4s ease-in-out";

        info.style.opacity=0;

        profile.style.opacity=1;
        intialname.style.opacity=1;
        home_about.style.opacity=1;
        sree.style.opacity=0;
        verticalText.style.display="none";


        cvbutton.style.display="none";
        boxes.style.display="none";
        boxes2.style.display="none";
        skills.style.display="none";
        experince.style.display="none";
        project.style.display="none";
        contactme.style.display="none";


        portfolio.style.margin = "";
        portfolio.style.padding ="";
        portfolio.style.borderRadius="";
        portfolio.style.backgroundColor="";

        contact.style.margin = ""; 
        portfolio.style.padding ="";
        contact.style.borderRadius="";
        contact.style.backgroundColor="";

        projects.style.margin = "";
        portfolio.style.padding ="";
        projects.style.borderRadius="";
        projects.style.backgroundColor="";

    }
    else if(selection == 'portfolio'){

        portfolio.style.margin = "10px";
        portfolio.style.padding ="10px";
        portfolio.style.borderRadius="50%";
        portfolio.style.backgroundColor="orange";
        portfolio.style.transition="0.4s ease-in-out";



        intialname.style.opacity=0;
        intialname.style.transition = "0.4s ease-in-out";

        sree.style.opacity=1;
        sree.style.transition="0.4s ease-in-out";
        sree.style.margin="-70px 10px 0px 20px";
        sree.innerText="SREE CHARAN DESU";
        sree.style.color="white";


        home_about.style.opacity=0;
        home_about.transition="0.4s ease-in-out";

        info.style.opacity=1;
        info.style.transition="1.4s ease-in-out";


        profile.style.opacity=1;
        intialname.style.opacity=0;
        home_about.style.opacity=0;
        sree.style.opacity=1;
        verticalText.style.display="none";
        project.style.display="none";
        contactme.style.display="none";


        cvbutton.style.display="";
        boxes.style.display="";
        boxes2.style.display="";
        skills.style.display="";
        experince.style.display="";

    
        projects.style.margin = "";
        projects.style.padding ="";
        projects.style.borderRadius="";
        projects.style.backgroundColor="";

        contact.style.margin = "";
        contact.style.padding ="";
        contact.style.borderRadius="";
        contact.style.backgroundColor="";

        home.style.margin = "";
        home.style.padding ="";
        home.style.borderRadius="";
        home.style.backgroundColor="";

    }
    else if( selection == 'projects'){


        projects.style.margin = "10px";
        projects.style.padding ="10px";
        projects.style.borderRadius="50%";
        projects.style.backgroundColor="orange";
        projects.style.transition="0.4s ease-in-out";


        profile.style.opacity=0;
        intialname.style.opacity=0;
        home_about.style.opacity=0;
        sree.style.opacity=0;
        sree.style.transition="0s";
        intialname.style.transition="0s";
        verticalText.style.display="block";

        info.style.opacity=0;
        info.style.transition="0s ease-in-out";

        cvbutton.style.display="none";
        boxes.style.display="none"; 
        skills.style.display="none";
        boxes2.style.display="none";
        experince.style.display="none";
        project.style.display="";
        contactme.style.display="none";




        

        portfolio.style.margin = ""; 
        portfolio.style.padding ="";
        portfolio.style.borderRadius="";
        portfolio.style.backgroundColor="";

        contact.style.margin = "";
        portfolio.style.padding ="";
        contact.style.borderRadius="";
        contact.style.backgroundColor="";

        home.style.margin = ""; 
        portfolio.style.padding ="";
        home.style.borderRadius="";
        home.style.backgroundColor="";




    }
    else if(selection == 'contact'){

        contact.style.margin = "10px";
        contact.style.padding ="10px";
        contact.style.borderRadius="50%";
        contact.style.backgroundColor="orange";
        contact.style.transition="0.4s ease-in-out";


        profile.style.opacity=0;
        intialname.style.opacity=0;
        home_about.style.opacity=0;
        verticalText.style.display="block";

        info.style.opacity=0;
        info.style.transition="0s ease-in-out";
        
        cvbutton.style.display="none";
        boxes.style.display="none";
        skills.style.display="none";
        boxes2.style.display="none";
        experince.style.display="none";
        project.style.display="none";
        contactme.style.display="";

        logo.style.marginTop="100px";




        portfolio.style.margin = "";  
        portfolio.style.padding ="";
        portfolio.style.borderRadius="";
        portfolio.style.backgroundColor="";

        projects.style.margin = ""; 
        portfolio.style.padding ="";
        projects.style.borderRadius="";
        projects.style.backgroundColor="";

        home.style.margin = ""; 
        portfolio.style.padding ="";
        home.style.borderRadius="";
        home.style.backgroundColor="";
    }
}
