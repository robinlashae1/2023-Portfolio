import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function BottomBar() {
    return ( 
        <div className="border-bars bottom color">
            <div id="bottom-text">
                <h3 style={{margin: "0 0 .5vh 0"}}>Hey, Let's Talk!</h3>
                <p style={{margin: "auto"}}>If you have any questions or would like to chat, feel free to reach out! I'd love to chat or collaborate. I love to talk code or just get to know new people!</p>
            </div>
            <div id="bottom-contact">
                <h3 style={{margin: "0 0 .5vh 0"}}> Contact Me</h3>
                <div style={{display: "flex",justifyContent: "center"}}>
                    <div className='double-icons'>
                        <a href="https://github.com/robinlashae1" className='single-icons'><GitHubIcon/></a>
                        <a href="https://dev.to/robinlashae1" className='single-icons'><DescriptionIcon/></a>  
                        <a href="mailto: robinlashae1@gmail.com" className='single-icons'><MailOutlineIcon/></a>
                        <a href="https://www.linkedin.com/in/robin-vernon/" className='single-icons'><LinkedInIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomBar;
