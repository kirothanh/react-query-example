import "./SwitchBox.css"

const SwitchBox = () => {
  return (
    <>
      <div>SwitchBox</div>
      <div className="switch">
        <input type="checkbox" name="" id="switch" hidden />
        <label htmlFor="switch"></label>
      </div>
    </>
  )
}

export default SwitchBox