const Content=()=>{
    return(
        <div className="content">
            <div id="aboutd">
    <br /><br /><br /><br /><br />
</div>
            <div className="block" id="about">
                <div className="header">About Me</div>
                <div className="maincon">
                <p>Ghruank Kothare<br/><br/>Pursuing BTech in Information Technology<br/>at Veermata Jijabai Technological Institute, Mumbai<br/><br/>Software Developer, Web designer and a fond DSA enjoyer</p>
                </div>
            </div>
            <div id="skillsd">
    <br /><br /><br /><br /><br />
</div>
            <div className="block" id="skills">
                <div className="header">Skills</div>
                <div className="cards">
                    <div className="cpp">
                        <img src={process.env.PUBLIC_URL + '/c++.png'} alt="" />
                        <p>C++</p>
                    </div>
                    <div className="cpp">
                        <img src={process.env.PUBLIC_URL + '/react.png'} alt="" />
                        <p>React</p>
                    </div>
                    <div className="cpp">
                        <img src={process.env.PUBLIC_URL + '/html.png'} alt="" />
                        <p>HTML</p>
                    </div>
                    <div className="cpp">
                        <img src={process.env.PUBLIC_URL + '/css.png'} alt="" />
                        <p>CSS</p>
                    </div>
                    <div className="cpp">
                        <img src={process.env.PUBLIC_URL + '/js.png'} alt="" />
                        <p>JavaScript</p>
                    </div>
                    <div className="cpp">
                        <img src={process.env.PUBLIC_URL + '/nodejs.png'} alt="" />
                        <p>NodeJS</p>
                    </div>
                    <div className="cpp">
                        <img src={process.env.PUBLIC_URL + '/python.png'} alt="" />
                        <p>Python</p>
                    </div>
                </div>
            </div>
            <div id="projectsd">
    <br /><br /><br /><br /><br />
</div>
            <div className="block" id="projects">
                <div className="header">Projects</div>
                <div className="prjcards">
                    <div className="cpp">JavaScript TicTacToe using MiniMax</div>
                    <div className="cpp">Apple Website</div>
                    <div className="cpp">echochat</div>
                    <div className="cpp">eBay(HTML)</div>
                    <div className="cpp">Google Forms</div>
                </div>

            </div>
            <div className="block" id="Contact">
                <div className="header">Contact</div>
                <div className="maincon">
                    <div className="c1">
                    <p className="con">Ghruank Kothare<br/>VJTI, Mumbai<br/>Email: <a  className="link" href="mailto:gpkothare_b23@it.vjti.ac.in">gpkothare_b23@it.vjti.ac.in</a><br/></p>
                    </div>
                    <div className="c2">
                        <a href="https://www.linkedin.com/in/ghruank/" target="_blank"><img src={'/linkedin.png'} alt="" /></a>
                        <a href="https://github.com/Ghruank" target="_blank"><img src={'/github.png'} alt="" /></a>                    </div>
                </div>
            </div>

        </div>
    );
}

export default Content;


