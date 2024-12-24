import { HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { Strategy } from "passport-strategy";

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, "auth") {
    async authenticate(req: Request) {
        /** Step 3 : */
        const isAuthorized = false /* Fix Me ! */

        if (isAuthorized)
            return this.success({});

        return this.fail(HttpStatus.UNAUTHORIZED);
    }
}
