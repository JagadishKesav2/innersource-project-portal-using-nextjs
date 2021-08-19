interface RecordsCount {
  projectCount: number
}
const Header = (props: RecordsCount) => {  
 
  return (
    <>
      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
          <div className="mx-auto text-center">
            <div className="h2 text-white">
              <span id="header" className="fw-bold">
                InnerSource Project Portal
              </span>
            </div>
            <div className="h6 my-1 text-white">
              <span id="sub-header">Leverage, Reuse or Contribute to <b>{props.projectCount}</b> InnerSource projects</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
