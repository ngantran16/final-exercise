const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validateRequired = (value) => !!value;

export const validatePhoneNumber = (value) => phoneRegExp.test(value);

export const validateSelected = (value) => value !== '';

export const validateCheckbox = (value) => value = true;


export const validationRules = {
required: [
    {
      validator: validateRequired,
      message: 'This field is required'
    }
  ],

phoneNumber: [
  {
    validator: validatePhoneNumber,
    message: 'Phone number format is not valid'
  }
],

selected: [
  {
    validator: validateSelected,
    message: 'Select a value'
  }
],

checkbox: [
  {
    validator: validateCheckbox,
    message: 'You have to agree with the Terms'
  }
]

};

export const validateValuesByRule = (rules) => (values) => {
    const errors = {};
  
    for (const [key, rule] of Object.entries(rules)) {
      for (let i = 0; i < rule.length; i++) {
        if (!rule[i].validator(values[key])) {
          errors[key] = rule[i].message;
          break;
        }
      }
    }
    return errors;
};