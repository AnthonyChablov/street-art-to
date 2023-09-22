import { Link } from "react-router-dom";

interface IFormFooter {
  title: String;
  buttonText: String;
  link: String;
}

const FormFooter = ({ title, buttonText, link }: IFormFooter) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <span className="pb-3 text-md capitalize">{title}</span>
      <Link to={`${link}`}>
        <button>
          <span className="text-md text-[#1769aa] hover:text-zinc-500 hover:underline">
            {buttonText}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default FormFooter;
