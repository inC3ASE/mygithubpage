// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("aa.com-itinerary-en",function(e){return/\d{2}\/\d{2}\/\d{2} Itinerary$/.test(e.subject)||/Itinerary Document/.test(e.subject)},function(e){if(/^AA\.com Itinerary Summary On Hold/.test(e.subject))return STOP;if(/\d{2}\/\d{2}\/\d{2} Itinerary$/.test(e.subject)||/Itinerary Document/.test(e.subject)){var r,t="en_US",a={};return/Date of Issue:/.test(e.plain)?(a.date="Date:",a.flight="Flight :",a.departure="Departure:",a.arrival="Arrival:",a.name="Name:",a.reservationId="Record Locator:",r=loadHelper("aa.com-itinerary-alternative-skeleton.js")):(a.travelerInformation="Traveler Information",a.yourItinerary="Your Itinerary",a.recordLocator="Record Locator",r=loadHelper("aa.com-itinerary-skeleton.js")),r(e,t,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/249/260","SGa61f1988"),new ReverseTemplate("aa.com-itinerary-es",function(e){return/^Resumen del itinerario puesto en espera en aa.com/.test(e.subject)},function(e){return/^Resumen del itinerario puesto en espera en aa.com/.test(e.subject)?STOP:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/249/261","SG8fdf4f52")]);
