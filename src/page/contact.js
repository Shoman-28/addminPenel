import React, { useEffect, useState, useRef } from "react"
import MetaTags from "react-meta-tags"
import { Link, withRouter,useHistory } from "react-router-dom"
import { map } from "lodash"
import { isEmpty } from "lodash"
import * as moment from "moment"
import {
  Badge,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  Button,
  UncontrolledDropdown,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import Image
import images from "assets/images"
import companies from "assets/images/companies"

import { render } from 'react-dom';
import { Stage, Layer, Rect, Transformer } from 'react-konva';
import Rectangle from "./Rectangle"



const Contacts = props => {

  const layerRef = useRef();

  const initialRectangles = [
    {
      x: 0,
      y: 0,
      width: 300,
      height: 100,
    
      stroke:"yellow",

      id: 'rect1',
    },
    // {
    //   x: 150,
    //   y: 150,
    //   width: 100,
    //   height: 100,
    //   fill: 'green',
    //   id: 'rect2',
    // },
  ];
  const [rectangles, setRectangles] = useState(initialRectangles);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };





  return (
    <React.Fragment>
        <div className='d-flex'>
          <div style={{width:"400px", height:"400px",border:"3px solid red", position:"relative", left:"100px",top:"100px" }}>
            <Stage
              width={400}
              height={400}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
            >
              <Layer ref={layerRef}>
                {rectangles.map((rect, i) => {
                  return (
                    <Rectangle
                      key={i}
                      shapeProps={rect}
                      isSelected={rect.id === selectedId}
                      onSelect={() => {
                        selectShape(rect.id);
                      }}
                      onChange={(newAttrs) => {
                        console.log(rectangles);
                        const prev = rectangles[i];
                        const rects = rectangles.slice();
                        rects[i] = newAttrs;
                        const xdev = rects[i].x - prev.x;
                        const ydev = rects[i].y - prev.y;
                        console.log('x :',xdev, 'y: ',ydev)
                        var theta = Math.atan2(ydev, xdev); // range (-PI, PI]
                        theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
                        if (theta < 0) theta = 360 + theta;
                        console.log(theta);
                        setRectangles(rects);
                      }}
                      onMouseOut={e => {
                        // var transform = layerRef.current.getAbsoluteTransform().copy();
                        // // to detect relative position we need to invert transform
                        // transform.invert();
                        // // now we find relative point
                        // const pos = e.target.getStage().getPointerPosition();
                        // var position = transform.point(pos);
                        var position = e.target.getStage().getAngle();
                        console.log(position);
                      }}
                    />
                  );
                })}
              </Layer>
            </Stage>
          </div>
          <div style={{width:"400px", height:"400px",border:"3px solid red", position:"relative", left:"100px",top:"100px" }}>
            <Stage
              width={400}
              height={400}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
            >
              <Layer ref={layerRef}>
                {rectangles.map((rect, i) => {
                  return (
                    <Rectangle
                      key={i}
                      shapeProps={rect}
                      isSelected={rect.id === selectedId}
                      onSelect={() => {
                        selectShape(rect.id);
                      }}
                      onChange={(newAttrs) => {
                        console.log(rectangles);
                        const prev = rectangles[i];
                        const rects = rectangles.slice();
                        rects[i] = newAttrs;
                        const xdev = rects[i].x - prev.x;
                        const ydev = rects[i].y - prev.y;
                        console.log('x :',xdev, 'y: ',ydev)
                        var theta = Math.atan2(ydev, xdev); // range (-PI, PI]
                        theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
                        if (theta < 0) theta = 360 + theta;
                        console.log(theta);
                        setRectangles(rects);
                      }}
                      onMouseOut={e => {
                        // var transform = layerRef.current.getAbsoluteTransform().copy();
                        // // to detect relative position we need to invert transform
                        // transform.invert();
                        // // now we find relative point
                        // const pos = e.target.getStage().getPointerPosition();
                        // var position = transform.point(pos);
                        var position = e.target.getStage().getAngle();
                        console.log(position);
                      }}
                    />
                  );
                })}
              </Layer>
            </Stage>
          </div>
        </div>
    </React.Fragment>
  )
}

export default withRouter(Contacts)
