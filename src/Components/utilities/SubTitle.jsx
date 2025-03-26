const SubTitle = ({title, btnTitle}) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-title">{title}</div>
      {btnTitle ? <div className="shopping-now">{btnTitle}</div> : null}
    </div>
  );
};
export default SubTitle;
