// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("tap-e-ticket-alternative-en",function(e){return/[0-9]{2}[A-Z]{3}[0-9]{4}\s\w{3}\s\w{3}$/.test(e.subject)},function(e){if(/[0-9]{2}[A-Z]{3}[0-9]{4}\s\w{3}\s\w{3}$/.test(e.subject)&&/BOOKING REF/.test(e.plain)&&/FLIGHT TICKET\(S\)/.test(e.plain)){var t,n="en_US",r={};return r.name=/TICKET:.*FOR\s(.*?)\s(?:MR|\n)/,r.name_alt=/\s{5}(.*?)\sMR/,r.ticket=/TICKET:\s(.*?)\sFOR/,r.reservationId=/BOOKING REF:\s(\w+)/,r.flightSummary=/FLIGHT\s+($<airlineCode>\w+)\s($<flightNumber>\d+)\s\-\s($<airlineName>.*?)\s\s/,r.departure=/DEPARTURE:\s+($<airportAddress>.*?\))/,r.arrival=/ARRIVAL:\s+($<airportAddress>.*?\))/,(t=loadHelper("tap-amadeus-skeleton-alternative.js"))(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/616/621","SG0017ef60"),new ReverseTemplate("tap-payment-confirmation-de",function(e){return/^TAP - Best\xe4tigung f\xfcr die Kreditkartenzahlung/.test(e.subject)},function(e){if(/^TAP - Best\xe4tigung f\xfcr die Kreditkartenzahlung/.test(e.subject)){var t="de_DE",n={};n.reservationId="Buchungsreferenz:",n.passengersPrefix="Buchungsangaben",n.flightInfoPrefix="Fluginformationen",n.pricePrefix="Zahlung erfolgt:",n.priceSuffix=" in ";var r=loadHelper("tap-payment-confirmation-skeleton.js");return r(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/616/624","SGeeecf378"),new ReverseTemplate("tap-payment-confirmation-en",function(e){return/^TAP - Credit Card payment confirmation - /.test(e.subject)},function(e){if(/^TAP - Credit Card payment confirmation - /.test(e.subject)){var t="en_GB",n={};n.reservationId="Booking reference:",n.passengersPrefix="Booking details",n.flightInfoPrefix="Flight information",n.pricePrefix="Payment authorized:",n.priceSuffix=" in ";var r=loadHelper("tap-payment-confirmation-skeleton.js");return r(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/616/625","SG85aa9a50"),new ReverseTemplate("tap-payment-confirmation-pt",function(e){return/^TAP - Confirma\xe7\xe3o de pagamento c\/ cart\xe3o de cr\xe9dito/.test(e.subject)},function(e){if(/^TAP - Confirma\xe7\xe3o de pagamento c\/ cart\xe3o de cr\xe9dito/.test(e.subject)){var t="pt_PT",n={};n.reservationId="C\xf3digo de Reserva:",n.passengersPrefix="Detalhes da Viagem",n.flightInfoPrefix="Informa\xe7\xe3o sobre o (s) voo (s)",n.pricePrefix="Pagamento efetuado:",n.priceSuffix=" em ";var r=loadHelper("tap-payment-confirmation-skeleton.js");return r(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/616/626","SG1028da61")]);
