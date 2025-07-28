"use client";
import { useState, useRef } from "react";
import { formFields, contactDetails } from "@/data/contact";

const ContactSection = () => {
    const [formValues, setFormValues] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (id: string, value: string) => {
        setFormValues((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: false }));
    };
    const setInputRef = (el: HTMLInputElement | null, index: number) => {
        inputRefs.current[index] = el;
    };

    const handleBlur = (id: string, required: boolean) => {
        if (required) {
            setErrors((prev) => ({
                ...prev,
                [id]: !formValues[id]?.trim(),
            }));
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent,
        index: number,
        id: string,
        required: boolean
    ) => {
        if (e.key === "Enter" || e.key === "Tab") {
            const currentValue = formValues[id]?.trim() || "";
            if (required && !currentValue) {
                e.preventDefault();
                setErrors((prev) => ({ ...prev, [id]: true }));
                return;
            }

            e.preventDefault();
            const next = inputRefs.current[index + 1];
            if (next) {
                next.focus();
            } else {
                const textarea = document.getElementById("message") as HTMLTextAreaElement | null;
                textarea?.focus();
            }
        }
    };

    const inputFieldBase =
        "peer w-full border-b-2 py-[14px] px-1 placeholder-transparent focus:outline-none";
    const labelStyle = `
  absolute left-1 top-[14px] text-[16px] transition-all duration-200
  peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-[16px] text-zink
  peer-focus:top-[-10px] peer-focus:text-[14px]
  peer-valid:top-[-10px] peer-valid:text-[14px]
  peer-empty:top-[14px] peer-empty:text-[16px] peer-empty:text-zinc-400
  bg-white px-1 text-zink
`;


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;
        const newErrors: Record<string, boolean> = {};

        formFields.forEach((field) => {
            if (field.required && !formValues[field.id]?.trim()) {
                newErrors[field.id] = true;
                valid = false;
            }
        });

        setErrors(newErrors);
        if (!valid) return;

        console.log("Form Submitted", formValues);
        // Add actual submission logic here
    };

    return (
        <div className="">
            <div className="bg-[url('/images/Cimage1.png')] bg-cover bg-center bg-no-repeat min-h-[24vh] md:min-h-[30vh] lg:min-h-[40vh] w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] md:text-[48px] lg:text-[56px] font-playfair font-bold text-white drop-shadow-md">
                    Contact Us
                </p>
            </div>

            <section className="bg-white py-12 px-4 lg:px-6 ">
                <div className="max-w-7xl mx-auto bg-white p-0 xl:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12">
                    {/* Left Side - Form */}
                    <div className="col-span-12 lg:col-span-7">
                        <h2 className="text-[28px] lg:text-[32px] xl:text-[36px] font-playfair font-bold text-[#034250] mb-4">
                            Get In Touch
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[18px] font-inter text-zink"
                        >
                            {formFields.map((field, index) => {
                                const hasError = errors[field.id];
                                return (
                                    <div key={field.id} className="relative">
                                        <input
                                            type={field.type}
                                            id={field.id}
                                            ref={(el) => setInputRef(el, index)}
                                            placeholder=" " // still needed for peer-placeholder-shown fallback
                                            value={formValues[field.id] || ""}
                                            onChange={(e) => handleChange(field.id, e.target.value)}
                                            onBlur={() => handleBlur(field.id, field.required)}
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, index, field.id, field.required)
                                            }
                                            required={field.required}
                                            className={`${inputFieldBase} ${hasError
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-[#81A1A8] focus:border-[#034250] text-zink"
                                                } ${field.type === "date" ? "peer-empty" : ""}`}
                                        />

                                        <label
                                            htmlFor={field.id}
                                            className={`${labelStyle} ${hasError
                                                ? "text-red-500 peer-focus:text-red-500"
                                                : "text-zinc-400 peer-focus:text-[#034250]"
                                                }`}
                                        >
                                            {field.label}
                                            {field.required && (
                                                <span className="text-red-500 ml-1">*</span>
                                            )}
                                        </label>
                                        {hasError && (
                                            <p className="text-sm text-red-500 absolute -bottom-5 left-0">
                                                This field is required.
                                            </p>
                                        )}
                                    </div>
                                );
                            })}

                            {/* Textarea */}
                            <div className="relative md:col-span-2">
                                <textarea
                                    id="message"
                                    placeholder=" "
                                    value={formValues["message"] || ""}
                                    onChange={(e) => handleChange("message", e.target.value)}
                                    onBlur={() => handleBlur("message", false)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey) e.preventDefault();
                                    }}
                                    required
                                    className={`peer w-full text-zink border-b-2 
      ${errors.message ? "border-red-500 focus:border-red-500" : "border-[#81A1A8] focus:border-[#034250]"} 
      focus:outline-none py-[14px] px-1 placeholder-transparent resize-none h-[80px]`}
                                />

                                <label
                                    htmlFor="message"
                                    className={`absolute left-1 top-2.5 text-sm transition-all duration-200 
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
      peer-focus:top-0.5 peer-focus:text-sm 
      ${errors.message ? "text-red-500 peer-focus:text-red-500" : "text-zinc-400 peer-focus:text-[#034250]"}`}
                                >
                                    Locations you want to visit or any questions?
                                </label>

                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">This field is required.</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-[#034250] text-white text-sm font-semibold px-6 py-2 rounded-md w-fit md:col-span-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="col-span-12 lg:col-span-5 bg-[url('/images/contactbg.png')] bg-cover bg-center bg-no-repeat bg-opacity-90 backdrop-blur-md p-6 shadow-sm rounded-tl-3xl rounded-br-3xl ">
                        <h3 className=" text-[23px] md:text-[22px] lg:text-[25px] xl:text-[30px] font-bold font-inter text-zink mb-2 font-semibold">
                            Got Questions? <span className="text-mustard">Let's Chat!</span>
                        </h3>
                        <p className="text-black mb-4 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-normal">
                            Want help planning your adventure? </p>
                        <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal text-black"> <span className="font-bold">Fill out </span>Fill out the form and one of our
                            friendly experts will get back to you soon!
                        </p>
                        <ul className="space-y-3 text-sm sm:text-base mt-3">
                            {contactDetails.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li key={index} className="flex items-start gap-3 mt-4 lg:mt-0">
                                        <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-6">
                                            <div className="w-10 h-10 flex items-center justify-center bg-[#034250] text-white rounded-full shrink-0">
                                                <Icon className="text-white text-[18px]" />
                                            </div>
                                            <div>
                                                <p className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-sourceSanspro font-semibold text-[#034250]">
                                                    {item.title}
                                                </p>
                                                <p className="text-[16px] sm:text-[17px] md:text-[18px] font-sourceSanspro text-zink">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>

                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;
