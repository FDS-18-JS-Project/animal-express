import dotenv from 'dotenv';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../model/user';

dotenv.config();
module.exports = passport => {
    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.SECRET
    }, (payload, done) => {
        User.findById(payload.id).then(user => {
            if(user) {
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => console.log(err));
    }))
}