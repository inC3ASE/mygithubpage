// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("spainticketbureau-confirmation-skeleton",function(e){return/^SpainTicketBureau\sConfirmaci.n\sde\sreserva/.test(e.subject)},function(e){if(/^SpainTicketBureau\sConfirmaci.n\sde\sreserva/.test(e.subject)){var t,i="es_ES",n={};return n.reservationDetails="Informaci\xf3n del pedido",n.totalPrice=/Precio Total:\s($<price>.*?)\s($<currency>\w+)\n/,n.ticketDetails="Datos del Ticket",n.ticketNumber=/N\xfamero de pedido: #(\d+)/,n.eventName=/Nombre\:\s(.*)/,n.eventStart="Fecha:",n.eventVenue=/Recinto:(.*)\n/,n.custumerDetails="Datos del Cliente",n.guestName=/Nombre\:\s(.*)\n/,(t=loadHelper("spainticketbureau-confirmation-skeleton.js"))(e,i,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1380/1447/1448","SG763c685a")]);
