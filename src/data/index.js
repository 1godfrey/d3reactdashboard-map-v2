function calculateDecadeTotal(data) {
  return data.reduce((total, current) => total + current.count, 0);
}

const data = [
  {
    State: "Alaska",
    postal: "AK",
    Region: "West",
    fips: 2,
    Average_Population: 737000,
    Gender_Demo: [117, 27, 16],
    opioidDeaths: [
      { date: "2014-1-1", count: 124 },
      { date: "2015-1-1", count: 122 },
      { date: "2016-1-1", count: 128 },
      { date: "2017-1-1", count: 147 },
      { date: "2018-1-1", count: 110 },
      { date: "2019-1-1", count: 132 },
      { date: "2020-1-1", count: 114 }
    ]
  },
  {
    State: "Delaware",
    postal: "DE",
    Region: "Northeast",
    fips: 10,
    Average_Population: 936000,
    Gender_Demo: [352, 64, 28],
    opioidDeaths: [
      { date: "2014-1-1", count: 189 },
      { date: "2015-1-1", count: 198 },
      { date: "2016-1-1", count: 282 },
      { date: "2017-1-1", count: 338 },
      { date: "2018-1-1", count: 401 },
      { date: "2019-1-1", count: 435 },
      { date: "2020-1-1", count: 444 }
    ]
  },
  {
    State: "DC",
    postal: "DC",
    Region: "Southeast",
    fips: 11,
    Average_Population: 659000,
    Gender_Demo: [79, 26, 9],
    opioidDeaths: [
      { date: "2014-1-1", count: 124 },
      { date: "2015-1-1", count: 122 },
      { date: "2016-1-1", count: 128 },
      { date: "2017-1-1", count: 147 },
      { date: "2018-1-1", count: 110 },
      { date: "2019-1-1", count: 132 },
      { date: "2020-1-1", count: 114 }
    ]
  },
  {
    State: "Illinois",
    postal: "IL",
    Region: "Midwest",
    fips: 17,
    Average_Population: 12881000,
    Gender_Demo: [2342, 765, 441],    
    opioidDeaths: [
      { date: "2014-1-1", count: 1705 },
      { date: "2015-1-1", count: 1835 },
      { date: "2016-1-1", count: 2411 },
      { date: "2017-1-1", count: 2778 },
      { date: "2018-1-1", count: 2722 },
      { date: "2019-1-1", count: 2790 },
      { date: "2020-1-1", count: 3549 }
    ],
    // Decade_Total : opioidDeaths.reduce((total, current) => total + current.count, 0),
    // Average_Population,
    // Trend: (opioidDeaths[6].count - opioidDeaths[0].count) / opioidDeaths[0].count

  },
  {
    State: "North Dakota",
    postal: "ND",
    Region: "Midwest",
    fips: 38,
    Average_Population: 739000,
    Gender_Demo: [79, 26, 9],
    opioidDeaths: [
      { date: "2014-1-1", count: 43 },
      { date: "2015-1-1", count: 61 },
      { date: "2016-1-1", count: 77 },
      { date: "2017-1-1", count: 68 },
      { date: "2018-1-1", count: 70 },
      { date: "2019-1-1", count: 82 },
      { date: "2020-1-1", count: 114 }
    ]
  },
  {
    State: "Wyoming",
    postal: "WY",
    Region: "West",
    fips: 56,
    Average_Population: 584000,
    Gender_Demo: [66, 28, 5],
    opioidDeaths: [
      { date: "2014-1-1", count: 109 },
      { date: "2015-1-1", count: 96 },
      { date: "2016-1-1", count: 99 },
      { date: "2017-1-1", count: 69 },
      { date: "2018-1-1", count: 66 },
      { date: "2019-1-1", count: 79 },
      { date: "2020-1-1", count: 99 }
    ]
  },
  {
    State: "South Carolina",
    postal: "SC",
    Region: "Southeast",
    fips: 45,
    Average_Population: 4832000,
    Gender_Demo: [1523, 160, 56],
    opioidDeaths: [
      { date: "2014-1-1", count: 701 },
      { date: "2015-1-1", count: 761 },
      { date: "2016-1-1", count: 879 },
      { date: "2017-1-1", count: 1008 },
      { date: "2018-1-1", count: 1125 },
      { date: "2019-1-1", count: 1127 },
      { date: "2020-1-1", count: 1739 }
    ]
  },
  {
    State: "Connecticut",
    postal: "CT",
    Region: "Northeast",
    fips: 9,
    Average_Population: 3597000,
    Gender_Demo: [820, 324, 227],
    opioidDeaths: [
      { date: "2014-1-1", count: 623 },
      { date: "2015-1-1", count: 800 },
      { date: "2016-1-1", count: 971 },
      { date: "2017-1-1", count: 1072 },
      { date: "2018-1-1", count: 1069 },
      { date: "2019-1-1", count: 1214 },
      { date: "2020-1-1", count: 1371 }
    ]
  },
  {
    State: "Rhode Island",
    postal: "RI",
    Region: "Northeast",
    fips: 44,
    Average_Population: 1055000,
    Gender_Demo: [274, 94, 29],
    opioidDeaths: [
      { date: "2014-1-1", count: 247 },
      { date: "2015-1-1", count: 310 },
      { date: "2016-1-1", count: 326 },
      { date: "2017-1-1", count: 320 },
      { date: "2018-1-1", count: 317 },
      { date: "2019-1-1", count: 307 },
      { date: "2020-1-1", count: 397 }
    ]
  },
  {
    State: "Vermont",
    postal: "VT",
    Region: "Northeast",
    fips: 50,
    Average_Population: 627000,
    Gender_Demo: [130, 47, 13],
    opioidDeaths: [
      { date: "2014-1-1", count: 83 },
      { date: "2015-1-1", count: 99 },
      { date: "2016-1-1", count: 125 },
      { date: "2017-1-1", count: 134 },
      { date: "2018-1-1", count: 152 },
      { date: "2019-1-1", count: 133 },
      { date: "2020-1-1", count: 190 }
    ]
  },
  {
    State: "Colorado",
    postal: "CO",
    Region: "West",
    fips: 8,
    Average_Population: 5356000,
    Gender_Demo: [950, 402, 40],
    opioidDeaths: [
      { date: "2014-1-1", count: 899 },
      { date: "2015-1-1", count: 869 },
      { date: "2016-1-1", count: 942 },
      { date: "2017-1-1", count: 1015 },
      { date: "2018-1-1", count: 995 },
      { date: "2019-1-1", count: 1079 },
      { date: "2020-1-1", count: 1492 }
    ]
  },
  {
    State: "Nevada",
    postal: "NV",
    Region: "West",
    fips: 32,
    Average_Population: 2839000,
    Gender_Demo: [520, 221, 91],
    opioidDeaths: [
      { date: "2014-1-1", count: 545 },
      { date: "2015-1-1", count: 619 },
      { date: "2016-1-1", count: 665 },
      { date: "2017-1-1", count: 676 },
      { date: "2018-1-1", count: 668 },
      { date: "2019-1-1", count: 647 },
      { date: "2020-1-1", count: 832 }
    ]
  },
  {
    State: "New Hampshire",
    postal: "NH",
    Region: "Northeast",
    fips: 33,
    Average_Population: 1327000,
    Gender_Demo: [240, 113, 40],
    opioidDeaths: [
      { date: "2014-1-1", count: 334 },
      { date: "2015-1-1", count: 422 },
      { date: "2016-1-1", count: 481 },
      { date: "2017-1-1", count: 467 },
      { date: "2018-1-1", count: 452 },
      { date: "2019-1-1", count: 407 },
      { date: "2020-1-1", count: 393 }
    ]
  },
  {
    State: "Arizona",
    postal: "AZ",
    Region: "SouthWest",
    fips: 4,
    Average_Population: 6731000,
    Gender_Demo: [1540, 826, 184],
    opioidDeaths: [
      { date: "2014-1-1", count: 356 },
      { date: "2015-1-1", count: 1274 },
      { date: "2016-1-1", count: 1382 },
      { date: "2017-1-1", count: 1532 },
      { date: "2018-1-1", count: 1670 },
      { date: "2019-1-1", count: 1907 },
      { date: "2020-1-1", count: 2550 }
    ]
  },
  {
    State: "Alabama",
    postal: "AL",
    Region: "Southeast",
    fips: 1,
    Average_Population: 4849000,
    Gender_Demo: [690, 295, 44],
    opioidDeaths: [
      { date: "2014-1-1", count: 723 },
      { date: "2015-1-1", count: 736 },
      { date: "2016-1-1", count: 756 },
      { date: "2017-1-1", count: 835 },
      { date: "2018-1-1", count: 775 },
      { date: "2019-1-1", count: 768 },
      { date: "2020-1-1", count: 1029 }
    ]
  },
  {
    State: "Pennslyvania",
    postal: "PA",
    Region: "Northeast",
    fips: 42,
    Average_Population: 12787000,
    Gender_Demo: [3822, 1235, 111],
    opioidDeaths: [
      { date: "2014-1-1", count: 2732 },
      { date: "2015-1-1", count: 3264 },
      { date: "2016-1-1", count: 4627 },
      { date: "2017-1-1", count: 5388 },
      { date: "2018-1-1", count: 4415 },
      { date: "2019-1-1", count: 4377 },
      { date: "2020-1-1", count: 5168 }
    ]
  },
  {
    State: "Arkansas",
    postal: "AR",
    Region: "Southeast",
    fips: 5,
    Average_Population: 2966000,
    Gender_Demo: [330, 145, 71],
    opioidDeaths: [
      { date: "2014-1-1", count: 378 },
      { date: "2015-1-1", count: 392 },
      { date: "2016-1-1", count: 401 },
      { date: "2017-1-1", count: 446 },
      { date: "2018-1-1", count: 444 },
      { date: "2019-1-1", count: 388 },
      { date: "2020-1-1", count: 546 }
    ]
  },
  {
    State: "California",
    postal: "CA",
    Region: "West",
    fips: 6,
    Average_Population: 38803000,
    Gender_Demo: [6223, 2251, 434],
    opioidDeaths: [
      { date: "2014-1-1", count: 4521 },
      { date: "2015-1-1", count: 4659 },
      { date: "2016-1-1", count: 4654 },
      { date: "2017-1-1", count: 4868 },
      { date: "2018-1-1", count: 5348 },
      { date: "2019-1-1", count: 6198 },
      { date: "2020-1-1", count: 8909 }
    ]
  },
  {
    State: "Florida",
    postal: "FL",
    Region: "Southeast",
    fips: 12,
    Average_Population: 19893000,
    Gender_Demo: [5135, 1874, 222],
    opioidDeaths: [
      { date: "2014-1-1", count: 2634 },
      { date: "2015-1-1", count: 3228 },
      { date: "2016-1-1", count: 4728 },
      { date: "2017-1-1", count: 5088 },
      { date: "2018-1-1", count: 4698 },
      { date: "2019-1-1", count: 5268 },
      { date: "2020-1-1", count: 7231 }
    ]
  },
  {
    State: "New Jersey",
    postal: "NJ",
    Region: "Northeast",
    fips: 34,
    Average_Population: 8938000,
    Gender_Demo: [1933, 742, 165],
    opioidDeaths: [
      { date: "2014-1-1", count: 1253 },
      { date: "2015-1-1", count: 1454 },
      { date: "2016-1-1", count: 2056 },
      { date: "2017-1-1", count: 2685 },
      { date: "2018-1-1", count: 2990 },
      { date: "2019-1-1", count: 2805 },
      { date: "2020-1-1", count: 2840 }
    ]
  },
  {
    State: "Kansas",
    postal: "KS",
    Region: "Midwest",
    fips: 20,
    Average_Population: 2904000,
    Gender_Demo: [383, 85, 22],
    opioidDeaths: [
      { date: "2014-1-1", count: 332 },
      { date: "2015-1-1", count: 329 },
      { date: "2016-1-1", count: 313 },
      { date: "2017-1-1", count: 333 },
      { date: "2018-1-1", count: 345 },
      { date: "2019-1-1", count: 403 },
      { date: "2020-1-1", count: 490 }
    ]
  },
  {
    State: "Georgia",
    postal: "GA",
    Region: "Southeast",
    fips: 13,
    Average_Population: 10097000,
    Gender_Demo: [1432, 382, 102],
    opioidDeaths: [
      { date: "2014-1-1", count: 1206 },
      { date: "2015-1-1", count: 1302 },
      { date: "2016-1-1", count: 1394 },
      { date: "2017-1-1", count: 1537 },
      { date: "2018-1-1", count: 1404 },
      { date: "2019-1-1", count: 1408 },
      { date: "2020-1-1", count: 1916 }
    ]
  },
  {
    State: "Hawaii",
    postal: "HI",
    Region: "West",
    fips: 15,
    Average_Population: 1420000,
    Gender_Demo: [199, 53, 22],
    opioidDeaths: [
      { date: "2014-1-1", count: 157 },
      { date: "2015-1-1", count: 169 },
      { date: "2016-1-1", count: 191 },
      { date: "2017-1-1", count: 203 },
      { date: "2018-1-1", count: 213 },
      { date: "2019-1-1", count: 242 },
      { date: "2020-1-1", count: 274 }
    ]
  },
  {
    State: "Iowa",
    postal: "IA",
    Region: "Midwest",
    fips: 19,
    Average_Population: 3107000,
    Gender_Demo: [300, 98, 34],
    opioidDeaths: [
      { date: "2014-1-1", count: 264 },
      { date: "2015-1-1", count: 309 },
      { date: "2016-1-1", count: 314 },
      { date: "2017-1-1", count: 341 },
      { date: "2018-1-1", count: 287 },
      { date: "2019-1-1", count: 353 },
      { date: "2020-1-1", count: 432 }
    ]
  },
  {
    State: "New Mexico",
    postal: "NM",
    Region: "Southwest",
    fips: 35,
    Average_Population: 2086000,
    Gender_Demo: [534, 193, 57],
    opioidDeaths: [
      { date: "2014-1-1", count: 547 },
      { date: "2015-1-1", count: 501 },
      { date: "2016-1-1", count: 500 },
      { date: "2017-1-1", count: 493 },
      { date: "2018-1-1", count: 537 },
      { date: "2019-1-1", count: 599 },
      { date: "2020-1-1", count: 784 }
    ]
  },
  {
    State: "Idaho",
    postal: "ID",
    Region: "West",
    fips: 16,
    Average_Population: 1634000,
    Gender_Demo: [205, 63, 19],
    opioidDeaths: [
      { date: "2014-1-1", count: 212 },
      { date: "2015-1-1", count: 218 },
      { date: "2016-1-1", count: 243 },
      { date: "2017-1-1", count: 236 },
      { date: "2018-1-1", count: 250 },
      { date: "2019-1-1", count: 265 },
      { date: "2020-1-1", count: 287 }
    ]
  },
  {
    State: "Indiana",
    postal: "IN",
    Region: "Midwest",
    fips: 18,
    Average_Population: 6597000,
    Gender_Demo: [1631, 564, 126],
    opioidDeaths: [
      { date: "2014-1-1", count: 1172 },
      { date: "2015-1-1", count: 1245 },
      { date: "2016-1-1", count: 1526 },
      { date: "2017-1-1", count: 1852 },
      { date: "2018-1-1", count: 1629 },
      { date: "2019-1-1", count: 1699 },
      { date: "2020-1-1", count: 2321 }
    ]
  },
  {
    State: "Kentucky",
    postal: "KY",
    Region: "Southeast",
    fips: 21,
    Average_Population: 4413000,
    Gender_Demo: [1832, 196, 55],
    opioidDeaths: [
      { date: "2014-1-1", count: 1077 },
      { date: "2015-1-1", count: 1273 },
      { date: "2016-1-1", count: 1419 },
      { date: "2017-1-1", count: 1566 },
      { date: "2018-1-1", count: 1315 },
      { date: "2019-1-1", count: 1380 },
      { date: "2020-1-1", count: 2083 }
    ]
  },
  {
    State: "Maryland",
    postal: "MD",
    Region: "Northeast",
    fips: 24,
    Average_Population: 5976000,
    Gender_Demo: [1832, 643, 76],
    opioidDeaths: [
      { date: "2014-1-1", count: 1070 },
      { date: "2015-1-1", count: 1285 },
      { date: "2016-1-1", count: 2044 },
      { date: "2017-1-1", count: 2247 },
      { date: "2018-1-1", count: 2324 },
      { date: "2019-1-1", count: 2369 },
      { date: "2020-1-1", count: 2771 }
    ]
  },
  {
    State: "Maine",
    postal: "ME",
    Region: "Northeast",
    fips: 23,
    Average_Population: 1330000,
    Gender_Demo: [353, 125, 18],
    opioidDeaths: [
      { date: "2014-1-1", count: 216 },
      { date: "2015-1-1", count: 269 },
      { date: "2016-1-1", count: 353 },
      { date: "2017-1-1", count: 424 },
      { date: "2018-1-1", count: 345 },
      { date: "2019-1-1", count: 371 },
      { date: "2020-1-1", count: 496 }
    ]
  },
  {
    State: "Louisiana",
    postal: "LA",
    Region: "Southeast",
    fips: 22,
    Average_Population: 4650000,
    Gender_Demo: [1432, 415, 49],
    opioidDeaths: [
      { date: "2014-1-1", count: 777 },
      { date: "2015-1-1", count: 861 },
      { date: "2016-1-1", count: 996 },
      { date: "2017-1-1", count: 1108 },
      { date: "2018-1-1", count: 1140 },
      { date: "2019-1-1", count: 1267 },
      { date: "2020-1-1", count: 1896 }
    ]
  },
  {
    State: "Massachusetts",
    postal: "MA",
    Region: "Northeast",
    fips: 25,
    Average_Population: 6745000,
    Gender_Demo: [1399, 796, 107],
    opioidDeaths: [
      { date: "2014-1-1", count: 1289 },
      { date: "2015-1-1", count: 1724 },
      { date: "2016-1-1", count: 2227 },
      { date: "2017-1-1", count: 2168 },
      { date: "2018-1-1", count: 2241 },
      { date: "2019-1-1", count: 2210 },
      { date: "2020-1-1", count: 2302 }
    ]
  },
  {
    State: "Minnesota",
    postal: "MN",
    Region: "Midwest",
    fips: 27,
    Average_Population: 5457000,
    Gender_Demo: [823, 197, 30],
    opioidDeaths: [
      { date: "2014-1-1", count: 517 },
      { date: "2015-1-1", count: 581 },
      { date: "2016-1-1", count: 672 },
      { date: "2017-1-1", count: 733 },
      { date: "2018-1-1", count: 636 },
      { date: "2019-1-1", count: 792 },
      { date: "2020-1-1", count: 1050 }
    ]
  },
  {
    State: "Missouri",
    postal: "MO",
    Region: "Midwest",
    fips: 29,
    Average_Population: 6064000,
    Gender_Demo: [1135, 630, 110],
    opioidDeaths: [
      { date: "2014-1-1", count: 1067 },
      { date: "2015-1-1", count: 1066 },
      { date: "2016-1-1", count: 1371 },
      { date: "2017-1-1", count: 1367 },
      { date: "2018-1-1", count: 1610 },
      { date: "2019-1-1", count: 1583 },
      { date: "2020-1-1", count: 1875 }
    ]
  },
  {
    State: "Michigan",
    postal: "MI",
    Region: "Midwest",
    fips: 26,
    Average_Population: 9910000,
    Gender_Demo: [2034, 684, 41],
    opioidDeaths: [
      { date: "2014-1-1", count: 1762 },
      { date: "2015-1-1", count: 1980 },
      { date: "2016-1-1", count: 2347 },
      { date: "2017-1-1", count: 2694 },
      { date: "2018-1-1", count: 2591 },
      { date: "2019-1-1", count: 2385 },
      { date: "2020-1-1", count: 2759 }
    ]
  },
  {
    State: "Mississippi",
    postal: "MS",
    Region: "Southeast",
    fips: 28,
    Average_Population: 2994000,
    Gender_Demo: [401, 126, 59],
    opioidDeaths: [
      { date: "2014-1-1", count: 336 },
      { date: "2015-1-1", count: 351 },
      { date: "2016-1-1", count: 353 },
      { date: "2017-1-1", count: 354 },
      { date: "2018-1-1", count: 310 },
      { date: "2019-1-1", count: 394 },
      { date: "2020-1-1", count: 589 }
    ]
  },
  {
    State: "Utah",
    postal: "UT",
    Region: "West",
    fips: 49,
    Average_Population: 2943000,
    Gender_Demo: [420, 183, 19],
    opioidDeaths: [
      { date: "2014-1-1", count: 603 },
      { date: "2015-1-1", count: 646 },
      { date: "2016-1-1", count: 635 },
      { date: "2017-1-1", count: 650 },
      { date: "2018-1-1", count: 624 },
      { date: "2019-1-1", count: 571 },
      { date: "2020-1-1", count: 622 }
    ]
  },
  {
    State: "Nebraska",
    postal: "NE",
    Region: "Midwest",
    fips: 31,
    Average_Population: 1882000,
    Gender_Demo: [150, 43, 21],
    opioidDeaths: [
      { date: "2014-1-1", count: 125 },
      { date: "2015-1-1", count: 126 },
      { date: "2016-1-1", count: 120 },
      { date: "2017-1-1", count: 152 },
      { date: "2018-1-1", count: 138 },
      { date: "2019-1-1", count: 161 },
      { date: "2020-1-1", count: 214 }
    ]
  },
  {
    State: "Montana",
    postal: "MT",
    Region: "West",
    fips: 30,
    Average_Population: 1024000,
    Gender_Demo: [115, 37, 10],
    opioidDeaths: [
      { date: "2014-1-1", count: 125 },
      { date: "2015-1-1", count: 138 },
      { date: "2016-1-1", count: 119 },
      { date: "2017-1-1", count: 119 },
      { date: "2018-1-1", count: 125 },
      { date: "2019-1-1", count: 143 },
      { date: "2020-1-1", count: 162 }
    ]
  },
  {
    State: "Oklahoma",
    postal: "OK",
    Region: "Southwest",
    fips: 40,
    Average_Population: 3878000,
    Gender_Demo: [601, 131, 30],
    opioidDeaths: [
      { date: "2014-1-1", count: 777 },
      { date: "2015-1-1", count: 725 },
      { date: "2016-1-1", count: 813 },
      { date: "2017-1-1", count: 775 },
      { date: "2018-1-1", count: 716 },
      { date: "2019-1-1", count: 645 },
      { date: "2020-1-1", count: 762 }
    ]
  },
  {
    State: "North Carolina",
    postal: "NC",
    Region: "Southeast",
    fips: 37,
    Average_Population: 9944000,
    Gender_Demo: [2345, 693, 108],
    opioidDeaths: [
      { date: "2014-1-1", count: 1358 },
      { date: "2015-1-1", count: 1567 },
      { date: "2016-1-1", count: 1956 },
      { date: "2017-1-1", count: 2414 },
      { date: "2018-1-1", count: 2259 },
      { date: "2019-1-1", count: 2266 },
      { date: "2020-1-1", count: 3146 }
    ]
  },
  {
    State: "Oregon",
    postal: "OR",
    Region: "West",
    fips: 41,
    Average_Population: 3970000,
    Gender_Demo: [603, 183, 17],
    opioidDeaths: [
      { date: "2014-1-1", count: 522 },
      { date: "2015-1-1", count: 505 },
      { date: "2016-1-1", count: 506 },
      { date: "2017-1-1", count: 530 },
      { date: "2018-1-1", count: 580 },
      { date: "2019-1-1", count: 615 },
      { date: "2020-1-1", count: 803 }
    ]
  },
  {
    State: "New York",
    postal: "NY",
    Region: "Northeast",
    fips: 36,
    Average_Population: 19746000,
    Gender_Demo: [3754, 1085, 126],
    opioidDeaths: [
      { date: "2014-1-1", count: 2300 },
      { date: "2015-1-1", count: 2754 },
      { date: "2016-1-1", count: 3638 },
      { date: "2017-1-1", count: 3921 },
      { date: "2018-1-1", count: 3697 },
      { date: "2019-1-1", count: 3617 },
      { date: "2020-1-1", count: 4965 }
    ]
  },
  {
    State: "Ohio",
    postal: "OH",
    Region: "Midwest",
    fips: 39,
    Average_Population: 11594000,
    Gender_Demo: [3935, 1035, 234],
    opioidDeaths: [
      { date: "2014-1-1", count: 2744 },
      { date: "2015-1-1", count: 3310 },
      { date: "2016-1-1", count: 4329 },
      { date: "2017-1-1", count: 5111 },
      { date: "2018-1-1", count: 3980 },
      { date: "2019-1-1", count: 4251 },
      { date: "2020-1-1", count: 5204 }
    ]
  },
  {
    State: "South Dakota",
    postal: "SD",
    Region: "Midwest",
    fips: 46,
    Average_Population: 853000,
    Gender_Demo: [64, 13, 6],
    opioidDeaths: [
      { date: "2014-1-1", count: 63 },
      { date: "2015-1-1", count: 65 },
      { date: "2016-1-1", count: 69 },
      { date: "2017-1-1", count: 73 },
      { date: "2018-1-1", count: 57 },
      { date: "2019-1-1", count: 86 },
      { date: "2020-1-1", count: 83 }
    ]
  },
  {
    State: "Tennessee",
    postal: "TN",
    Region: "Southeast",
    fips: 47,
    Average_Population: 6549000,
    Gender_Demo: [2143, 793, 98],
    opioidDeaths: [
      { date: "2014-1-1", count: 1269 },
      { date: "2015-1-1", count: 1437 },
      { date: "2016-1-1", count: 1630 },
      { date: "2017-1-1", count: 1776 },
      { date: "2018-1-1", count: 1823 },
      { date: "2019-1-1", count: 2089 },
      { date: "2020-1-1", count: 3034 }
    ]
  },
  {
    State: "Texas",
    postal: "TX",
    Region: "Southwest",
    fips: 48,
    Average_Population: 26957000 ,
    Gender_Demo: [3015, 1026, 131],
    opioidDeaths: [
      { date: "2014-1-1", count: 2601 },
      { date: "2015-1-1", count: 2588 },
      { date: "2016-1-1", count: 2831 },
      { date: "2017-1-1", count: 2989 },
      { date: "2018-1-1", count: 3006 },
      { date: "2019-1-1", count: 3136 },
      { date: "2020-1-1", count: 4172 }
    ]
  },
  {
    State: "Virginia",
    postal: "VA",
    Region: "Southeast",
    fips: 51,
    Average_Population: 8326000,
    Gender_Demo: [1564, 584, 92],
    opioidDeaths: [
      { date: "2014-1-1", count: 980 },
      { date: "2015-1-1", count: 1039 },
      { date: "2016-1-1", count: 1405 },
      { date: "2017-1-1", count: 1507 },
      { date: "2018-1-1", count: 1448 },
      { date: "2019-1-1", count: 1547 },
      { date: "2020-1-1", count: 2240 }
    ]
  },
  {
    State: "West Virginia",
    postal: "WV",
    Region: "Southeast",
    fips: 54,
    Average_Population: 1850000,
    Gender_Demo: [853, 385, 92],
    opioidDeaths: [
      { date: "2014-1-1", count: 627 },
      { date: "2015-1-1", count: 725 },
      { date: "2016-1-1", count: 884 },
      { date: "2017-1-1", count: 974 },
      { date: "2018-1-1", count: 856 },
      { date: "2019-1-1", count: 870 },
      { date: "2020-1-1", count: 1330 }
    ]
  },
  {
    State: "Washington",
    postal: "WA",
    Region: "West",
    fips: 53,
    Average_Population: 7062000,
    Gender_Demo: [1353, 320, 60],
    opioidDeaths: [
      { date: "2014-1-1", count: 979 },
      { date: "2015-1-1", count: 1094 },
      { date: "2016-1-1", count: 1102 },
      { date: "2017-1-1", count: 1169 },
      { date: "2018-1-1", count: 1164 },
      { date: "2019-1-1", count: 1259 },
      { date: "2020-1-1", count: 1733 }
    ]
  },
  {
    State: "Wisconsin",
    postal: "WI",
    Region: "Midwest",
    fips: 53,
    Average_Population: 5758000,
    Gender_Demo: [1232, 215, 84],
    opioidDeaths: [
      { date: "2014-1-1", count: 979 },
      { date: "2015-1-1", count: 1094 },
      { date: "2016-1-1", count: 1102 },
      { date: "2017-1-1", count: 1169 },
      { date: "2018-1-1", count: 1164 },
      { date: "2019-1-1", count: 1259 },
      { date: "2020-1-1", count: 1733 }
    ]
  }
];

export default data; calculateDecadeTotal;
