let x;
let d = new Date();   // TYPE is Object{}

// Date Methods

x = d.toString();        // convert to string
x = d.getTime();         // TYPE is Number
x = d.valueOf();         // TYPE is Number
x = d.getFullYear();     // TYPE is Number
x = d.getMonth();       // TYPE is Number
x = d.getMonth() + 1;   // TYPE is Number
x = d.getDate();        // TYPE is Number
x = d.getDay();         // TYPE is Number   will give day of the week if Monday it give 1, tuesday 2.

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`   // TYPE is String


// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);                 // TYPE is String
x = Intl.DateTimeFormat('en-IN').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
x = Intl.DateTimeFormat('default', { month: 'short' }).format(d);
x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
  });

console.log("Date Methods testing:--", x, typeof(x))