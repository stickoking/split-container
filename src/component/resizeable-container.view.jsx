import React, {useState, createRef} from 'react';
import {Resizable} from 're-resizable';
import styles from '../App.css';

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#f0f0f0',
} 

const ResizeableContainer = (props) => {
    const [width, setWidth] = useState(100);
    const [totalWidth, setTotalWidth] = useState(width);
    const [height, setHeight] = useState(50);

    const [widthTwo, setWitdthTwo] = useState(100);

    // when dragging cal total width of dragged div + next div based on edge
    // when either box width changes, take prev cal totalWidth, minus from the adjacent box
    const dragStop = (e, direct, ref, d) => {
        setWidth(width + d.width);
        setWitdthTwo(widthTwo - d.width);
        console.log(d.width);
        

    };
  //  console.log(widthTwo);
    return(
        <div style = {{display: 'flex', maxWidth: 1000, border: 'solid 1px black',}}>
            <Resizable
            style = {style}
            size = {{width, height}}
            maxWidth = {180}
            enable = {{top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}
            onResize = {(e, direction, ref, d) => {
                dragStop(e, direction, ref, d);
                //setHeight(height + d.height);
            }}
            // onResizeStart

            >
            
            Sample with Resize
            </Resizable>
            <Resizable
            style = {style}
            size = {{width: widthTwo, height}}
            enable = {{top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}
            onResizeStop = {(e, direction, ref, d) => {
                setWitdthTwo(widthTwo + d.width);
                //setHeight(height + d.height);
            }}

            >
            
            
            </Resizable>
        </div>
    )
};

export default ResizeableContainer;