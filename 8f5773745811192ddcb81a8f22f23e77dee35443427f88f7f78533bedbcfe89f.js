// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("budget.de",function(e){return/^Reservierungsbest\xe4tigung/.test(e.subject)||/^Stornierungsbest\xe4tigung/.test(e.subject)||/Confirmation/.test(e.subject)||/Buchungsbest.tigung/.test(e.subject)||/Budget/.test(e.subject)},function(e){var t="de_DE",n={};if(n.confirm=/(^Reservierungsbest\xe4tigung|Buchungsbest.tigung|^Confirmation)/,n.reservationId=/Deine Reservierungsnummer lautet (.+)\./,n.guestName=/DEINE RESERVIERUNG IM DETAIL:\s\n.+\n\n(.+)/,n.car=/Fahrzeuggruppe\: (.+)/,n.totalPrice=/Preis\: (.+)/,n.pickUpLoc=/Anmietstation\:\s+(.+)/,n.dropOffLoc=/Abgabestation\:\s+(.+)/,n.pickUpTime=/Anmietzeitraum.*?, ($<pickupDateTime>.*?\s\d{2}\:\d{2})/,n.pickUpTimeAlt=/Miete von.*?, ($<pickupDateTime>.*?\s\d{2}\:\d{2})/,n.dropoffTime=/through.*?, ($<dropoffDateTime>.*?\s\d{2}\:\d{2})/,n.dropoffTimeAlt=/Miete bis.*?, ($<dropoffDateTime>.*?\s\d{2}\:\d{2})/,n.cancel=/(^Stornierungsbest\xe4tigung|^Cancel Confirmation|^Budget)/,n.cancellationId=/Deine Reservierung (.+) storniert wurde/,n.guestNameCancel=/Hallo (.*?),/,n.pickUpDateCancel=/Miete von \: (.+)/,n.dropOffDateCancel=/Miete bis\: (.+)/,n.pickUpLocCancel=/Anmietstation\: (.+)/,n.dropOffLocCancel=/Abgabestation\: (.+)/,!n.confirm.test(e.subject)&&!n.cancel.test(e.subject))return CONTINUE;var i=loadHelper("budget.com-plain-confirmation-skeleton-europe.js");return i(e,t,n)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/70/76","SG109bf684")]);
