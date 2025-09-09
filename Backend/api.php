<?php
include 'db.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $table = $input['table'];
            if ($table == "user") {
                $id = $_GET['id'];
                $result = $conn->query("SELECT * FROM user WHERE id=$id");
                $data = $result->fetch_assoc();
                echo json_encode($data);
            }
            if ($table == "contact-list") {
                $result = $conn->query("SELECT * FROM contact WHERE *");
                $data = $result->fetch_assoc();
                echo json_encode($data);
            }
        }
        break;

    // USERS
    case 'POST':
        $table = $input['table'];
        if ($table == "user") {
            $name = $input['name'];
            $email = $input['email'];
            $conn->query("INSERT INTO user (name, email) VALUES ('$name', '$email')");
            echo json_encode(["message" => "User added successfully"]);
            break;
        }
        if ($table == "contact") {
            $name = $input['name'];
            $email = $input['email'];
            $email = $input['phone'];
            $conn->query("INSERT INTO contact (name, email, phone) VALUES ('$name', '$email', '$phone)");
            echo json_encode(["message" => "Contact added successfully"]);
            break;
        }


    case 'PUT':
        $id = $_GET['id'];
        $table = $input['table'];
        if ($table == "user") {
            $name = $input['name'];
            $email = $input['email'];
            $conn->query("UPDATE user SET name='$name',
                        email='$email', age=$age WHERE id=$id");
            echo json_encode(["message" => "User updated successfully"]);
        }
        if ($table == "contact") {
            $name = $input['name'];
            $email = $input['email'];
            $email = $input['phone'];
            $conn->query("UPDATE contact (name, email, phone) SET name='$name', email='$email', phone='$phone' WHERE id='$id'");
            echo json_encode(["message" => "Contact updated successfully"]);
        }
        break;

    case 'DELETE':
        $id = $_GET['id'];
        $table = $input['table'];
        if ($table == "user") {
            $conn->query("DELETE FROM user WHERE id=$id");
            echo json_encode(["message" => "User deleted successfully"]);
        }
        if ($table == "contact") {
            $conn->query("DELETE FROM contact WHERE id=$id");
            echo json_encode(["message" => "Contact deleted successfully"]);
        }
        break;

    default:
        echo json_encode(["message" => "Invalid request method"]);
        break;
}

$conn->close();
?>