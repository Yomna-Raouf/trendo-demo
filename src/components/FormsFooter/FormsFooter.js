import "./FormsFooter.css";

const FormsFooter = () => {
  return (
    <div className="FormsFooter">
      <div className="FormsFooter__container">
        <small> احصل على التطبيق من </small>
        <div className="FormsFooter__ButtonsContainer">
          <button>تحميل التطبيق من جوجل بلاي</button>
          <button>
            تحميل التطبيق من تطبيقات أبل
            {/*  <img
                src=" https://www.apple.com/ac/globalnav/2.0/en_US/images/ac-globalnav/globalnav/apple/image_large.svg"
                alt="apple logo"
              /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export { FormsFooter };
