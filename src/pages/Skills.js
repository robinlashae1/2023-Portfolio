function Skills() {
    function renderImage(array){
        return(
            array.map(skill =>
                <div>
                   <img id="skill-image" src={skill.link} alt={skill.name}/>
                   <h4>{skill.name}</h4>
                </div>
                )
        )
    }
    return ( 
        <div className="overall-container">
            <h1 style={{padding: "4px 0px 2%", margin: "auto"}}>I have experience with these technologies:</h1>
            <div id="skill-container">
               {renderImage(SkillList)} 
            </div>
            
        </div>
    );
}

export default Skills;
const SkillList = [
   { link: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
   name: "React"},
   {link: "https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png",
    name: "Html"},
    {link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    name: "Css"},
    {link: "https://www.logolynx.com/images/logolynx/e0/e08d04999200f32b8e915df7e89b44c7.png",
    name: "Bootstrap"},
    {link: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
    name: "JavaScript"},
    {link: "http://assets.stickpng.com/images/58482fc8cef1014c0b5e4a8a.png",
    name: "Ruby"},
    {link: "https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png",
    name: "Rails"},
    {link: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
    name: "Github"},
    {link: "https://www.netgains.org/wp-content/uploads/2014/01/node_js.png",
    name: "Node.js"},
    {link: "https://raw.githubusercontent.com/ivangabriele/vscode-heroku/master/res/icon.png",
    name: "Heroku"},
    {link: "http://assets.stickpng.com/images/584815fdcef1014c0b5e497a.png",
    name: "Postgres"},
    {link: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    name: "Git"},
    {link: "http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
    name: "Redux"}
]