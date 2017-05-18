function date_time()
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        
        var clock = document.getElementById("clock");
        var dateFr = document.getElementById("date-fr");
        
        clock.innerHTML = '<span id="clock-data">' + h + ':' + m + ':' + s + '</span>';
        dateFr.innerHTML = '<span id="date-day">' + days[day] + ' ' + d + '</span><br><br><span id="date-mmyy">' + months[month] + ' ' + year + '</span>';    

        setTimeout('date_time();','1000');
        return true;
}

(function() {
date_time();
})();
