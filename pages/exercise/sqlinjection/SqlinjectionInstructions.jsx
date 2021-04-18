import Instructions from '.../../../components/Instructions'

function SqlinjectionInstructions() {
    return (
        <Instructions>
            <h1>Performing and SQL Injection Attack</h1>

            <p>
                A SQL injection attack consists of insertion or “injection” of a SQL query via the input
                data from the client to the application. A successful SQL injection exploit can read
                sensitive data from the database, modify database data (Insert/Update/Delete), execute
                administration operations on the database (such as shutdown the DBMS), recover the
                content of a given file present on the DBMS file system and in some cases issue commands
                to the operating system.
            </p>

            <p>Watch this video to understand the concept better:</p>

            <iframe width="700vw" height="400vh" src="https://www.youtube.com/embed/_jKylhJtPmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>How to start with SQL Injection?</h2>

            <p>
                SQL Injection is usually performed on a text input where you get something in response
                that is displayed on the screen. This usually is a search field. In this project we
                have a search field that takes in a name and it searched for records in the database
                that match that name.
            </p>

            <img src="/img/instructions/sqlinjection1.png" alt="search screenshot" />

            <p>
                There are multiple ways to test if a text input is vulnerable to a SQL attack. One of the common most
                being to test if an error is displayed on the screen if you enter a special character such as " ' " in the input
            </p>

            <img src="/img/instructions/sqlinjection2.png" alt="error screenshot" />

            <p>
                An error being displayed in such a way means that this input field is probably vulnerable
                to SQL injection. This might be the result of no satisation being performed on the content
                of the input field. We now have to assume what the SQL query on the database might look like.
            </p>

            <p className="code">SELECT * FROM database WHERE name LIKE '%INPUT%';</p>

            <p>
                Now we need to enter characters in the input field in such a way that it breaks this SQL
                query and gives us more information than it is supposed to. For example let's type this in
                the input field:
            </p>

            <p className="code">';--</p>

            <p>Which will make our final query look something like:</p>

            <p className="code">SELECT * FROM database WHERE name LIKE '%';--%';</p>

            <p>
                Now the query compares all names with '%' which serves as a wildcard (Selects all) and we get
                all the data present in the table as a response. Everything in the query after -- gets ignored
                as it is identified as a comment in SQL.
            </p>

            <img src="/img/instructions/sqlinjection3.png" alt="table screenshot" />

            <p>
                You can automate this whole process and extract much more information about the database
                using tools like <a href="http://sqlmap.org/"><p>SQLMap</p></a> (comes inbuilt in Kali).
            </p>

            <iframe width="700vw" height="400vh" src="https://www.youtube.com/embed/kuSS7Rd_e54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>Further Reading:</h2>
            <a href="https://owasp.org/www-community/attacks/SQL_Injection"><p>OWASP SQL Injection</p></a>
            <a href="https://www.ptsecurity.com/ww-en/analytics/knowledge-base/how-to-prevent-sql-injection-attacks/"><p>Prevention Against SQL Injection</p></a>
        </Instructions>
    )
}

export default SqlinjectionInstructions
