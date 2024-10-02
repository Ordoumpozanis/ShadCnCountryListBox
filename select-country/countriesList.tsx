import { ReactElement } from "react";
import * as Flags from "./flagComponents";

export type CountryEntry = {
  name: string;
  code: string;
  flag: ReactElement;
};

export const allCountries: CountryEntry[] = [
{
  name: "Andorra",
  code: "ca-AD",
  flag: <Flags.Ca-ADFlag />
},
{
  name: "United Arab Emirates",
  code: "ar-AE",
  flag: <Flags.Ar-AEFlag />
},
{
  name: "Afghanistan",
  code: "fa-AF",
  flag: <Flags.Fa-AFFlag />
},
{
  name: "Antigua and Barbuda",
  code: "en-AG",
  flag: <Flags.En-AGFlag />
},
{
  name: "Anguilla",
  code: "en-AI",
  flag: <Flags.En-AIFlag />
},
{
  name: "Albania",
  code: "sq-AL",
  flag: <Flags.Sq-ALFlag />
},
{
  name: "Armenia",
  code: "hy-AM",
  flag: <Flags.Hy-AMFlag />
},
{
  name: "Angola",
  code: "pt-AO",
  flag: <Flags.Pt-AOFlag />
},
{
  name: "Argentina",
  code: "es-AR",
  flag: <Flags.Es-ARFlag />
},
{
  name: "American Samoa",
  code: "en-AS",
  flag: <Flags.En-ASFlag />
},
{
  name: "Austria",
  code: "de-AT",
  flag: <Flags.De-ATFlag />
},
{
  name: "Australia",
  code: "en-AU",
  flag: <Flags.En-AUFlag />
},
{
  name: "Aruba",
  code: "nl-AW",
  flag: <Flags.Nl-AWFlag />
},
{
  name: "Azerbaijan",
  code: "az-AZ",
  flag: <Flags.Az-AZFlag />
},
{
  name: "Bosnia and Herzegovina",
  code: "bs-BA",
  flag: <Flags.Bs-BAFlag />
},
{
  name: "Barbados",
  code: "en-BB",
  flag: <Flags.En-BBFlag />
},
{
  name: "Bangladesh",
  code: "bn-BD",
  flag: <Flags.Bn-BDFlag />
},
{
  name: "Belgium",
  code: "nl-BE",
  flag: <Flags.Nl-BEFlag />
},
{
  name: "Burkina Faso",
  code: "fr-BF",
  flag: <Flags.Fr-BFFlag />
},
{
  name: "Bulgaria",
  code: "bg-BG",
  flag: <Flags.Bg-BGFlag />
},
{
  name: "Bahrain",
  code: "ar-BH",
  flag: <Flags.Ar-BHFlag />
},
{
  name: "Burundi",
  code: "fr-BI",
  flag: <Flags.Fr-BIFlag />
},
{
  name: "Benin",
  code: "fr-BJ",
  flag: <Flags.Fr-BJFlag />
},
{
  name: "Bermuda",
  code: "en-BM",
  flag: <Flags.En-BMFlag />
},
{
  name: "Bolivia",
  code: "es-BO",
  flag: <Flags.Es-BOFlag />
},
{
  name: "Brazil",
  code: "pt-BR",
  flag: <Flags.Pt-BRFlag />
},
{
  name: "Bahamas",
  code: "en-BS",
  flag: <Flags.En-BSFlag />
},
{
  name: "Bhutan",
  code: "dz-BT",
  flag: <Flags.Dz-BTFlag />
},
{
  name: "Botswana",
  code: "en-BW",
  flag: <Flags.En-BWFlag />
},
{
  name: "Belarus",
  code: "be-BY",
  flag: <Flags.Be-BYFlag />
},
{
  name: "Belize",
  code: "es-BZ",
  flag: <Flags.Es-BZFlag />
},
{
  name: "Canada",
  code: "en-CA",
  flag: <Flags.En-CAFlag />
},
{
  name: "Democratic Republic of the Congo",
  code: "fr-CD",
  flag: <Flags.Fr-CDFlag />
},
{
  name: "Central African Republic",
  code: "fr-CF",
  flag: <Flags.Fr-CFFlag />
},
{
  name: "Republic of the Congo",
  code: "fr-CG",
  flag: <Flags.Fr-CGFlag />
},
{
  name: "Switzerland",
  code: "de-CH",
  flag: <Flags.De-CHFlag />
},
{
  name: "Ivory Coast",
  code: "fr-CI",
  flag: <Flags.Fr-CIFlag />
},
{
  name: "Cook Islands",
  code: "en-CK",
  flag: <Flags.En-CKFlag />
},
{
  name: "Chile",
  code: "es-CL",
  flag: <Flags.Es-CLFlag />
},
{
  name: "Cameroon",
  code: "fr-CM",
  flag: <Flags.Fr-CMFlag />
},
{
  name: "China",
  code: "zh-CN",
  flag: <Flags.Zh-CNFlag />
},
{
  name: "Colombia",
  code: "es-CO",
  flag: <Flags.Es-COFlag />
},
{
  name: "Costa Rica",
  code: "es-CR",
  flag: <Flags.Es-CRFlag />
},
{
  name: "Cuba",
  code: "es-CU",
  flag: <Flags.Es-CUFlag />
},
{
  name: "Cabo Verde",
  code: "pt-CV",
  flag: <Flags.Pt-CVFlag />
},
{
  name: "Curaçao",
  code: "nl-CW",
  flag: <Flags.Nl-CWFlag />
},
{
  name: "Cyprus",
  code: "el-CY",
  flag: <Flags.El-CYFlag />
},
{
  name: "Czech Republic",
  code: "cs-CZ",
  flag: <Flags.Cs-CZFlag />
},
{
  name: "Germany",
  code: "de-DE",
  flag: <Flags.De-DEFlag />
},
{
  name: "Djibouti",
  code: "fr-DJ",
  flag: <Flags.Fr-DJFlag />
},
{
  name: "Denmark",
  code: "da-DK",
  flag: <Flags.Da-DKFlag />
},
{
  name: "Dominica",
  code: "en-DM",
  flag: <Flags.En-DMFlag />
},
{
  name: "Dominican Republic",
  code: "es-DO",
  flag: <Flags.Es-DOFlag />
},
{
  name: "Algeria",
  code: "ar-DZ",
  flag: <Flags.Ar-DZFlag />
},
{
  name: "Ecuador",
  code: "es-EC",
  flag: <Flags.Es-ECFlag />
},
{
  name: "Estonia",
  code: "et-EE",
  flag: <Flags.Et-EEFlag />
},
{
  name: "Egypt",
  code: "ar-EG",
  flag: <Flags.Ar-EGFlag />
},
{
  name: "Eritrea",
  code: "ti-ER",
  flag: <Flags.Ti-ERFlag />
},
{
  name: "Spain",
  code: "es-ES",
  flag: <Flags.Es-ESFlag />
},
{
  name: "Ethiopia",
  code: "am-ET",
  flag: <Flags.Am-ETFlag />
},
{
  name: "Finland",
  code: "fi-FI",
  flag: <Flags.Fi-FIFlag />
},
{
  name: "Fiji",
  code: "en-FJ",
  flag: <Flags.En-FJFlag />
},
{
  name: "Falkland Islands",
  code: "es-FK",
  flag: <Flags.Es-FKFlag />
},
{
  name: "Micronesia",
  code: "en-FM",
  flag: <Flags.En-FMFlag />
},
{
  name: "Faroe Islands",
  code: "fo-FO",
  flag: <Flags.Fo-FOFlag />
},
{
  name: "France",
  code: "fr-FR",
  flag: <Flags.Fr-FRFlag />
},
{
  name: "Gabon",
  code: "fr-GA",
  flag: <Flags.Fr-GAFlag />
},
{
  name: "United Kingdom",
  code: "en-GB",
  flag: <Flags.En-GBFlag />
},
{
  name: "Grenada",
  code: "en-GD",
  flag: <Flags.En-GDFlag />
},
{
  name: "Georgia",
  code: "ka-GE",
  flag: <Flags.Ka-GEFlag />
},
{
  name: "Guernsey",
  code: "en-GG",
  flag: <Flags.En-GGFlag />
},
{
  name: "Ghana",
  code: "en-GH",
  flag: <Flags.En-GHFlag />
},
{
  name: "Gibraltar",
  code: "en-GI",
  flag: <Flags.En-GIFlag />
},
{
  name: "Greenland",
  code: "kl-GL",
  flag: <Flags.Kl-GLFlag />
},
{
  name: "Gambia",
  code: "en-GM",
  flag: <Flags.En-GMFlag />
},
{
  name: "Guinea",
  code: "fr-GN",
  flag: <Flags.Fr-GNFlag />
},
{
  name: "Equatorial Guinea",
  code: "es-GQ",
  flag: <Flags.Es-GQFlag />
},
{
  name: "Greece",
  code: "el-GR",
  flag: <Flags.El-GRFlag />
},
{
  name: "Guatemala",
  code: "es-GT",
  flag: <Flags.Es-GTFlag />
},
{
  name: "Guam",
  code: "en-GU",
  flag: <Flags.En-GUFlag />
},
{
  name: "Guinea-Bissau",
  code: "pt-GW",
  flag: <Flags.Pt-GWFlag />
},
{
  name: "Hong Kong",
  code: "zh-HK",
  flag: <Flags.Zh-HKFlag />
},
{
  name: "Honduras",
  code: "es-HN",
  flag: <Flags.Es-HNFlag />
},
{
  name: "Croatia",
  code: "hr-HR",
  flag: <Flags.Hr-HRFlag />
},
{
  name: "Haiti",
  code: "fr-HT",
  flag: <Flags.Fr-HTFlag />
},
{
  name: "Hungary",
  code: "hu-HU",
  flag: <Flags.Hu-HUFlag />
},
{
  name: "Indonesia",
  code: "id-ID",
  flag: <Flags.Id-IDFlag />
},
{
  name: "Ireland",
  code: "en-IE",
  flag: <Flags.En-IEFlag />
},
{
  name: "Israel",
  code: "he-IL",
  flag: <Flags.He-ILFlag />
},
{
  name: "Isle of Man",
  code: "en-IM",
  flag: <Flags.En-IMFlag />
},
{
  name: "India",
  code: "hi-IN",
  flag: <Flags.Hi-INFlag />
},
{
  name: "British Indian Ocean Territory",
  code: "en-IO",
  flag: <Flags.En-IOFlag />
},
{
  name: "Iraq",
  code: "ar-IQ",
  flag: <Flags.Ar-IQFlag />
},
{
  name: "Iran",
  code: "fa-IR",
  flag: <Flags.Fa-IRFlag />
},
{
  name: "Iceland",
  code: "is-IS",
  flag: <Flags.Is-ISFlag />
},
{
  name: "Italy",
  code: "it-IT",
  flag: <Flags.It-ITFlag />
},
{
  name: "Jersey",
  code: "en-JE",
  flag: <Flags.En-JEFlag />
},
{
  name: "Jamaica",
  code: "en-JM",
  flag: <Flags.En-JMFlag />
},
{
  name: "Jordan",
  code: "ar-JO",
  flag: <Flags.Ar-JOFlag />
},
{
  name: "Japan",
  code: "ja-JP",
  flag: <Flags.Ja-JPFlag />
},
{
  name: "Kenya",
  code: "sw-KE",
  flag: <Flags.Sw-KEFlag />
},
{
  name: "Kyrgyzstan",
  code: "ky-KG",
  flag: <Flags.Ky-KGFlag />
},
{
  name: "Cambodia",
  code: "km-KH",
  flag: <Flags.Km-KHFlag />
},
{
  name: "Kiribati",
  code: "en-KI",
  flag: <Flags.En-KIFlag />
},
{
  name: "Comoros",
  code: "fr-KM",
  flag: <Flags.Fr-KMFlag />
},
{
  name: "Saint Kitts and Nevis",
  code: "en-KN",
  flag: <Flags.En-KNFlag />
},
{
  name: "North Korea",
  code: "ko-KP",
  flag: <Flags.Ko-KPFlag />
},
{
  name: "South Korea",
  code: "ko-KR",
  flag: <Flags.Ko-KRFlag />
},
{
  name: "Kuwait",
  code: "ar-KW",
  flag: <Flags.Ar-KWFlag />
},
{
  name: "Cayman Islands",
  code: "en-KY",
  flag: <Flags.En-KYFlag />
},
{
  name: "Kazakhstan",
  code: "kk-KZ",
  flag: <Flags.Kk-KZFlag />
},
{
  name: "Laos",
  code: "lo-LA",
  flag: <Flags.Lo-LAFlag />
},
{
  name: "Lebanon",
  code: "ar-LB",
  flag: <Flags.Ar-LBFlag />
},
{
  name: "Saint Lucia",
  code: "en-LC",
  flag: <Flags.En-LCFlag />
},
{
  name: "Liechtenstein",
  code: "de-LI",
  flag: <Flags.De-LIFlag />
},
{
  name: "Sri Lanka",
  code: "si-LK",
  flag: <Flags.Si-LKFlag />
},
{
  name: "Liberia",
  code: "en-LR",
  flag: <Flags.En-LRFlag />
},
{
  name: "Lesotho",
  code: "en-LS",
  flag: <Flags.En-LSFlag />
},
{
  name: "Lithuania",
  code: "lt-LT",
  flag: <Flags.Lt-LTFlag />
},
{
  name: "Luxembourg",
  code: "lb-LU",
  flag: <Flags.Lb-LUFlag />
},
{
  name: "Latvia",
  code: "lv-LV",
  flag: <Flags.Lv-LVFlag />
},
{
  name: "Libya",
  code: "ar-LY",
  flag: <Flags.Ar-LYFlag />
},
{
  name: "Morocco",
  code: "ar-MA",
  flag: <Flags.Ar-MAFlag />
},
{
  name: "Monaco",
  code: "fr-MC",
  flag: <Flags.Fr-MCFlag />
},
{
  name: "Moldova",
  code: "ro-MD",
  flag: <Flags.Ro-MDFlag />
},
{
  name: "Montenegro",
  code: "sr-ME",
  flag: <Flags.Sr-MEFlag />
},
{
  name: "Madagascar",
  code: "mg-MG",
  flag: <Flags.Mg-MGFlag />
},
{
  name: "Marshall Islands",
  code: "en-MH",
  flag: <Flags.En-MHFlag />
},
{
  name: "North Macedonia",
  code: "mk-MK",
  flag: <Flags.Mk-MKFlag />
},
{
  name: "Mali",
  code: "fr-ML",
  flag: <Flags.Fr-MLFlag />
},
{
  name: "Myanmar",
  code: "my-MM",
  flag: <Flags.My-MMFlag />
},
{
  name: "Mongolia",
  code: "mn-MN",
  flag: <Flags.Mn-MNFlag />
},
{
  name: "Macau",
  code: "zh-MO",
  flag: <Flags.Zh-MOFlag />
},
{
  name: "Northern Mariana Islands",
  code: "en-MP",
  flag: <Flags.En-MPFlag />
},
{
  name: "Martinique",
  code: "fr-MQ",
  flag: <Flags.Fr-MQFlag />
},
{
  name: "Mauritania",
  code: "ar-MR",
  flag: <Flags.Ar-MRFlag />
},
{
  name: "Montserrat",
  code: "en-MS",
  flag: <Flags.En-MSFlag />
},
{
  name: "Malta",
  code: "mt-MT",
  flag: <Flags.Mt-MTFlag />
},
{
  name: "Mauritius",
  code: "en-MU",
  flag: <Flags.En-MUFlag />
},
{
  name: "Maldives",
  code: "dv-MV",
  flag: <Flags.Dv-MVFlag />
},
{
  name: "Malawi",
  code: "en-MW",
  flag: <Flags.En-MWFlag />
},
{
  name: "Mexico",
  code: "es-MX",
  flag: <Flags.Es-MXFlag />
},
{
  name: "Malaysia",
  code: "ms-MY",
  flag: <Flags.Ms-MYFlag />
},
{
  name: "Mozambique",
  code: "pt-MZ",
  flag: <Flags.Pt-MZFlag />
},
{
  name: "Namibia",
  code: "en-NA",
  flag: <Flags.En-NAFlag />
},
{
  name: "Niger",
  code: "fr-NE",
  flag: <Flags.Fr-NEFlag />
},
{
  name: "Norfolk Island",
  code: "en-NF",
  flag: <Flags.En-NFFlag />
},
{
  name: "Nigeria",
  code: "en-NG",
  flag: <Flags.En-NGFlag />
},
{
  name: "Nicaragua",
  code: "es-NI",
  flag: <Flags.Es-NIFlag />
},
{
  name: "Netherlands",
  code: "nl-NL",
  flag: <Flags.Nl-NLFlag />
},
{
  name: "Norway",
  code: "nb-NO",
  flag: <Flags.Nb-NOFlag />
},
{
  name: "Nepal",
  code: "ne-NP",
  flag: <Flags.Ne-NPFlag />
},
{
  name: "Nauru",
  code: "en-NR",
  flag: <Flags.En-NRFlag />
},
{
  name: "Niue",
  code: "en-NU",
  flag: <Flags.En-NUFlag />
},
{
  name: "New Zealand",
  code: "en-NZ",
  flag: <Flags.En-NZFlag />
},
{
  name: "Oman",
  code: "ar-OM",
  flag: <Flags.Ar-OMFlag />
},
{
  name: "Panama",
  code: "es-PA",
  flag: <Flags.Es-PAFlag />
},
{
  name: "Peru",
  code: "es-PE",
  flag: <Flags.Es-PEFlag />
},
{
  name: "French Polynesia",
  code: "fr-PF",
  flag: <Flags.Fr-PFFlag />
},
{
  name: "Papua New Guinea",
  code: "en-PG",
  flag: <Flags.En-PGFlag />
},
{
  name: "Philippines",
  code: "en-PH",
  flag: <Flags.En-PHFlag />
},
{
  name: "Pakistan",
  code: "ur-PK",
  flag: <Flags.Ur-PKFlag />
},
{
  name: "Poland",
  code: "pl-PL",
  flag: <Flags.Pl-PLFlag />
},
{
  name: "Pitcairn Islands",
  code: "en-PN",
  flag: <Flags.En-PNFlag />
},
{
  name: "Puerto Rico",
  code: "es-PR",
  flag: <Flags.Es-PRFlag />
},
{
  name: "Palestine",
  code: "ar-PS",
  flag: <Flags.Ar-PSFlag />
},
{
  name: "Portugal",
  code: "pt-PT",
  flag: <Flags.Pt-PTFlag />
},
{
  name: "Palau",
  code: "en-PW",
  flag: <Flags.En-PWFlag />
},
{
  name: "Paraguay",
  code: "es-PY",
  flag: <Flags.Es-PYFlag />
},
{
  name: "Qatar",
  code: "ar-QA",
  flag: <Flags.Ar-QAFlag />
},
{
  name: "Romania",
  code: "ro-RO",
  flag: <Flags.Ro-ROFlag />
},
{
  name: "Serbia",
  code: "sr-RS",
  flag: <Flags.Sr-RSFlag />
},
{
  name: "Russia",
  code: "ru-RU",
  flag: <Flags.Ru-RUFlag />
},
{
  name: "Rwanda",
  code: "rw-RW",
  flag: <Flags.Rw-RWFlag />
},
{
  name: "Saudi Arabia",
  code: "ar-SA",
  flag: <Flags.Ar-SAFlag />
},
{
  name: "Solomon Islands",
  code: "en-SB",
  flag: <Flags.En-SBFlag />
},
{
  name: "Seychelles",
  code: "fr-SC",
  flag: <Flags.Fr-SCFlag />
},
{
  name: "Sudan",
  code: "ar-SD",
  flag: <Flags.Ar-SDFlag />
},
{
  name: "Sweden",
  code: "sv-SE",
  flag: <Flags.Sv-SEFlag />
},
{
  name: "Singapore",
  code: "en-SG",
  flag: <Flags.En-SGFlag />
},
{
  name: "Slovenia",
  code: "sl-SI",
  flag: <Flags.Sl-SIFlag />
},
{
  name: "Slovakia",
  code: "sk-SK",
  flag: <Flags.Sk-SKFlag />
},
{
  name: "Sierra Leone",
  code: "en-SL",
  flag: <Flags.En-SLFlag />
},
{
  name: "San Marino",
  code: "it-SM",
  flag: <Flags.It-SMFlag />
},
{
  name: "Senegal",
  code: "fr-SN",
  flag: <Flags.Fr-SNFlag />
},
{
  name: "Somalia",
  code: "so-SO",
  flag: <Flags.So-SOFlag />
},
{
  name: "Suriname",
  code: "nl-SR",
  flag: <Flags.Nl-SRFlag />
},
{
  name: "South Sudan",
  code: "en-SS",
  flag: <Flags.En-SSFlag />
},
{
  name: "Sao Tome and Principe",
  code: "pt-ST",
  flag: <Flags.Pt-STFlag />
},
{
  name: "El Salvador",
  code: "es-SV",
  flag: <Flags.Es-SVFlag />
},
{
  name: "Sint Maarten",
  code: "en-SX",
  flag: <Flags.En-SXFlag />
},
{
  name: "Syria",
  code: "ar-SY",
  flag: <Flags.Ar-SYFlag />
},
{
  name: "Eswatini",
  code: "en-SZ",
  flag: <Flags.En-SZFlag />
},
{
  name: "Turks and Caicos Islands",
  code: "en-TC",
  flag: <Flags.En-TCFlag />
},
{
  name: "Chad",
  code: "fr-TD",
  flag: <Flags.Fr-TDFlag />
},
{
  name: "Togo",
  code: "fr-TG",
  flag: <Flags.Fr-TGFlag />
},
{
  name: "Thailand",
  code: "th-TH",
  flag: <Flags.Th-THFlag />
},
{
  name: "Tajikistan",
  code: "tg-TJ",
  flag: <Flags.Tg-TJFlag />
},
{
  name: "Tokelau",
  code: "en-TK",
  flag: <Flags.En-TKFlag />
},
{
  name: "Turkmenistan",
  code: "tk-TM",
  flag: <Flags.Tk-TMFlag />
},
{
  name: "Tunisia",
  code: "ar-TN",
  flag: <Flags.Ar-TNFlag />
},
{
  name: "Tonga",
  code: "en-TO",
  flag: <Flags.En-TOFlag />
},
{
  name: "Turkey",
  code: "tr-TR",
  flag: <Flags.Tr-TRFlag />
},
{
  name: "Trinidad and Tobago",
  code: "en-TT",
  flag: <Flags.En-TTFlag />
},
{
  name: "Tuvalu",
  code: "en-TV",
  flag: <Flags.En-TVFlag />
},
{
  name: "Taiwan",
  code: "zh-TW",
  flag: <Flags.Zh-TWFlag />
},
{
  name: "Tanzania",
  code: "sw-TZ",
  flag: <Flags.Sw-TZFlag />
},
{
  name: "Ukraine",
  code: "uk-UA",
  flag: <Flags.Uk-UAFlag />
},
{
  name: "Uganda",
  code: "sw-UG",
  flag: <Flags.Sw-UGFlag />
},
{
  name: "United States",
  code: "en-US",
  flag: <Flags.En-USFlag />
},
{
  name: "Uruguay",
  code: "es-UY",
  flag: <Flags.Es-UYFlag />
},
{
  name: "Uzbekistan",
  code: "uz-UZ",
  flag: <Flags.Uz-UZFlag />
},
{
  name: "Venezuela",
  code: "es-VE",
  flag: <Flags.Es-VEFlag />
},
{
  name: "U.S. Virgin Islands",
  code: "en-VI",
  flag: <Flags.En-VIFlag />
},
{
  name: "Vietnam",
  code: "vi-VN",
  flag: <Flags.Vi-VNFlag />
},
{
  name: "Vanuatu",
  code: "en-VU",
  flag: <Flags.En-VUFlag />
},
{
  name: "Samoa",
  code: "en-WS",
  flag: <Flags.En-WSFlag />
},
{
  name: "Yemen",
  code: "ar-YE",
  flag: <Flags.Ar-YEFlag />
},
{
  name: "South Africa",
  code: "af-ZA",
  flag: <Flags.Af-ZAFlag />
},
{
  name: "Zambia",
  code: "en-ZM",
  flag: <Flags.En-ZMFlag />
},
{
  name: "Zimbabwe",
  code: "en-ZW",
  flag: <Flags.En-ZWFlag />
}
];

export const sttSupportCountries: CountryEntry[] = [
{
  name: "United Arab Emirates",
  code: "ar-AE",
  flag: <Flags.Ar-AEFlag />
},
{
  name: "Afghanistan",
  code: "fa-AF",
  flag: <Flags.Fa-AFFlag />
},
{
  name: "Albania",
  code: "sq-AL",
  flag: <Flags.Sq-ALFlag />
},
{
  name: "Armenia",
  code: "hy-AM",
  flag: <Flags.Hy-AMFlag />
},
{
  name: "Argentina",
  code: "es-AR",
  flag: <Flags.Es-ARFlag />
},
{
  name: "Austria",
  code: "de-AT",
  flag: <Flags.De-ATFlag />
},
{
  name: "Australia",
  code: "en-AU",
  flag: <Flags.En-AUFlag />
},
{
  name: "Azerbaijan",
  code: "az-AZ",
  flag: <Flags.Az-AZFlag />
},
{
  name: "Bosnia and Herzegovina",
  code: "bs-BA",
  flag: <Flags.Bs-BAFlag />
},
{
  name: "Belgium",
  code: "nl-BE",
  flag: <Flags.Nl-BEFlag />
},
{
  name: "Bulgaria",
  code: "bg-BG",
  flag: <Flags.Bg-BGFlag />
},
{
  name: "Bahrain",
  code: "ar-BH",
  flag: <Flags.Ar-BHFlag />
},
{
  name: "Bolivia",
  code: "es-BO",
  flag: <Flags.Es-BOFlag />
},
{
  name: "Brazil",
  code: "pt-BR",
  flag: <Flags.Pt-BRFlag />
},
{
  name: "Canada",
  code: "en-CA",
  flag: <Flags.En-CAFlag />
},
{
  name: "Switzerland",
  code: "de-CH",
  flag: <Flags.De-CHFlag />
},
{
  name: "Chile",
  code: "es-CL",
  flag: <Flags.Es-CLFlag />
},
{
  name: "China",
  code: "zh-CN",
  flag: <Flags.Zh-CNFlag />
},
{
  name: "Colombia",
  code: "es-CO",
  flag: <Flags.Es-COFlag />
},
{
  name: "Costa Rica",
  code: "es-CR",
  flag: <Flags.Es-CRFlag />
},
{
  name: "Cuba",
  code: "es-CU",
  flag: <Flags.Es-CUFlag />
},
{
  name: "Czech Republic",
  code: "cs-CZ",
  flag: <Flags.Cs-CZFlag />
},
{
  name: "Germany",
  code: "de-DE",
  flag: <Flags.De-DEFlag />
},
{
  name: "Denmark",
  code: "da-DK",
  flag: <Flags.Da-DKFlag />
},
{
  name: "Dominican Republic",
  code: "es-DO",
  flag: <Flags.Es-DOFlag />
},
{
  name: "Algeria",
  code: "ar-DZ",
  flag: <Flags.Ar-DZFlag />
},
{
  name: "Ecuador",
  code: "es-EC",
  flag: <Flags.Es-ECFlag />
},
{
  name: "Estonia",
  code: "et-EE",
  flag: <Flags.Et-EEFlag />
},
{
  name: "Egypt",
  code: "ar-EG",
  flag: <Flags.Ar-EGFlag />
},
{
  name: "Spain",
  code: "es-ES",
  flag: <Flags.Es-ESFlag />
},
{
  name: "Ethiopia",
  code: "am-ET",
  flag: <Flags.Am-ETFlag />
},
{
  name: "Finland",
  code: "fi-FI",
  flag: <Flags.Fi-FIFlag />
},
{
  name: "France",
  code: "fr-FR",
  flag: <Flags.Fr-FRFlag />
},
{
  name: "United Kingdom",
  code: "en-GB",
  flag: <Flags.En-GBFlag />
},
{
  name: "Georgia",
  code: "ka-GE",
  flag: <Flags.Ka-GEFlag />
},
{
  name: "Ghana",
  code: "en-GH",
  flag: <Flags.En-GHFlag />
},
{
  name: "Equatorial Guinea",
  code: "es-GQ",
  flag: <Flags.Es-GQFlag />
},
{
  name: "Greece",
  code: "el-GR",
  flag: <Flags.El-GRFlag />
},
{
  name: "Guatemala",
  code: "es-GT",
  flag: <Flags.Es-GTFlag />
},
{
  name: "Hong Kong",
  code: "zh-HK",
  flag: <Flags.Zh-HKFlag />
},
{
  name: "Honduras",
  code: "es-HN",
  flag: <Flags.Es-HNFlag />
},
{
  name: "Croatia",
  code: "hr-HR",
  flag: <Flags.Hr-HRFlag />
},
{
  name: "Hungary",
  code: "hu-HU",
  flag: <Flags.Hu-HUFlag />
},
{
  name: "Indonesia",
  code: "id-ID",
  flag: <Flags.Id-IDFlag />
},
{
  name: "Ireland",
  code: "en-IE",
  flag: <Flags.En-IEFlag />
},
{
  name: "Israel",
  code: "he-IL",
  flag: <Flags.He-ILFlag />
},
{
  name: "India",
  code: "hi-IN",
  flag: <Flags.Hi-INFlag />
},
{
  name: "Iraq",
  code: "ar-IQ",
  flag: <Flags.Ar-IQFlag />
},
{
  name: "Iran",
  code: "fa-IR",
  flag: <Flags.Fa-IRFlag />
},
{
  name: "Iceland",
  code: "is-IS",
  flag: <Flags.Is-ISFlag />
},
{
  name: "Italy",
  code: "it-IT",
  flag: <Flags.It-ITFlag />
},
{
  name: "Jordan",
  code: "ar-JO",
  flag: <Flags.Ar-JOFlag />
},
{
  name: "Japan",
  code: "ja-JP",
  flag: <Flags.Ja-JPFlag />
},
{
  name: "Kenya",
  code: "sw-KE",
  flag: <Flags.Sw-KEFlag />
},
{
  name: "Cambodia",
  code: "km-KH",
  flag: <Flags.Km-KHFlag />
},
{
  name: "South Korea",
  code: "ko-KR",
  flag: <Flags.Ko-KRFlag />
},
{
  name: "Kuwait",
  code: "ar-KW",
  flag: <Flags.Ar-KWFlag />
},
{
  name: "Kazakhstan",
  code: "kk-KZ",
  flag: <Flags.Kk-KZFlag />
},
{
  name: "Laos",
  code: "lo-LA",
  flag: <Flags.Lo-LAFlag />
},
{
  name: "Lebanon",
  code: "ar-LB",
  flag: <Flags.Ar-LBFlag />
},
{
  name: "Sri Lanka",
  code: "si-LK",
  flag: <Flags.Si-LKFlag />
},
{
  name: "Lithuania",
  code: "lt-LT",
  flag: <Flags.Lt-LTFlag />
},
{
  name: "Latvia",
  code: "lv-LV",
  flag: <Flags.Lv-LVFlag />
},
{
  name: "Libya",
  code: "ar-LY",
  flag: <Flags.Ar-LYFlag />
},
{
  name: "Morocco",
  code: "ar-MA",
  flag: <Flags.Ar-MAFlag />
},
{
  name: "North Macedonia",
  code: "mk-MK",
  flag: <Flags.Mk-MKFlag />
},
{
  name: "Myanmar",
  code: "my-MM",
  flag: <Flags.My-MMFlag />
},
{
  name: "Mongolia",
  code: "mn-MN",
  flag: <Flags.Mn-MNFlag />
},
{
  name: "Malta",
  code: "mt-MT",
  flag: <Flags.Mt-MTFlag />
},
{
  name: "Mexico",
  code: "es-MX",
  flag: <Flags.Es-MXFlag />
},
{
  name: "Malaysia",
  code: "ms-MY",
  flag: <Flags.Ms-MYFlag />
},
{
  name: "Nigeria",
  code: "en-NG",
  flag: <Flags.En-NGFlag />
},
{
  name: "Nicaragua",
  code: "es-NI",
  flag: <Flags.Es-NIFlag />
},
{
  name: "Netherlands",
  code: "nl-NL",
  flag: <Flags.Nl-NLFlag />
},
{
  name: "Norway",
  code: "nb-NO",
  flag: <Flags.Nb-NOFlag />
},
{
  name: "Nepal",
  code: "ne-NP",
  flag: <Flags.Ne-NPFlag />
},
{
  name: "New Zealand",
  code: "en-NZ",
  flag: <Flags.En-NZFlag />
},
{
  name: "Oman",
  code: "ar-OM",
  flag: <Flags.Ar-OMFlag />
},
{
  name: "Panama",
  code: "es-PA",
  flag: <Flags.Es-PAFlag />
},
{
  name: "Peru",
  code: "es-PE",
  flag: <Flags.Es-PEFlag />
},
{
  name: "Philippines",
  code: "en-PH",
  flag: <Flags.En-PHFlag />
},
{
  name: "Poland",
  code: "pl-PL",
  flag: <Flags.Pl-PLFlag />
},
{
  name: "Puerto Rico",
  code: "es-PR",
  flag: <Flags.Es-PRFlag />
},
{
  name: "Palestine",
  code: "ar-PS",
  flag: <Flags.Ar-PSFlag />
},
{
  name: "Portugal",
  code: "pt-PT",
  flag: <Flags.Pt-PTFlag />
},
{
  name: "Paraguay",
  code: "es-PY",
  flag: <Flags.Es-PYFlag />
},
{
  name: "Qatar",
  code: "ar-QA",
  flag: <Flags.Ar-QAFlag />
},
{
  name: "Romania",
  code: "ro-RO",
  flag: <Flags.Ro-ROFlag />
},
{
  name: "Serbia",
  code: "sr-RS",
  flag: <Flags.Sr-RSFlag />
},
{
  name: "Russia",
  code: "ru-RU",
  flag: <Flags.Ru-RUFlag />
},
{
  name: "Saudi Arabia",
  code: "ar-SA",
  flag: <Flags.Ar-SAFlag />
},
{
  name: "Sweden",
  code: "sv-SE",
  flag: <Flags.Sv-SEFlag />
},
{
  name: "Singapore",
  code: "en-SG",
  flag: <Flags.En-SGFlag />
},
{
  name: "Slovenia",
  code: "sl-SI",
  flag: <Flags.Sl-SIFlag />
},
{
  name: "Slovakia",
  code: "sk-SK",
  flag: <Flags.Sk-SKFlag />
},
{
  name: "Somalia",
  code: "so-SO",
  flag: <Flags.So-SOFlag />
},
{
  name: "El Salvador",
  code: "es-SV",
  flag: <Flags.Es-SVFlag />
},
{
  name: "Syria",
  code: "ar-SY",
  flag: <Flags.Ar-SYFlag />
},
{
  name: "Thailand",
  code: "th-TH",
  flag: <Flags.Th-THFlag />
},
{
  name: "Tunisia",
  code: "ar-TN",
  flag: <Flags.Ar-TNFlag />
},
{
  name: "Turkey",
  code: "tr-TR",
  flag: <Flags.Tr-TRFlag />
},
{
  name: "Taiwan",
  code: "zh-TW",
  flag: <Flags.Zh-TWFlag />
},
{
  name: "Tanzania",
  code: "sw-TZ",
  flag: <Flags.Sw-TZFlag />
},
{
  name: "Ukraine",
  code: "uk-UA",
  flag: <Flags.Uk-UAFlag />
},
{
  name: "United States",
  code: "en-US",
  flag: <Flags.En-USFlag />
},
{
  name: "Uruguay",
  code: "es-UY",
  flag: <Flags.Es-UYFlag />
},
{
  name: "Uzbekistan",
  code: "uz-UZ",
  flag: <Flags.Uz-UZFlag />
},
{
  name: "Venezuela",
  code: "es-VE",
  flag: <Flags.Es-VEFlag />
},
{
  name: "Vietnam",
  code: "vi-VN",
  flag: <Flags.Vi-VNFlag />
},
{
  name: "Yemen",
  code: "ar-YE",
  flag: <Flags.Ar-YEFlag />
},
{
  name: "South Africa",
  code: "af-ZA",
  flag: <Flags.Af-ZAFlag />
}
];

export const sttTtsSupportCountries: CountryEntry[] = [
{
  name: "United Arab Emirates",
  code: "ar-AE",
  flag: <Flags.Ar-AEFlag />
},
{
  name: "Afghanistan",
  code: "fa-AF",
  flag: <Flags.Fa-AFFlag />
},
{
  name: "Albania",
  code: "sq-AL",
  flag: <Flags.Sq-ALFlag />
},
{
  name: "Armenia",
  code: "hy-AM",
  flag: <Flags.Hy-AMFlag />
},
{
  name: "Argentina",
  code: "es-AR",
  flag: <Flags.Es-ARFlag />
},
{
  name: "Austria",
  code: "de-AT",
  flag: <Flags.De-ATFlag />
},
{
  name: "Australia",
  code: "en-AU",
  flag: <Flags.En-AUFlag />
},
{
  name: "Azerbaijan",
  code: "az-AZ",
  flag: <Flags.Az-AZFlag />
},
{
  name: "Bosnia and Herzegovina",
  code: "bs-BA",
  flag: <Flags.Bs-BAFlag />
},
{
  name: "Belgium",
  code: "nl-BE",
  flag: <Flags.Nl-BEFlag />
},
{
  name: "Bulgaria",
  code: "bg-BG",
  flag: <Flags.Bg-BGFlag />
},
{
  name: "Bahrain",
  code: "ar-BH",
  flag: <Flags.Ar-BHFlag />
},
{
  name: "Bolivia",
  code: "es-BO",
  flag: <Flags.Es-BOFlag />
},
{
  name: "Brazil",
  code: "pt-BR",
  flag: <Flags.Pt-BRFlag />
},
{
  name: "Canada",
  code: "en-CA",
  flag: <Flags.En-CAFlag />
},
{
  name: "Switzerland",
  code: "de-CH",
  flag: <Flags.De-CHFlag />
},
{
  name: "Chile",
  code: "es-CL",
  flag: <Flags.Es-CLFlag />
},
{
  name: "China",
  code: "zh-CN",
  flag: <Flags.Zh-CNFlag />
},
{
  name: "Colombia",
  code: "es-CO",
  flag: <Flags.Es-COFlag />
},
{
  name: "Costa Rica",
  code: "es-CR",
  flag: <Flags.Es-CRFlag />
},
{
  name: "Cuba",
  code: "es-CU",
  flag: <Flags.Es-CUFlag />
},
{
  name: "Czech Republic",
  code: "cs-CZ",
  flag: <Flags.Cs-CZFlag />
},
{
  name: "Germany",
  code: "de-DE",
  flag: <Flags.De-DEFlag />
},
{
  name: "Denmark",
  code: "da-DK",
  flag: <Flags.Da-DKFlag />
},
{
  name: "Dominican Republic",
  code: "es-DO",
  flag: <Flags.Es-DOFlag />
},
{
  name: "Algeria",
  code: "ar-DZ",
  flag: <Flags.Ar-DZFlag />
},
{
  name: "Ecuador",
  code: "es-EC",
  flag: <Flags.Es-ECFlag />
},
{
  name: "Estonia",
  code: "et-EE",
  flag: <Flags.Et-EEFlag />
},
{
  name: "Egypt",
  code: "ar-EG",
  flag: <Flags.Ar-EGFlag />
},
{
  name: "Spain",
  code: "es-ES",
  flag: <Flags.Es-ESFlag />
},
{
  name: "Ethiopia",
  code: "am-ET",
  flag: <Flags.Am-ETFlag />
},
{
  name: "Finland",
  code: "fi-FI",
  flag: <Flags.Fi-FIFlag />
},
{
  name: "France",
  code: "fr-FR",
  flag: <Flags.Fr-FRFlag />
},
{
  name: "United Kingdom",
  code: "en-GB",
  flag: <Flags.En-GBFlag />
},
{
  name: "Georgia",
  code: "ka-GE",
  flag: <Flags.Ka-GEFlag />
},
{
  name: "Equatorial Guinea",
  code: "es-GQ",
  flag: <Flags.Es-GQFlag />
},
{
  name: "Greece",
  code: "el-GR",
  flag: <Flags.El-GRFlag />
},
{
  name: "Guatemala",
  code: "es-GT",
  flag: <Flags.Es-GTFlag />
},
{
  name: "Hong Kong",
  code: "zh-HK",
  flag: <Flags.Zh-HKFlag />
},
{
  name: "Honduras",
  code: "es-HN",
  flag: <Flags.Es-HNFlag />
},
{
  name: "Croatia",
  code: "hr-HR",
  flag: <Flags.Hr-HRFlag />
},
{
  name: "Hungary",
  code: "hu-HU",
  flag: <Flags.Hu-HUFlag />
},
{
  name: "Indonesia",
  code: "id-ID",
  flag: <Flags.Id-IDFlag />
},
{
  name: "Ireland",
  code: "en-IE",
  flag: <Flags.En-IEFlag />
},
{
  name: "Israel",
  code: "he-IL",
  flag: <Flags.He-ILFlag />
},
{
  name: "India",
  code: "hi-IN",
  flag: <Flags.Hi-INFlag />
},
{
  name: "Iraq",
  code: "ar-IQ",
  flag: <Flags.Ar-IQFlag />
},
{
  name: "Iran",
  code: "fa-IR",
  flag: <Flags.Fa-IRFlag />
},
{
  name: "Iceland",
  code: "is-IS",
  flag: <Flags.Is-ISFlag />
},
{
  name: "Italy",
  code: "it-IT",
  flag: <Flags.It-ITFlag />
},
{
  name: "Jordan",
  code: "ar-JO",
  flag: <Flags.Ar-JOFlag />
},
{
  name: "Japan",
  code: "ja-JP",
  flag: <Flags.Ja-JPFlag />
},
{
  name: "Kenya",
  code: "sw-KE",
  flag: <Flags.Sw-KEFlag />
},
{
  name: "Cambodia",
  code: "km-KH",
  flag: <Flags.Km-KHFlag />
},
{
  name: "South Korea",
  code: "ko-KR",
  flag: <Flags.Ko-KRFlag />
},
{
  name: "Kuwait",
  code: "ar-KW",
  flag: <Flags.Ar-KWFlag />
},
{
  name: "Kazakhstan",
  code: "kk-KZ",
  flag: <Flags.Kk-KZFlag />
},
{
  name: "Laos",
  code: "lo-LA",
  flag: <Flags.Lo-LAFlag />
},
{
  name: "Lebanon",
  code: "ar-LB",
  flag: <Flags.Ar-LBFlag />
},
{
  name: "Sri Lanka",
  code: "si-LK",
  flag: <Flags.Si-LKFlag />
},
{
  name: "Lithuania",
  code: "lt-LT",
  flag: <Flags.Lt-LTFlag />
},
{
  name: "Latvia",
  code: "lv-LV",
  flag: <Flags.Lv-LVFlag />
},
{
  name: "Libya",
  code: "ar-LY",
  flag: <Flags.Ar-LYFlag />
},
{
  name: "Morocco",
  code: "ar-MA",
  flag: <Flags.Ar-MAFlag />
},
{
  name: "North Macedonia",
  code: "mk-MK",
  flag: <Flags.Mk-MKFlag />
},
{
  name: "Myanmar",
  code: "my-MM",
  flag: <Flags.My-MMFlag />
},
{
  name: "Mongolia",
  code: "mn-MN",
  flag: <Flags.Mn-MNFlag />
},
{
  name: "Malta",
  code: "mt-MT",
  flag: <Flags.Mt-MTFlag />
},
{
  name: "Mexico",
  code: "es-MX",
  flag: <Flags.Es-MXFlag />
},
{
  name: "Malaysia",
  code: "ms-MY",
  flag: <Flags.Ms-MYFlag />
},
{
  name: "Nigeria",
  code: "en-NG",
  flag: <Flags.En-NGFlag />
},
{
  name: "Nicaragua",
  code: "es-NI",
  flag: <Flags.Es-NIFlag />
},
{
  name: "Netherlands",
  code: "nl-NL",
  flag: <Flags.Nl-NLFlag />
},
{
  name: "Norway",
  code: "nb-NO",
  flag: <Flags.Nb-NOFlag />
},
{
  name: "Nepal",
  code: "ne-NP",
  flag: <Flags.Ne-NPFlag />
},
{
  name: "New Zealand",
  code: "en-NZ",
  flag: <Flags.En-NZFlag />
},
{
  name: "Oman",
  code: "ar-OM",
  flag: <Flags.Ar-OMFlag />
},
{
  name: "Panama",
  code: "es-PA",
  flag: <Flags.Es-PAFlag />
},
{
  name: "Peru",
  code: "es-PE",
  flag: <Flags.Es-PEFlag />
},
{
  name: "Philippines",
  code: "en-PH",
  flag: <Flags.En-PHFlag />
},
{
  name: "Poland",
  code: "pl-PL",
  flag: <Flags.Pl-PLFlag />
},
{
  name: "Puerto Rico",
  code: "es-PR",
  flag: <Flags.Es-PRFlag />
},
{
  name: "Portugal",
  code: "pt-PT",
  flag: <Flags.Pt-PTFlag />
},
{
  name: "Paraguay",
  code: "es-PY",
  flag: <Flags.Es-PYFlag />
},
{
  name: "Qatar",
  code: "ar-QA",
  flag: <Flags.Ar-QAFlag />
},
{
  name: "Romania",
  code: "ro-RO",
  flag: <Flags.Ro-ROFlag />
},
{
  name: "Serbia",
  code: "sr-RS",
  flag: <Flags.Sr-RSFlag />
},
{
  name: "Russia",
  code: "ru-RU",
  flag: <Flags.Ru-RUFlag />
},
{
  name: "Saudi Arabia",
  code: "ar-SA",
  flag: <Flags.Ar-SAFlag />
},
{
  name: "Sweden",
  code: "sv-SE",
  flag: <Flags.Sv-SEFlag />
},
{
  name: "Singapore",
  code: "en-SG",
  flag: <Flags.En-SGFlag />
},
{
  name: "Slovenia",
  code: "sl-SI",
  flag: <Flags.Sl-SIFlag />
},
{
  name: "Slovakia",
  code: "sk-SK",
  flag: <Flags.Sk-SKFlag />
},
{
  name: "Somalia",
  code: "so-SO",
  flag: <Flags.So-SOFlag />
},
{
  name: "El Salvador",
  code: "es-SV",
  flag: <Flags.Es-SVFlag />
},
{
  name: "Syria",
  code: "ar-SY",
  flag: <Flags.Ar-SYFlag />
},
{
  name: "Thailand",
  code: "th-TH",
  flag: <Flags.Th-THFlag />
},
{
  name: "Tunisia",
  code: "ar-TN",
  flag: <Flags.Ar-TNFlag />
},
{
  name: "Turkey",
  code: "tr-TR",
  flag: <Flags.Tr-TRFlag />
},
{
  name: "Taiwan",
  code: "zh-TW",
  flag: <Flags.Zh-TWFlag />
},
{
  name: "Tanzania",
  code: "sw-TZ",
  flag: <Flags.Sw-TZFlag />
},
{
  name: "Ukraine",
  code: "uk-UA",
  flag: <Flags.Uk-UAFlag />
},
{
  name: "United States",
  code: "en-US",
  flag: <Flags.En-USFlag />
},
{
  name: "Uruguay",
  code: "es-UY",
  flag: <Flags.Es-UYFlag />
},
{
  name: "Uzbekistan",
  code: "uz-UZ",
  flag: <Flags.Uz-UZFlag />
},
{
  name: "Venezuela",
  code: "es-VE",
  flag: <Flags.Es-VEFlag />
},
{
  name: "Vietnam",
  code: "vi-VN",
  flag: <Flags.Vi-VNFlag />
},
{
  name: "Yemen",
  code: "ar-YE",
  flag: <Flags.Ar-YEFlag />
},
{
  name: "South Africa",
  code: "af-ZA",
  flag: <Flags.Af-ZAFlag />
}
];

export const ttsSupportCountries: CountryEntry[] = [
{
  name: "United Arab Emirates",
  code: "ar-AE",
  flag: <Flags.Ar-AEFlag />
},
{
  name: "Afghanistan",
  code: "fa-AF",
  flag: <Flags.Fa-AFFlag />
},
{
  name: "Albania",
  code: "sq-AL",
  flag: <Flags.Sq-ALFlag />
},
{
  name: "Armenia",
  code: "hy-AM",
  flag: <Flags.Hy-AMFlag />
},
{
  name: "Argentina",
  code: "es-AR",
  flag: <Flags.Es-ARFlag />
},
{
  name: "Austria",
  code: "de-AT",
  flag: <Flags.De-ATFlag />
},
{
  name: "Australia",
  code: "en-AU",
  flag: <Flags.En-AUFlag />
},
{
  name: "Azerbaijan",
  code: "az-AZ",
  flag: <Flags.Az-AZFlag />
},
{
  name: "Bosnia and Herzegovina",
  code: "bs-BA",
  flag: <Flags.Bs-BAFlag />
},
{
  name: "Bangladesh",
  code: "bn-BD",
  flag: <Flags.Bn-BDFlag />
},
{
  name: "Belgium",
  code: "nl-BE",
  flag: <Flags.Nl-BEFlag />
},
{
  name: "Bulgaria",
  code: "bg-BG",
  flag: <Flags.Bg-BGFlag />
},
{
  name: "Bahrain",
  code: "ar-BH",
  flag: <Flags.Ar-BHFlag />
},
{
  name: "Bolivia",
  code: "es-BO",
  flag: <Flags.Es-BOFlag />
},
{
  name: "Brazil",
  code: "pt-BR",
  flag: <Flags.Pt-BRFlag />
},
{
  name: "Canada",
  code: "en-CA",
  flag: <Flags.En-CAFlag />
},
{
  name: "Switzerland",
  code: "de-CH",
  flag: <Flags.De-CHFlag />
},
{
  name: "Chile",
  code: "es-CL",
  flag: <Flags.Es-CLFlag />
},
{
  name: "China",
  code: "zh-CN",
  flag: <Flags.Zh-CNFlag />
},
{
  name: "Colombia",
  code: "es-CO",
  flag: <Flags.Es-COFlag />
},
{
  name: "Costa Rica",
  code: "es-CR",
  flag: <Flags.Es-CRFlag />
},
{
  name: "Cuba",
  code: "es-CU",
  flag: <Flags.Es-CUFlag />
},
{
  name: "Czech Republic",
  code: "cs-CZ",
  flag: <Flags.Cs-CZFlag />
},
{
  name: "Germany",
  code: "de-DE",
  flag: <Flags.De-DEFlag />
},
{
  name: "Denmark",
  code: "da-DK",
  flag: <Flags.Da-DKFlag />
},
{
  name: "Dominican Republic",
  code: "es-DO",
  flag: <Flags.Es-DOFlag />
},
{
  name: "Algeria",
  code: "ar-DZ",
  flag: <Flags.Ar-DZFlag />
},
{
  name: "Ecuador",
  code: "es-EC",
  flag: <Flags.Es-ECFlag />
},
{
  name: "Estonia",
  code: "et-EE",
  flag: <Flags.Et-EEFlag />
},
{
  name: "Egypt",
  code: "ar-EG",
  flag: <Flags.Ar-EGFlag />
},
{
  name: "Spain",
  code: "es-ES",
  flag: <Flags.Es-ESFlag />
},
{
  name: "Ethiopia",
  code: "am-ET",
  flag: <Flags.Am-ETFlag />
},
{
  name: "Finland",
  code: "fi-FI",
  flag: <Flags.Fi-FIFlag />
},
{
  name: "France",
  code: "fr-FR",
  flag: <Flags.Fr-FRFlag />
},
{
  name: "United Kingdom",
  code: "en-GB",
  flag: <Flags.En-GBFlag />
},
{
  name: "Georgia",
  code: "ka-GE",
  flag: <Flags.Ka-GEFlag />
},
{
  name: "Equatorial Guinea",
  code: "es-GQ",
  flag: <Flags.Es-GQFlag />
},
{
  name: "Greece",
  code: "el-GR",
  flag: <Flags.El-GRFlag />
},
{
  name: "Guatemala",
  code: "es-GT",
  flag: <Flags.Es-GTFlag />
},
{
  name: "Hong Kong",
  code: "zh-HK",
  flag: <Flags.Zh-HKFlag />
},
{
  name: "Honduras",
  code: "es-HN",
  flag: <Flags.Es-HNFlag />
},
{
  name: "Croatia",
  code: "hr-HR",
  flag: <Flags.Hr-HRFlag />
},
{
  name: "Hungary",
  code: "hu-HU",
  flag: <Flags.Hu-HUFlag />
},
{
  name: "Indonesia",
  code: "id-ID",
  flag: <Flags.Id-IDFlag />
},
{
  name: "Ireland",
  code: "en-IE",
  flag: <Flags.En-IEFlag />
},
{
  name: "Israel",
  code: "he-IL",
  flag: <Flags.He-ILFlag />
},
{
  name: "India",
  code: "hi-IN",
  flag: <Flags.Hi-INFlag />
},
{
  name: "Iraq",
  code: "ar-IQ",
  flag: <Flags.Ar-IQFlag />
},
{
  name: "Iran",
  code: "fa-IR",
  flag: <Flags.Fa-IRFlag />
},
{
  name: "Iceland",
  code: "is-IS",
  flag: <Flags.Is-ISFlag />
},
{
  name: "Italy",
  code: "it-IT",
  flag: <Flags.It-ITFlag />
},
{
  name: "Jordan",
  code: "ar-JO",
  flag: <Flags.Ar-JOFlag />
},
{
  name: "Japan",
  code: "ja-JP",
  flag: <Flags.Ja-JPFlag />
},
{
  name: "Kenya",
  code: "sw-KE",
  flag: <Flags.Sw-KEFlag />
},
{
  name: "Cambodia",
  code: "km-KH",
  flag: <Flags.Km-KHFlag />
},
{
  name: "South Korea",
  code: "ko-KR",
  flag: <Flags.Ko-KRFlag />
},
{
  name: "Kuwait",
  code: "ar-KW",
  flag: <Flags.Ar-KWFlag />
},
{
  name: "Kazakhstan",
  code: "kk-KZ",
  flag: <Flags.Kk-KZFlag />
},
{
  name: "Laos",
  code: "lo-LA",
  flag: <Flags.Lo-LAFlag />
},
{
  name: "Lebanon",
  code: "ar-LB",
  flag: <Flags.Ar-LBFlag />
},
{
  name: "Sri Lanka",
  code: "si-LK",
  flag: <Flags.Si-LKFlag />
},
{
  name: "Lithuania",
  code: "lt-LT",
  flag: <Flags.Lt-LTFlag />
},
{
  name: "Latvia",
  code: "lv-LV",
  flag: <Flags.Lv-LVFlag />
},
{
  name: "Libya",
  code: "ar-LY",
  flag: <Flags.Ar-LYFlag />
},
{
  name: "Morocco",
  code: "ar-MA",
  flag: <Flags.Ar-MAFlag />
},
{
  name: "North Macedonia",
  code: "mk-MK",
  flag: <Flags.Mk-MKFlag />
},
{
  name: "Myanmar",
  code: "my-MM",
  flag: <Flags.My-MMFlag />
},
{
  name: "Mongolia",
  code: "mn-MN",
  flag: <Flags.Mn-MNFlag />
},
{
  name: "Malta",
  code: "mt-MT",
  flag: <Flags.Mt-MTFlag />
},
{
  name: "Mexico",
  code: "es-MX",
  flag: <Flags.Es-MXFlag />
},
{
  name: "Malaysia",
  code: "ms-MY",
  flag: <Flags.Ms-MYFlag />
},
{
  name: "Nigeria",
  code: "en-NG",
  flag: <Flags.En-NGFlag />
},
{
  name: "Nicaragua",
  code: "es-NI",
  flag: <Flags.Es-NIFlag />
},
{
  name: "Netherlands",
  code: "nl-NL",
  flag: <Flags.Nl-NLFlag />
},
{
  name: "Norway",
  code: "nb-NO",
  flag: <Flags.Nb-NOFlag />
},
{
  name: "Nepal",
  code: "ne-NP",
  flag: <Flags.Ne-NPFlag />
},
{
  name: "New Zealand",
  code: "en-NZ",
  flag: <Flags.En-NZFlag />
},
{
  name: "Oman",
  code: "ar-OM",
  flag: <Flags.Ar-OMFlag />
},
{
  name: "Panama",
  code: "es-PA",
  flag: <Flags.Es-PAFlag />
},
{
  name: "Peru",
  code: "es-PE",
  flag: <Flags.Es-PEFlag />
},
{
  name: "Philippines",
  code: "en-PH",
  flag: <Flags.En-PHFlag />
},
{
  name: "Pakistan",
  code: "ur-PK",
  flag: <Flags.Ur-PKFlag />
},
{
  name: "Poland",
  code: "pl-PL",
  flag: <Flags.Pl-PLFlag />
},
{
  name: "Puerto Rico",
  code: "es-PR",
  flag: <Flags.Es-PRFlag />
},
{
  name: "Portugal",
  code: "pt-PT",
  flag: <Flags.Pt-PTFlag />
},
{
  name: "Paraguay",
  code: "es-PY",
  flag: <Flags.Es-PYFlag />
},
{
  name: "Qatar",
  code: "ar-QA",
  flag: <Flags.Ar-QAFlag />
},
{
  name: "Romania",
  code: "ro-RO",
  flag: <Flags.Ro-ROFlag />
},
{
  name: "Serbia",
  code: "sr-RS",
  flag: <Flags.Sr-RSFlag />
},
{
  name: "Russia",
  code: "ru-RU",
  flag: <Flags.Ru-RUFlag />
},
{
  name: "Saudi Arabia",
  code: "ar-SA",
  flag: <Flags.Ar-SAFlag />
},
{
  name: "Sweden",
  code: "sv-SE",
  flag: <Flags.Sv-SEFlag />
},
{
  name: "Singapore",
  code: "en-SG",
  flag: <Flags.En-SGFlag />
},
{
  name: "Slovenia",
  code: "sl-SI",
  flag: <Flags.Sl-SIFlag />
},
{
  name: "Slovakia",
  code: "sk-SK",
  flag: <Flags.Sk-SKFlag />
},
{
  name: "Somalia",
  code: "so-SO",
  flag: <Flags.So-SOFlag />
},
{
  name: "El Salvador",
  code: "es-SV",
  flag: <Flags.Es-SVFlag />
},
{
  name: "Syria",
  code: "ar-SY",
  flag: <Flags.Ar-SYFlag />
},
{
  name: "Thailand",
  code: "th-TH",
  flag: <Flags.Th-THFlag />
},
{
  name: "Tunisia",
  code: "ar-TN",
  flag: <Flags.Ar-TNFlag />
},
{
  name: "Turkey",
  code: "tr-TR",
  flag: <Flags.Tr-TRFlag />
},
{
  name: "Taiwan",
  code: "zh-TW",
  flag: <Flags.Zh-TWFlag />
},
{
  name: "Tanzania",
  code: "sw-TZ",
  flag: <Flags.Sw-TZFlag />
},
{
  name: "Ukraine",
  code: "uk-UA",
  flag: <Flags.Uk-UAFlag />
},
{
  name: "United States",
  code: "en-US",
  flag: <Flags.En-USFlag />
},
{
  name: "Uruguay",
  code: "es-UY",
  flag: <Flags.Es-UYFlag />
},
{
  name: "Uzbekistan",
  code: "uz-UZ",
  flag: <Flags.Uz-UZFlag />
},
{
  name: "Venezuela",
  code: "es-VE",
  flag: <Flags.Es-VEFlag />
},
{
  name: "Vietnam",
  code: "vi-VN",
  flag: <Flags.Vi-VNFlag />
},
{
  name: "Yemen",
  code: "ar-YE",
  flag: <Flags.Ar-YEFlag />
},
{
  name: "South Africa",
  code: "af-ZA",
  flag: <Flags.Af-ZAFlag />
}
];

