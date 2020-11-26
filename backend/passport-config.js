const localStrategy = require('passport-local').Strategy;

function initialize(passport, getUser, getUserById) {
    const authenticateUser = async (email, password, done) => {
        const user = getUser(email);
        if (user == null) {
            console.log("No user with that email.");
            return done(null, false, { message: "No user with that email" });
        }

        if (password !== user.password) {
            console.log("Wrong password.");
            return done(null, false, { message: "Wrong password." });
        }

        return done(null, user);
    }

    passport.use(new localStrategy({ usernameField: 'email'}, authenticateUser));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        done(null, getUserById(id));
    });
}

module.exports = initialize;