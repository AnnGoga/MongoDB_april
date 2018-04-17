Для развертки:  
В файле package.json для старта прописать строчку, потому что heroku не дружит с nodemon
`{    
  "scripts": {    
    "start": "node ./src/index.js"    
},`    
Сборка на heroku проходит успешно, но запуск приложения отправляет смотреть логи.  
Убрать файлы скриншотов, yarn.lock, package-lock.json.
