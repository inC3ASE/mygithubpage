// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("singaporeair-cancellation-en",function(e){return/^Cancellation and refund of your commercial booking/.test(e.subject)},function(e){if(/^Cancellation and refund of your commercial booking/.test(e.subject)){var n=loadHelper("singaporeair-schemaorg-parser.js"),o=n(e);return ASSERT(o),o}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/587/588","SGf9a829fe"),new ReverseTemplate("singaporeair-modification-en",function(e){return/booking modification/.test(e.subject)},function(e){if(/booking modification/.test(e.subject)){var n=loadHelper("singaporeair-schemaorg-parser.js"),o=n(e);return ASSERT(o),o}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/248/587/590","SG6228d59e")]);
