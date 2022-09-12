## install

sudo npm install tsc -g

## convert to js file

tsc {fileName}.ts

## run js

node {fileName}.js

## tsconfig.js

compilerOptions

- watch 自動修改編譯ＪＳ，無需每都執行 tsc 指令
- removeComments 自動刪除轉譯後的註解
- target 指定轉譯的ＪＳ版本
- noImplicitAny 開啟後沒有標記類別會報錯，除非指定 any
- strictNullChecks 除非指定類型為空,否則不能賦空值
