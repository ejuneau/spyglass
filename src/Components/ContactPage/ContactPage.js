import React from "react";

export default function ContactPage(props) {
    return (
        <div className="ContactPageComponent">
            <h1>Like what you see?</h1>
            <form action="mailto:rcjuneau8@gmail.com" method="get" enctype="text/plain">
                <div>
                    <label for="name">Name:
                        <input type="text" name="name" id="name" />
                    </label>
                </div>
                <div>
                    <label for="email">Email:
                        <input type="text" name="email" id="email" />
                    </label>
                </div>
                <div>
                    <label>Comments:</label>
                    <br />          
                    <textarea name="comments" rows="12" cols="35">Send your comments to us.</textarea>
                </div>
                <div>
                    <input type="submit" name="submit" value="Send" />
                    <input type="reset" name="reset" value="Clear Form" />
                </div>
            </form>
        </div>
    )
}