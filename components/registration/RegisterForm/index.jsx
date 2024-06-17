"use client"

import range from "@/lib/utils/range";
import wordCount from "@/lib/utils/wordCount";
import clsx from "clsx";
import Style from "./RegisterForm.module.scss"
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "@/contexts/GlobalContext";



function RegisterForm(){
    const [ global, dispatch ] = useContext(GlobalContext)
    const [ bringKids, setBringKids ] = useState(false)
    const [ id, setId ] = useState(null)
    const { register, handleSubmit, watch, clearErrors, setError, reset, formState: { errors } } = useForm();


    function onSubmit(data){
        console.log(data)
    }



    useEffect(() => {
        if( id !== global?.cart?.editTicket?.id ){
            reset()
        }

    }, [ global?.cart?.editTicket?.id ])




    function updateTicket({ name, value, global }){
        const validate = []

        Object.keys(global.cart.editTicket?.options).forEach(option => {
            switch(option){
                case "title":
                case "first_name":
                case "last_name":
                case "email":
                case "phone":
                case "city":
                case "occupation":
                case "makes_me_happy":
                    validate.push(global.cart.editTicket?.options[option])
                    break;
            }
        })
console.log(validate)
        dispatch({
            type: "editTicket",
            data: {
                ...global?.cart?.editTicket,
                id: global?.cart?.editTicket?.id,
                isDone: validate.every(item => item !== null),
                options: {
                    ...global.cart.editTicket?.options,
                    [name]: value
                }
            }
        })

        setId(global?.cart?.editTicket?.id)
    }



    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            updateTicket({ name, value: value[name], global })
        })

        return () => subscription.unsubscribe()

    }, [ watch, errors, global?.cart?.editTicket ])



    return(
        <>
            <form className={Style.form}  onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend className={Style.legend}>
                        Tell us about yourself.
                    </legend>

                    <p className={Style.controlGroup}>
                        <label htmlFor="title">
                            Title
                        </label>

                        <input 
                            id="title"
                            name="title"
                            required
                            type="text" 
                            {...register("title", { value: global.editTicket?.options?.title })}
                            placeholder="Mr, Mrs, Dr, etc."
                            className={clsx(Style.control, Style.controlShort)}
                        />
                    </p>
                    
                    <p className={Style.controlGroup}>
                        <label htmlFor="first_name">
                            First Name
                        </label>

                        <input 
                            id="first_name"
                            name="first_name"
                            required
                            {...register("first_name")}
                            type="text" 
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="lastName">
                            Surname
                        </label>

                        <input 
                            id="last_name"
                            name="last_name"
                            required
                            type="text" 
                            {...register("last_name")}
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="occupation">
                            Occupation
                        </label>

                        <input 
                            id="occupation"
                            name="occupation"
                            required
                            type="text" 
                            {...register("occupation")}
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="makesMeHappy">
                            In 3 words or less, what makes you happy?
                        </label>

                        <input 
                            id="makes_me_happy"
                            name="makes_me_happy"
                            required
                            className={Style.control}
                            type="text"
                            {...register("makes_me_happy", {
                                validate: (value) => wordCount(value, 3)
                            })}
                            onBlur={(e) => {
                                const words = wordCount(e.target.value, 3)

                                if(words){
                                    clearErrors("makes_me_happy")

                                }else{
                                    setError("makes_me_happy", {
                                        type: "manual",
                                        message: "Please use 3 words or less."
                                    })
                                }
                            }}
                            placeholder="Chocolate, A Gentile Rain, Gardening, etc."
                        />
                    </p>

                    {global.cart?.editTicket?.type === "VIP" && (
                        <p className={Style.controlGroup}>
                            <label htmlFor="tee_shirt_size">
                                Tee Shirt Size
                            </label>

                            <select 
                                id="tee_shirt_size"
                                name="tee_shirt_size"
                                {...register("tee_shirt_size")}
                                className={clsx(Style.control, Style.controlShort)}
                            >
                                <option value="">-- Size --</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="xlarge">X-Large</option>
                                <option value="xxlarge">XX-Large</option>
                                <option value="xxxlarge">XXX-Large</option>
                            </select>
                        </p>
                    )}
                </fieldset>


                <fieldset>
                    <legend className={Style.legend}>
                        What is your contact information?
                    </legend>

                    <p className={Style.controlGroup}>
                        <label htmlFor="email">
                            Email Address
                        </label>

                        <input 
                            id="email"
                            name="email"
                            type="email" 
                            required
                            placeholder="you@example.com"
                            {...register("email")}
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="phone">
                            Phone Number
                        </label>

                        <input 
                            id="phone"
                            name="phone"
                            type="phone"
                            required
                            placeholder="___-___-____" 
                            {...register("phone")}
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="city">
                            City
                        </label>

                        <input 
                            id="city"
                            name="city"
                            type="text" 
                            required
                            {...register("city")}
                            className={Style.control}
                        />
                    </p>
                </fieldset>



                <fieldset>
                    <legend className={Style.legend}>
                        Interested in any extras?
                    </legend>


                    {(global.cart?.editTicket?.type === "VIP" || global.cart?.editTicket?.type === "General +") && (
                        <p className={clsx(Style.controlGroup, Style.checkboxControl)}>
                            <input 
                                id="after_party"
                                name="after_party"
                                type="checkbox"
                                {...register("after_party", { value: "Yes" })}
                                className={Style.control}
                            />

                            <label htmlFor="afterParty">
                                YES! I will be attending the TEDx After Party.* <br/><small>*Must be 18 or older to attend.</small>
                            </label>
                        </p>
                    )}


                    <p className={clsx(Style.controlGroup, Style.checkboxControl)}>
                        <input 
                            id="kids_zone"
                            name="kids_zone"
                            type="checkbox"
                            onChange={() => setBringKids(!bringKids)}
                            className={Style.control}
                        />

                        <label htmlFor="kids_zone">
                            I'd like to bring my kids to the FREE Kids Zone (Ages 5-12).* <br/> <small>*Only 2 children per ticket.</small>
                        </label>
                    </p>

                    {bringKids && (
                        <>
                            <div className={Style.controlRow}>
                                <p className={clsx(Style.controlGroup, Style.col_1_2)}>
                                    <label htmlFor="childName">
                                        Child's Full Name
                                    </label>

                                    <input 
                                        id="childName"
                                        name="childName"
                                        type="text" 
                                        placeholder="First Name & Surname"
                                        {...register("childName_1")}
                                        className={Style.control}
                                    />
                                </p>

                                <p className={Style.controlGroup}>
                                    <label htmlFor="childAge">
                                        Age
                                    </label>

                                    <select
                                        id="childAge"
                                        name="childAge"
                                        {...register("childAge_1")}
                                        className={clsx(Style.control)}
                                    >
                                        <option value="">-- Age --</option>
                                        {range(5, 12).map((age) => (
                                            <option value={age} key={age}>
                                                {age}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </div>

                            <div className={Style.controlRow}>
                                <p className={clsx(Style.controlGroup, Style.col_1_2)}>
                                    <label htmlFor="childName">
                                        Child's Full Name
                                    </label>

                                    <input 
                                        id="childName"
                                        name="childName"
                                        type="text" 
                                        placeholder="First Name & Surname"
                                        {...register("childName_2")}
                                        className={Style.control}
                                    />
                                </p>

                                <p className={Style.controlGroup}>
                                    <label htmlFor="childAge">
                                        Age
                                    </label>

                                    <select
                                        id="childAge"
                                        name="childAge"
                                        {...register("childAge_2")}
                                        className={clsx(Style.control)}
                                    >
                                        <option value="">-- Age --</option>
                                        {range(5, 12).map((age) => (
                                            <option value={age} key={age}>
                                                {age}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </div>
                        </>
                    )}
                </fieldset>
            </form>

                
            
            
        </>
    )
}


export default RegisterForm;