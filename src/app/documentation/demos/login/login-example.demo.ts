/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="login-wrapper">
    <form class="login">
        <label class="title">
            Company Name<span class="trademark">&#8482;</span>
            Product Name&#174;
        </label>
        <div class="login-group">
            <div class="auth-source select">
                <select id="login-auth-source-1">
                    <option>Local Users</option>
                    <option>Administrator</option>
                </select>
            </div>
            <input class="username" type="text" id="login_username" placeholder="Username">
            <input class="password" type="password" id="login_password" placeholder="Password">
            <div class="checkbox">
                <input type="checkbox" id="rememberme">
                <label for="rememberme">
                    Remember me
                </label>
            </div>
            <div class="error active">
                Invalid user name or password
            </div>
            <button type="submit" class="btn btn-primary">LOG IN</button>
            <a href="..." class="signup">Sign up for an account</a>
        </div>
    </form>
</div>
`;

@Component({
    selector: "clr-login-example-demo",
    templateUrl: "./login-example.demo.html"
})
export class LoginExampleDemo {
    example = EXAMPLE;
}
