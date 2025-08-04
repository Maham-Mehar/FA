"use client";
import React, { useRef, useState } from "react";
import { Yacht } from "../YachtDetail/hero";

type Props = {
  data: Yacht | null;
};

const formFields = [
    { id: "name", label: "Your Name", type: "text", required: true },
    { id: "email", label: "Your Email", type: "email", required: true },
    { id: "phone", label: "WhatsApp (if available)", type: "tel", required: false },
    { id: "guests", label: "No of guests", type: "text", required: true },
    { id: "travelDate", label: "Travel Date", type: "date", required: true },
    { id: "returnDate", label: "Return Date", type: "date", required: true },
];

const ContactDetail: React.FC<Props> = ({ data }) => {
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
        "peer w-full border-b-2 py-[10px] px-1 placeholder-transparent focus:outline-none bg-white";
    const labelStyle = `
    absolute left-1 top-[14px] text-[16px] transition-all duration-200 bg-white px-1
    peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-zinc-400
    peer-focus:top-[-10px] peer-focus:text-[14px]
    peer-valid:top-[-10px] peer-valid:text-[14px]
    peer-empty:top-[11px] peer-empty:text-[16px] peer-empty:text-zinc-400
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
        // TODO: handle submission (e.g., API call)
    };

    return (
        <div className="bg-white sticky rounded-lg p-3 max-w-[500px] w-full border-2 border-zink">
            <div className="flex flex-col items-center justify-center text-center">
                <p className="text-lg md:text-xl lg:text-[22px] xl:text-[24px] font-playfair text-[#034250] font-bold">
                    {data?.title} 
                </p>
                <p className="text-zink font-inter text-sm lg:text-[16px] mt-1">
                    Looking for a yacht charter?
                </p>
                <p className="text-[#034250] font-inter text-sm lg:text-[16px] mt-1">+66 61 234 5623</p>
                <p className="text-[#034250] font-inter text-sm lg:text-[16px]">+66 61 234 5623</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-3 lg:mt-4 xl:mt-2 space-y-3">
                {formFields.map((field, index) => {
                    if (field.id === "travelDate" || field.id === "returnDate") return null; 

                    const hasError = errors[field.id];
                    return (
                        <div key={field.id} className="relative">
                            <input
                                type={field.type}
                                id={field.id}
                                ref={(el) => setInputRef(el, index)}
                                placeholder=" "
                                value={formValues[field.id] || ""}
                                onChange={(e) => handleChange(field.id, e.target.value)}
                                onBlur={() => handleBlur(field.id, field.required)}
                                onKeyDown={(e) => handleKeyDown(e, index, field.id, field.required)}
                                required={field.required}
                                className={`${inputFieldBase} ${hasError
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-[#81A1A8] focus:border-[#034250]"
                                    }`}
                            />
                            <label
                                htmlFor={field.id}
                                className={`${labelStyle} ${hasError
                                    ? "text-red-500 peer-focus:text-red-500"
                                    : "text-zinc-400 peer-focus:text-[#034250]"
                                    }`}
                            >
                                {field.label}
                                {field.required && <span className="text-red-500 ml-1">*</span>}
                            </label>
                            {hasError && (
                                <p className="text-sm text-red-500 absolute -bottom-5 left-0">
                                    This field is required.
                                </p>
                            )}
                        </div>
                    );
                })}

                {/* Travel Date + Return Date Row */}
                <div className="flex flex-col lg:flex-row gap-3">
                    {["travelDate", "returnDate"].map((id) => {
                        const field = formFields.find((f) => f.id === id)!;
                        const index = formFields.findIndex((f) => f.id === id);
                        const hasError = errors[id];

                        return (
                            <div
                                key={id}
                                className="relative w-full lg:w-[130px] xl:w-[170px] min-h-[65px]"
                            >
                                <input
                                    type="date"
                                    id={id}
                                    ref={(el) => setInputRef(el, index)}
                                    placeholder=" "
                                    value={formValues[id] || ""}
                                    onChange={(e) => handleChange(id, e.target.value)}
                                    onBlur={() => handleBlur(id, field.required)}
                                    onKeyDown={(e) => handleKeyDown(e, index, id, field.required)}
                                    required={field.required}
                                    className={`${inputFieldBase} ${hasError
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-[#81A1A8] focus:border-[#034250]"
                                        } peer-empty`}
                                />
                                <label
                                    htmlFor={id}
                                    className={`${labelStyle} ${hasError
                                        ? "text-red-500 peer-focus:text-red-500"
                                        : "text-zinc-400 peer-focus:text-[#034250]"
                                        }`}
                                >
                                    {field.label}
                                    {field.required && <span className="text-red-500 ml-1">*</span>}
                                </label>
                                {hasError && (
                                    <p className="text-sm text-red-500 mt-1">
                                        This field is required.
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Textarea */}
                <div className="relative">
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
                        className="peer w-full border-b-2 border-[#81A1A8] focus:border-[#034250] focus:outline-none px-1 placeholder-transparent resize-none h-[40px] bg-white"
                    ></textarea>
                    <label htmlFor="message" className={labelStyle}>
                        Message
                    </label>
                </div>

                {/* Submit Button */} 
                <div className="flex items-center justify-center mb-2">
                    <button
                        type="submit"
                        className="bg-[#034250] text-white text-base font-semibold px-8 py-2 rounded-md"
                    >
                        Send Query
                    </button>
                </div>
            </form>

        </div>
    );
};

export default ContactDetail;
