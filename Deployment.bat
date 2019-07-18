@echo off
set arg1=%1
echo Bucket name is %arg1%
aws s3 cp .\build\ s3://%arg1% --recursive --profile=DEV