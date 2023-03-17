SELECT
HISTORY_ID,
CAR_ID,
DATE_FORMAT(START_DATE, '%Y-%m-%d'),
DATE_FORMAT(END_DATE, '%Y-%m-%d'),
CASE
    WHEN TIMESTAMPDIFF(DAY, START_DATE, END_DATE) >= 29 THEN '장기 대여'
    WHEN TIMESTAMPDIFF(DAY, START_DATE, END_DATE) < 29 THEN '단기 대여'
END AS RENT_TYPE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY 
WHERE DATE_FORMAT(START_DATE, '%Y-%m') = '2022-09'
ORDER BY HISTORY_ID DESC