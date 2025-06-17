"use client";

import Input from "@/common/Input";
import GoogleButton from "@/common/GoogleButton";
import Button from "@/common/Button";
import User from "@/icons/User";
import MailBox from "@/icons/MailBox";
import Lock from "@/icons/Lock";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "@/lib/features/auth/signupslice";
import type { AppDispatch, RootState } from '@/lib/store/store';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface SignupFormProps {
    onSignin: () => void;
    onNext: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignin, onNext }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { error } = useSelector((state: RootState) => state.signup);

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required("First name is required")
            .matches(/^[A-Za-z]+$/, "First name must only contain letters"),
        lastName: Yup.string()
            .required("Last name is required")
            .matches(/^[A-Za-z]+$/, "Last name must only contain letters"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
            .required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm, setSubmitting, setFieldError }) => {
            try {
                const resultAction = await dispatch(signupUser({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password
                }));

                if (signupUser.fulfilled.match(resultAction)) {
                    const message = resultAction.payload?.message;
                    toast.success(message, {
                        onClose: () => {
                            onSignin();
                        },
                    });
                    localStorage.setItem("userEmail", values.email);
                    resetForm();
                } else if (signupUser.rejected.match(resultAction)) {
                    const errorPayload = resultAction.payload as { error: { message: string } };
                    const errorMessage = errorPayload?.error?.message || "Something went wrong.";
                    toast.error(errorMessage);
                }
            } catch (error) {
                console.error("Login error:", error);
                setFieldError("password", "An unexpected error occurred");
            } finally {
                setSubmitting(false);
            }
        },
    });



    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col justify-between h-[37.8rem] overflow-y-auto custom-scrollbar">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="px-10 xl:px-12 space-y-2">
                <div className="space-y-1">
                    <h2 className="text-[#012A50] font-extrabold text-[40px] font-plusjakarta">SailAway Charters</h2>
                    <h2 className="text-[#1E1E1E] text-[19px] font-bold font-plusjakarta">Anchor Your Dreams</h2>
                    <p className="font-plusjakarta font-medium text-[14px] text-[#1E1E1E]">Join a world of endless adventures — book your dream yacht or list your own and let the journey begin!</p>
                    {error && <p className="text-[#FF4234] text-sm">{error}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <label htmlFor="" className="text-[#012A50] font-plusjakarta font-bold text-[14px] mb-[10px] block">First name</label>
                        <Input
                            name="firstName"
                            type="text"
                            icon={<User />}
                            placeholder="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && !!formik.errors.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName && (<p className="text-[#FF4234] text-sm">{formik.errors.firstName}</p>)}
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="" className="text-[#012A50] font-plusjakarta font-bold text-[14px] mb-[10px] block">Last name</label>
                        <Input
                            name="lastName"
                            type="text"
                            icon={<User />}
                            placeholder="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && !!formik.errors.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName && (<p className="text-[#FF4234] text-sm">{formik.errors.lastName}</p>)}
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="" className="text-[#012A50] font-plusjakarta font-bold text-[14px] mb-[10px] block">Email</label>
                    <Input
                        name="email"
                        type="email"
                        icon={<MailBox />}
                        placeholder="Your email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && !!formik.errors.email}
                    />
                    {formik.touched.email && formik.errors.email && (<p className="text-[#FF4234] text-sm">{formik.errors.email}</p>)}
                </div>
                <div className="space-y-1">
                    <label htmlFor="" className="text-[#012A50] font-plusjakarta font-bold text-[14px] mb-[10px] block">Password</label>
                    <Input
                        name="password"
                        type="password"
                        icon={<Lock />}
                        placeholder="Enter password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && !!formik.errors.password}
                    />
                    {formik.touched.password && formik.errors.password && (<p className="text-[#FF4234] text-sm">{formik.errors.password}</p>)}
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-[13px] text-[#888888] font-normal font-plusjakarta w-fit">
                    <input
                        type="checkbox"
                        className="w-[14px] h-[14px] appearance-none cursor-pointer rounded-sm border border-[#888888] checked:bg-[#001B48] checked:border-[#001B48] checked:after:content-['✓'] after:text-white after:text-[10px] after:flex after:items-center after:justify-center"
                    />
                    <span>
                        I agree to the <span className="font-extrabold underline">Terms and Conditions</span>
                    </span>
                </label>
                <Button type="submit"
                    className={`w-full ${formik.isSubmitting ? "bg-[#C3974C]" : "bg-[#001B48]"}`}
                    disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? "Loading..." : "Create Account"}
                </Button>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-[#1E1E1E] w-full h-[0.2rem] rounded-lg" />
                    <p className="text-[#1E1E1E] font-plusjakarta font-semibold text-[16px]">Or</p>
                    <div className="bg-[#1E1E1E] w-full h-[0.2rem] rounded-lg" />
                </div>
                <div className="mx-[60px] sm:mx-[90px]">
                    <GoogleButton />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-plusjakarta text-[14px] font-semibold text-[#1E1E1E]">
                    Already have an account?{" "}
                    <button
                        className="text-[#1E1E1E] underline text-[16px] font-plusjakarta cursor-pointer"
                        onClick={onNext}
                    >
                        Sign In
                    </button>{" "}
                </p>
                <div>
                    <button
                        className="text-[#454545] underline text-[14px] font-semibold font-plusjakarta cursor-pointer"
                    >
                        Terms & Conditions
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SignupForm;