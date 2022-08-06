import { useEffect, useState } from "react";
import { sendEmail } from "./services/emailServices";

function CommentBox({ activePin, onComment }) {

    const [comment, setComment] = useState('');

    useEffect(() => {
        console.log(activePin);
    }, [activePin]);

    const handleOnComment = () => {
        var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

        let extractedEmail = re.exec(comment);

        console.log(extractedEmail);
        if (extractedEmail) {
            sendEmail(extractedEmail, comment)
        }
        onComment(comment);
        setComment('');
    }

    return (
        <div className='comment-box'>
            <div className="comment-past">
                <ul className="list-group">
                    {
                        activePin && activePin.comments && activePin.comments.map((c, i) => <li key={i} className="list-group-item py-2 my-2">{c.text}</li>)
                    }
                </ul>
            </div>
            <div className='comment-new'>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} cols={50} rows={5}></textarea>
                <div className='comment-box-footer'>
                    <button className='btn btn-primary' onClick={handleOnComment}>Comment</button>
                    <button className='btn pull-right'>Close</button>
                </div>
            </div>
        </div>
    )
}

export default CommentBox;