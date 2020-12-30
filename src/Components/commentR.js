function Comment (props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                
            </div>
        </div>
    )
} 