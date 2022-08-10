"use strict";

// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

function formatDuration(seconds) {
    if (seconds === 0) {
        return "now";
    } else {
        let result = "";
        let wordsArr = [" year", " day", " hour", " minute", " second"];

        let sec = seconds % 60;
        let temp = parseInt(seconds / 60);
        let min = temp % 60;
        temp = parseInt(temp / 60);
        let h = temp % 24;
        temp = parseInt(temp / 24);
        let d = temp % 365;
        temp = parseInt(temp / 365);
        let y = temp % 365;

        let timeArr = [y, d, h, min, sec];
        console.log(timeArr);

        for (let i = 0; i < timeArr.length; i++) {
            if (timeArr[i] !== 0) {
                if (timeArr[i] % 10 === 1 && timeArr[i] < 11) {
                    timeArr[i] += wordsArr[i];
                } else {
                    timeArr[i] += wordsArr[i] + "s";
                }
            }
        }

        timeArr = timeArr.filter((el) => {
            return el !== 0;
        });

        for (let i = 0; i < timeArr.length; i++) {
            if (timeArr[i] !== 0) {
                if (i < timeArr.length - 2) {
                    result += timeArr[i] + ", ";
                } else if (i === timeArr.length - 2) {
                    result += timeArr[i] + " and ";
                } else {
                    result += timeArr[i];
                }
            }
        }

        return result;
    }
}

console.log(formatDuration(15731080));