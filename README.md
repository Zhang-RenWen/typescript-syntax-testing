## install

初始化專案
npm init

安裝全局 tsc -g
sudo npm install tsc -g

安裝專案模組
npm install --save-dev typescript tslint @types/node

初始化 tslint 模組
./node_modules/.bin/tslint --init

創建根目錄資料夾
mkdir src

新增根目錄
touch src/index.ts

## convert to js file

單檔 tsc 轉換
tsc {fileName}.ts

模組 tsc 單檔轉換
./node_modules/.bin/tsc

執行根目錄
node ./dist/index.js

## run js

執行單檔
node {fileName}.js

## tsconfig.js

compilerOptions

- watch 自動修改編譯ＪＳ，無需每都執行 tsc 指令
- removeComments 自動刪除轉譯後的註解
- target 指定轉譯的ＪＳ版本
- noImplicitAny 開啟後沒有標記類別會報錯，除非指定 any
- strictNullChecks 除非指定類型為空,否則不能賦空值
