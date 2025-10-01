<?php
// Path to upload directory
$uploadDir = __DIR__ . "/upload";

// Scan for .html files
$profiles = glob($uploadDir . "/*.html");

// Sort by newest first (optional)
usort($profiles, function($a, $b) {
    return filemtime($b) - filemtime($a);
});
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin - User Profiles</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: #f5f7fa;
            padding: 40px;
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }
        .profiles {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.1);
            padding: 20px;
        }
        .profiles ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .profiles li {
            margin: 10px 0;
            padding: 12px;
            background: #f9f9f9;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .profiles li a {
            text-decoration: none;
            color: #667eea;
            font-weight: 500;
        }
        .profiles li small {
            color: #888;
        }
    </style>
</head>
<body>
    <h1><i class="fa-solid fa-users"></i> Registered User Profiles</h1>
    <div class="profiles">
        <ul>
            <?php if (count($profiles) > 0): ?>
                <?php foreach ($profiles as $file): ?>
                    <?php 
                        $filename = basename($file); // e.g. john.html
                        $username = pathinfo($filename, PATHINFO_FILENAME);
                    ?>
                    <li>
                        <a href="upload/<?php echo $filename; ?>" target="_blank">
                            <i class="fa-solid fa-user"></i> <?php echo ucfirst($username); ?>
                        </a>
                        <small>Saved: <?php echo date("Y-m-d H:i", filemtime($file)); ?></small>
                    </li>
                <?php endforeach; ?>
            <?php else: ?>
                <li>No profiles registered yet.</li>
            <?php endif; ?>
        </ul>
    </div>
</body>
</html>
