import "./message.css";

export default function Message({ own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="assets/person/6.jpeg" alt="" />
                <p className="messageText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a dicta adipisci iure enim, minima sint ad quibusdam, velit similique voluptatum cumque ab consectetur optio facere soluta blanditiis maxime aut.
                </p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}
