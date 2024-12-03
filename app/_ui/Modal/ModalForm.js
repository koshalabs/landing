"use client";

import { useForm } from "react-hook-form";
import InputRow from "../FormComponents/InputRow";
import FormLabel from "../FormComponents/InputLabel";
import FormInput from "../FormComponents/FormInput";
import KoshaButton from "../SectionElements/KoshaButton";
import ModalLink from "./ModalLink";
import InputError from "../FormComponents/InputError";
import {toast} from "react-hot-toast";
import Toast from "../Toasts/Toast";
import {sendEmail} from "../_actions/actions";

export default function ModalForm({handleCloseModal}) {
    const {register, formState, handleSubmit} = useForm();
    const {errors, isSubmitting} = formState;

    const handleSend = async (data) => {
        try{
            const { firstName, lastName, email } = data;
            await sendEmail({firstName, lastName, email});
            handleCloseModal();
            toast.success(
                <Toast dismiss={() => toast.dismiss("email")} message="Your application was sent successfully!" />, {
                    duration: 3500,
                    id: "email",
            });
        } catch (e) {
            console.error(e);
            toast.error(
                <Toast dismiss={() => toast.dismiss("email")} message="Your application wasn’t sent. Please try again!" />, {
                    duration: 3500,
                    id: "email",
            });
        }
        
    }

    return <div>
        <form onSubmit={handleSubmit(handleSend)} className="space-y-9">
            <div className="space-y-4">
                <InputRow errorText={errors?.firstName?.message}>
                    <FormLabel htmlFor="firstName">Your First Name</FormLabel>
                    <FormInput disabled={isSubmitting} id="firstName" placeholder="Enter your first name" register={register} error={errors?.firstName}
                        required={{required: "This field is required.", minLength: {value: 2, message: "Field should be between 2 and 50 characters"}, maxLength: {value: 50, message: "Field should be between 2 and 50 characters"},
                        pattern: {value: /^[a-zA-Z]{1,}(?:[,. '-](?![,. '-])[a-zA-Z]*)*[a-zA-Z]$/, 
                            message: "Field can only contain letters and special characters (.,- ')",}
                        }}
                        />
                </InputRow>
                <InputRow errorText={errors?.lastName?.message}>
                    <FormLabel htmlFor="lastName">Your Last Name</FormLabel>
                    <FormInput disabled={isSubmitting} id="lastName" placeholder="Enter your last name" register={register} error={errors?.lastName}
                        required={{required: "This field is required.", minLength: {value: 2, message: "Field should be between 2 and 50 characters"}, maxLength: {value: 50, message: "Field should be between 2 and 50 characters"},
                        pattern: {value: /^[a-zA-Z]{1,}(?:[,. '-](?![,. '-])[a-zA-Z]*)*[a-zA-Z]$/, 
                                message: "Field can only contain letters and special characters (.,- ')",}
                            }}
                            />
                </InputRow>
                <InputRow errorText={errors?.email?.message}>
                    <FormLabel htmlFor="email">Your Email Address</FormLabel>
                    <FormInput disabled={isSubmitting} id="email" type="text" placeholder="Enter your email" register={register} error={errors?.email} 
                        required={{required: "This field is required.",
                            pattern: {value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                message: "Email is invalid.",}}}
                                />
                </InputRow>
            </div>
            <div className="space-y-6">
                <p className="text-[16px] leading-[19px]">
                    We will use the information you provide on this form to be in touch with you. For more information about privacy practices, please visit our website.
                </p>
                <div className="space-y-2">
                    <div className="flex gap-3 items-start leading-5">
                        <input
                            className="min-h-4 min-w-4 rounded-[4px] accent-[#2C354C] cursor-pointer focus:outline-offset-0 focus:outline-koshaBlue"
                            type="checkbox"
                            name="terms"
                            id="terms"
                            {...register("terms", {validate: (value) => value ? true : "Please accept terms in order to continue."})}
                            />
                        <label className="text-sm cursor-pointer -translate-y-1" htmlFor="terms">
                            We use Viral Loops for our referral campaign. By clicking below to join this campaign you acknowledge that your information will be transferred to Viral Loops for processing 
                            in accordance with their <ModalLink href="https://moth-app-prod-qoyzv.ondigitalocean.app/terms-of-use">Terms</ModalLink> and <ModalLink href="https://moth-app-prod-qoyzv.ondigitalocean.app/privacy-policy">Privacy Policy.</ModalLink>
                        </label>
                    </div>
                    {
                        errors?.terms?.message && <InputError>{errors.terms.message}</InputError>
                    }
                </div>
                <KoshaButton type="primary">
                    Get Early Access
                </KoshaButton>
            </div>
        </form>
    </div>
}