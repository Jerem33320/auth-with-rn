## Fait:
--App.js
--Main.js
--AuthContext.js
--SignUp.js

La connection à firebase via Signup fonctionne.

A voir pour le reste



Astuce du dotenv sur React-native

# npm install --save-dev babel-plugin-inline-dotenv
Added inline-dotenv to .babel:
{
  plugins: ["inline-dotenv"]
}

Added a .env file:
HELLO_WORLD="Hello, world!"

Finally added the environment variable:
<Text style={styles.getStartedText}>{process.env.HELLO_WORLD}</Text>