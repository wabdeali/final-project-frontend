import Instructions from "../../../components/Instructions"

function CsrfInstructions() {
    return (
        <Instructions>
            <h1>Exploiting CSRF Vulnerability</h1>

            <p>Cross-site request forgery (also known as CSRF) is a web security vulnerability that allows an attacker to induce users to perform actions that they do not intend to perform. It allows an attacker to partly circumvent the same origin policy, which is designed to prevent different websites from interfering with each other.</p>

            <p>Watch the video below to understand the concept better:</p>

            <iframe width="700vw" height="400vh" src="https://www.youtube.com/embed/vRBihr41JTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>How to perform a CSRF Attack?</h2>

            <p>Step one is to find a form that can be vulnerable and the URL where it sends a POST request to. </p>

            <p>
                Let's fill in details on the form above and open developer tools (F12). In developer tools let's open
                open the Network tab.
            </p>

            <img src="/img/instructions/csrf1.png" />

            <p>
                Now press on RESET. You should see a new request being made on a URL in the network tab. Note down that URL.
            </p>

            <img src="/img/instructions/csrf2.png" />

            <p className="code">http://localhost:3001/passwordreset/?username=admin&newPassword=admin</p>

            <p>You can see in the above URL that there exists two URL query parameters, username and admin.</p>

            <p>
                This can mean that you can target this URL from your own created website and effectively
                change the password of a user without them even knowing. The user only has to load your website
                and you can perform this attack without them even submitting any forms.
                This is possible because of the lack of a csrf token in the vulnerable website.
            </p>

            <p>To learn how to perform this attack yourself, refer to this video:</p>

            <iframe width="700vw" height="400vh" src="https://www.youtube.com/embed/hW2ONyxAySY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>Further Reading:</h2>

            <a href="https://owasp.org/www-community/attacks/csrf"><p>OWASP Cross Site Request Forgery</p></a>
            <a href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/05-Testing_for_Cross_Site_Request_Forgery"><p>Cross Site Request Forgery Testing</p></a>
            <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html"><p>Cross Site Request Forgery Prevention</p></a>

        </Instructions>
    )
}

export default CsrfInstructions
