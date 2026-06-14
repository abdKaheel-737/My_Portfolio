import { contactInfo, contactInputs } from "../assets/Script/data";
import Button from "../Components/Buttons/Button";
import ContactInfoContainer from "../Components/Containers/ContactInfoContainer";
import TitleContainer from "../Components/Containers/TitleContainer";
import Input from "../Components/Input/Input";

const Contact = () => {
  const handling = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    e.target.reset();
  };
  return (
    <section id="contact" className="w-full mt-3.5">
      <div className="text-center lg:text-start">
        <TitleContainer
          title="Contact"
          subTitle="Let’s Discuss Your"
          nestedSpan="Project"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mt-14 gap-15">
        <div className="flex flex-col gap-10  items-center lg:items-start">
          {contactInfo?.map((element, index) => {
            return (
              <ContactInfoContainer
                key={index}
                svgIcone={element?.icone}
                explanationLetter={element?.title}
                communicationMethod={element?.method}
              />
            );
          })}
        </div>
        <form
          onSubmit={handling}
          className="w-full max-w-175 h-fit grid grid-cols-2 gap-6  "
        >
          {contactInputs?.map((input, index) => {
            return (
              <Input
                key={index}
                name={input?.inputName}
                type={input?.inputType}
                placeholder={input?.inputPlaceholder}
                specialFormats={input?.inputSpecialFormats}
              />
            );
          })}
          <Button btnWidth="w-50" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
