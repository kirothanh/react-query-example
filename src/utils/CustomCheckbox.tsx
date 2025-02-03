import "./CustomCheckbox.css"

const CustomCheckbox = () => {
  return (
    <>
      <div>CustomCheckbox</div>

      <div className="checkbox p-4">
        <input type="checkbox" name="remember" id="remember" hidden/>
        <label htmlFor="remember">Remember</label>
      </div>
    </>
  );
};

export default CustomCheckbox;
