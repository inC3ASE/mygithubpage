// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("drivenow.com.au",function(e){return/Rental Confirmation/.test(e.subject)||/CANCELLATION/.test(e.subject)},function(e){var a="en_AU",t={};if(t.confirmSubject=/Rental Confirmation/,t.reservationId=/\(\#(.+)\)/,t.modifyUrl="click here to Modify or Cancel your booking",t.guestName="Name / Email",t.brand="Vehicle Details",t.date="Date/Time",t.phone="Phone Number",t.address="Address",t.price="Amount Payable",t.cancellationSubject=/CANCELLATION/,t.cancelReservationId=/Booking Cancellation \#(.+)/,t.cancelPrice="Total Estimate of Charges:",t.cancelpickupdate="Pickup Date & Time:",t.canceldropffdate="Dropoff Date & Time:",t.cancelGuestEmail="Email Address:",t.cancelCar="Vehicle Category:",!t.confirmSubject.test(e.subject)&&!t.cancellationSubject.test(e.subject))return CONTINUE;var c=loadHelper("drivenow.com.au.js");return c(e,a,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/101/102","SGce5512da")]);
