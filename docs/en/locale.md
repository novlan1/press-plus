# globalization

`Press Plus` uses Chinese as the default language and supports multi-language switching. Please follow the tutorial below to perform international settings.

## Instructions

### Multi-language switching

Use the `locale.use` method to switch the currently used language. The following takes English as an example:


```ts
import locale from 'press-plus/locale';
//Introduce English language pack
import enUS from 'press-plus/locale/lang/en-US';

locale.use(enUS);
```


### Override language pack


Modification and expansion of copywriting can be achieved through the `locale.add` method. Examples are as follows:


```ts
import locale from 'press-plus/locale';

const messages = {
   'zh-CN': {
     picker: {
       confirm: 'Close', // Change 'Confirm' to 'Close'
     },
   },
};

locale.add(messages);
```

### Language pack


Currently supported languages:


| Language                        | File name    |
| ------------------------------- | ------------ |
| Simplified Chinese              | zh-CN        |
| Traditional Chinese (Hong Kong) | zh-HK        |
| Traditional Chinese (Taiwan)    | zh-TW        |
| English                         | en-US        |
| German                          | de-DE        |
| German (formal)                 | de-DE-formal |
| Turkish                         | tr-TR        |
| Spanish                         | es-ES        |
| Portuguese (Portugal)           | pt-PT        |
| Portuguese (Brazil)             | pt-BR        |
| Japanese                        | ja-JP        |
| Romanian                        | ro-RO        |
| Norwegian                       | nb-NO        |
| Thai                            | th-TH        |
| French                          | fr-FR        |
| Vietnamese                      | vi-VN        |

> View all language pack source files [here](https://github.com/novlan1/press-plus/tree/release/src/packages/locale/lang).