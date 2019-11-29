# start-search

nginx setting:

    worker_processes  1;

    events {
        worker_connections  1024;
    }

    http {
        include       mime.types;
        default_type  application/octet-stream;

        sendfile        on;

        keepalive_timeout  65;

        server {
            listen       80;
            server_name  localhost;

            location / {
                proxy_pass http://localhost:8001;
            }

            location /HPImageArchive.aspx {
                proxy_pass https://cn.bing.com;
            }
            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   html;
            }
        }
    }

sql setting:

    SET NAMES utf8mb4;
    SET FOREIGN_KEY_CHECKS = 0;

    -- ----------------------------
    -- Table structure for user
    -- ----------------------------
    DROP TABLE IF EXISTS `user`;
    CREATE TABLE `user`  (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
      `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
      PRIMARY KEY (`id`, `username`) USING BTREE
    ) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

    SET FOREIGN_KEY_CHECKS = 1;
    
    -- ----------------------------
    -- Table structure for mesg
    -- ----------------------------
    DROP TABLE IF EXISTS `mesg`;
    CREATE TABLE `mesg`  (
      `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
      `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
      `createdate` datetime(0) NULL DEFAULT NULL,
      `message` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
      PRIMARY KEY (`id`) USING BTREE
    ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

    SET FOREIGN_KEY_CHECKS = 1;
