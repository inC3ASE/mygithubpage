// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("agoda.com-cancellation-ja",function(e){return/^\u4e88\u7d04.+\u30ad\u30e3\u30f3\u30bb\u30eb\u306e\u304a\u77e5\u3089\u305b/.test(e.subject)},function(e){if(!/^\u4e88\u7d04.+\u30ad\u30e3\u30f3\u30bb\u30eb\u306e\u304a\u77e5\u3089\u305b/.test(e.subject))return CONTINUE;var t="en_US",a={firstName:"\u540d",lastName:"\u59d3",reservationId:"\u4e88\u7d04ID",hotelName:"\u30db\u30c6\u30eb",checkInDate:"\u30c1\u30a7\u30c3\u30af\u30a4\u30f3\u65e5",checkOutDate:"\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u65e5",originalBookingDetails:"\u5bfe\u8c61\u4e88\u7d04\u8a73\u7d30",cancellationDetails:"\u30ad\u30e3\u30f3\u30bb\u30eb\u306e\u8a73\u7d30",lastNameFirst:!0,colonType:"\uff1a"};return loadHelper("agoda.com-cancellation-skeleton.js")(e,t,a)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/706/710","SG25e8531b")]);
