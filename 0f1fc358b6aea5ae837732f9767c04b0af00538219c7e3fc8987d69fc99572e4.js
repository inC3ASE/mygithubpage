// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("lafourchette.com-cancellation-fr",function(e){return/^Annulation de votre.?r\xe9servation/.test(e.subject)||/a.?annul\xe9.?sa.?r\xe9servation.?au restaurant/.test(e.subject)},function(e){if(/^Annulation de votre.?r\xe9servation/.test(e.subject)||/a.?annul\xe9.?sa.?r\xe9servation.?au restaurant/.test(e.subject)){var r={};r.emailType="votrer\xe9servation",r.hello="Bonjour",r.underNameSuffix="a annul\xe9 sa r\xe9servation au",r.restaurantInformationBlockLabel="Restaurant :",r.restaurantUrlPrefix="Plus d'infos";var t="fr_FR",a=loadHelper("lafourchette.com-cancellation-skeleton.js");return a(e,t,r)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1260/1292/1295","SG017743ea"),new ReverseTemplate("lafourchette.com-confirmation-fr",function(e){return/^Confirmation de votre.?r\xe9servation/.test(e.subject)||/^J'ai.?r\xe9serv\xe9.?un/.test(e.subject)},function(e){if(/^Confirmation de votre.?r\xe9servation/.test(e.subject)||/^J'ai.?r\xe9serv\xe9.?un/.test(e.subject)){var r={};r.emailType="Confirmation",r.hello="Bonjour",r.underNameSuffix="vous convie au restaurant",r.reservationIdPrefix="Num\xe9ro de r\xe9servation :",r.restaurantInformationBlockLabel="Restaurant :",r.restaurantUrlPrefix="Plus d'infos",r.reservationCancelLabel="Annuler ma r\xe9servation",r.dontUseMicrodataStartTime=!0;var t="fr_FR",a=loadHelper("lafourchette.com-confirmation-skeleton.js");return a(e,t,r)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1260/1292/1300","SG4d861276")]);
