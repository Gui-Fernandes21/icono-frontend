import {
  nameFieldValidator,
  passwordValidator,
  emailValidator,
} from "@/utils/validators.js";

export default {
  data() {
    return {
      errorList: [],
      fields: {
        firstName: {
          value: "",
          type: "text",
          placeholder: "First Name",
          validator: {
            field: "name",
            status: "",
          },
        },
        lastName: {
          value: "",
          type: "text",
          placeholder: "Last Name",
          validator: {
            field: "name",
            status: "",
          },
        },
        email: {
          value: "",
          type: "email",
          placeholder: "Email",
          validator: {
            field: "email",
            status: "",
          },
        },
        secret: {
          value: "",
          type: "password",
          placeholder: "Password",
          validator: {
            field: "password",
            status: "",
          },
        },
        confirmSecret: {
          value: "",
          type: "password",
          placeholder: "Confirm Password",
          validator: {
            field: "password",
            status: "",
          },
        },
      },
    };
  },
  methods: {
    validate(field) {
      let validatorResponse;

      if (field.validator.field === "name") {
        validatorResponse = nameFieldValidator(field.value);
      }
      if (field.validator.field === "password") {
        validatorResponse = passwordValidator(field.value);
      }
      if (field.validator.field === "email") {
        validatorResponse = emailValidator(field.value);
      }

      if (validatorResponse.status == 400) {
        field.validator.status = validatorResponse.payload;

        if (this.errorExists(field)) return;

        const error = { ...validatorResponse, field: field.placeholder };
        this.errorList.push(error);
      } else {
        if (this.errorExists(field)) {
          this.errorList = this.errorList.filter(
            (err) => err.field !== field.placeholder
          );
        }

        field.validator.status = validatorResponse.payload;
      }
    },
    errorExists(field) {
      let exist = false;

      this.errorList.forEach((err) => {
        if (err.field === field.placeholder) {
          exist = true;
        }
      });

      return exist;
    },
  },
};
