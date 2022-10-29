import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

export default function HomeInputs() {
  const [binary, setBinary] = useState('')
  const [decimal, setDecimal] = useState('')

  function onChangeBinary(bin: string) {
    const regex = /^[01]+$/

    if (bin === '') {
      setBinary('')
      setDecimal('')
    }

    if (regex.test(bin)) {
      setBinary(bin)
      setDecimal(parseInt(bin, 2).toString())
    }
  }

  function onChangeDecimal(dec: string) {
    const regex = /^[0-9\b]+$/

    if (dec === '') {
      setDecimal('')
      setBinary('')
    }

    if (regex.test(dec)) {
      setDecimal(dec)
      setBinary(parseInt(dec).toString(2))
    }
  }

  return (
    <>
      <InputWithLabel
        label="Binary"
        onChange={onChangeBinary}
        value={binary}
      />
      <InputWithLabel
        label="Decimal"
        onChange={onChangeDecimal}
        value={decimal}
      />
    </>
  )
}