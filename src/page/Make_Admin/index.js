import React, { useState } from "react"
import { Link } from "react-router-dom"
import MetaTags from 'react-meta-tags';

import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap"
import Select from "react-select"
import Dropzone from "react-dropzone"
import Breadcrumbs from "../../components/Common/Breadcrumb"
const MakeAdmin = () => {
  const [selectedFiles, setselectedFiles] = useState([])

  const options = [
    { value: "AK", label: "Alaska" },
    { value: "HI", label: "Hawaii" },
    { value: "CA", label: "California" },
    { value: "NV", label: "Nevada" },
    { value: "OR", label: "Oregon" },
    { value: "WA", label: "Washington" }
  ]

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size)
      })
    )

    setselectedFiles(files)
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Add Admin</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Make Admin" />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <CardTitle>Basic Information</CardTitle>
                  <CardSubtitle className="mb-4">
                    Fill all information below
                  </CardSubtitle>

                  <Form>
                    <Row>
                      <Col sm="6">
                        <div className="mb-3">
                          <Label htmlFor="adminFastName">Fast Name</Label>
                          <Input
                            id="adminFastName"
                            name="adminFastName"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="adminLastName">
                            Last Name
                          </Label>
                          <Input
                            id="adminLastName"
                            name="adminLastName"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      
                       
                      </Col>

                      <Col sm="6">
                        <div className="mb-3">
                          <Label className="control-label">Category</Label>
                          <select className="form-control select2">
                            <option>Select</option>
                            <option value="FA">Project Meneger</option>
                            <option value="EL">Project Meneger</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="manufacturerbrand">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        type="submit"
                        color="primary"
                        className="btn "
                      >
                        Save
                    </Button>
                      <Button
                        type="submit"
                        color="secondary"
                        className=" "
                      >
                        Cancel
                    </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>

             

             
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default MakeAdmin
