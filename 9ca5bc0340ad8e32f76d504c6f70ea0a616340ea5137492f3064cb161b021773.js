// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("opodo.com-hotel-cancellation-de",function(e){return/^Ihre Reservierung/.test(e.subject)},function(e){if(/^Ihre Reservierung/.test(e.subject)){var r="de_DE",n={};n.guestNamePrefix="Sehr geehrte(r)",n.cancellationMessage=/Ihre Reservierung wurde storniert./,n.hotelNamePrefix="Name der Unterkunft",n.reservationIdPrefix="Reservierungsnummer",n.guestEmailAddressPrefix="Ihre E-Mail-Adresse",n.hotelAddressPrefix="Adresse",n.hotelTelephonePrefix="Telefon",n.checkInDatePrefix="Anreise",n.checkOutDatePrefix="Abreise";var t=loadHelper("opodo.com-hotel-cancellation-skeleton.js");return t(e,r,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1055/1198/1204","SG76c83802"),new ReverseTemplate("opodo.com-hotel-confirmation-de",function(e){return/^Ihre Reservierung/.test(e.subject)},function(e){if(/^Ihre Reservierung/.test(e.subject)){var r="de_DE",n={};n.confirmationMessage="Buchungsbest\xe4tigung",n.namePrefix="Sehr geehrte(r)",n.hotelNamePrefix="Hotel",n.bookingNumberPrefix="Reservierungsnummer",n.guestEmailAddressPrefix="Ihre E-Mail-Adresse",n.checkInTimePrefix="Anreise",n.checkOutTimePrefix="Abreise",n.pricePrefix="Gesamtpreis",n.hotelAddressPrefix="Adresse",n.hotelTelephonePrefix="Telefon",n.reservationUrlPrefix="M\xf6chten Sie Ihre Buchung einsehen, stornieren oder \xe4ndern?",n.guestNamePrefix="Name des Gastes",n.cancellationUrlPrefix="Ihre Buchung stornieren";var t=loadHelper("opodo.com-hotel-confirmation-skeleton.js");return t(e,r,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1055/1198/1207","SGc0e9a871")]);
