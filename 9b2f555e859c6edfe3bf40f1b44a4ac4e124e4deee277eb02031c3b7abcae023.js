// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("rental.timescar.jp-zh",function(e){return/Reservation Completed \(TimesCar Rental\)/.test(e.subject)||/Reservation Cancelled \(Times Car Rental\)/.test(e.subject)},function(e){var t="zh_Hans_CN",s={};if(s.confirmSubject=/Reservation Completed \(TimesCar Rental\)/,s.reservationId=/\u60a8\u7684\u9810\u7d04\u865f\u78bc: (.+)/,s.guestName=/\u99d5\u99db\u8005:(.+)/,s.pickupTime=/\u51fa\u767c\u65e5\u671f\u53ca\u6642\u9593\s+:(.+)/,s.pickupAddress=/\u51fa\u767c\u5e97\u92ea\s+:(.+)/,s.dropoffTime=/\u8fd4\u56de\u65e5\u671f\u53ca\u6642\u9593\s+:(.+)/,s.dropoffAddress=/\u8fd4\u56de\u5e97\u92ea\s+:(.+)/,s.car=/\u8eca\u7a2e\:(.+)/,s.price=/\u7e3d\u984d\(\u542b\u7a05\)\s+\:(.+)/,s.modifyUrl=/URL:\s+(.+)/,s.cancellationSubject=/Reservation Cancelled \(Times Car Rental\)/,s.cancellationReservationId=/\u9810\u7d04\u865f\u78bc: (.+)/,s.cancellationGuestName=/\u89aa\u611b\u7684 (.+)/,!s.confirmSubject.test(e.subject)&&!s.cancellationSubject.test(e.subject))return CONTINUE;var a=loadHelper("timescar-skeleton-zh.js");return a(e,t,s)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/232/234","SG9ebd185e")]);
