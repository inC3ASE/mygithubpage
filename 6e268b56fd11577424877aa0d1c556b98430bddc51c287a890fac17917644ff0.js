// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("melia.com-cancellation-es",function(e){return/^(Modificaci\xf3n o )?cancelaci\xf3n de la reserva/i.test(e.subject)},function(e){if(!/^(Modificaci\xf3n o )?cancelaci\xf3n de la reserva/i.test(e.subject))return CONTINUE;var a="es_ES",t={};t.name="Titular de la reserva:",t.total="Coste total:",t.checkIn="Fecha de entrada:",t.checkOut="Fecha de salida:",t.phone="Tel.",t.viewOnMelia_Com="ver hotel en melia.com",t.viewOnGoogleMaps="ver en Google Maps";var n=loadHelper("melia.com-cancellation-skeleton.js");return n(e,a,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/918/920","SG4a64f188"),new ReverseTemplate("melia.com-confirmation-es",function(e){return/^Confirmaci\xf3n de la reserva/.test(e.subject)},function(e){if(!/^Confirmaci\xf3n de la reserva/.test(e.subject))return CONTINUE;var a="es_ES",t={};t.total="Coste total",t.checkIn="Fecha de entrada:",t.checkOut="Fecha de salida:",t.phone="Tel.",t.modify="modificar tu reserva online",t.viewOnMelia_Com="ver hotel en melia.com",t.viewOnGoogleMaps="ver en Google Maps";var n=loadHelper("melia.com-confirmation-es-skeleton.js");return n(e,a,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/918/923","SG1da321a7"),new ReverseTemplate("tryp-change-en",function(e){return/^MODIFIED.*TRYP/i.test(e.subject)},function(e){if(/MODIFIED.*TRYP/i.test(e.subject)){var a="en_US",t={};t.reservationId="Record Locator:",t.name=/Card\s+holder:/,t.hotelInfo="Hotel",t.email="EMAIL",t.phone="TEL",t.price=/TOTAL\s+BOOKING\s+Rate\s+IN/,t.checkIn=/Check\s+In\s+Date/,t.checkOut=/Check\s+Out\s+Date/;var n=loadHelper("tryp-change-skeleton.js");return n(e,a,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/991/993","SGaa90d564"),new ReverseTemplate("tryp-change-es",function(e){return/^REENVIO DE MODIFICACION.*tryp/i.test(e.subject)},function(e){if(/^REENVIO DE MODIFICACION.*tryp/i.test(e.subject)){var a="es_ES",t={};t.reservationId="Record Locator:",t.name="Titular:",t.hotelInfo="Hotel",t.email="EMAIL",t.phone="TEL",t.price=/TOTAL\s+RESERVA\s+EN/,t.checkIn="Llegada",t.checkOut="Salida";var n=loadHelper("tryp-change-skeleton.js");return n(e,a,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/991/994","SG3a970599")]);
