// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("budget.com-au",function(e){return/(Booking Confirmation|Budget Reservation Confirmation)/.test(e.subject)||/Your reservation number .+ has been/.test(e.subject)},function(e){var n="en_AU",t={};if(t.confirm=/(Booking Confirmation|Budget Reservation Confirmation)/,t.reservationId=/Reservation Number.*\n(.+)/,t.guestName=/Driver\:\s(.+)\-/,t.bookingDetails=/BOOKING DETAILS/,t.car="VEHICLE",t.street=/Location\:/,t.city=/Suburb\:/,t.pickupDetails=/Pickup/,t.dropoffDetails=/Return/,t.cancelled=/CANCELLED/,t.totalPrice="Estimated Total",t.modifyUrl="You can change or cancel the booking if you need to via:",t.cancel=/Your reservation number .+ has been/,t.cancellationId=/YOUR RESERVATION NUMBER (.+) HAS BEEN CANCELLED/,t.guestNameCancel=/DRIVER\'S DETAILS\n.+\n(.+)/,t.guestEmailCancel=/DRIVER\'S DETAILS\n.+\n.+\n(.+)/,t.pickUp=/PICKUP\n.+\n(.+\n.+\n.+\n.+)/,t.dropOff=/RETURN\n.+\n(.+\n.+\n.+\n.+)/,t.carCancel=/VEHICLE & OPTIONS\n.+\n(.+)/,t.priceCancel=/Estimated Total\:\n(.+)/,!t.confirm.test(e.subject)&&!t.cancel.test(e.subject))return CONTINUE;var a=loadHelper("budget.com-au-skeleton.js");return a(e,n,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/70/73","SG65f90bf8")]);
