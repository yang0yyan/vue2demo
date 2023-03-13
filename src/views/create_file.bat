@echo off

:start

set str2=123
echo input '123' to exit
set /p ifo=

if %ifo% equ %str2% goto end


set aa=%~dp0


%~d0

cd %aa%

md %ifo%

cd %aa%/%ifo%

md js

md css


echo ^<template^>>%ifo%.vue
echo   ^<div id="%ifo%"^>^</div^>>>%ifo%.vue
echo ^</template^>>>%ifo%.vue
echo.>>%ifo%.vue
echo ^<script src="./js/%ifo%.js"^>^</script^>>>%ifo%.vue
echo ^<style lang="less" scoped^>>>%ifo%.vue
echo @import "./css/%ifo%.css";>>%ifo%.vue
echo ^</style^>>>%ifo%.vue

echo #%ifo% {>.\css\%ifo%.less
echo }>>.\css\%ifo%.less

echo #%ifo% {>.\css\%ifo%.css
echo }>>.\css\%ifo%.css

echo export default {>.\js\%ifo%.js
echo   name: "%ifo%",>>.\js\%ifo%.js
echo   data() {>>.\js\%ifo%.js
echo     return {};>>.\js\%ifo%.js
echo   },>>.\js\%ifo%.js
echo   mounted() {},>>.\js\%ifo%.js
echo   created() {},>>.\js\%ifo%.js
echo   methods: {>>.\js\%ifo%.js
echo     setData() {},>>.\js\%ifo%.js
echo   },>>.\js\%ifo%.js
echo };>>.\js\%ifo%.js

rem echo ��ǰ�̷���%~d0
rem echo ��ǰ�̷���·����%~dp0
rem echo ��ǰ������ȫ·����%~f0
rem echo ��ǰ�̷���·���Ķ��ļ�����ʽ��%~sdp0
rem echo ��ǰCMDĬ��Ŀ¼��%cd%

goto start

:end
pause