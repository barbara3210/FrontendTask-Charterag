import './content.css';

const Content = ({ title, text, buttonText }) => {
  return (
    <div className="text-content">
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
      <button className="cta-button">{buttonText}</button>
    </div>
  );
};

export default Content;
