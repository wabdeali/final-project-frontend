import Instructions from "../../../components/Instructions"

function XssInstructions() {
    return (
        <Instructions>
            <h1>Understanding XSS Attacks</h1>
            <p>
                Cross-Site Scripting (XSS)
                attacks are a type of injection,
                in which malicious scripts are
                injected into otherwise benign
                and trusted websites. XSS
                attacks occur when an attacker
                uses a web application to send
                malicious code, generally in the
                form of a browser side script,
                to a different end user.
                        </p>

            <p>
                In general, effectively
                preventing XSS vulnerabilities
                is likely to involve a
                combination of the following
                measures: Filter input on
                arrival. At the point where user
                input is received, filter as
                strictly as possible based on
                what is expected or valid input.
                Encode data on output.
                        </p>

            <p>Watch the video below to understand the concept better:</p>

            <iframe width="700vw" height="400vh" src="https://www.youtube.com/embed/L5l9lSnNMxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>How to detect and perform an XSS attack?</h2>

            <p>SXX attacks are usually performed on text inputs, so first find one on the page!</p>

            <img src="/img/instructions/xss1.png" alt="text-box" />

            <p>Now type this command inside the text input and press enter</p>

            <p className="code">{"<script>window.alert('hacked')</script>"}</p>

            <p>You should now get an alert message in your browser</p>

            <img src="/img/instructions/xss2.png" alt="alert"></img>

            <p>This means that this particular text box is vulnerable to XSS attack and now you have access to the javascript on this page.</p>

            <p>This is one of the most common vulnerability present in web applications and can open doors to a lot of other attacks. You can now make your own script to leak out more information from the page or use third party tools to do the same. Enjoy! </p>

            <h2>Further Reading:</h2>

            <a href="https://owasp.org/www-community/attacks/xss/"><p>OWASP Cross Sit Scripting (XSS)</p></a>
            <a href="https://www.youtube.com/watch?v=QWlehiZbaPQ&ab_channel=KushanthaGunawardana"><p>Hacking with Kali Linux | xss attack - Cross site scripting | Live Demo | Basics for Bug bounties</p></a>
        </Instructions>
    )
}

export default XssInstructions
