const {
  createSession,
  getSession,
  deleteSession
} = require("./session");

const sessionId = createSession("user123");

console.log("Session ID:", sessionId);
console.log("Session:", getSession(sessionId));

deleteSession(sessionId);

console.log("After logout:", getSession(sessionId));