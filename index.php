
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Private</title>
    <script src="https://unpkg.com/css-doodle@0.22.0/css-doodle.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <style>html, body { 
        height: 100%; 
        margin: 0 
      }
      body { 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        background: #000; 
        overflow: hidden; 
      }

      .password{
        position: absolute;
        top: 40%;
        display: flex;
        flex-direction: column;

      }
      h1{
          margin-left: 10%;
      }
      input{
          background: transparent;
          border:solid 2px red;
          color:white;
          box-shadow:0px -10px 100px 15px rgba(255,255,255,0.5);
          margin-bottom: 10px;
        }
       ::placeholder{
           color: white;
           opacity: 100%;
           text-align: center;
       }
      button{
          position: absolute;
          top: 15em;
          left: 3.5em;
          background: transparent;
          border:solid 2px red;
          color: white;
          margin-left: 10px;
      }
      
    </style>      
</head>
<body>

    <css-doodle>
        :doodle {
          @grid: 25x1 / 18vmin;
        }
        :container {
          perspective: 30vmin;
        }
      
        @place-cell: center;
        @size: 100%;
      
        border: @r(1px) solid @pd(
          #00b8a9, #f8f3d4, #f6416c, #ffde7d
        );
        @random(.150) { border-style: dashed; }
        @random(.150) { border-style: dotted; }
        @random(.150) {
          border-width: @p(3px, 4px);
          border-style: double;
        }
      
        border-radius: 75%;
        transform-style: preserve-3d;
        will-change: transform, opacity;
        animation: scale-up 50s linear infinite;
        animation-delay: calc(-50s / @size() * @i());
      
        @keyframes scale-up {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          95% {
            transform:
              translate3d(0, 0, 45vmin)
              rotateX(calc(@p(-1, 1) * @r(50deg, 330deg)))
              rotateY(calc(@p(-1, 1) * @r(50deg, 330deg)))
              rotateZ(calc(@p(-1, 1) * @r(50deg, 330deg)))
          }
        }
    </css-doodle>
    <form action="index.php" method="get" class="password" onsubmit="PasswordSubmit()" >
        <h1 style="color: red; ">Welcome !</h1>
        <input class="firstName" type="text" name="firstName" placeholder="First Name" value="allo">
        <input class="lastName" type="text" name="lastName" placeholder="Last Name" value="allo"> >
        <input class="passwordText" type="text" name="passwordText" placeholder="Password" value="allo">>
        <button formaction="index.php" formenctype="submit" formmethod="get" class='submitButton' onclick="PasswordSubmit()">Submit</button>
    </form>
    <script src="/script.js"></script>
    <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$first_name ="";
$last_name ="";
$passwordText ="";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Escape user inputs for security
// $first_name = $conn->real_escape_string($_REQUEST['firstName']);
// $last_name =$conn->real_escape_string($_REQUEST['lastName']);
// $passwordText = $conn->real_escape_string($_REQUEST['passwordText']); 

$sql = "INSERT INTO test1 (firstname, lastname, password)
VALUES ('$first_name', '$last_name ','$passwordText ')";

if ($conn->query($sql) === TRUE) {
  die("New record created successfully");
} else {
  die("Error: " . $sql . "<br>" . $conn->error);
}

$conn->close();
?>
<script>
  alert("allo")
</script>
</body>
</html>