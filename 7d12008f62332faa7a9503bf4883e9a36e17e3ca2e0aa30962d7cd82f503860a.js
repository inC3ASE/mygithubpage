// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("starwood.com-cancellation-de",function(e){return/Stornierung/.test(e.subject)||/storniert/.test(e.subject)},function(e){if(/Stornierung/.test(e.subject)||/storniert/.test(e.subject)){var t,o="de_DE",s={};return s.isCancelled=!0,s.guestName="Name des Gasts",s.confirmation="Best\xe4tigung:",s.contactUs="Kontakt",s.phone="Telefon:",s.yourSchedule=/Ihr Zeitplan|Ihre Reservierung|IHR AUFENTHALT/,s.checkin="Ankunft",s.checkout="Abreise",s.total="Gesch\xe4tzte Gesamtkosten*:",(t=int(e.epoch)<1420070400?loadHelper("starwood.com-confirmation.js"):loadHelper("starwood.com-2015-skeleton.js"))(e,o,s)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/963/964","SGc8692100"),new ReverseTemplate("starwood.com-cancellation-en",function(e){return/^We\u2019ve cancelled Sheraton Reservation/.test(e.subject)||/You\u2019re a-ok/.test(e.subject)||/Reservation Cancellation/.test(e.subject)||/Your reservation has been cancelled/.test(e.subject)||/WE\u2019RE SORRY TO HEAR YOU\u2019RE NOT COMING/.test(e.subject)},function(e){if(/^We\u2019ve cancelled Sheraton Reservation/.test(e.subject)||/Your reservation has been cancelled/.test(e.subject)||/Reservation Cancellation/.test(e.subject)||/You\u2019re a-ok at/.test(e.subject)||/WE\u2019RE SORRY TO HEAR YOU\u2019RE NOT COMING/.test(e.subject)){var t,o="en_US",s={};return s.isCancelled=!0,s.guestName="Guest Name",s.confirmation="Confirmation:",s.contactUs="Contact Us",s.phone="Phone:",s.yourSchedule=/Your Schedule|Your Reservation/,s.checkin="Check In",s.checkout="Check Out",s.total="Estimated Total*:",(t=int(e.epoch)<1420070400?loadHelper("starwood.com-confirmation.js"):loadHelper("starwood.com-2015-skeleton.js"))(e,o,s)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/963/965","SGd96873e7"),new ReverseTemplate("starwood.com-cancellation-zh",function(e){return/^\u60a8\u7684\u96c5\u4e50\u8f69\u9152\u5e97\u9884\u8ba2\u5df2\u6210\u529f\u53d6\u6d88/.test(e.subject)||/\u559c\u6765\u767b\u9884\u8ba2\u53d6\u6d88/.test(e.subject)||/\u542c\u8bf4\u60a8\u4e0d\u80fd\u524d\u6765\uff0c\u6211\u4eec\u611f\u5230\u975e\u5e38\u9057\u61be/.test(e.subject)||/\u53d6\u6d88\u4fe1\u606f\uff1a\u9884\u8ba2\u7f16\u53f7/.test(e.subject)||/\u827e\u7f8e\u9152\u5e97\u9884\u8ba2\u53d6\u6d88/.test(e.subject)||/\u656c\u8bf7\u653e\u5fc3\u3002 \u60a8\u7684\u9884\u8ba2\u5df2\u53d6\u6d88\uff0c\u53d6\u6d88\u7f16\u53f7\u4e3a/.test(e.subject)},function(e){if(/^\u60a8\u7684\u96c5\u4e50\u8f69\u9152\u5e97\u9884\u8ba2\u5df2\u6210\u529f\u53d6\u6d88/.test(e.subject)||/\u559c\u6765\u767b\u9884\u8ba2\u53d6\u6d88/.test(e.subject)||/\u542c\u8bf4\u60a8\u4e0d\u80fd\u524d\u6765\uff0c\u6211\u4eec\u611f\u5230\u975e\u5e38\u9057\u61be/.test(e.subject)||/\u53d6\u6d88\u4fe1\u606f\uff1a\u9884\u8ba2\u7f16\u53f7/.test(e.subject)||/\u827e\u7f8e\u9152\u5e97\u9884\u8ba2\u53d6\u6d88/.test(e.subject)||/\u656c\u8bf7\u653e\u5fc3\u3002 \u60a8\u7684\u9884\u8ba2\u5df2\u53d6\u6d88\uff0c\u53d6\u6d88\u7f16\u53f7\u4e3a/.test(e.subject)){var t,o="zh_Hans_CN",s={};return s.isCancelled=!0,s.guestName="\u5ba2\u4eba\u59d3\u540d",s.confirmation="\u786e\u8ba4\uff1a",s.contactUs="\u8054\u7cfb\u6211\u4eec",s.phone="\u7535\u8bdd\uff1a",s.yourSchedule=/\u60a8\u7684\u65e5\u7a0b\u5b89\u6392\uff1a/,s.yourSchedule_2=/\u60a8\u7684\u4f4f\u5bbf/,s.yourSchedule_3=/\u60a8\u7684\u9884\u8ba2/,s.checkin="\u767b\u8bb0\u5165\u4f4f",s.checkout="\u9000\u623f",s.total="\u9884\u8ba1\u603b\u989d*\uff1a",(t=int(e.epoch)<1420070400?loadHelper("starwood.com-confirmation.js"):loadHelper("starwood.com-2015-skeleton.js"))(e,o,s)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/963/966","SG571422d4"),new ReverseTemplate("starwood.com-confirmation-de",function(e){return/Reservierungsnummer/.test(e.subject)||/Reservierung/.test(e.subject)||/Buchungsnumme/.test(e.subject)},function(e){if(/Reservierungsnummer/.test(e.subject)||/Reservierung/.test(e.subject)||/Buchungsnumme/.test(e.subject)){var t,o="de_DE",s={};return s.guestName="Name des Gasts",s.confirmation="Best\xe4tigung:",s.contactUs="Kontakt",s.phone="Telefon:",s.yourSchedule=/Ihr Zeitplan|Ihre Reservierung|IHR AUFENTHALT/,s.checkin="Ankunft",s.checkout="Abreise",s.total="Gesch\xe4tzte Gesamtkosten*:",(t=int(e.epoch)<1420070400?loadHelper("starwood.com-confirmation.js"):loadHelper("starwood.com-2015-skeleton.js"))(e,o,s)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/963/967","SG77cedbf1"),new ReverseTemplate("starwood.com-confirmation-en",function(e){return/We look forward to seeing you\.$/.test(e.subject)||/Your reservation has been confirmed/.test(e.subject)||/Reservation.* Confirmation/.test(e.subject)||/You're all set to go at/.test(e.subject)||/^Your reservation .*? is all set\./i.test(e.subject)},function(e){if(/^Sheraton Reservation .*? We look forward to seeing you\.$/.test(e.subject)||/Your reservation has been confirmed/.test(e.subject)||/Reservation.* Confirmation/.test(e.subject)||/You're all set to go at/.test(e.subject)||/^Your reservation .*? is all set\./i.test(e.subject)){var t,o="en_US",s={};return s.guestName="Guest Name",s.confirmation="Confirmation:",s.contactUs="Contact Us",s.phone="Phone:",s.yourSchedule=/Your Schedule|Your Reservation|YOUR STAY/,s.checkin="Check In",s.checkout="Check Out",s.total="Estimated Total*:",(t=int(e.epoch)<1420070400?loadHelper("starwood.com-confirmation.js"):loadHelper("starwood.com-2015-skeleton.js"))(e,o,s)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/963/968","SG52e9bb07"),new ReverseTemplate("starwood.com-confirmation-zh",function(e){return/^\u60a8\u5df2\u6210\u529f\u9884\u8ba2\u5317\u4eac\u6d77\u6dc0\u96c5\u4e50\u8f69\u9152\u5e97!$/.test(e.subject)||/\u7684\u559c\u6765\u767b\u9884\u8ba2\u786e\u8ba4/.test(e.subject)||/\u65e0\u9650\u60ca\u559c\u7b49\u5f85\u7740\u60a8\u524d\u6765\u63a2\u7d22/.test(e.subject)||/\u70ed\u8bda\u671f\u5f85\u60a8\u7684\u5149\u4e34/.test(e.subject)||/\u9884\u8ba2\u786e\u8ba4\uff1a\u7f16\u53f7/.test(e.subject)||/\u656c\u8bf7\u653e\u5fc3\u3002 \u60a8\u7684\u9884\u8ba2\u5df2\u786e\u8ba4\uff0c\u786e\u8ba4\u7f16\u53f7\u4e3a/.test(e.subject)},function(e){if(/^\u60a8\u5df2\u6210\u529f\u9884\u8ba2\u5317\u4eac\u6d77\u6dc0\u96c5\u4e50\u8f69\u9152\u5e97!$/.test(e.subject)||/\u7684\u559c\u6765\u767b\u9884\u8ba2\u786e\u8ba4/.test(e.subject)||/\u65e0\u9650\u60ca\u559c\u7b49\u5f85\u7740\u60a8\u524d\u6765\u63a2\u7d22/.test(e.subject)||/\u70ed\u8bda\u671f\u5f85\u60a8\u7684\u5149\u4e34/.test(e.subject)||/\u9884\u8ba2\u786e\u8ba4\uff1a\u7f16\u53f7/.test(e.subject)||/\u656c\u8bf7\u653e\u5fc3\u3002 \u60a8\u7684\u9884\u8ba2\u5df2\u786e\u8ba4\uff0c\u786e\u8ba4\u7f16\u53f7\u4e3a/.test(e.subject)){var t,o="zh_Hans_CN",s={};return s.guestName="\u5ba2\u4eba\u59d3\u540d",s.confirmation="\u786e\u8ba4\uff1a",s.contactUs="\u8054\u7cfb\u6211\u4eec",s.phone="\u7535\u8bdd\uff1a",s.yourSchedule=/\u60a8\u7684\u65e5\u7a0b\u5b89\u6392\uff1a/,s.yourSchedule_2=/\u60a8\u7684\u4f4f\u5bbf/,s.yourSchedule_3=/\u60a8\u7684\u9884\u8ba2/,s.checkin="\u767b\u8bb0\u5165\u4f4f",s.checkout="\u9000\u623f",s.total="\u9884\u8ba1\u603b\u989d*\uff1a",(t=int(e.epoch)<1420070400?loadHelper("starwood.com-confirmation.js"):loadHelper("starwood.com-2015-skeleton.js"))(e,o,s)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/695/963/969","SG0f01f6b0")]);
