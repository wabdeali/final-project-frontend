import Instructions from '../../../components/Instructions'

function HtmlinsertionInstructions() {
    return (
        <Instructions>
            <h1>What is HTML Injection Attack?</h1>

            <p>HTML injection is a type of injection
            vulnerability that occurs when a user is
            able to control an input point and is
            able to inject arbitrary HTML code into a
            vulnerable web page. ... For example,
            malicious HTML code can be injected via
            the innerHTML JavaScript method,
            usually used to render user-inserted
            HTML code.
            </p>

            <iframe width="700vw" height="400vh" src="https://www.youtube.com/embed/sLdxy1u2pdo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <p>
                Html Insertion much like other attacks start at user inputs. First we need to find an input
                that might be vulnerable to HTML injection. These are usually form elements that store and display
                data entered on the webpage.
            </p>

            <img src="/img/instructions/htmlinsertion1.png" alt="screenshot" />

            <p>
                Now let's see what happens when we enter html-like text into the text field. We will be entering
                the following piece of code:
            </p>

            <p className="code">{'<h1 style="color: red">John Doe</h1>'}</p>

            <img src="/img/instructions/htmlinsertion2.png" alt="screenshot" />

            <p>
                This proves that there is no sanitation occuring for this field where it checks if there is any html
                code inserted instead of a regular name.
            </p>

            <p>
                This also means that the website is rendering itself using the innerHTML property which causes
                both Defacement and XSS attacks on the website. If such value is stored in the database it will
                reflect on all users screen and hence this is a very easily exploitable but a very dangerous
                vulnerability.
            </p>

            <h2>Further Reading:</h2>
            <a href="https://www.hackingarticles.in/comprehensive-guide-on-html-injection/"><p>Comprehensive guide on HTML Injection</p></a>
            <a href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/11-Client-side_Testing/03-Testing_for_HTML_Injection"><p>Testing for HTML Injection</p></a>
        </Instructions>
    )
}

export default HtmlinsertionInstructions