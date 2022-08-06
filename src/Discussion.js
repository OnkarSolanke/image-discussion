import { useState } from 'react';
import CommentBox from './CommentBox';

function Discussion({ img, handleClose }) {
    const [pins, setPins] = useState([]);
    const [activePin, setActivePin] = useState();

    const handleNewPin = (e) => {
        let target = e.target;
        let temp = {
            id: pins.length + 1,
            top: ((e.clientY / target.height) * 100) - 2,
            left: ((e.clientX / target.width) * 100) - 2,
            comments: []
        }
        setActivePin(temp);
        setPins([...pins, temp]);
    }

    const handleOnComment = (comment) => {
        let tempPin = pins.map(c => {
            if (c.id === activePin.id) {
                c.comments.push({ text: comment })
                return c;
            }
            return c;
        });
        setPins(tempPin);
        setActivePin({ ...activePin });
    }

    const handlePinSelect = (pin) => {
        setActivePin(pins.find(e => e.id === pin) || {})
    }

    return (
        <div className="discussion">
            <div className='row'>
                <div className='col-sm-8 img-container'>
                    <img width="100%" src={img} alt="img" onClick={handleNewPin} />
                    {
                        pins.map(p => {
                            return (
                                <div key={p.id}
                                    onClick={() => handlePinSelect(p.id)}
                                    style={{ left: p.left + '%', top: p.top + '%' }}
                                    className={'box ' + (p.id === activePin.id ? 'active' : '')}>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='col-sm-4'>
                    {activePin && <CommentBox activePin={activePin} onComment={handleOnComment} />}
                </div>
            </div>
            <button type='button' className='btn btn-default close-btn text-danger' onClick={handleClose}>&#10060;</button>
        </div>
    )
}

export default Discussion