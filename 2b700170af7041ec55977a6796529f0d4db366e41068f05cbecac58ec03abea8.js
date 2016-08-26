// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("expediamail.com-flight-itinerary-en",function(e){return/\(?Itin(?:erary)?(?:\s*)?#(?:\s*)?\d+\)?$/.test(e.subject)||/^Expedia\s+travel\s+confirmation/.test(e.subject)},function(e){if(/(?:Travell?er Information|Traveler\(s\))/i.test(e.plain)&&/Airline Rules (?:& Regulations|\+ restrictions)/i.test(e.plain)){var t,i="en_US",r={};return/Thanks!/.test(e.plain)?(r.date=/(Departure|Return)/,r.cabin=/(Cabin:)/,r.passengers=/Traveler\(s\)/,r.passengerEnd="Special requests",r.reservationId="Itinerary #",t=loadHelper("expediamail.com-flight-itinerary-skeleton-2.js")):(r.travellers=/Travell?er Information/,r.priceSummary="Price Summary",r.priceCurrency="All prices quoted in",r.totalPrice="Total:",r.reservationId="Itinerary #",r.cancelled=/This reservation has been fully cancell?ed/,r.noProgramName="No frequent flyer details provided",r.ticketNumber="Ticket #",r.totalTravelTime="Total travel time",r.seat="Seat",t=loadHelper("expediamail.com-flight-itinerary-skeleton.js")),t(e,i,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1055/1109/1125","SGbc43224e"),new ReverseTemplate("expediamail.com-hotel-cancellation-en",function(e){return/^Expedia Hotel Cancellation Confirmation/.test(e.subject)||/\(Itin(?:erary)?#\s+\d+\)$/},function(e){if(/^Expedia Hotel Cancellation Confirmation/.test(e.subject)||/View hotel/.test(e.plain)&&/CANCELLED/.test(e.plain)){var t,i="en_US",r={};return/^Expedia Hotel Cancellation Confirmation/.test(e.subject)?(r.reservationId="Expedia Itinerary number:",r.name="Reserved for",t=loadHelper("expediamail.com-hotel-cancellation-skeleton.js")):(r.reservationId="Itinerary #",r.reservedFor="Reserved for",r.totalPrice="Total",r.hotelDetails="View hotel details <",r.telephone="Tel:",r.checkin="Checking in",r.checkinTime="Check-in time starts",r.priceSummary="Price Summary",r.priceCurrency="All prices quoted in",r.cancelled=/CANCELLED/,t=loadHelper("expediamail.com-hotel-itinerary-skeleton.js")),t(e,i,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1055/1109/1132","SG6a201eaf"),new ReverseTemplate("expediamail.com-hotel-itinerary-en",function(e){return/^Expedia Itinerary #:/.test(e.subject)||/^Expedia travel confirmation/.test(e.subject)||/\(Itin(?:erary)?\s?#/.test(e.subject)},function(e){if(/View hotel/.test(e.plain)){var t,i={},r="en_US";return i.reservationId="Itinerary #",i.reservedFor="Reserved for",i.totalPrice="Total",/Thanks!/.test(e.plain)?(i.hotelDetails="Hotel overview",i.reservationDetails="Reservation dates",i.checkInTime="Check-in time",i.checkOutTime="Check-out time",i.hotelUrl="View hotel",t=loadHelper("expediamail.com-hotel-itinerary-skeleton-alternative.js")):(i.hotelDetails="View hotel details <",i.telephone="Tel:",i.checkin=/(?:Checking in|Check-in)/,i.checkinTime="Check-in time starts",i.priceSummary="Price Summary",i.priceCurrency="All prices quoted in",i.cancelled=/CANCELLED/,t=loadHelper("expediamail.com-hotel-itinerary-skeleton.js")),t(e,r,i)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1055/1109/1139","SG3115dc7f")]);
