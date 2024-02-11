
    const resumeData = {
    name: "Yamini Sherin R",  
    title: "Bsc Computer Science Student", 
    contact:{
        email:"sheinyamini789@gmail.com",
          phone:"+917812822127",
           address:"1-292,claret street 2,agasteeswaram,kovlam,kanniyakumari,kanyakumari district,tamil nadu,India",
    },   
    Summary: "Highly  motivated and recent Bsc Computer Science student with a strong foundation in computer science principles,programming languages,and problem-solving abilities.Intrested in launching a career in software developer and contributing to new projects.Capable of swiftly learning new technologies,collabrating in a team contexts and producing outcomes.",
      

    education:[
        {
            "degree":"Bachelor of Science in Computer Science at manonmanium sundranar university in johns college of arts and science",
            "dates":"2021-2021",
            "HSC":"Carmel matha higher secondary school in commerce computer",
            "dates":"2021",
        }
    ],
    skills: [
        "JavaScript",
        "Node.js",
        "Rect js",
        "HTML/CSS",
        "MySQL",
        "Mongo DB",
        "Git"
    ]
};
 Object.entries(resumeData).forEach(([section,data]) => {
    console.log(section.toUpperCase() + ":");
    if (Array.isArray(data)) {
        data.forEach(items => {
            console.log("- " + JSON.stringify(items));
    
        });
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
    console.log("\n");
 });