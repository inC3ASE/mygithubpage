// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("avis.com-confirmation-nl",function(e){return/^Uw reservering bij Avis Autoverhuur/.test(e.subject)||/^Reserveringsbevestiging voor/.test(e.subject)},function(e){var r,s,t="nl_NL";return/^Uw reservering bij Avis Autoverhuur/.test(e.subject)?(r={},r.confirmSubject=/Uw reservering bij Avis Autoverhuur/,r.reservationId=/Uw reserveringsnummer is\n(.*)\./,r.guestName=/(?:Geachte|Goedendag) (.*),/,r.dates=/Huur van/,r.dropoffDate=/tot (.*)/,r.pickupLoc=/Verhuurstation:\s+(.*)/,r.dropoffLoc=/Inleverstation:\s+(.*)/,r.car=/Autogroep:\s+(.*)/,r.price=/Huurprijs:\s+(.*)/,r.cancellationSubject=/NO EMAIL YET/,(s=loadHelper("avischina.com-skeleton.js"))(e,t,r)):/^Reserveringsbevestiging voor/.test(e.subject)?(r=loadHelper("avis-europe.com-vocabulary-skeleton-nl.js")(),(s=loadHelper("avis-2016-skeleton.js"))(e,t,r)):void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/48/63","SG020d7944")]);
