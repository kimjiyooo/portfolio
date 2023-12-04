
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var da = new Date();
    var gmonth=(da.getMonth()+1);
    var gdate=(da.getDate());
    if(gmonth<10)gmonth='0'+gmonth;
    if(gdate<10)gdate='0'+gdate;

    var idate =da.getFullYear() +'-'+gmonth+'-'+gdate;
    //console.log(idate);

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prevYear,prev,next,nextYear',
        center: 'title',
        right:'today'
      },
      initialDate: idate,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: '10:00-22:00',
          start: '2023-09-01',
        },
        {
            title: '10:00-22:00',
            start: '2023-09-02',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-03',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-04',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-05',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-06',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-07',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-08',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-09',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-10',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-11',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-12',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-13',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-14',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-15',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-16',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-17',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-18',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-19',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-20',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-21',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-22',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-23',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-24',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-25',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-26',
          },
          {
            title: '10:00-20:00',
            start: '2023-09-27',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-28',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-29',
          },
          {
            title: '10:00-22:00',
            start: '2023-09-30',
          },
      ]
    });

    calendar.render();
  });