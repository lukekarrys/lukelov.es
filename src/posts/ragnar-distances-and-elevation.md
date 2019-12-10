---
title: Ragnar Distances and Elevations
date: "2016-11-10T13:31:05-07:00"
tags:
  - ragnar
---

# Trail Races

| Display Name           | Distance | Elevation Gain | Elevation Start |
| ---------------------- | -------- | -------------- | --------------- |
| Los Coyotes - CA       | 119.2    | 3,951.56       | 4,469.40        |
| Tetons - WY            | 120      | 3,835.92       | 7,922.08        |
| Angel Fire - NM        | 117.6    | 3,717.44       | 8,547.30        |
| New England - MA       | 121.6    | 3,349.89       | 361.86          |
| Snowmass - CO          | 114.4    | 3,147.21       | 7,882.00        |
| Zion - UT              | 121.6    | 2,954.34       | 6,506.82        |
| Tahoe - CA             | 129.6    | 2,930.28       | 7,005.68        |
| Buckeye Country - OH   | 121.60   | 2,467.49       | 734.74          |
| Kentuckiana - KY       | 125.6    | 2,129.61       | 643.09          |
| Appalachians - WV      | 116.8    | 2,056.12       | 2,941.44        |
| Hill Country - TX      | 123.2    | 2,016.29       | 1,564.02        |
| Richmond - VA          | 132      | 2,007.38       | 128.48          |
| Atlanta - GA           | 122.4    | 1,895.63       | 660.98          |
| Carolinas - SC         | 129.6    | 1,854.78       | 636.07          |
| Wawayanda Lake         | 128.8    | 1,802.87       | 1,152.63        |
| Cottage Country - ON   | 119.20   | 1,673.28       | 1,054.27        |
| McDowell Mountain - AZ | 123.2    | 1,470.55       | 1,566.37        |
| Northwoods - WI        | 121.6    | 1,326.15       | 1,197.96        |
| Alafia River - FL      | 126.4    | 874.29         | 114.13          |
| North Shore Oahu - HI  | 118.4    | 254.12         | 3.26            |

`ragnar-data --output markdown --type trail --pick display_name,distance,elevation_gain,elevation_start --sort elevation_gain,desc`

# Road Races

| Display Name      | Distance | Elevation Gain | Elevation Start | Elevation End |
| ----------------- | -------- | -------------- | --------------- | ------------- |
| Hawaii            | 197.13   | 15,986.55      | 1.50            | 43.95         |
| Washington D.C.   | 206.82   | 15,906.38      | 1,177.82        | 7.27          |
| Adirondacks       | 193.3    | 12,940.18      | 302.14          | 1,761.30      |
| Colorado          | 189.50   | 12,721         | 9,166.28        | 8,489.50      |
| Reach The Beach   | 203.00   | 12,604.14      | 1,581.95        | 16.58         |
| Tennessee         | 187.20   | 12,595.51      | 654.62          | 424.83        |
| Wasatch Back      | 188.90   | 12,433         | 4,717.38        | 5,561.42      |
| Great River       | 201.70   | 12,136         | 653.94          | 743.00        |
| Northwest Passage | 196.50   | 11,215.88      | 54.83           | 156.15        |
| So Cal            | 190.6    | 10,863         | 15.13           | 12.63         |
| Napa Valley       | 182.70   | 10,083.49      | 20.89           | 129.75        |
| Las Vegas         | 204.2    | 9,911.39       | 8,682.33        | 3,048.16      |
| Luckenbach        | 194.2    | 8,931.67       | 336.90          | 1,561.46      |
| Cape Cod          | 192.3    | 8,749.97       | 13.08           | 58.81         |
| Michigan          | 196.02   | 7,221          | 585.39          | 584.96        |
| Niagara           | 190.2    | 6,433.98       | 255.36          | 335.28        |
| Del Sol           | 189.9    | 5,804.59       | 2,362.73        | 1,575.94      |
| Chicago           | 202.1    | 5,552.21       | 852.97          | 609.76        |
| Florida Keys      | 196.93   | 10             | 0               | 0             |
| Pennsylvania      | 192.84   | 0              | 358.28          | 1,883.11      |

`ragnar-data --output markdown --type relay --pick display_name,distance,elevation_gain,elevation_start,elevation_end --sort elevation_gain,desc`

[Built with `ragnar-data`](https://github.com/lukekarrys/ragnar-data).
