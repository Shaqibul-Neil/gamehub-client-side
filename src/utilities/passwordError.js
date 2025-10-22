const passwordError = (regEx, password) => {
  if (!regEx.test(password)) {
    if (password.length < 6)
      return "Weak password detected! Armor too thin, recruit 🛡️";
    if (!/[A-Z]/.test(password))
      return "Missing upper-case power! Boost your strength ⚔️";
    if (!/[a-z]/.test(password))
      return "No stealth mode detected — add a lowercase letter 🕶️";
    return "";
  }
};

export default passwordError;
