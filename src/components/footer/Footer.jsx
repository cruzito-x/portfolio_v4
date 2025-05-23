const Footer = () => {
  return (
    <div className="container ps-5 pe-5 pb-5 h-100">
      <div className="row text-center">
        <div className="col-12">
          <label className="text-black fw-normal">
            <a
              className="text-decoration-none fs-4"
              href="https://github.com/cruzito-x"
              target="_blank"
              rel="noopener noreferrer"
              title="If you can dream it, you can program it"
            >
              🪐
            </a>{" "}
            <br />
            Made with ♡ | &copy; David Cruz {new Date().getFullYear()}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Footer;
