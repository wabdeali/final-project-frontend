import React from 'react'
import Instructions from '../../../components/Instructions'

function BruteforceInstructions() {
    return (
        <Instructions>
            <h1>Understanding Brute Force Attacks</h1>

            <p>In cryptography, a brute-force attack consists of an attacker submitting many passwords or passphrases with the hope of eventually guessing a combination correctly. The attacker systematically checks all possible passwords and passphrases until the correct one is found.</p>

            <p>We recommend watching this video to understand the concept better:</p>

            <iframe width="700vw" height="400vh" src="https://www.youtube.com/embed/fHsJAei2ocM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>How to start with a Brute Force Attack?</h2>

            <p>
                First you need to find an input on a webpage to perform a bruteforce attack on. This usually
                will be a username/email and a password input which aids in some sort of authorization.
            </p>

            <img src="/img/instructions/bruteforce1.png" alt="text inputs screenshtos" />

            <p>
                Brute Force attacks are possible when there is no rate limiting present in the backend
                to prevent multiple requests from the same user in a short amount of time.
            </p>

            <p>
                To perform this attack you will need a word list and a tool that will use that wordlist
                and perform an attack.
            </p>

            <p>Tools commonly used:</p>
            <a href="https://tools.kali.org/password-attacks/hydra#:~:text=Hydra%20is%20a%20parallelized%20login,access%20to%20a%20system%20remotely."><p>Hydra (Inbuilt in Kali Linux)</p></a>
            <a href="https://portswigger.net/burp/communitydownload"><p>Burp Suite</p></a>
            <a href="https://github.com/jeanphorn/wordlist"><p>Collection of common wordlists</p></a>

            <p>This video will help you in using Burp Suite to perform a Brute Force attack:</p>

            <iframe width="700vw" height="400vw" src="https://www.youtube.com/embed/ZUKvet_BsoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>Further Reading:</h2>

            <a href="https://owasp.org/www-community/attacks/Brute_force_attack"><p>OWASP Brute Force Attacks</p></a>
            <a href="https://owasp.org/www-community/controls/Blocking_Brute_Force_Attacks"><p>OWASP Preventing Brute Force Attacks</p></a>
        </Instructions>
    )
}

export default BruteforceInstructions
