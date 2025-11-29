window.onload = function() {

    // Changing variables
    var pg = 12861; // Current page
    var chap = 1168; // Current chapter
    var date = new Date("11/29/2025 12:12 UTC"); // Current time/date

    var pb = document.getElementById("progbar");

    var minpg = 0;
    var maxpg = 25409;
    pb.value = pg;
    pb.max = maxpg;

    document.getElementById("minnum").innerHTML = minpg.toString();
    document.getElementById("curnum").innerHTML = pg.toString();
    document.getElementById("maxnum").innerHTML = maxpg.toString();

    var percent = 3 + ((88 - 5) * (pg / maxpg));
    document.getElementById("curnum").style.transform = `translate(${percent}%, -3.03488372093vw)`; // -43.5px

    var dp = 3
    percent = Math.round((pg / maxpg) * 100 * (10 ** dp)) / (10 ** dp);
    document.getElementById("percent").innerHTML = percent.toString().concat("%");

    date = date.toString();
    document.getElementById("datetxt").innerHTML = `Last Updated on ${date.substring(4, 21)}`;

    var arcs = [200, 400, 650, 1000, 1300, 1400, 1500, 1750, 2334];
    var start = 0;
    for (let i = 0; i < arcs.length; i++) {
        var end = arcs[i];
        var length = end - start;
        var curbar = document.getElementById(`bar${i + 1}`);
        curbar.max = length;

        if (chap > start && chap <= end)
        {
            curbar.value = chap - start;
        }
        else if (chap <= start)
        {
            curbar.value = 0;
        }
        else
        {
            curbar.value = curbar.max;
        }

        document.getElementById(`num${i + 1}`).innerHTML = `${start} - ${end}`;

        start = end;
    }
    
    document.getElementById("chaptxt").innerHTML = `Current Chapter: ${chap}/${arcs[arcs.length - 1]}`;
}

