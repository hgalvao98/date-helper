# What is this?

Formats your date for you!

`npm i @hgalvao/date-helper --save`

Then...

```
import DateHelper from '@hgalvao/date-helper';

<DateHelper date={"1995,12,2"} format="DDMMYYYY" divider='-' yearsDigit='short' />
```

Will return: 2-11-95

DateHelper can have multiple formats supported:

- _DDMMYYYY_
- _MMDDYYYY_
- _MMYYYY_
- _DDMM_
- _MMDD_
- _MM_
- _DD_
- _YYYY_

Dates need to follow the following formats to be supported:

- _"December 17, 1995"_
- _"1995-12-17"_
- _1995,11,17_
- _1995,11,17,3,24,0_

The yearsDigit is set default to 'long' and will return the years with 4 digits. However, it accepts `yearsDigit='short'` to return the years with 2 digits only
