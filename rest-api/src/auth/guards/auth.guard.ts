import * as passport from "@nestjs/passport";

export class AuthGuard extends passport.AuthGuard("auth") {};
