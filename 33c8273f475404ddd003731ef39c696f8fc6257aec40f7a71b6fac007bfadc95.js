// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("t-way_air-cancellation-ko",function(e){return/^\[\ud2f0\uc6e8\uc774\ud56d\uacf5\] \uace0\uac1d\ub2d8\uc758 \uc608\uc57d .+ \ucde8\uc18c \ub418\uc5c8\uc2b5\ub2c8\ub2e4/.test(e.subject)},function(e){if(/^\[\ud2f0\uc6e8\uc774\ud56d\uacf5\] \uace0\uac1d\ub2d8\uc758 \uc608\uc57d .+ \ucde8\uc18c \ub418\uc5c8\uc2b5\ub2c8\ub2e4/.test(e.subject)){var t="ko_KR",r={};r.reservationIdRegExp=/\uc608\uc57d\ubc88\ud638\s*(\w+)\s*\uc758/;var a=loadHelper("twayair.com-cancellation-skeleton.js");return a(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/611/613","SG1ce768ed"),new ReverseTemplate("t-way_air-confirmation-ko",function(e){return/^\[\ud2f0\uc6e8\uc774\ud56d\uacf5\]\uace0\uac1d\ub2d8(\uc758\ud56d\uacf5\uad8c\uc608\uc57d\uc815\ubcf4\uc785\ub2c8\ub2e4)?$/.test(e.subject)},function(e){if(/^\[\ud2f0\uc6e8\uc774\ud56d\uacf5\]\uace0\uac1d\ub2d8(\uc758\ud56d\uacf5\uad8c\uc608\uc57d\uc815\ubcf4\uc785\ub2c8\ub2e4)?$/.test(e.subject)){var t="ko_KR",r={};r.reservationId_prefix="\uc608\uc57d \ubc88\ud638",r.name="\uc2b9\uac1d \uc815\ubcf4",r.flightSummary="\uc5ec\uc815 \uc815\ubcf4",r.flightExit=/\uc6b4\uc784\s*\uc815\ubcf4/,r.priceSum=/\ud569\uacc4/,r.totalPrice_prefix=/\ud569\uacc4/,r.seatType=/\uc88c\uc11d \ub4f1\uae09 :\s(\w+)/;var a=loadHelper("twayair.com-confirmation-skeleton.js");return a(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/611/615","SGd238353e")]);
