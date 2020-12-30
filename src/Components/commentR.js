function Avatar(props){
    return(
        <img 
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user}
        />
    )
}

function UserInfo(props){
    return (
        <div className="UserInfo">   
            <Avatar user={props.person} />
            <div className="UserInfo-name">{props.person.username}</div>
        </div>
    );
}
function Comment (props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <UserInfo person={props.author} />
                <div className="Comment-text">{props.text}</div>
            </div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>

    );
} 

function formatDate(date){
    return date.toLocaleDateString();
}

export default Comment;