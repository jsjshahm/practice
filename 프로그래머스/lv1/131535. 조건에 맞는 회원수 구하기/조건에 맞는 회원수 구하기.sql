-- 코드를 입력하세요
SELECT COUNT(CASE WHEN JOINED LIKE '2021%' AND AGE >= 20 AND AGE <= 29 THEN 1 END) AS USERS
FROM USER_INFO
