import React, { useState } from "react"
import { Table, Label, Input } from "reactstrap"
import { rightData } from "./data"
const RightParameter = () => {
  const [data, setData] = useState([...rightData])

  const [selected, setSelected] = useState([])

  const setInputValueMax = (e, x) => {
    const index = data.indexOf(x)
    x.inputValueMax = e.target.value
    if (x.inputValueMax !== "") {
      data[index] = x
      setData([...data])
    }
  }

  const setInputValueMin = (e, x) => {
    const index = data.indexOf(x)
    x.inputValueMin = e.target.value
    if (x.inputValueMin !== "") {
      data[index] = x
      setData([...data])
    }
  }

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
    <>
      <Table>
        <thead>
          <tr>
            <th>Heigh-Level Parameters</th>
            <th colSpan='2' style={{paddingLeft: '84px'}}>Limits</th>
            <th>Hide and Don&apos;t grade</th>
          </tr>
          <tr>
            <th></th>
            <th className="w-25">Max</th>
            <th className="w-25">Min</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, index) => {
            return (
              <tr key={x.id}>
                <td scope="row">{x.fLabel}</td>

                <td>
                  {x.isInputMax && (
                    <Input
                      className="input-filed-custom-style"
                      type="text"
                      onChange={e => setInputValueMax(e, x)}
                    />
                  )}
                  {x.sLabel && x.sLabel}
                </td>

                <td>
                  {x.isInputMin && (
                    <Input
                      className="input-filed-custom-style"
                      type="text"
                      onChange={e => setInputValueMin(e, x)}
                    />
                  )}
                  {x.sLabel && x.sLabel}
                </td>

                <td className="text-center">
                  <Input
                    onClick={() => selectedInfo(x)}
                    style={{ marginTop: "10%" }}
                    type="checkbox"
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default RightParameter
