// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("lastminute.com-car-confirmation-en_AU",function(e){return/^lastminute.com.au Booking Confirmation/.test(e.subject)},function(e){if(!/^lastminute.com.au Booking Confirmation/.test(e.subject))return CONTINUE;var t="en_AU",n={};n.total="Total due on arrival",n.reference="lastminute.com.au reference:",n.detail="Your details",n.name="Name",n.supplier="Supplier info",n.pickUp="Pick up:",n.dropOff="Drop off:";var o=loadHelper("lastminute.com-car-confirmation-en_AU-skeleton.js");return o(e,t,n)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1055/1182/1184","SGdb65cb31")]);
