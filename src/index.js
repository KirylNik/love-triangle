/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {

    let triangleCount = [];

    for (let i = 1; i < preferences.length; i++) {
        let a = preferences[i-1];
        let b = preferences[a-1];
        let c = preferences[b-1]
        if (c == i) {
            if (a != b && a != i) {
                let triangleTemp = [];
                triangleTemp.push(a);
                triangleTemp.push(b);
                triangleTemp.push(c);
                triangleTemp.sort(compareNumeric);
                /* Sort array  */
                function compareNumeric(a, b) {
                    return a - b;
                }

                triangleCount.push(triangleTemp);
            }
        } else {
            continue;
        }
    }
    /* Array to string */
    for (let i = 0; i < triangleCount.length; i++) {
        let triangleTempString = '' + triangleCount[i];
        triangleCount[i] = triangleTempString;
    };
    /* String compare*/
    for (let i = 0; i < triangleCount.length; i++) {
        for (let y = i+1; y < triangleCount.length; y++) {

            if (triangleCount[i] == triangleCount[y]) {
                triangleCount.splice([y], 1);
                y--;
            }
        }

    };
    return triangleCount.length;
};
