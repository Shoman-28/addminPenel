import PropTypes from "prop-types"
import React, { useState } from "react"
import { Input, Button, Form, Modal, ModalHeader, ModalBody } from "reactstrap"

const options = [
  { name: "MCQ", value: "mcq" },
  { name: "Short Answer", value: "short" },
]

const Question = ({ questions = [], setQuestions, getQuestions }) => {

  const [open, setOpen] = useState(false);

  const SuccessModal = () => {
    return (
    <Modal isOpen={open} toggle={() => setOpen(false)} centered={true}>
      <ModalHeader>
          Question Exercise Saved Successfully!
      </ModalHeader>
      <ModalBody>
        Share this exercise!
      </ModalBody>
    </Modal>
    )
  }

  const handleSelect = (idx, e) => {
    const old = [...questions]
    old[idx].type = e.target.value
    setQuestions(old)
  }

  const addOption = idx => {
    const old = [...questions]
    old[idx].options.push({
      option: "",
      answer: false,
    })
    setQuestions(old)
  }
  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        type: "",
        options: [
          {
            option: "",
            answer: false,
          },
        ],
      },
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getQuestions(questions);
    setOpen(true)
    console.log('Questions Submitted: ',questions)
  }

  const handleOptionChange = (mainIndex, subIndex, e) => {
    const old = [...questions]
    const data = [...old[mainIndex].options]
    data[subIndex].option = e.target.value
    setQuestions(old)
  }
  const setAnswer = (mainIndex, subIndex, e) => {
    const old = [...questions]
    const data = [...old[mainIndex].options]
    data.forEach((dt, idx) => {
      if (idx === subIndex) {
        dt.answer = true
      } else {
        dt.answer = false
      }
    })
    setQuestions(old)
  }
  const removeOption = (idx, subIndex) => {
    const old = [...questions]
    old[idx].options.splice(subIndex, 1)
    setQuestions(old)
  }
  const handleQuestionInput = (idx, e) => {
    const old = [...questions]
    old[idx].question = e.target.value
    setQuestions(old)
  }
  return (
    <>
    <SuccessModal />
    <div className="bg-white mt-3 px-2">
      <h3 className="text-center text-decoration-underline pt-3">Questions</h3>
      <Form onSubmit={handleSubmit}>
      {questions.map((question, idx) => (
        <div className="d-flex justify-content-center flex-column border border-dark p-2 mb-3 rounded-lg" key={idx}>
          <div className="my-3 row align-items-center">
            <div className="col-12">
              <strong>Question {idx + 1}</strong>
              <Input
                className="ml-2 w-50 bg-transparent input-title"
                name="question"
                type="text"
                value={question.question || " "}
                required
                onChange={e => handleQuestionInput(idx, e)}
              />
            </div>
          </div>
          <div className="my-3 pt-2 row align-items-center">
            <p className="col-4 mb-0">
              <strong>Question Type</strong>
            </p>
            <div className="col-8 d-flex">
              {options.map((data, idx2) => (
                <div key={idx2}>
                  <Input
                    type="radio"
                    name={data.value + idx}
                    value={data.value}
                    onChange={e => handleSelect(idx, e)}
                    checked={question.type === data.value}
                  />
                  <span className="ms-2 me-3">{data.name}</span>
                </div>
              ))}
            </div>
          </div>
          {question.type === "mcq" ? (
            <div>
              <div className="row">
                <div className="col-2">
                  <strong>Options</strong>
                </div>
                <div className="col-10">
                  {question.options.map((option, index) => (
                    <div key={index} className="d-flex align-items-center mt-1">
                      <div className="col-10">
                        <Input
                          className="col-3"
                          type="radio"
                          name={"qAnswer" + idx + index}
                          value={index}
                          checked={option.answer === true}
                          onChange={e => setAnswer(idx, index, e)}
                        />
                        <Input
                          className="w-50 col-9 input-title"
                          name="option"
                          value={option.option || ""}
                          type="text"
                          placeholder={`Option ${index + 1}`}
                          onChange={e => handleOptionChange(idx, index, e)}
                        />
                      </div>
                      {index !== 0 ? (
                        <div className="col-2">
                          <i
                            className="mdi mdi-minus-circle-outline fs-2"
                            onClick={() => removeOption(idx, index)}
                          />
                        </div>
                      ) : null}
                    </div>
                  ))}
                  <div className="col-12 d-flex align-items-center justify-content-center mt-2">
                    <i
                      className="mdi mdi-plus-circle-outline fs-2 me-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => addOption(idx)}
                    />
                    Add another option
                  </div>
                  {/* { [...Array(optionCount)].map((_, i) => <OptionComponent key={i} />) } */}
                </div>
              </div>
            </div>
          ) : question.type === "short" ? (
            <Input
              className="input-textarea"
              placeholder="Short-Answer"
              disabled
              type="textarea"
            />
          ) : null}
        </div>
      ))}

      {/*  */}
      <div
        className="col-12 d-flex align-items-center justify-content-center mt-2"
        style={{ cursor: "pointer" }}
      >
        <i
          className="mdi mdi-plus-circle-outline fs-2 me-2"
          onClick={() => addQuestion()}
        />
        Add another Question
      </div>

      <div className='text-center mt-4 pb-4'>
        <Button type="submit" color="primary">Submit</Button>
      </div>
    </Form>
    </div>
    </>
  )
}

Question.propTypes = {
  questions: PropTypes.array,
  setQuestions: PropTypes.func,
  getQuestions: PropTypes.func,
}

export default Question
