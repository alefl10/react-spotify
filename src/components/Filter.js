import React from 'react'

const defaultStyle = { color: '#fff' };

export default function Filter(props) {
    return (
        <div className="row" style={{ ...defaultStyle }}>
            <div className="col-12 col-sm-8 col-md-6 mx-auto">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => props.onTextChange(e.target.value)}
                />
            </div>
            
        </div>
    );
}
