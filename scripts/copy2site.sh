#!/bin/sh

echo "Server name: $SERVER_NAME"
ssh root@${SERVER_NAME} rm -r /var/www/webface_test
ssh root@${SERVER_NAME} mkdir -p /var/www/webface_test
