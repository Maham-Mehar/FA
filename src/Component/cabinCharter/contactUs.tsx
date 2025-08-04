"use client";
import { useState, useRef } from "react";
import { formFields } from "@/data/contact";
import { RefObject } from "react";

interface ContactUsProps {
    sectionRef: RefObject<HTMLDivElement | null>; // <-- fixed
}
const ContactUs = ({ sectionRef }: ContactUsProps) => {
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
  peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-zinc-400
  peer-focus:top-[-10px] peer-focus:text-[14px]
  peer-valid:top-[-10px] peer-valid:text-[14px]
  peer-empty:top-[14px] peer-empty:text-[16px] peer-empty:text-zinc-400
  bg-white px-1
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
        <div ref={sectionRef}>
            <section className="bg-white py-7 lg:py-9 xl:py-12 px-4 lg:px-6 ">
                <div className="max-w-7xl mx-auto bg-white">
                    {/* Left Side - Form */}
                    <div className="col-span-12 lg:col-span-7">
                        <h2 className="text-[32px] sm:text-[36px] text-center font-playfair font-bold text-[#034250] mb-7">
                            Booking Request
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-9 text-[18px] font-inter"
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
                                                : "border-[#81A1A8] focus:border-[#034250]"
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
                                    className="peer w-full border-b-2 border-[#81A1A8] focus:border-[#034250] focus:outline-none py-[14px] px-1 placeholder-transparent resize-none h-[80px]"
                                ></textarea>
                                <label htmlFor="message" className={labelStyle}>
                                    Message
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-zink text-white text-lg font-semibold px-7 lg:px-10 py-2 lg:py-3 rounded-md w-fit md:col-span-2 hover:pointer hover:bg-[#D6AB62]"
                            >
                                Submit
                            </button>
                        </form>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default ContactUs;
