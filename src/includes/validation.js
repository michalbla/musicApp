import {Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure} from "vee-validate";
import { required, min, max, alpha_spaces as alphaSpaces, email,min_value as minVal, max_value as maxVal,confirmed, not_one_of as excluded, } from "@vee-validate/rules"; 

export default
{
    install(app)
    {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("ErrorMessage",ErrorMessage);

        defineRule('required', required);
        defineRule('tos', required);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('alpha_spaces', alphaSpaces);
        defineRule('email', email);
        defineRule('min_value', minVal);
        defineRule('max_value', maxVal);
        defineRule('password_missmatch', confirmed);
        defineRule('excluded', excluded);
        defineRule('country_excluded', excluded);
        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required `,
                    min: `the field ${ctx.field} is too short`,
                    max: `the field ${ctx.field} is too long`,
                    alpha_spaces: `the field ${ctx.field} may only contain alphabetic characters and spaces`,
                    email: `the field ${ctx.field} must be a valid email`,
                    min_value: `the field ${ctx.field} is too low `,
                    max_value: `the field ${ctx.field} is too high`,
                    excluded: `you are not allowed to use this value for the field ${ctx.field}`,
                    country_excluded: `Due to restrictions, we do not accept user from this location`,
                    password_mismatch: `the passwords do not match`,
                    tos: `you must accept the therms of service`
                };

                const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `the field $${ctx.field} is invalid`;

                return message;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        });
    },
};

