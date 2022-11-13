import "./sidebar.css"

export default function SideBar(){
    return (
        <div className = "sideBar" >
            <div className = "sideBarItems">
                <div className="sideBarItem">
                    <span className="sideBarTitle"> About oSTEM </span>
                    <img src ="/images/background.jpg" alt = "logo"></img>
                    <p className ="sideBarAbout">
                        In a space where LGBTQ+ identities are often overlooked, Cal Poly's da bomb!
                    </p>
                </div>
                <div className="sideBarItem">
                <span className="sideBarTitle"> Categories </span>
                    <ul className="sidebarList">
                        <li className = "sidebarListItem">
                            cat1
                        </li>
                        <li className = "sidebarListItem">
                            cat2
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}