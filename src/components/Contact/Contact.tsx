import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export interface ContactInterface {}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter a name"),
  email: Yup.string().required("Enter a email"),
  subject: Yup.string().required("Enter a subject"),
  message: Yup.string().required("Enter a message"),
});

const formOptions = { resolver: yupResolver(validationSchema) };

const Contact: FC<ContactInterface> = () => {
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="flex justify-center text-center gap-y-8 md:gap-0 items-center pt-44">
      <div>
        <h1 className="subTitle">Contact me!</h1>
        <p className="mt-4">
          My inbox is always open for new opportunities and challenges. Write me
          that I will try to answer you quickly!
        </p>
        <div className="w-full md:w-1/2 mx-auto my-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <input
                  {...register("firstName")}
                  className={
                    !errors.firstName ? "text-form" : "text-form-error"
                  }
                  id="firstname"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  {...register("email")}
                  id="email"
                  type="text"
                  placeholder="Email"
                  className={!errors.email ? "text-form" : "text-form-error"}
                />
              </div>
              <div className="col-span-full">
                <input
                  {...register("subject")}
                  id="address"
                  type="text"
                  placeholder="Subject"
                  className={!errors.subject ? "text-form" : "text-form-error"}
                />
              </div>
              <div className="col-span-full ">
                <textarea
                  {...register("message")}
                  id="city"
                  rows={4}
                  placeholder="Message"
                  className={!errors.message ? "text-area" : "text-area-error"}
                />
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="button-neon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Send Message!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
