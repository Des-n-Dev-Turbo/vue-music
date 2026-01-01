import { defineRule, configure } from 'vee-validate';
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  is_not as isNot,
} from '@vee-validate/rules';

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('alpha_spaces', alphaSpaces);
defineRule('email', email);
defineRule('min_value', minValue);
defineRule('max_value', maxValue);
defineRule('passwords_mismatch', confirmed);
defineRule('isNot', isNot);
defineRule('country_excluded', isNot);
defineRule('tos', required);

configure({
  generateMessage(ctx) {
    const messages = {
      required: `The field ${ctx.field} is required`,
      min: `The field ${ctx.field} needs to atleast have ${ctx.rule.params} characters`,
      max: `The field ${ctx.field} can atmost have ${ctx.rule.params} characters`,
      alpha_spaces: `The field ${ctx.field} can only contain alphabetic characters and spaces`,
      email: `The field ${ctx.field} must be a valid email`,
      min_value: `The field ${ctx.field} must be at least ${ctx.rule.params}`,
      max_value: `The field ${ctx.field} must be at most ${ctx.rule.params}`,
      passwords_mismatch: `The passwords do not match`,
      country_excluded: `Due to restrictions, we do not accept users from ${ctx.rule.params}`,
      isNot: `The field ${ctx.field} contains a restricted value`,
      tos: `You must accept the terms of service`,
    };

    const message = messages[ctx.rule.name] || `The field ${ctx.field} is Invalid!`;

    return message;
  },
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,
});

export const registerSchema = {
  name: 'required|min:3|max:100|alpha_spaces',
  email: 'required|min:3|max:100|email',
  age: 'required|min_value:18|max_value:100',
  password: 'required|min:6|max:18',
  confirm_password: 'required|passwords_mismatch:@password',
  country: 'required|country_excluded:Antartica',
  tos: 'tos',
};

export const loginSchema = {
  email: 'required|min:3|max:100|email',
  password: 'required'
}