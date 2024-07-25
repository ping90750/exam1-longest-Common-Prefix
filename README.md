#start 

npm install and npm run dev

host http://localhost:300 

path : /api/v1/longestCommonPrefix

curl --location 'http://localhost:3000/api/v1/longestCommonPrefix' \
--header 'Content-Type: application/json' \
--data '{
  "array":["dog", "racecar", "car"]
}'
