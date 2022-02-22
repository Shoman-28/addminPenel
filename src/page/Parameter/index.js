import React, { useState } from "react"
import { Table, Label, Input } from "reactstrap"
import { BsInfoCircle } from "react-icons/bs"
import ReactTooltip from "react-tooltip"
import { parameterData, ImageContrastData, pluseSequenceData } from "./data"
import RightParameter from "./RightParameter"
import RightRadioContent from "./RightRadioContent"
import "./style.css"
import Dropzone, { useDropzone } from "react-dropzone"

const Parameter = () => {
  const [data, setData] = useState([...parameterData])
  const [selected, setSelected] = useState([])
  const [imageContrast, setImageContrast] = useState("")
  const [pluseSequence, setPluseSequence] = useState("")
  const [firstImage, setFirstImage] = useState([])
  const [secondImage, setSecondImage] = useState([])
  const [thirdImage, setThirdImage] = useState([])


  const setInputValue = (e, x) => {
    const index = data.indexOf(x)
    x.inputValue = e.target.value
    if (x.inputValue !== "") {
      data[index] = x
      setData([...data])
    }
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept:
      "image/*",
  })

  const selectedInfo = x => {
    const index = data.indexOf(x)

    if (index !== -1) {
      x.checkBox = !x.checkBox
      data[index] = x
      setData([...data])
    }
    data.forEach(item => {
      if (item.checkBox) {
        let index = selected.indexOf(item)

        if (index === -1) {
          setSelected([...selected, item])
        }
      } else {
        let index = selected.indexOf(item)
        if (index !== -1) {
          let findIndex = selected.indexOf(item)
          selected.splice(findIndex, 1)
          setSelected([...selected])
        }
      }
    })
  }


  return (
    <div className="container-fluid page-content me-0 ms-0">
      <div className="row mt-2 mb-3 justify-content-evenly align-items-center">
        <Dropzone  onDrop={(acceptedFiles) => {
          setFirstImage(acceptedFiles[0]);
          }} name="firstImage" multiple={false}>
          {({getRootProps, getInputProps}) => (
              <div 
              {...getRootProps({className:"dropzone col-xs-12 col-md-4 d-flex align-items-center justify-content-center"})}
              style={{height: '150px', width: '400px', border: '1px solid black'}}>
              <input {...getInputProps()} />
                {firstImage.length === 0 ? (
                <p className="text-center text-muted h5">
                Drag & drop the images here,
                <br /> or click to upload image
              </p>
              ) : (
              firstImage ? 
                <img src={URL.createObjectURL(firstImage)}
                  alt="Image"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain"}} />
              : <p>No Media</p>)}
            </div>
          )}
        </Dropzone>

        <Dropzone  onDrop={(acceptedFiles) => {
          setSecondImage(acceptedFiles[0]);
          }} name="secondImage" multiple={false}>
          {({getRootProps, getInputProps}) => (
              <div 
              {...getRootProps({className:"dropzone col-xs-12 col-md-4 d-flex align-items-center justify-content-center"})}
              style={{height: '150px', width: '400px', border: '1px solid black'}}>
              <input {...getInputProps()} />
                {secondImage.length === 0 ? (
                <p className="text-center text-muted h5">
                Drag & drop the images here,
                <br /> or click to upload image
              </p>
              ) : (
              secondImage ? 
                <img src={URL.createObjectURL(secondImage)}
                  alt="Image"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain"}} />
              : <p>No Media</p>)}
            </div>
          )}
        </Dropzone>

        <Dropzone  onDrop={(acceptedFiles) => {
          setThirdImage(acceptedFiles[0]);
          }} name="thirdImage" multiple={false}>
          {({getRootProps, getInputProps}) => (
              <div 
              {...getRootProps({className:"dropzone col-xs-12 col-md-4 d-flex align-items-center justify-content-center"})}
              style={{height: '150px', width: '400px', border: '1px solid black'}}>
              <input {...getInputProps()} />
                {thirdImage.length === 0 ? (
                <p className="text-center text-muted h5">
                Drag & drop the images here,
                <br /> or click to upload image
              </p>
              ) : (
              thirdImage ? 
                <img src={URL.createObjectURL(thirdImage)}
                  alt="Image"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain"}} />
              : <p>No Media</p>)}
            </div>
          )}
        </Dropzone>
        
      </div>
      <div className="row">
        <div className="col-md-5 offset-md-1 ">
          <Table>
            <thead>
              <tr>
                <th style={{ width: "20px" }}>Hide</th>
                <th>Parameter: Default Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((x, index) => {
                return (
                  <tr key={x.id}>
                    <th scope="row">
                      <Input
                        onClick={() => selectedInfo(x)}
                        style={{ marginTop: "10%" }}
                        type="checkbox"
                      />
                    </th>
                    <td>
                      {x.fLabel}
                      <a data-tip data-for={`${x.id}reactTooltrip`}>
                        <BsInfoCircle
                          style={{
                            position: "relative",
                            top: "-7px",
                            left: "5px",
                          }}
                        />
                      </a>
                      <ReactTooltip id={`${x.id}reactTooltrip`} effect="solid">
                        <div
                          style={{
                            width: "400px",
                            fontSize: "12px",
                            padding: "10px",
                            textAlign: "justify",
                            zIndex: "999",
                          }}
                        >
                          {x.des ? x.des : "this is tool trip data"}{" "}
                        </div>
                      </ReactTooltip>
                      {x.isInput && (
                        <Input
                          className="input-filed-custom-style"
                          type="text"
                          onChange={e => setInputValue(e, x)}
                        />
                      )}
                      {x.sLabel && x.sLabel}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
        <div className="col-md-6">
          <RightParameter />
          <RightRadioContent
            title="Image Contrast"
            checkBoxData={ImageContrastData}
            setAction={setImageContrast}
          />
          <RightRadioContent
            title="Pluse Sequence"
            checkBoxData={pluseSequenceData}
            setAction={setPluseSequence}
          />
        </div>
      </div>
    </div>
  )
}

export default Parameter
