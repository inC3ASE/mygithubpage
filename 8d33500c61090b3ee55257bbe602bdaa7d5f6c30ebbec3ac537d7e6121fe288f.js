// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("volotea-confirmation-fr",function(e){return/Confirmation de r\xe9servation/.test(e.subject)},function(e){if(!/Confirmation de r\xe9servation/.test(e.subject))return CONTINUE;var r="fr_FR",t={};t.reservationId_prefix=/de confirmation:/,t.leg_prefixes=["Aller:","Retour:"],t.passager=/Passager/;var n=loadHelper("volotea-confirmation-skeleton.js");return n(e,r,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/685/686","SGb58bf64f"),new ReverseTemplate("volotea-confirmation-it",function(e){return/Conferma della tua prenotazione/.test(e.subject)},function(e){if(!/Conferma della tua prenotazione/.test(e.subject))return CONTINUE;var r="it_IT",t={};t.reservationId_prefix=/di conferma:/,t.leg_prefixes=["Andata:","Ritorno:"],t.passager=/Passeggero/;var n=loadHelper("volotea-confirmation-skeleton.js");return n(e,r,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/685/687","SG33a9c6b8")]);
