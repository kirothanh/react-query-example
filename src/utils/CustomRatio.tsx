import "./CustomRatio.css";

const CustomRatio = () => {
  return (
    <>
      <div>CustomRatio</div>

      <div className="form-group">
        <label className="radio" htmlFor="male">
          <input type="radio" name="gender" id="male" value="male" />
          Male
        </label>

        <label className="radio" htmlFor="female">
          <input type="radio" name="gender" id="female" value="female" />
          Female
        </label>

        <label className="radio" htmlFor="other">
          <input type="radio" name="gender" id="other" value="other" />
          Orther
        </label>
      </div>
    </>
  );
};

export default CustomRatio;
