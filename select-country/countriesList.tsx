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
  flag: <Flags.AdFlag />
},
{
  name: "United Arab Emirates",
  code: "ar-AE",
  flag: <Flags.AeFlag />
},
{
  name: "Afghanistan",
  code: "fa-AF",
  flag: <Flags.AfFlag />
},
{
  name: "Antigua and Barbuda",
  code: "en-AG",
  flag: <Flags.AgFlag />
},
{
  name: "Anguilla",
  code: "en-AI",
  flag: <Flags.AiFlag />
},
{
  name: "Albania",
  code: "sq-AL",
  flag: <Flags.AlFlag />
},
{
  name: "Armenia",
  code: "hy-AM",
  flag: <Flags.AmFlag />
},
{
  name: "Angola",
  code: "pt-AO",
  flag: <Flags.AoFlag />
},
{
  name: "Argentina",
  code: "es-AR",
  flag: <Flags.ArFlag />
},
{
  name: "American Samoa",
  code: "en-AS",
  flag: <Flags.AsFlag />
},
{
  name: "Austria",
  code: "de-AT",
  flag: <Flags.AtFlag />
},
{
  name: "Australia",
  code: "en-AU",
  flag: <Flags.AuFlag />
},
{
  name: "Aruba",
  code: "nl-AW",
  flag: <Flags.AwFlag />
},
{
  name: "Azerbaijan",
  code: "az-AZ",
  flag: <Flags.AzFlag />
},
{
  name: "Bosnia and Herzegovina",
  code: "bs-BA",
  flag: <Flags.BaFlag />
},
{
  name: "Barbados",
  code: "en-BB",
  flag: <Flags.BbFlag />
},
{
  name: "Bangladesh",
  code: "bn-BD",
  flag: <Flags.BdFlag />
},
{
  name: "Belgium",
  code: "nl-BE",
  flag: <Flags.BeFlag />
},
{
  name: "Burkina Faso",
  code: "fr-BF",
  flag: <Flags.BfFlag />
},
{
  name: "Bulgaria",
  code: "bg-BG",
  flag: <Flags.BgFlag />
},
{
  name: "Bahrain",
  code: "ar-BH",
  flag: <Flags.BhFlag />
},
{
  name: "Burundi",
  code: "fr-BI",
  flag: <Flags.BiFlag />
},
{
  name: "Benin",
  code: "fr-BJ",
  flag: <Flags.BjFlag />
},
{
  name: "Bermuda",
  code: "en-BM",
  flag: <Flags.BmFlag />
},
{
  name: "Bolivia",
  code: "es-BO",
  flag: <Flags.BoFlag />
},
{
  name: "Brazil",
  code: "pt-BR",
  flag: <Flags.BrFlag />
},
{
  name: "Bahamas",
  code: "en-BS",
  flag: <Flags.BsFlag />
},
{
  name: "Bhutan",
  code: "dz-BT",
  flag: <Flags.BtFlag />
},
{
  name: "Botswana",
  code: "en-BW",
  flag: <Flags.BwFlag />
},
{
  name: "Belarus",
  code: "be-BY",
  flag: <Flags.ByFlag />
},
{
  name: "Belize",
  code: "es-BZ",
  flag: <Flags.BzFlag />
},
{
  name: "Canada",
  code: "en-CA",
  flag: <Flags.CaFlag />
},
{
  name: "Democratic Republic of the Congo",
  code: "fr-CD",
  flag: <Flags.CdFlag />
},
{
  name: "Central African Republic",
  code: "fr-CF",
  flag: <Flags.CfFlag />
},
{
  name: "Republic of the Congo",
  code: "fr-CG",
  flag: <Flags.CgFlag />
},
{
  name: "Switzerland",
  code: "de-CH",
  flag: <Flags.ChFlag />
},
{
  name: "Ivory Coast",
  code: "fr-CI",
  flag: <Flags.CiFlag />
},
{
  name: "Cook Islands",
  code: "en-CK",
  flag: <Flags.CkFlag />
},
{
  name: "Chile",
  code: "es-CL",
  flag: <Flags.ClFlag />
},
{
  name: "Cameroon",
  code: "fr-CM",
  flag: <Flags.CmFlag />
},
{
  name: "China",
  code: "zh-CN",
  flag: <Flags.CnFlag />
},
{
  name: "Colombia",
  code: "es-CO",
  flag: <Flags.CoFlag />
},
{
  name: "Costa Rica",
  code: "es-CR",
  flag: <Flags.CrFlag />
},
{
  name: "Cuba",
  code: "es-CU",
  flag: <Flags.CuFlag />
},
{
  name: "Cabo Verde",
  code: "pt-CV",
  flag: <Flags.CvFlag />
},
{
  name: "Curaçao",
  code: "nl-CW",
  flag: <Flags.CwFlag />
},
{
  name: "Cyprus",
  code: "el-CY",
  flag: <Flags.CyFlag />
},
{
  name: "Czech Republic",
  code: "cs-CZ",
  flag: <Flags.CzFlag />
},
{
  name: "Germany",
  code: "de-DE",
  flag: <Flags.DeFlag />
},
{
  name: "Djibouti",
  code: "fr-DJ",
  flag: <Flags.DjFlag />
},
{
  name: "Denmark",
  code: "da-DK",
  flag: <Flags.DkFlag />
},
{
  name: "Dominica",
  code: "en-DM",
  flag: <Flags.DmFlag />
},
{
  name: "Dominican Republic",
  code: "es-DO",
  flag: <Flags.DoFlag />
},
{
  name: "Algeria",
  code: "ar-DZ",
  flag: <Flags.DzFlag />
},
{
  name: "Ecuador",
  code: "es-EC",
  flag: <Flags.EcFlag />
},
{
  name: "Estonia",
  code: "et-EE",
  flag: <Flags.EeFlag />
},
{
  name: "Egypt",
  code: "ar-EG",
  flag: <Flags.EgFlag />
},
{
  name: "Eritrea",
  code: "ti-ER",
  flag: <Flags.ErFlag />
},
{
  name: "Spain",
  code: "es-ES",
  flag: <Flags.EsFlag />
},
{
  name: "Ethiopia",
  code: "am-ET",
  flag: <Flags.EtFlag />
},
{
  name: "Finland",
  code: "fi-FI",
  flag: <Flags.FiFlag />
},
{
  name: "Fiji",
  code: "en-FJ",
  flag: <Flags.FjFlag />
},
{
  name: "Falkland Islands",
  code: "es-FK",
  flag: <Flags.FkFlag />
},
{
  name: "Micronesia",
  code: "en-FM",
  flag: <Flags.FmFlag />
},
{
  name: "Faroe Islands",
  code: "fo-FO",
  flag: <Flags.FoFlag />
},
{
  name: "France",
  code: "fr-FR",
  flag: <Flags.FrFlag />
},
{
  name: "Gabon",
  code: "fr-GA",
  flag: <Flags.GaFlag />
},
{
  name: "United Kingdom",
  code: "en-GB",
  flag: <Flags.GbFlag />
},
{
  name: "Grenada",
  code: "en-GD",
  flag: <Flags.GdFlag />
},
{
  name: "Georgia",
  code: "ka-GE",
  flag: <Flags.GeFlag />
},
{
  name: "Guernsey",
  code: "en-GG",
  flag: <Flags.GgFlag />
},
{
  name: "Ghana",
  code: "en-GH",
  flag: <Flags.GhFlag />
},
{
  name: "Gibraltar",
  code: "en-GI",
  flag: <Flags.GiFlag />
},
{
  name: "Greenland",
  code: "kl-GL",
  flag: <Flags.GlFlag />
},
{
  name: "Gambia",
  code: "en-GM",
  flag: <Flags.GmFlag />
},
{
  name: "Guinea",
  code: "fr-GN",
  flag: <Flags.GnFlag />
},
{
  name: "Equatorial Guinea",
  code: "es-GQ",
  flag: <Flags.GqFlag />
},
{
  name: "Greece",
  code: "el-GR",
  flag: <Flags.GrFlag />
},
{
  name: "Guatemala",
  code: "es-GT",
  flag: <Flags.GtFlag />
},
{
  name: "Guam",
  code: "en-GU",
  flag: <Flags.GuFlag />
},
{
  name: "Guinea-Bissau",
  code: "pt-GW",
  flag: <Flags.GwFlag />
},
{
  name: "Hong Kong",
  code: "zh-HK",
  flag: <Flags.HkFlag />
},
{
  name: "Honduras",
  code: "es-HN",
  flag: <Flags.HnFlag />
},
{
  name: "Croatia",
  code: "hr-HR",
  flag: <Flags.HrFlag />
},
{
  name: "Haiti",
  code: "fr-HT",
  flag: <Flags.HtFlag />
},
{
  name: "Hungary",
  code: "hu-HU",
  flag: <Flags.HuFlag />
},
{
  name: "Indonesia",
  code: "id-ID",
  flag: <Flags.IdFlag />
},
{
  name: "Ireland",
  code: "en-IE",
  flag: <Flags.IeFlag />
},
{
  name: "Israel",
  code: "he-IL",
  flag: <Flags.IlFlag />
},
{
  name: "Isle of Man",
  code: "en-IM",
  flag: <Flags.ImFlag />
},
{
  name: "India",
  code: "hi-IN",
  flag: <Flags.InFlag />
},
{
  name: "British Indian Ocean Territory",
  code: "en-IO",
  flag: <Flags.IoFlag />
},
{
  name: "Iraq",
  code: "ar-IQ",
  flag: <Flags.IqFlag />
},
{
  name: "Iran",
  code: "fa-IR",
  flag: <Flags.IrFlag />
},
{
  name: "Iceland",
  code: "is-IS",
  flag: <Flags.IsFlag />
},
{
  name: "Italy",
  code: "it-IT",
  flag: <Flags.ItFlag />
},
{
  name: "Jersey",
  code: "en-JE",
  flag: <Flags.JeFlag />
},
{
  name: "Jamaica",
  code: "en-JM",
  flag: <Flags.JmFlag />
},
{
  name: "Jordan",
  code: "ar-JO",
  flag: <Flags.JoFlag />
},
{
  name: "Japan",
  code: "ja-JP",
  flag: <Flags.JpFlag />
},
{
  name: "Kenya",
  code: "sw-KE",
  flag: <Flags.KeFlag />
},
{
  name: "Kyrgyzstan",
  code: "ky-KG",
  flag: <Flags.KgFlag />
},
{
  name: "Cambodia",
  code: "km-KH",
  flag: <Flags.KhFlag />
},
{
  name: "Kiribati",
  code: "en-KI",
  flag: <Flags.KiFlag />
},
{
  name: "Comoros",
  code: "fr-KM",
  flag: <Flags.KmFlag />
},
{
  name: "Saint Kitts and Nevis",
  code: "en-KN",
  flag: <Flags.KnFlag />
},
{
  name: "North Korea",
  code: "ko-KP",
  flag: <Flags.KpFlag />
},
{
  name: "South Korea",
  code: "ko-KR",
  flag: <Flags.KrFlag />
},
{
  name: "Kuwait",
  code: "ar-KW",
  flag: <Flags.KwFlag />
},
{
  name: "Cayman Islands",
  code: "en-KY",
  flag: <Flags.KyFlag />
},
{
  name: "Kazakhstan",
  code: "kk-KZ",
  flag: <Flags.KzFlag />
},
{
  name: "Laos",
  code: "lo-LA",
  flag: <Flags.LaFlag />
},
{
  name: "Lebanon",
  code: "ar-LB",
  flag: <Flags.LbFlag />
},
{
  name: "Saint Lucia",
  code: "en-LC",
  flag: <Flags.LcFlag />
},
{
  name: "Liechtenstein",
  code: "de-LI",
  flag: <Flags.LiFlag />
},
{
  name: "Sri Lanka",
  code: "si-LK",
  flag: <Flags.LkFlag />
},
{
  name: "Liberia",
  code: "en-LR",
  flag: <Flags.LrFlag />
},
{
  name: "Lesotho",
  code: "en-LS",
  flag: <Flags.LsFlag />
},
{
  name: "Lithuania",
  code: "lt-LT",
  flag: <Flags.LtFlag />
},
{
  name: "Luxembourg",
  code: "lb-LU",
  flag: <Flags.LuFlag />
},
{
  name: "Latvia",
  code: "lv-LV",
  flag: <Flags.LvFlag />
},
{
  name: "Libya",
  code: "ar-LY",
  flag: <Flags.LyFlag />
},
{
  name: "Morocco",
  code: "ar-MA",
  flag: <Flags.MaFlag />
},
{
  name: "Monaco",
  code: "fr-MC",
  flag: <Flags.McFlag />
},
{
  name: "Moldova",
  code: "ro-MD",
  flag: <Flags.MdFlag />
},
{
  name: "Montenegro",
  code: "sr-ME",
  flag: <Flags.MeFlag />
},
{
  name: "Madagascar",
  code: "mg-MG",
  flag: <Flags.MgFlag />
},
{
  name: "Marshall Islands",
  code: "en-MH",
  flag: <Flags.MhFlag />
},
{
  name: "North Macedonia",
  code: "mk-MK",
  flag: <Flags.MkFlag />
},
{
  name: "Mali",
  code: "fr-ML",
  flag: <Flags.MlFlag />
},
{
  name: "Myanmar",
  code: "my-MM",
  flag: <Flags.MmFlag />
},
{
  name: "Mongolia",
  code: "mn-MN",
  flag: <Flags.MnFlag />
},
{
  name: "Macau",
  code: "zh-MO",
  flag: <Flags.MoFlag />
},
{
  name: "Northern Mariana Islands",
  code: "en-MP",
  flag: <Flags.MpFlag />
},
{
  name: "Martinique",
  code: "fr-MQ",
  flag: <Flags.MqFlag />
},
{
  name: "Mauritania",
  code: "ar-MR",
  flag: <Flags.MrFlag />
},
{
  name: "Montserrat",
  code: "en-MS",
  flag: <Flags.MsFlag />
},
{
  name: "Malta",
  code: "mt-MT",
  flag: <Flags.MtFlag />
},
{
  name: "Mauritius",
  code: "en-MU",
  flag: <Flags.MuFlag />
},
{
  name: "Maldives",
  code: "dv-MV",
  flag: <Flags.MvFlag />
},
{
  name: "Malawi",
  code: "en-MW",
  flag: <Flags.MwFlag />
},
{
  name: "Mexico",
  code: "es-MX",
  flag: <Flags.MxFlag />
},
{
  name: "Malaysia",
  code: "ms-MY",
  flag: <Flags.MyFlag />
},
{
  name: "Mozambique",
  code: "pt-MZ",
  flag: <Flags.MzFlag />
},
{
  name: "Namibia",
  code: "en-NA",
  flag: <Flags.NaFlag />
},
{
  name: "Niger",
  code: "fr-NE",
  flag: <Flags.NeFlag />
},
{
  name: "Norfolk Island",
  code: "en-NF",
  flag: <Flags.NfFlag />
},
{
  name: "Nigeria",
  code: "en-NG",
  flag: <Flags.NgFlag />
},
{
  name: "Nicaragua",
  code: "es-NI",
  flag: <Flags.NiFlag />
},
{
  name: "Netherlands",
  code: "nl-NL",
  flag: <Flags.NlFlag />
},
{
  name: "Norway",
  code: "nb-NO",
  flag: <Flags.NoFlag />
},
{
  name: "Nepal",
  code: "ne-NP",
  flag: <Flags.NpFlag />
},
{
  name: "Nauru",
  code: "en-NR",
  flag: <Flags.NrFlag />
},
{
  name: "Niue",
  code: "en-NU",
  flag: <Flags.NuFlag />
},
{
  name: "New Zealand",
  code: "en-NZ",
  flag: <Flags.NzFlag />
},
{
  name: "Oman",
  code: "ar-OM",
  flag: <Flags.OmFlag />
},
{
  name: "Panama",
  code: "es-PA",
  flag: <Flags.PaFlag />
},
{
  name: "Peru",
  code: "es-PE",
  flag: <Flags.PeFlag />
},
{
  name: "French Polynesia",
  code: "fr-PF",
  flag: <Flags.PfFlag />
},
{
  name: "Papua New Guinea",
  code: "en-PG",
  flag: <Flags.PgFlag />
},
{
  name: "Philippines",
  code: "en-PH",
  flag: <Flags.PhFlag />
},
{
  name: "Pakistan",
  code: "ur-PK",
  flag: <Flags.PkFlag />
},
{
  name: "Poland",
  code: "pl-PL",
  flag: <Flags.PlFlag />
},
{
  name: "Pitcairn Islands",
  code: "en-PN",
  flag: <Flags.PnFlag />
},
{
  name: "Puerto Rico",
  code: "es-PR",
  flag: <Flags.PrFlag />
},
{
  name: "Palestine",
  code: "ar-PS",
  flag: <Flags.PsFlag />
},
{
  name: "Portugal",
  code: "pt-PT",
  flag: <Flags.PtFlag />
},
{
  name: "Palau",
  code: "en-PW",
  flag: <Flags.PwFlag />
},
{
  name: "Paraguay",
  code: "es-PY",
  flag: <Flags.PyFlag />
},
{
  name: "Qatar",
  code: "ar-QA",
  flag: <Flags.QaFlag />
},
{
  name: "Romania",
  code: "ro-RO",
  flag: <Flags.RoFlag />
},
{
  name: "Serbia",
  code: "sr-RS",
  flag: <Flags.RsFlag />
},
{
  name: "Russia",
  code: "ru-RU",
  flag: <Flags.RuFlag />
},
{
  name: "Rwanda",
  code: "rw-RW",
  flag: <Flags.RwFlag />
},
{
  name: "Saudi Arabia",
  code: "ar-SA",
  flag: <Flags.SaFlag />
},
{
  name: "Solomon Islands",
  code: "en-SB",
  flag: <Flags.SbFlag />
},
{
  name: "Seychelles",
  code: "fr-SC",
  flag: <Flags.ScFlag />
},
{
  name: "Sudan",
  code: "ar-SD",
  flag: <Flags.SdFlag />
},
{
  name: "Sweden",
  code: "sv-SE",
  flag: <Flags.SeFlag />
},
{
  name: "Singapore",
  code: "en-SG",
  flag: <Flags.SgFlag />
},
{
  name: "Slovenia",
  code: "sl-SI",
  flag: <Flags.SiFlag />
},
{
  name: "Slovakia",
  code: "sk-SK",
  flag: <Flags.SkFlag />
},
{
  name: "Sierra Leone",
  code: "en-SL",
  flag: <Flags.SlFlag />
},
{
  name: "San Marino",
  code: "it-SM",
  flag: <Flags.SmFlag />
},
{
  name: "Senegal",
  code: "fr-SN",
  flag: <Flags.SnFlag />
},
{
  name: "Somalia",
  code: "so-SO",
  flag: <Flags.SoFlag />
},
{
  name: "Suriname",
  code: "nl-SR",
  flag: <Flags.SrFlag />
},
{
  name: "South Sudan",
  code: "en-SS",
  flag: <Flags.SsFlag />
},
{
  name: "Sao Tome and Principe",
  code: "pt-ST",
  flag: <Flags.StFlag />
},
{
  name: "El Salvador",
  code: "es-SV",
  flag: <Flags.SvFlag />
},
{
  name: "Sint Maarten",
  code: "en-SX",
  flag: <Flags.SxFlag />
},
{
  name: "Syria",
  code: "ar-SY",
  flag: <Flags.SyFlag />
},
{
  name: "Eswatini",
  code: "en-SZ",
  flag: <Flags.SzFlag />
},
{
  name: "Turks and Caicos Islands",
  code: "en-TC",
  flag: <Flags.TcFlag />
},
{
  name: "Chad",
  code: "fr-TD",
  flag: <Flags.TdFlag />
},
{
  name: "Togo",
  code: "fr-TG",
  flag: <Flags.TgFlag />
},
{
  name: "Thailand",
  code: "th-TH",
  flag: <Flags.ThFlag />
},
{
  name: "Tajikistan",
  code: "tg-TJ",
  flag: <Flags.TjFlag />
},
{
  name: "Tokelau",
  code: "en-TK",
  flag: <Flags.TkFlag />
},
{
  name: "Turkmenistan",
  code: "tk-TM",
  flag: <Flags.TmFlag />
},
{
  name: "Tunisia",
  code: "ar-TN",
  flag: <Flags.TnFlag />
},
{
  name: "Tonga",
  code: "en-TO",
  flag: <Flags.ToFlag />
},
{
  name: "Turkey",
  code: "tr-TR",
  flag: <Flags.TrFlag />
},
{
  name: "Trinidad and Tobago",
  code: "en-TT",
  flag: <Flags.TtFlag />
},
{
  name: "Tuvalu",
  code: "en-TV",
  flag: <Flags.TvFlag />
},
{
  name: "Taiwan",
  code: "zh-TW",
  flag: <Flags.TwFlag />
},
{
  name: "Tanzania",
  code: "sw-TZ",
  flag: <Flags.TzFlag />
},
{
  name: "Ukraine",
  code: "uk-UA",
  flag: <Flags.UaFlag />
},
{
  name: "Uganda",
  code: "sw-UG",
  flag: <Flags.UgFlag />
},
{
  name: "United States",
  code: "en-US",
  flag: <Flags.UsFlag />
},
{
  name: "Uruguay",
  code: "es-UY",
  flag: <Flags.UyFlag />
},
{
  name: "Uzbekistan",
  code: "uz-UZ",
  flag: <Flags.UzFlag />
},
{
  name: "Venezuela",
  code: "es-VE",
  flag: <Flags.VeFlag />
},
{
  name: "U.S. Virgin Islands",
  code: "en-VI",
  flag: <Flags.ViFlag />
},
{
  name: "Vietnam",
  code: "vi-VN",
  flag: <Flags.VnFlag />
},
{
  name: "Vanuatu",
  code: "en-VU",
  flag: <Flags.VuFlag />
},
{
  name: "Samoa",
  code: "en-WS",
  flag: <Flags.WsFlag />
},
{
  name: "Yemen",
  code: "ar-YE",
  flag: <Flags.YeFlag />
},
{
  name: "South Africa",
  code: "af-ZA",
  flag: <Flags.ZaFlag />
},
{
  name: "Zambia",
  code: "en-ZM",
  flag: <Flags.ZmFlag />
},
{
  name: "Zimbabwe",
  code: "en-ZW",
  flag: <Flags.ZwFlag />
}
];

export const sttSupportCountries: CountryEntry[] = [
{
  name: "United Arab Emirates",
  code: "ar-AE",
  flag: <Flags.AeFlag />
},
{
  name: "Afghanistan",
  code: "fa-AF",
  flag: <Flags.AfFlag />
},
{
  name: "Albania",
  code: "sq-AL",
  flag: <Flags.AlFlag />
},
{
  name: "Armenia",
  code: "hy-AM",
  flag: <Flags.AmFlag />
},
{
  name: "Argentina",
  code: "es-AR",
  flag: <Flags.ArFlag />
},
{
  name: "Austria",
  code: "de-AT",
  flag: <Flags.AtFlag />
},
{
  name: "Australia",
  code: "en-AU",
  flag: <Flags.AuFlag />
},
{
  name: "Azerbaijan",
  code: "az-AZ",
  flag: <Flags.AzFlag />
},
{
  name: "Bosnia and Herzegovina",
  code: "bs-BA",
  flag: <Flags.BaFlag />
},
{
  name: "Belgium",
  code: "nl-BE",
  flag: <Flags.BeFlag />
},
{
  name: "Bulgaria",
  code: "bg-BG",
  flag: <Flags.BgFlag />
},
{
  name: "Bahrain",
  code: "ar-BH",
  flag: <Flags.BhFlag />
},
{
  name: "Bolivia",
  code: "es-BO",
  flag: <Flags.BoFlag />
},
{
  name: "Brazil",
  code: "pt-BR",
  flag: <Flags.BrFlag />
},
{
  name: "Canada",
  code: "en-CA",
  flag: <Flags.CaFlag />
},
{
  name: "Switzerland",
  code: "de-CH",
  flag: <Flags.ChFlag />
},
{
  name: "Chile",
  code: "es-CL",
  flag: <Flags.ClFlag />
},
{
  name: "China",
  code: "zh-CN",
  flag: <Flags.CnFlag />
},
{
  name: "Colombia",
  code: "es-CO",
  flag: <Flags.CoFlag />
},
{
  name: "Costa Rica",
  code: "es-CR",
  flag: <Flags.CrFlag />
},
{
  name: "Cuba",
  code: "es-CU",
  flag: <Flags.CuFlag />
},
{
  name: "Czech Republic",
  code: "cs-CZ",
  flag: <Flags.CzFlag />
},
{
  name: "Germany",
  code: "de-DE",
  flag: <Flags.DeFlag />
},
{
  name: "Denmark",
  code: "da-DK",
  flag: <Flags.DkFlag />
},
{
  name: "Dominican Republic",
  code: "es-DO",
  flag: <Flags.DoFlag />
},
{
  name: "Algeria",
  code: "ar-DZ",
  flag: <Flags.DzFlag />
},
{
  name: "Ecuador",
  code: "es-EC",
  flag: <Flags.EcFlag />
},
{
  name: "Estonia",
  code: "et-EE",
  flag: <Flags.EeFlag />
},
{
  name: "Egypt",
  code: "ar-EG",
  flag: <Flags.EgFlag />
},
{
  name: "Spain",
  code: "es-ES",
  flag: <Flags.EsFlag />
},
{
  name: "Ethiopia",
  code: "am-ET",
  flag: <Flags.EtFlag />
},
{
  name: "Finland",
  code: "fi-FI",
  flag: <Flags.FiFlag />
},
{
  name: "France",
  code: "fr-FR",
  flag: <Flags.FrFlag />
},
{
  name: "United Kingdom",
  code: "en-GB",
  flag: <Flags.GbFlag />
},
{
  name: "Georgia",
  code: "ka-GE",
  flag: <Flags.GeFlag />
},
{
  name: "Ghana",
  code: "en-GH",
  flag: <Flags.GhFlag />
},
{
  name: "Equatorial Guinea",
  code: "es-GQ",
  flag: <Flags.GqFlag />
},
{
  name: "Greece",
  code: "el-GR",
  flag: <Flags.GrFlag />
},
{
  name: "Guatemala",
  code: "es-GT",
  flag: <Flags.GtFlag />
},
{
  name: "Hong Kong",
  code: "zh-HK",
  flag: <Flags.HkFlag />
},
{
  name: "Honduras",
  code: "es-HN",
  flag: <Flags.HnFlag />
},
{
  name: "Croatia",
  code: "hr-HR",
  flag: <Flags.HrFlag />
},
{
  name: "Hungary",
  code: "hu-HU",
  flag: <Flags.HuFlag />
},
{
  name: "Indonesia",
  code: "id-ID",
  flag: <Flags.IdFlag />
},
{
  name: "Ireland",
  code: "en-IE",
  flag: <Flags.IeFlag />
},
{
  name: "Israel",
  code: "he-IL",
  flag: <Flags.IlFlag />
},
{
  name: "India",
  code: "hi-IN",
  flag: <Flags.InFlag />
},
{
  name: "Iraq",
  code: "ar-IQ",
  flag: <Flags.IqFlag />
},
{
  name: "Iran",
  code: "fa-IR",
  flag: <Flags.IrFlag />
},
{
  name: "Iceland",
  code: "is-IS",
  flag: <Flags.IsFlag />
},
{
  name: "Italy",
  code: "it-IT",
  flag: <Flags.ItFlag />
},
{
  name: "Jordan",
  code: "ar-JO",
  flag: <Flags.JoFlag />
},
{
  name: "Japan",
  code: "ja-JP",
  flag: <Flags.JpFlag />
},
{
  name: "Kenya",
  code: "sw-KE",
  flag: <Flags.KeFlag />
},
{
  name: "Cambodia",
  code: "km-KH",
  flag: <Flags.KhFlag />
},
{
  name: "South Korea",
  code: "ko-KR",
  flag: <Flags.KrFlag />
},
{
  name: "Kuwait",
  code: "ar-KW",
  flag: <Flags.KwFlag />
},
{
  name: "Kazakhstan",
  code: "kk-KZ",
  flag: <Flags.KzFlag />
},
{
  name: "Laos",
  code: "lo-LA",
  flag: <Flags.LaFlag />
},
{
  name: "Lebanon",
  code: "ar-LB",
  flag: <Flags.LbFlag />
},
{
  name: "Sri Lanka",
  code: "si-LK",
  flag: <Flags.LkFlag />
},
{
  name: "Lithuania",
  code: "lt-LT",
  flag: <Flags.LtFlag />
},
{
  name: "Latvia",
  code: "lv-LV",
  flag: <Flags.LvFlag />
},
{
  name: "Libya",
  code: "ar-LY",
  flag: <Flags.LyFlag />
},
{
  name: "Morocco",
  code: "ar-MA",
  flag: <Flags.MaFlag />
},
{
  name: "North Macedonia",
  code: "mk-MK",
  flag: <Flags.MkFlag />
},
{
  name: "Myanmar",
  code: "my-MM",
  flag: <Flags.MmFlag />
},
{
  name: "Mongolia",
  code: "mn-MN",
  flag: <Flags.MnFlag />
},
{
  name: "Malta",
  code: "mt-MT",
  flag: <Flags.MtFlag />
},
{
  name: "Mexico",
  code: "es-MX",
  flag: <Flags.MxFlag />
},
{
  name: "Malaysia",
  code: "ms-MY",
  flag: <Flags.MyFlag />
},
{
  name: "Nigeria",
  code: "en-NG",
  flag: <Flags.NgFlag />
},
{
  name: "Nicaragua",
  code: "es-NI",
  flag: <Flags.NiFlag />
},
{
  name: "Netherlands",
  code: "nl-NL",
  flag: <Flags.NlFlag />
},
{
  name: "Norway",
  code: "nb-NO",
  flag: <Flags.NoFlag />
},
{
  name: "Nepal",
  code: "ne-NP",
  flag: <Flags.NpFlag />
},
{
  name: "New Zealand",
  code: "en-NZ",
  flag: <Flags.NzFlag />
},
{
  name: "Oman",
  code: "ar-OM",
  flag: <Flags.OmFlag />
},
{
  name: "Panama",
  code: "es-PA",
  flag: <Flags.PaFlag />
},
{
  name: "Peru",
  code: "es-PE",
  flag: <Flags.PeFlag />
},
{
  name: "Philippines",
  code: "en-PH",
  flag: <Flags.PhFlag />
},
{
  name: "Poland",
  code: "pl-PL",
  flag: <Flags.PlFlag />
},
{
  name: "Puerto Rico",
  code: "es-PR",
  flag: <Flags.PrFlag />
},
{
  name: "Palestine",
  code: "ar-PS",
  flag: <Flags.PsFlag />
},
{
  name: "Portugal",
  code: "pt-PT",
  flag: <Flags.PtFlag />
},
{
  name: "Paraguay",
  code: "es-PY",
  flag: <Flags.PyFlag />
},
{
  name: "Qatar",
  code: "ar-QA",
  flag: <Flags.QaFlag />
},
{
  name: "Romania",
  code: "ro-RO",
  flag: <Flags.RoFlag />
},
{
  name: "Serbia",
  code: "sr-RS",
  flag: <Flags.RsFlag />
},
{
  name: "Russia",
  code: "ru-RU",
  flag: <Flags.RuFlag />
},
{
  name: "Saudi Arabia",
  code: "ar-SA",
  flag: <Flags.SaFlag />
},
{
  name: "Sweden",
  code: "sv-SE",
  flag: <Flags.SeFlag />
},
{
  name: "Singapore",
  code: "en-SG",
  flag: <Flags.SgFlag />
},
{
  name: "Slovenia",
  code: "sl-SI",
  flag: <Flags.SiFlag />
},
{
  name: "Slovakia",
  code: "sk-SK",
  flag: <Flags.SkFlag />
},
{
  name: "Somalia",
  code: "so-SO",
  flag: <Flags.SoFlag />
},
{
  name: "El Salvador",
  code: "es-SV",
  flag: <Flags.SvFlag />
},
{
  name: "Syria",
  code: "ar-SY",
  flag: <Flags.SyFlag />
},
{
  name: "Thailand",
  code: "th-TH",
  flag: <Flags.ThFlag />
},
{
  name: "Tunisia",
  code: "ar-TN",
  flag: <Flags.TnFlag />
},
{
  name: "Turkey",
  code: "tr-TR",
  flag: <Flags.TrFlag />
},
{
  name: "Taiwan",
  code: "zh-TW",
  flag: <Flags.TwFlag />
},
{
  name: "Tanzania",
  code: "sw-TZ",
  flag: <Flags.TzFlag />
},
{
  name: "Ukraine",
  code: "uk-UA",
  flag: <Flags.UaFlag />
},
{
  name: "United States",
  code: "en-US",
  flag: <Flags.UsFlag />
},
{
  name: "Uruguay",
  code: "es-UY",
  flag: <Flags.UyFlag />
},
{
  name: "Uzbekistan",
  code: "uz-UZ",
  flag: <Flags.UzFlag />
},
{
  name: "Venezuela",
  code: "es-VE",
  flag: <Flags.VeFlag />
},
{
  name: "Vietnam",
  code: "vi-VN",
  flag: <Flags.VnFlag />
},
{
  name: "Yemen",
  code: "ar-YE",
  flag: <Flags.YeFlag />
},
{
  name: "South Africa",
  code: "af-ZA",
  flag: <Flags.ZaFlag />
}
];

export const sttTtsSupportCountries: CountryEntry[] = [
{
  name: "United Arab Emirates",
  code: "ar-AE",
  flag: <Flags.AeFlag />
},
{
  name: "Afghanistan",
  code: "fa-AF",
  flag: <Flags.AfFlag />
},
{
  name: "Albania",
  code: "sq-AL",
  flag: <Flags.AlFlag />
},
{
  name: "Armenia",
  code: "hy-AM",
  flag: <Flags.AmFlag />
},
{
  name: "Argentina",
  code: "es-AR",
  flag: <Flags.ArFlag />
},
{
  name: "Austria",
  code: "de-AT",
  flag: <Flags.AtFlag />
},
{
  name: "Australia",
  code: "en-AU",
  flag: <Flags.AuFlag />
},
{
  name: "Azerbaijan",
  code: "az-AZ",
  flag: <Flags.AzFlag />
},
{
  name: "Bosnia and Herzegovina",
  code: "bs-BA",
  flag: <Flags.BaFlag />
},
{
  name: "Belgium",
  code: "nl-BE",
  flag: <Flags.BeFlag />
},
{
  name: "Bulgaria",
  code: "bg-BG",
  flag: <Flags.BgFlag />
},
{
  name: "Bahrain",
  code: "ar-BH",
  flag: <Flags.BhFlag />
},
{
  name: "Bolivia",
  code: "es-BO",
  flag: <Flags.BoFlag />
},
{
  name: "Brazil",
  code: "pt-BR",
  flag: <Flags.BrFlag />
},
{
  name: "Canada",
  code: "en-CA",
  flag: <Flags.CaFlag />
},
{
  name: "Switzerland",
  code: "de-CH",
  flag: <Flags.ChFlag />
},
{
  name: "Chile",
  code: "es-CL",
  flag: <Flags.ClFlag />
},
{
  name: "China",
  code: "zh-CN",
  flag: <Flags.CnFlag />
},
{
  name: "Colombia",
  code: "es-CO",
  flag: <Flags.CoFlag />
},
{
  name: "Costa Rica",
  code: "es-CR",
  flag: <Flags.CrFlag />
},
{
  name: "Cuba",
  code: "es-CU",
  flag: <Flags.CuFlag />
},
{
  name: "Czech Republic",
  code: "cs-CZ",
  flag: <Flags.CzFlag />
},
{
  name: "Germany",
  code: "de-DE",
  flag: <Flags.DeFlag />
},
{
  name: "Denmark",
  code: "da-DK",
  flag: <Flags.DkFlag />
},
{
  name: "Dominican Republic",
  code: "es-DO",
  flag: <Flags.DoFlag />
},
{
  name: "Algeria",
  code: "ar-DZ",
  flag: <Flags.DzFlag />
},
{
  name: "Ecuador",
  code: "es-EC",
  flag: <Flags.EcFlag />
},
{
  name: "Estonia",
  code: "et-EE",
  flag: <Flags.EeFlag />
},
{
  name: "Egypt",
  code: "ar-EG",
  flag: <Flags.EgFlag />
},
{
  name: "Spain",
  code: "es-ES",
  flag: <Flags.EsFlag />
},
{
  name: "Ethiopia",
  code: "am-ET",
  flag: <Flags.EtFlag />
},
{
  name: "Finland",
  code: "fi-FI",
  flag: <Flags.FiFlag />
},
{
  name: "France",
  code: "fr-FR",
  flag: <Flags.FrFlag />
},
{
  name: "United Kingdom",
  code: "en-GB",
  flag: <Flags.GbFlag />
},
{
  name: "Georgia",
  code: "ka-GE",
  flag: <Flags.GeFlag />
},
{
  name: "Equatorial Guinea",
  code: "es-GQ",
  flag: <Flags.GqFlag />
},
{
  name: "Greece",
  code: "el-GR",
  flag: <Flags.GrFlag />
},
{
  name: "Guatemala",
  code: "es-GT",
  flag: <Flags.GtFlag />
},
{
  name: "Hong Kong",
  code: "zh-HK",
  flag: <Flags.HkFlag />
},
{
  name: "Honduras",
  code: "es-HN",
  flag: <Flags.HnFlag />
},
{
  name: "Croatia",
  code: "hr-HR",
  flag: <Flags.HrFlag />
},
{
  name: "Hungary",
  code: "hu-HU",
  flag: <Flags.HuFlag />
},
{
  name: "Indonesia",
  code: "id-ID",
  flag: <Flags.IdFlag />
},
{
  name: "Ireland",
  code: "en-IE",
  flag: <Flags.IeFlag />
},
{
  name: "Israel",
  code: "he-IL",
  flag: <Flags.IlFlag />
},
{
  name: "India",
  code: "hi-IN",
  flag: <Flags.InFlag />
},
{
  name: "Iraq",
  code: "ar-IQ",
  flag: <Flags.IqFlag />
},
{
  name: "Iran",
  code: "fa-IR",
  flag: <Flags.IrFlag />
},
{
  name: "Iceland",
  code: "is-IS",
  flag: <Flags.IsFlag />
},
{
  name: "Italy",
  code: "it-IT",
  flag: <Flags.ItFlag />
},
{
  name: "Jordan",
  code: "ar-JO",
  flag: <Flags.JoFlag />
},
{
  name: "Japan",
  code: "ja-JP",
  flag: <Flags.JpFlag />
},
{
  name: "Kenya",
  code: "sw-KE",
  flag: <Flags.KeFlag />
},
{
  name: "Cambodia",
  code: "km-KH",
  flag: <Flags.KhFlag />
},
{
  name: "South Korea",
  code: "ko-KR",
  flag: <Flags.KrFlag />
},
{
  name: "Kuwait",
  code: "ar-KW",
  flag: <Flags.KwFlag />
},
{
  name: "Kazakhstan",
  code: "kk-KZ",
  flag: <Flags.KzFlag />
},
{
  name: "Laos",
  code: "lo-LA",
  flag: <Flags.LaFlag />
},
{
  name: "Lebanon",
  code: "ar-LB",
  flag: <Flags.LbFlag />
},
{
  name: "Sri Lanka",
  code: "si-LK",
  flag: <Flags.LkFlag />
},
{
  name: "Lithuania",
  code: "lt-LT",
  flag: <Flags.LtFlag />
},
{
  name: "Latvia",
  code: "lv-LV",
  flag: <Flags.LvFlag />
},
{
  name: "Libya",
  code: "ar-LY",
  flag: <Flags.LyFlag />
},
{
  name: "Morocco",
  code: "ar-MA",
  flag: <Flags.MaFlag />
},
{
  name: "North Macedonia",
  code: "mk-MK",
  flag: <Flags.MkFlag />
},
{
  name: "Myanmar",
  code: "my-MM",
  flag: <Flags.MmFlag />
},
{
  name: "Mongolia",
  code: "mn-MN",
  flag: <Flags.MnFlag />
},
{
  name: "Malta",
  code: "mt-MT",
  flag: <Flags.MtFlag />
},
{
  name: "Mexico",
  code: "es-MX",
  flag: <Flags.MxFlag />
},
{
  name: "Malaysia",
  code: "ms-MY",
  flag: <Flags.MyFlag />
},
{
  name: "Nigeria",
  code: "en-NG",
  flag: <Flags.NgFlag />
},
{
  name: "Nicaragua",
  code: "es-NI",
  flag: <Flags.NiFlag />
},
{
  name: "Netherlands",
  code: "nl-NL",
  flag: <Flags.NlFlag />
},
{
  name: "Norway",
  code: "nb-NO",
  flag: <Flags.NoFlag />
},
{
  name: "Nepal",
  code: "ne-NP",
  flag: <Flags.NpFlag />
},
{
  name: "New Zealand",
  code: "en-NZ",
  flag: <Flags.NzFlag />
},
{
  name: "Oman",
  code: "ar-OM",
  flag: <Flags.OmFlag />
},
{
  name: "Panama",
  code: "es-PA",
  flag: <Flags.PaFlag />
},
{
  name: "Peru",
  code: "es-PE",
  flag: <Flags.PeFlag />
},
{
  name: "Philippines",
  code: "en-PH",
  flag: <Flags.PhFlag />
},
{
  name: "Poland",
  code: "pl-PL",
  flag: <Flags.PlFlag />
},
{
  name: "Puerto Rico",
  code: "es-PR",
  flag: <Flags.PrFlag />
},
{
  name: "Portugal",
  code: "pt-PT",
  flag: <Flags.PtFlag />
},
{
  name: "Paraguay",
  code: "es-PY",
  flag: <Flags.PyFlag />
},
{
  name: "Qatar",
  code: "ar-QA",
  flag: <Flags.QaFlag />
},
{
  name: "Romania",
  code: "ro-RO",
  flag: <Flags.RoFlag />
},
{
  name: "Serbia",
  code: "sr-RS",
  flag: <Flags.RsFlag />
},
{
  name: "Russia",
  code: "ru-RU",
  flag: <Flags.RuFlag />
},
{
  name: "Saudi Arabia",
  code: "ar-SA",
  flag: <Flags.SaFlag />
},
{
  name: "Sweden",
  code: "sv-SE",
  flag: <Flags.SeFlag />
},
{
  name: "Singapore",
  code: "en-SG",
  flag: <Flags.SgFlag />
},
{
  name: "Slovenia",
  code: "sl-SI",
  flag: <Flags.SiFlag />
},
{
  name: "Slovakia",
  code: "sk-SK",
  flag: <Flags.SkFlag />
},
{
  name: "Somalia",
  code: "so-SO",
  flag: <Flags.SoFlag />
},
{
  name: "El Salvador",
  code: "es-SV",
  flag: <Flags.SvFlag />
},
{
  name: "Syria",
  code: "ar-SY",
  flag: <Flags.SyFlag />
},
{
  name: "Thailand",
  code: "th-TH",
  flag: <Flags.ThFlag />
},
{
  name: "Tunisia",
  code: "ar-TN",
  flag: <Flags.TnFlag />
},
{
  name: "Turkey",
  code: "tr-TR",
  flag: <Flags.TrFlag />
},
{
  name: "Taiwan",
  code: "zh-TW",
  flag: <Flags.TwFlag />
},
{
  name: "Tanzania",
  code: "sw-TZ",
  flag: <Flags.TzFlag />
},
{
  name: "Ukraine",
  code: "uk-UA",
  flag: <Flags.UaFlag />
},
{
  name: "United States",
  code: "en-US",
  flag: <Flags.UsFlag />
},
{
  name: "Uruguay",
  code: "es-UY",
  flag: <Flags.UyFlag />
},
{
  name: "Uzbekistan",
  code: "uz-UZ",
  flag: <Flags.UzFlag />
},
{
  name: "Venezuela",
  code: "es-VE",
  flag: <Flags.VeFlag />
},
{
  name: "Vietnam",
  code: "vi-VN",
  flag: <Flags.VnFlag />
},
{
  name: "Yemen",
  code: "ar-YE",
  flag: <Flags.YeFlag />
},
{
  name: "South Africa",
  code: "af-ZA",
  flag: <Flags.ZaFlag />
}
];

export const ttsSupportCountries: CountryEntry[] = [
{
  name: "United Arab Emirates",
  code: "ar-AE",
  flag: <Flags.AeFlag />
},
{
  name: "Afghanistan",
  code: "fa-AF",
  flag: <Flags.AfFlag />
},
{
  name: "Albania",
  code: "sq-AL",
  flag: <Flags.AlFlag />
},
{
  name: "Armenia",
  code: "hy-AM",
  flag: <Flags.AmFlag />
},
{
  name: "Argentina",
  code: "es-AR",
  flag: <Flags.ArFlag />
},
{
  name: "Austria",
  code: "de-AT",
  flag: <Flags.AtFlag />
},
{
  name: "Australia",
  code: "en-AU",
  flag: <Flags.AuFlag />
},
{
  name: "Azerbaijan",
  code: "az-AZ",
  flag: <Flags.AzFlag />
},
{
  name: "Bosnia and Herzegovina",
  code: "bs-BA",
  flag: <Flags.BaFlag />
},
{
  name: "Bangladesh",
  code: "bn-BD",
  flag: <Flags.BdFlag />
},
{
  name: "Belgium",
  code: "nl-BE",
  flag: <Flags.BeFlag />
},
{
  name: "Bulgaria",
  code: "bg-BG",
  flag: <Flags.BgFlag />
},
{
  name: "Bahrain",
  code: "ar-BH",
  flag: <Flags.BhFlag />
},
{
  name: "Bolivia",
  code: "es-BO",
  flag: <Flags.BoFlag />
},
{
  name: "Brazil",
  code: "pt-BR",
  flag: <Flags.BrFlag />
},
{
  name: "Canada",
  code: "en-CA",
  flag: <Flags.CaFlag />
},
{
  name: "Switzerland",
  code: "de-CH",
  flag: <Flags.ChFlag />
},
{
  name: "Chile",
  code: "es-CL",
  flag: <Flags.ClFlag />
},
{
  name: "China",
  code: "zh-CN",
  flag: <Flags.CnFlag />
},
{
  name: "Colombia",
  code: "es-CO",
  flag: <Flags.CoFlag />
},
{
  name: "Costa Rica",
  code: "es-CR",
  flag: <Flags.CrFlag />
},
{
  name: "Cuba",
  code: "es-CU",
  flag: <Flags.CuFlag />
},
{
  name: "Czech Republic",
  code: "cs-CZ",
  flag: <Flags.CzFlag />
},
{
  name: "Germany",
  code: "de-DE",
  flag: <Flags.DeFlag />
},
{
  name: "Denmark",
  code: "da-DK",
  flag: <Flags.DkFlag />
},
{
  name: "Dominican Republic",
  code: "es-DO",
  flag: <Flags.DoFlag />
},
{
  name: "Algeria",
  code: "ar-DZ",
  flag: <Flags.DzFlag />
},
{
  name: "Ecuador",
  code: "es-EC",
  flag: <Flags.EcFlag />
},
{
  name: "Estonia",
  code: "et-EE",
  flag: <Flags.EeFlag />
},
{
  name: "Egypt",
  code: "ar-EG",
  flag: <Flags.EgFlag />
},
{
  name: "Spain",
  code: "es-ES",
  flag: <Flags.EsFlag />
},
{
  name: "Ethiopia",
  code: "am-ET",
  flag: <Flags.EtFlag />
},
{
  name: "Finland",
  code: "fi-FI",
  flag: <Flags.FiFlag />
},
{
  name: "France",
  code: "fr-FR",
  flag: <Flags.FrFlag />
},
{
  name: "United Kingdom",
  code: "en-GB",
  flag: <Flags.GbFlag />
},
{
  name: "Georgia",
  code: "ka-GE",
  flag: <Flags.GeFlag />
},
{
  name: "Equatorial Guinea",
  code: "es-GQ",
  flag: <Flags.GqFlag />
},
{
  name: "Greece",
  code: "el-GR",
  flag: <Flags.GrFlag />
},
{
  name: "Guatemala",
  code: "es-GT",
  flag: <Flags.GtFlag />
},
{
  name: "Hong Kong",
  code: "zh-HK",
  flag: <Flags.HkFlag />
},
{
  name: "Honduras",
  code: "es-HN",
  flag: <Flags.HnFlag />
},
{
  name: "Croatia",
  code: "hr-HR",
  flag: <Flags.HrFlag />
},
{
  name: "Hungary",
  code: "hu-HU",
  flag: <Flags.HuFlag />
},
{
  name: "Indonesia",
  code: "id-ID",
  flag: <Flags.IdFlag />
},
{
  name: "Ireland",
  code: "en-IE",
  flag: <Flags.IeFlag />
},
{
  name: "Israel",
  code: "he-IL",
  flag: <Flags.IlFlag />
},
{
  name: "India",
  code: "hi-IN",
  flag: <Flags.InFlag />
},
{
  name: "Iraq",
  code: "ar-IQ",
  flag: <Flags.IqFlag />
},
{
  name: "Iran",
  code: "fa-IR",
  flag: <Flags.IrFlag />
},
{
  name: "Iceland",
  code: "is-IS",
  flag: <Flags.IsFlag />
},
{
  name: "Italy",
  code: "it-IT",
  flag: <Flags.ItFlag />
},
{
  name: "Jordan",
  code: "ar-JO",
  flag: <Flags.JoFlag />
},
{
  name: "Japan",
  code: "ja-JP",
  flag: <Flags.JpFlag />
},
{
  name: "Kenya",
  code: "sw-KE",
  flag: <Flags.KeFlag />
},
{
  name: "Cambodia",
  code: "km-KH",
  flag: <Flags.KhFlag />
},
{
  name: "South Korea",
  code: "ko-KR",
  flag: <Flags.KrFlag />
},
{
  name: "Kuwait",
  code: "ar-KW",
  flag: <Flags.KwFlag />
},
{
  name: "Kazakhstan",
  code: "kk-KZ",
  flag: <Flags.KzFlag />
},
{
  name: "Laos",
  code: "lo-LA",
  flag: <Flags.LaFlag />
},
{
  name: "Lebanon",
  code: "ar-LB",
  flag: <Flags.LbFlag />
},
{
  name: "Sri Lanka",
  code: "si-LK",
  flag: <Flags.LkFlag />
},
{
  name: "Lithuania",
  code: "lt-LT",
  flag: <Flags.LtFlag />
},
{
  name: "Latvia",
  code: "lv-LV",
  flag: <Flags.LvFlag />
},
{
  name: "Libya",
  code: "ar-LY",
  flag: <Flags.LyFlag />
},
{
  name: "Morocco",
  code: "ar-MA",
  flag: <Flags.MaFlag />
},
{
  name: "North Macedonia",
  code: "mk-MK",
  flag: <Flags.MkFlag />
},
{
  name: "Myanmar",
  code: "my-MM",
  flag: <Flags.MmFlag />
},
{
  name: "Mongolia",
  code: "mn-MN",
  flag: <Flags.MnFlag />
},
{
  name: "Malta",
  code: "mt-MT",
  flag: <Flags.MtFlag />
},
{
  name: "Mexico",
  code: "es-MX",
  flag: <Flags.MxFlag />
},
{
  name: "Malaysia",
  code: "ms-MY",
  flag: <Flags.MyFlag />
},
{
  name: "Nigeria",
  code: "en-NG",
  flag: <Flags.NgFlag />
},
{
  name: "Nicaragua",
  code: "es-NI",
  flag: <Flags.NiFlag />
},
{
  name: "Netherlands",
  code: "nl-NL",
  flag: <Flags.NlFlag />
},
{
  name: "Norway",
  code: "nb-NO",
  flag: <Flags.NoFlag />
},
{
  name: "Nepal",
  code: "ne-NP",
  flag: <Flags.NpFlag />
},
{
  name: "New Zealand",
  code: "en-NZ",
  flag: <Flags.NzFlag />
},
{
  name: "Oman",
  code: "ar-OM",
  flag: <Flags.OmFlag />
},
{
  name: "Panama",
  code: "es-PA",
  flag: <Flags.PaFlag />
},
{
  name: "Peru",
  code: "es-PE",
  flag: <Flags.PeFlag />
},
{
  name: "Philippines",
  code: "en-PH",
  flag: <Flags.PhFlag />
},
{
  name: "Pakistan",
  code: "ur-PK",
  flag: <Flags.PkFlag />
},
{
  name: "Poland",
  code: "pl-PL",
  flag: <Flags.PlFlag />
},
{
  name: "Puerto Rico",
  code: "es-PR",
  flag: <Flags.PrFlag />
},
{
  name: "Portugal",
  code: "pt-PT",
  flag: <Flags.PtFlag />
},
{
  name: "Paraguay",
  code: "es-PY",
  flag: <Flags.PyFlag />
},
{
  name: "Qatar",
  code: "ar-QA",
  flag: <Flags.QaFlag />
},
{
  name: "Romania",
  code: "ro-RO",
  flag: <Flags.RoFlag />
},
{
  name: "Serbia",
  code: "sr-RS",
  flag: <Flags.RsFlag />
},
{
  name: "Russia",
  code: "ru-RU",
  flag: <Flags.RuFlag />
},
{
  name: "Saudi Arabia",
  code: "ar-SA",
  flag: <Flags.SaFlag />
},
{
  name: "Sweden",
  code: "sv-SE",
  flag: <Flags.SeFlag />
},
{
  name: "Singapore",
  code: "en-SG",
  flag: <Flags.SgFlag />
},
{
  name: "Slovenia",
  code: "sl-SI",
  flag: <Flags.SiFlag />
},
{
  name: "Slovakia",
  code: "sk-SK",
  flag: <Flags.SkFlag />
},
{
  name: "Somalia",
  code: "so-SO",
  flag: <Flags.SoFlag />
},
{
  name: "El Salvador",
  code: "es-SV",
  flag: <Flags.SvFlag />
},
{
  name: "Syria",
  code: "ar-SY",
  flag: <Flags.SyFlag />
},
{
  name: "Thailand",
  code: "th-TH",
  flag: <Flags.ThFlag />
},
{
  name: "Tunisia",
  code: "ar-TN",
  flag: <Flags.TnFlag />
},
{
  name: "Turkey",
  code: "tr-TR",
  flag: <Flags.TrFlag />
},
{
  name: "Taiwan",
  code: "zh-TW",
  flag: <Flags.TwFlag />
},
{
  name: "Tanzania",
  code: "sw-TZ",
  flag: <Flags.TzFlag />
},
{
  name: "Ukraine",
  code: "uk-UA",
  flag: <Flags.UaFlag />
},
{
  name: "United States",
  code: "en-US",
  flag: <Flags.UsFlag />
},
{
  name: "Uruguay",
  code: "es-UY",
  flag: <Flags.UyFlag />
},
{
  name: "Uzbekistan",
  code: "uz-UZ",
  flag: <Flags.UzFlag />
},
{
  name: "Venezuela",
  code: "es-VE",
  flag: <Flags.VeFlag />
},
{
  name: "Vietnam",
  code: "vi-VN",
  flag: <Flags.VnFlag />
},
{
  name: "Yemen",
  code: "ar-YE",
  flag: <Flags.YeFlag />
},
{
  name: "South Africa",
  code: "af-ZA",
  flag: <Flags.ZaFlag />
}
];

