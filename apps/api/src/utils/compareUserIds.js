/**
 * Function that compares the object user's id with the context user's id.
 * If they aren't equal an error is thrown, otherwise nothing happens.
 * @param {ID} objUserId The object user's id.
 * @param {ID} ctxUserId The context user's id.
 * @param {string} errorMessage Custom error message.
 */
const compareUserIds = (
  objUserId,
  ctxUserId,
  errorMessage = "Invalid user."
) => {
  if (!objUserId.equals(ctxUserId)) {
    throw new Error(errorMessage);
  }
};

export default compareUserIds;
