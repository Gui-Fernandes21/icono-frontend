/**
 * Validators always return a object
 *
 * {
 *  type: String
 *  status: Number
 *  msg: String
 *  payload: String
 * }
 *
 */

const validators = {
  nameFieldValidator(value) {
    if (value == "") {
      return { status: 200, payload: "" };
    }

    if (value.length < 3) {
      return createResponseObject(
        400,
        "invalid",
        "Your name at least 3 characters long!"
      );
    }

    return createResponseObject(200, "valid");
  },
  passwordValidator(value) {
    let isAlpha = isAlphaNumeric(value);

    if (value == "") {
      return { status: 200, payload: "" };
    }
    if (value.length < 6 || !isAlpha) {
      return createResponseObject(
        400,
        "invalid",
        "Your password must not contain special characters, contain numbers, and be at least 6 characters in length!"
      );
    }
    if (!/\d/.test(value)) {
      return createResponseObject(
        400,
        "invalid",
        "Your password must not contain special characters and contain numbers."
      );
    }

    return createResponseObject(200, "valid");
  },
  emailValidator(value) {
    if (value == "") {
      return { status: 200, payload: "" };
    }

    const pass = String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (pass) {
      return createResponseObject(200, "valid");
    } else {
      return createResponseObject(
        400,
        "invalid",
        "Please Choose a Valid Email!"
      );
    }
  },
};

function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}

function createResponseObject(status, payload, msg = "") {
  return {
    status,
    msg,
    payload,
  };
}

module.exports = validators;
