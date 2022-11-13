import "./post.css"

export default function Post(){

return(
    <div className="post">
        <img className="postImage" src="/images/background.jpg"/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">cat 1 cat 2</span>

            </div>
            <span className="postTitle">title</span>
            <hr />
            <span className="postDate">today</span>
        </div>
        <p className="postSummary">Some words ........... some more words? </p>
        </div>
)

}