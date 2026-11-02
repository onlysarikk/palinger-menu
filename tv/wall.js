/* Palinger TV wall.
   Two Samsung TVs hang vertically side by side and show one picture across both screens.
   /tv/l/ goes on the left TV, /tv/r/ on the right one, /tv/ previews the whole wall.
   The TVs are not connected to each other: each page asks the internet for the exact time
   and plays the same 80-second loop from that time, so the two halves stay in step.
   URL options (remembered on that TV): ?gap=32  pixels hidden by the frames between the screens
                                        ?ms=20   shift this TV forward (or ?ms=-20 back)
                                        ?flip    this TV hangs the other way round (?flip=0 undoes it)
                                        ?test    sync test picture, ?debug keeps the status line on */
(function () {
  'use strict';

  var LANDMARKS = "<g id=\"lx-eiffel\"><path d=\"M0 44 C3 36 5 26 5.8 16 L6.4 6 L7 1 L7.6 6 L8.2 16 C9 26 11 36 14 44 M7 1 V-1.5\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M2.5 44 Q7 35.5 11.5 44 M2.4 34 H11.6 M2.2 35.2 H11.8 M4.9 21 H9.1 M4.7 22 H9.3 M6.1 10 H7.9 M6.4 3 H7.6 V4.6 H6.4 Z\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.7\" stroke-width=\"0.448\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M1.2 42.5 L3.4 40.5 L1.9 38.3 L3.9 36.4 L2.6 34.6 M12.8 42.5 L10.6 40.5 L12.1 38.3 L10.1 36.4 L11.4 34.6 M3.2 34 L9.3 21 M10.8 34 L4.7 21 M5 32 L6.1 29 L5.3 26 L6.2 23 M9 32 L7.9 29 L8.7 26 L7.8 23 M5.2 21 L7.6 10 M8.8 21 L6.4 10 M6.3 18 L6.8 14 L6.4 11 M7.7 18 L7.2 14 L7.6 11 M4.5 40 Q7 37.4 9.5 40\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.5\" stroke-width=\"0.35\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><g id=\"lx-pisa\"><g transform=\"rotate(5 5 44)\"><path d=\"M2 44 V10 H8 V44 M3 10 V6.2 H7 V10 M3 6.2 Q5 3.4 7 6.2 M1.6 10 H8.4 M1.6 15 H8.4 M5 3.9 V2.6\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M2 20 H8 M2 25 H8 M2 30 H8 M2 35 H8 M2 40 H8\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.6\" stroke-width=\"0.42\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M2.20 20 V16.15 Q2.75 15.32 3.30 16.15 V20 M3.60 20 V16.15 Q4.15 15.32 4.70 16.15 V20 M5.00 20 V16.15 Q5.55 15.32 6.10 16.15 V20 M6.40 20 V16.15 Q6.95 15.32 7.50 16.15 V20 M2.20 25 V21.15 Q2.75 20.33 3.30 21.15 V25 M3.60 25 V21.15 Q4.15 20.33 4.70 21.15 V25 M5.00 25 V21.15 Q5.55 20.33 6.10 21.15 V25 M6.40 25 V21.15 Q6.95 20.33 7.50 21.15 V25 M2.20 30 V26.15 Q2.75 25.33 3.30 26.15 V30 M3.60 30 V26.15 Q4.15 25.33 4.70 26.15 V30 M5.00 30 V26.15 Q5.55 25.33 6.10 26.15 V30 M6.40 30 V26.15 Q6.95 25.33 7.50 26.15 V30 M2.20 35 V31.15 Q2.75 30.33 3.30 31.15 V35 M3.60 35 V31.15 Q4.15 30.33 4.70 31.15 V35 M5.00 35 V31.15 Q5.55 30.33 6.10 31.15 V35 M6.40 35 V31.15 Q6.95 30.33 7.50 31.15 V35 M2.20 40 V36.15 Q2.75 35.33 3.30 36.15 V40 M3.60 40 V36.15 Q4.15 35.33 4.70 36.15 V40 M5.00 40 V36.15 Q5.55 35.33 6.10 36.15 V40 M6.40 40 V36.15 Q6.95 35.33 7.50 36.15 V40 M2.20 45 V41.15 Q2.75 40.33 3.30 41.15 V45 M3.60 45 V41.15 Q4.15 40.33 4.70 41.15 V45 M5.00 45 V41.15 Q5.55 40.33 6.10 41.15 V45 M6.40 45 V41.15 Q6.95 40.33 7.50 41.15 V45\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.48\" stroke-width=\"0.308\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M3.40 10 V7.60 Q3.80 7.00 4.20 7.60 V10 M4.60 10 V7.60 Q5.00 7.00 5.40 7.60 V10 M5.80 10 V7.60 Q6.20 7.00 6.60 7.60 V10\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.55\" stroke-width=\"0.308\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g></g><g id=\"lx-bigben\"><path d=\"M1 44 V15 H7 V44 M0.5 15 H7.5 M0.5 16.2 H7.5 M1.3 15 L4 3 L6.7 15 M4 3 V0.3 M1 23 H7 M1 24 H7\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M4 19 m-2.2 0 a2.2 2.2 0 1 0 4.4 0 a2.2 2.2 0 1 0 -4.4 0 M4 19 V17.6 M4 19 L5 19.7\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.7\" stroke-width=\"0.42\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M5.60 19.00 L5.95 19.00 M5.39 19.80 L5.69 19.98 M4.80 20.39 L4.98 20.69 M4.00 20.60 L4.00 20.95 M3.20 20.39 L3.03 20.69 M2.61 19.80 L2.31 19.98 M2.40 19.00 L2.05 19.00 M2.61 18.20 L2.31 18.03 M3.20 17.61 L3.02 17.31 M4.00 17.40 L4.00 17.05 M4.80 17.61 L4.98 17.31 M5.39 18.20 L5.69 18.02\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.65\" stroke-width=\"0.308\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M0.5 15 V13.6 M7.5 15 V13.6 M2.4 11 H5.6 M2.9 8.5 H5.1 M2.6 26 V42 M4 26 V42 M5.4 26 V42 M1 34 H7 M1.90 29 V27.00 Q2.40 26.25 2.90 27.00 V29 M3.30 29 V27.00 Q3.80 26.25 4.30 27.00 V29 M4.70 29 V27.00 Q5.20 26.25 5.70 27.00 V29\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.48\" stroke-width=\"0.35\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><g id=\"lx-colosseum\"><path d=\"M0 44 V27 Q8 24.5 15 25 L15 27.5 L17.5 28.5 L18 31 L20.5 32 L22 34 V44\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M0 29.5 H15 M0 32 H18 M0 32.8 H18 M0 38 H22 M0 38.8 H22\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.6\" stroke-width=\"0.392\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M1.00 44 V41.20 Q1.90 39.85 2.80 41.20 V44 M3.60 44 V41.20 Q4.50 39.85 5.40 41.20 V44 M6.20 44 V41.20 Q7.10 39.85 8.00 41.20 V44 M8.80 44 V41.20 Q9.70 39.85 10.60 41.20 V44 M11.40 44 V41.20 Q12.30 39.85 13.20 41.20 V44 M14.00 44 V41.20 Q14.90 39.85 15.80 41.20 V44 M16.60 44 V41.20 Q17.50 39.85 18.40 41.20 V44 M19.20 44 V41.20 Q20.10 39.85 21.00 41.20 V44 M1.00 37.6 V35.00 Q1.80 33.80 2.60 35.00 V37.6 M3.60 37.6 V35.00 Q4.40 33.80 5.20 35.00 V37.6 M6.20 37.6 V35.00 Q7.00 33.80 7.80 35.00 V37.6 M8.80 37.6 V35.00 Q9.60 33.80 10.40 35.00 V37.6 M11.40 37.6 V35.00 Q12.20 33.80 13.00 35.00 V37.6 M14.00 37.6 V35.00 Q14.80 33.80 15.60 35.00 V37.6 M16.60 37.6 V35.00 Q17.40 33.80 18.20 35.00 V37.6 M1.3 31.2 h1 v-1.2 h-1 Z M3.9 31.2 h1 v-1.2 h-1 Z M6.5 31.2 h1 v-1.2 h-1 Z M9.1 31.2 h1 v-1.2 h-1 Z M11.7 31.2 h1 v-1.2 h-1 Z M14.3 31.2 h1 v-1.2 h-1 Z M3.25 44 V38.8 M3.25 38 V32.8 M5.85 44 V38.8 M5.85 38 V32.8 M8.45 44 V38.8 M8.45 38 V32.8 M11.05 44 V38.8 M11.05 38 V32.8 M13.65 44 V38.8 M13.65 38 V32.8 M16.25 44 V38.8 M16.25 38 V32.8\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.5\" stroke-width=\"0.336\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><g id=\"lx-brandenburg\"><path d=\"M0 44 V29 H18 V44 M-0.4 29 H18.4 M-0.4 30 H18.4 M0.6 29 V25.5 H17.4 V29 M0.6 25.5 H17.4 M7 25.5 V22.6 H11 V25.5\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M1.5 30 V44 M2.3 30 V44 M4 30 V44 M4.8 30 V44 M6.5 30 V44 M7.3 30 V44 M10.7 30 V44 M11.5 30 V44 M13.2 30 V44 M14 30 V44 M15.7 30 V44 M16.5 30 V44 M1.6 26.3 V28.2 M2.8 26.3 V28.2 M4.0 26.3 V28.2 M5.2 26.3 V28.2 M6.4 26.3 V28.2 M7.6 26.3 V28.2 M8.8 26.3 V28.2 M10.0 26.3 V28.2 M11.2 26.3 V28.2 M12.4 26.3 V28.2 M13.6 26.3 V28.2 M14.8 26.3 V28.2 M16.0 26.3 V28.2 M7.6 22.6 L8.2 20.6 L8.9 21 L9.3 22.6 M9.2 22.6 L9.8 20.4 L10.5 20.9 L10.6 22.6 M8.6 20.4 L9 18.6 L9.4 20.4\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.52\" stroke-width=\"0.336\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><g id=\"lx-towerbridge\"><path d=\"M3 44 V16 H9 V44 M19 44 V16 H25 V44 M3 16 L6 9 L9 16 M19 16 L22 9 L25 16 M6 9 V6.8 M22 9 V6.8 M9 19.5 H19 M9 21.6 H19 M0 36 H3 M9 36 H19 M25 36 H28 M0 37 H3 M9 37 H19 M25 37 H28\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M2.5 16 V13.4 L3 12.6 L3.5 13.4 V16 M8.5 16 V13.4 L9 12.6 L9.5 13.4 V16 M18.5 16 V13.4 L19 12.6 L19.5 13.4 V16 M24.5 16 V13.4 L25 12.6 L25.5 13.4 V16 M0 30 Q1.5 34 3 34 M25 34 Q26.5 34 28 30 M9 24 Q14 32 19 24 M10.5 26.6 V36 M12.2 28.4 V36 M14 29 V36 M15.8 28.4 V36 M17.5 26.6 V36 M5.00 44 V38.50 Q6.00 37.00 7.00 38.50 V44 M21.00 44 V38.50 Q22.00 37.00 23.00 38.50 V44 M4.30 24.5 V21.00 Q4.80 20.25 5.30 21.00 V24.5 M6.70 24.5 V21.00 Q7.20 20.25 7.70 21.00 V24.5 M20.30 24.5 V21.00 Q20.80 20.25 21.30 21.00 V24.5 M22.70 24.5 V21.00 Q23.20 20.25 23.70 21.00 V24.5 M4.30 31 V27.50 Q4.80 26.75 5.30 27.50 V31 M6.70 31 V27.50 Q7.20 26.75 7.70 27.50 V31 M20.30 31 V27.50 Q20.80 26.75 21.30 27.50 V31 M22.70 31 V27.50 Q23.20 26.75 23.70 27.50 V31 M9.6 19.5 V21.6 M11.4 19.5 V21.6 M13.2 19.5 V21.6 M15 19.5 V21.6 M16.8 19.5 V21.6\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.5\" stroke-width=\"0.336\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><g id=\"lx-sagrada\"><path d=\"M0 44 V24 L1.5 10 L3 24 L4.5 4 L6 24 L7.5 2 L9 24 L10.5 12 L12 24 V44 M0 30 H12 M0 31 H12 M4.5 4 V2.4 M7.5 2 V0.4 M6.9 1 H8.1 M3.9 3 H5.1\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M4 44 V36 Q6 31.6 8 36 V44 M5 44 V37 Q6 35 7 37 V44 M1.5 15 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M1.5 18 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M1.5 21 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M4.5 9 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M4.5 12 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M4.5 15 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M4.5 18 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M4.5 21 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M7.5 7 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M7.5 10 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M7.5 13 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M7.5 16 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M7.5 19 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M7.5 22 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M10.5 16 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M10.5 19 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M10.5 22 m-0.3 0 a0.3 0.5 0 1 0 0.6 0 a0.3 0.5 0 1 0 -0.6 0 M1 33 V42 M11 33 V42 M2.6 33 V42 M9.4 33 V42\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.52\" stroke-width=\"0.336\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><g id=\"lx-arc\"><path d=\"M0 44 V20 H16 V44 M5 44 V31 Q8 25.6 11 31 V44 M-0.3 20 H16.3 M0 22.6 H16 M0 24 H16 M-0.3 25.2 H16.3\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M1.2 32 h3 v6 h-3 Z M11.8 32 h3 v6 h-3 Z M1.2 27 h3 v3.6 h-3 Z M11.8 27 h3 v3.6 h-3 Z M5.6 31 Q8 26.8 10.4 31 M1.0 20.6 V22.2 M2.1 20.6 V22.2 M3.2 20.6 V22.2 M4.3 20.6 V22.2 M5.4 20.6 V22.2 M6.5 20.6 V22.2 M7.6 20.6 V22.2 M8.7 20.6 V22.2 M9.8 20.6 V22.2 M10.9 20.6 V22.2 M12.0 20.6 V22.2 M13.1 20.6 V22.2 M14.2 20.6 V22.2 M15.3 20.6 V22.2\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.52\" stroke-width=\"0.336\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><g id=\"lx-notredame\"><path d=\"M0 44 V14 H6 V44 M12 44 V14 H18 V44 M6 44 V24 H12 V44 M-0.3 14 H6.3 M11.7 14 H18.3 M0 22 H18 M0 23 H18 M8.6 24 L9 6 L9.4 24\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M9 28.6 m-2.3 0 a2.3 2.3 0 1 0 4.6 0 a2.3 2.3 0 1 0 -4.6 0\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.7\" stroke-width=\"0.42\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M9 28.6 L11.30 28.60 M9 28.6 L10.63 30.23 M9 28.6 L9.00 30.90 M9 28.6 L7.37 30.23 M9 28.6 L6.70 28.60 M9 28.6 L7.37 26.97 M9 28.6 L9.00 26.30 M9 28.6 L10.63 26.97 M1.40 21 V16.10 Q2.00 15.20 2.60 16.10 V21 M3.40 21 V16.10 Q4.00 15.20 4.60 16.10 V21 M12.40 21 V16.10 Q13.00 15.20 13.60 16.10 V21 M14.40 21 V16.10 Q15.00 15.20 15.60 16.10 V21 M0.90 44 V38.10 Q3.00 34.95 5.10 38.10 V44 M13.00 44 V38.10 Q15.10 34.95 17.20 38.10 V44 M6.90 44 V37.60 Q9.00 34.45 11.10 37.60 V44 M0 33 H18 M0.8 23 V21.8 M1.7 23 V21.8 M2.6 23 V21.8 M3.5 23 V21.8 M4.4 23 V21.8 M5.3 23 V21.8 M6.2 23 V21.8 M7.1 23 V21.8 M8.0 23 V21.8 M8.9 23 V21.8 M9.8 23 V21.8 M10.7 23 V21.8 M11.6 23 V21.8 M12.5 23 V21.8 M13.4 23 V21.8 M14.3 23 V21.8 M15.2 23 V21.8 M16.1 23 V21.8 M17.0 23 V21.8 M17.9 23 V21.8\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.52\" stroke-width=\"0.336\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><g id=\"lx-cologne\"><path d=\"M0 44 V20 L3 1.5 L6 20 V44 M6 44 V20 L9 1.5 L12 20 V44 M0 20 H12 M0 30 H12\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M0.30 6 L0.80 5.2 M11.70 6 L11.20 5.2 M0.77 9 L1.27 8.2 M11.23 9 L10.73 8.2 M1.24 12 L1.74 11.2 M10.76 12 L10.26 11.2 M1.71 15 L2.21 14.2 M10.29 15 L9.79 14.2 M2.19 18 L2.69 17.2 M9.81 18 L9.31 17.2 M1.00 29 V22.10 Q1.60 21.20 2.20 22.10 V29 M3.80 29 V22.10 Q4.40 21.20 5.00 22.10 V29 M7.00 29 V22.10 Q7.60 21.20 8.20 22.10 V29 M9.80 29 V22.10 Q10.40 21.20 11.00 22.10 V29 M1.00 44 V33.60 Q1.60 32.70 2.20 33.60 V44 M9.80 44 V33.60 Q10.40 32.70 11.00 33.60 V44 M4.00 44 V36.00 Q6.00 33.00 8.00 36.00 V44 M3 1.5 V0 M9 1.5 V0\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.52\" stroke-width=\"0.336\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><g id=\"lx-parthenon\"><path d=\"M0 33 L10 27.4 L20 33 Z M0 33 V35.4 H20 V33 M-0.6 42.6 H20.6 M-1.2 44 H21.2\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.72\" stroke-width=\"0.532\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M0.80 35.4 V42.6 M1.70 35.4 V42.6 M3.20 35.4 V42.6 M4.10 35.4 V42.6 M5.60 35.4 V42.6 M6.50 35.4 V42.6 M8.00 35.4 V42.6 M8.90 35.4 V42.6 M10.40 35.4 V42.6 M11.30 35.4 V42.6 M12.80 35.4 V42.6 M13.70 35.4 V42.6 M15.20 35.4 V42.6 M16.10 35.4 V42.6 M17.60 35.4 V42.6 M18.50 35.4 V42.6 M0 34.2 H20 M3 32 L10 28.4 L17 32\" fill=\"none\" stroke=\"#EFE9DC\" stroke-opacity=\"0.52\" stroke-width=\"0.336\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g>";
  var HALAL = "<svg viewBox=\"0 0 100 100\" aria-hidden=\"true\" role=\"img\"><circle cx=\"50\" cy=\"50\" r=\"47\" fill=\"none\" stroke=\"#EFE9DC\" stroke-width=\"1.6\"/><circle cx=\"50\" cy=\"50\" r=\"42.5\" fill=\"none\" stroke=\"#EFE9DC\" stroke-width=\".8\"/><path fill=\"#EFE9DC\" d=\"M34.42 36.82Q34.36 36.4 34.29 35.96Q34.21 35.53 34.12 35.05Q33.82 34.3 34.12 33.67L34.9 32.17Q35.29 31.36 35.74 32.56Q36.22 33.85 37.12 34.57Q37.75 35.08 37.24 35.74L36.49 36.7Q36.55 37.72 36.7 39.07Q36.85 40.42 37.06 42.16Q37.3 43.9 37.42 45.23Q37.54 46.57 37.6 47.53Q37.81 50.71 36.79 53.23Q36.07 54.91 33.52 56.05Q32.26 56.62 31.12 56.9Q29.98 57.19 28.93 57.16Q24.7 57.1 23.5 54.01Q23.08 52.9 23.08 51.67Q23.08 48.25 25.21 45.58Q25.63 45.04 25.9 45.31Q26.17 45.55 25.84 46.15Q24.43 48.7 24.55 49.99Q24.88 53.29 29.89 53.11Q34.24 52.96 36.04 50.77Q35.65 48.01 35.4 45.97Q35.14 43.93 34.99 42.58Q34.87 41.23 34.72 39.79Q34.57 38.35 34.42 36.82ZM53.17 48.79Q53.41 50.65 52.9 50.8Q52.48 50.95 52.21 49.99Q50.86 45.7 46.33 43L46 43.72Q45.52 44.71 44.23 43.84L41.62 42.04Q40.84 41.53 40.84 40.78L40.78 37.57Q40.78 36.85 41.23 36.61Q41.71 36.34 42.4 36.67Q52.36 41.83 53.17 48.79ZM54.67 35.11 55.63 33.88Q56.32 32.95 56.41 34.75Q57.04 45.01 57.85 48.16Q58.66 51.34 60.16 51.67Q61.39 51.97 61.09 54.22Q60.94 55.24 60.04 55.24Q57.28 55.24 56.32 51.79Q55.81 49.93 55.54 47.26Q55.42 45.91 55.35 45.11Q55.27 44.32 55.24 44.11Q54.52 50.68 51.55 54.28Q50.26 55.78 48.4 56.14Q47.14 56.38 45.91 56.53Q44.68 56.68 43.45 56.74Q42.94 56.74 42.88 56.38Q42.82 55.99 43.18 55.87Q50.38 53.32 52.45 49.6Q53.56 47.44 54.01 43.54Q54.25 41.59 54.34 40.1Q54.43 38.62 54.4 37.6Q54.34 35.53 54.67 35.11ZM69.55 47.65Q70.15 47.92 70.95 48.19Q71.74 48.46 72.76 48.7Q74.77 49.18 76.39 49.15Q77.23 49.18 76.72 50.23L75.79 52.03Q75.49 52.66 74.92 52.6Q74.14 52.51 73.26 52.57Q72.37 52.63 71.38 52.78Q70.39 52.93 69.52 53.15Q68.65 53.38 67.87 53.62Q65.62 54.37 64.21 54.76Q62.8 55.15 62.2 55.21Q61.63 55.24 61.15 55.25Q60.67 55.27 60.28 55.24L59.89 55.18V51.85Q60.16 50.59 61.72 48.28Q63.31 45.91 64.84 46Q65.44 46.03 66.61 46.45Q67.78 46.87 69.55 47.65ZM67.33 50.41Q65.71 49.63 63.94 49.63Q62.11 49.63 61.15 51.58Q62.35 51.52 63.9 51.23Q65.44 50.95 67.33 50.41Z\"/><line x1=\"31\" y1=\"63.5\" x2=\"69\" y2=\"63.5\" stroke=\"#C9CFDA\" stroke-width=\".7\"/><path fill=\"#C9CFDA\" d=\"M32.91 70.84V78.48H31.69V75.22H27.93V78.48H26.7V70.84H27.93V74.06H31.69V70.84ZM37.22 78.48 40.6 70.52H40.67L44.05 78.48H42.65L40.27 72.43L41.15 71.84L38.42 78.48ZM39.34 75.63H41.95L42.37 76.68H38.97ZM48.36 70.84H49.59V77.3H53.34V78.48H48.36ZM57.17 78.48 60.55 70.52H60.63L64.01 78.48H62.6L60.23 72.43L61.1 71.84L58.37 78.48ZM59.29 75.63H61.91L62.33 76.68H58.93ZM68.31 70.84H69.54V77.3H73.3V78.48H68.31Z\"/>";
  var QR = {"n": 25, "d": "M0 0h7v1h-7zM13 0h1v1h-1zM16 0h1v1h-1zM18 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM9 1h2v1h-2zM13 1h4v1h-4zM18 1h1v1h-1zM24 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM8 2h2v1h-2zM12 2h1v1h-1zM15 2h1v1h-1zM18 2h1v1h-1zM20 2h3v1h-3zM24 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM8 3h1v1h-1zM10 3h1v1h-1zM13 3h2v1h-2zM18 3h1v1h-1zM20 3h3v1h-3zM24 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM8 4h2v1h-2zM16 4h1v1h-1zM18 4h1v1h-1zM20 4h3v1h-3zM24 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h1v1h-1zM11 5h5v1h-5zM18 5h1v1h-1zM24 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h7v1h-7zM8 7h3v1h-3zM12 7h1v1h-1zM14 7h3v1h-3zM0 8h1v1h-1zM2 8h5v1h-5zM9 8h2v1h-2zM12 8h3v1h-3zM18 8h5v1h-5zM2 9h1v1h-1zM4 9h1v1h-1zM7 9h1v1h-1zM12 9h1v1h-1zM16 9h1v1h-1zM19 9h1v1h-1zM23 9h1v1h-1zM5 10h2v1h-2zM8 10h1v1h-1zM11 10h2v1h-2zM14 10h6v1h-6zM21 10h1v1h-1zM23 10h2v1h-2zM2 11h3v1h-3zM8 11h3v1h-3zM12 11h1v1h-1zM14 11h2v1h-2zM17 11h4v1h-4zM24 11h1v1h-1zM1 12h1v1h-1zM4 12h1v1h-1zM6 12h2v1h-2zM9 12h2v1h-2zM13 12h3v1h-3zM17 12h2v1h-2zM20 12h1v1h-1zM22 12h3v1h-3zM0 13h1v1h-1zM3 13h1v1h-1zM5 13h1v1h-1zM7 13h2v1h-2zM10 13h1v1h-1zM12 13h1v1h-1zM14 13h1v1h-1zM16 13h1v1h-1zM19 13h1v1h-1zM21 13h1v1h-1zM23 13h1v1h-1zM0 14h1v1h-1zM2 14h3v1h-3zM6 14h1v1h-1zM10 14h1v1h-1zM13 14h1v1h-1zM15 14h1v1h-1zM17 14h1v1h-1zM19 14h3v1h-3zM23 14h2v1h-2zM0 15h1v1h-1zM4 15h2v1h-2zM9 15h1v1h-1zM12 15h1v1h-1zM15 15h1v1h-1zM19 15h2v1h-2zM24 15h1v1h-1zM0 16h1v1h-1zM2 16h3v1h-3zM6 16h5v1h-5zM12 16h2v1h-2zM15 16h6v1h-6zM22 16h1v1h-1zM8 17h2v1h-2zM13 17h1v1h-1zM16 17h1v1h-1zM20 17h2v1h-2zM0 18h7v1h-7zM10 18h5v1h-5zM16 18h1v1h-1zM18 18h1v1h-1zM20 18h1v1h-1zM22 18h3v1h-3zM0 19h1v1h-1zM6 19h1v1h-1zM8 19h2v1h-2zM11 19h1v1h-1zM16 19h1v1h-1zM20 19h2v1h-2zM24 19h1v1h-1zM0 20h1v1h-1zM2 20h3v1h-3zM6 20h1v1h-1zM8 20h1v1h-1zM10 20h11v1h-11zM22 20h1v1h-1zM0 21h1v1h-1zM2 21h3v1h-3zM6 21h1v1h-1zM8 21h3v1h-3zM12 21h1v1h-1zM14 21h5v1h-5zM20 21h5v1h-5zM0 22h1v1h-1zM2 22h3v1h-3zM6 22h1v1h-1zM8 22h1v1h-1zM10 22h1v1h-1zM12 22h1v1h-1zM14 22h1v1h-1zM16 22h2v1h-2zM21 22h2v1h-2zM24 22h1v1h-1zM0 23h1v1h-1zM6 23h1v1h-1zM11 23h2v1h-2zM14 23h8v1h-8zM24 23h1v1h-1zM0 24h7v1h-7zM8 24h2v1h-2zM11 24h1v1h-1zM13 24h3v1h-3zM17 24h8v1h-8z"};
  var DISH = {"churros": {"ru": ["Чурос", "Хрустящие чурос, сахар с корицей, шоколадный соус"], "en": ["Churros", "Crispy churros, cinnamon sugar, chocolate sauce"], "price": "65 000 / 85 000", "variant": {"ru": "S / M", "en": "S / M"}, "soldOut": false}, "pancakes": {"ru": ["Панкейки", "Пышные панкейки, кленовый сироп, сливочное масло, свежие ягоды, сахарная пудра"], "en": ["Pancakes", "Fluffy pancakes, maple syrup, butter, fresh berries, powdered sugar"], "price": "59 000", "variant": {"ru": "обычные / мини", "en": "regular / mini"}, "soldOut": false}, "crepes": {"ru": ["Крепс", "Тонкие блинчики, фисташковый или шоколадный крем, сахарная пудра"], "en": ["Crêpes", "Thin crêpes, pistachio or chocolate cream, powdered sugar"], "price": "69 000", "variant": {"ru": "фисташковый / шоколадный", "en": "pistachio / chocolate"}, "soldOut": false}, "ice-cream": {"ru": ["Мороженое", "Fresh milk, crafted with joy"], "en": ["Ice cream", ""], "price": "35 000 / 65 000", "variant": null, "soldOut": false}};   // fallback copy of the menu; prices are refreshed from the live menu page

  /* ================= settings ================= */

  var script = document.currentScript;
  var BASE = script && script.src ? script.src.replace(/[^\/]*$/, '') : '';
  var body = document.body;
  var SIDE = body.getAttribute('data-side') || 'all';      // l | r | all
  var TV = SIDE === 'l' || SIDE === 'r';
  var Q = new URLSearchParams(location.search);

  var store = null;
  try { store = window.localStorage; } catch (e) { store = null; }
  function load(k, d) {
    try { var v = store ? store.getItem('palinger-tv:' + k) : null; return v === null ? d : v; } catch (e) { return d; }
  }
  function save(k, v) { try { if (store) store.setItem('palinger-tv:' + k, String(v)); } catch (e) { /* private mode */ } }
  function num(v, d) { var n = parseFloat(v); return isFinite(n) ? n : d; }

  if (Q.has('gap')) save('gap', Math.max(0, Math.round(num(Q.get('gap'), 32))));
  if (Q.has('ms')) save('ms:' + SIDE, Math.round(num(Q.get('ms'), 0)));
  if (Q.has('flip')) save('flip:' + SIDE, Q.get('flip') === '0' ? 0 : 1);
  var GAP = Math.max(0, Math.round(num(load('gap', 32), 32)));
  var USER_MS = Math.round(num(load('ms:' + SIDE, 0), 0));
  var FLIP = String(load('flip:' + SIDE, 0)) === '1';
  var TEST = Q.has('test');
  var DEBUG = Q.has('debug');

  /* ================= geometry ================= */

  var LOOP = 80, LOOP_MS = LOOP * 1000;   // one full cycle, seconds
  var SW = 1080, SH = 1920;               // one screen in design pixels (portrait)
  var W = SW * 2 + GAP;                   // whole wall
  var XR = SW + GAP;                      // left edge of the right screen
  var CL = SW / 2, CR = XR + SW / 2;      // screen centres

  /* ================= helpers ================= */

  function h(tag, cls, parent, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  }
  function place(e, x, y, w, ht) {
    var s = e.style;
    s.left = x + 'px'; s.top = y + 'px';
    if (w != null) s.width = w + 'px';
    if (ht != null) s.height = ht + 'px';
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function mod(a, n) { return ((a % n) + n) % n; }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function withTimeout(p, ms) {
    return new Promise(function (res, rej) {
      var t = setTimeout(function () { rej(new Error('timeout')); }, ms);
      p.then(function (v) { clearTimeout(t); res(v); }, function (e) { clearTimeout(t); rej(e); });
    });
  }

  /* ================= animation =================
     Every moving thing is a Web Animation that lasts exactly one loop. All of them get the same
     start time, derived from internet time, so "where we are in the loop" is identical on both TVs.
     Frames are [seconds, value, easing]; the easing applies until the next frame. */

  var ANIMS = [];
  var HAS_WAAPI = !!(window.Element && Element.prototype.animate);
  var EASE = {
    out: 'cubic-bezier(.16,.84,.3,1)', io: 'cubic-bezier(.65,0,.35,1)',
    'in': 'cubic-bezier(.55,0,.85,.4)', lin: 'linear'
  };

  function tfm(p) {
    var sx = p.sx != null ? p.sx : (p.s != null ? p.s : 1);
    var sy = p.sy != null ? p.sy : (p.s != null ? p.s : 1);
    return 'translate(' + (p.x || 0) + 'px,' + (p.y || 0) + 'px) rotate(' + (p.r || 0) + 'deg) scale(' + sx + ',' + sy + ')';
  }
  function keyframes(list, prop, fmt) {
    list = list.slice().sort(function (a, b) { return a[0] - b[0]; });
    var cur = null, out = [];
    var full = list.map(function (f) {           // a frame may list only what changes
      var v = f[1];
      if (v && typeof v === 'object') {
        var m = {}, k;
        for (k in cur || {}) m[k] = cur[k];
        for (k in v) m[k] = v[k];
        v = m;
      }
      cur = v;
      return [f[0], v, f[2]];
    });
    function push(t, v, ease) {
      var k = { offset: Math.min(1, Math.max(0, t / LOOP)), easing: EASE[ease] || ease || 'linear' };
      k[prop] = fmt(v);
      out.push(k);
    }
    if (full[0][0] > 0) push(0, full[0][1]);
    full.forEach(function (f) { push(f[0], f[1], f[2]); });
    if (full[full.length - 1][0] < LOOP) push(LOOP, full[full.length - 1][1]);
    return out;
  }
  function run(e, frames) {
    if (!HAS_WAAPI) return;
    ANIMS.push(e.animate(frames, { duration: LOOP_MS, iterations: Infinity, fill: 'both' }));
  }
  function track(e, spec) {
    if (spec.t) run(e, keyframes(spec.t, 'transform', tfm));
    if (spec.o) run(e, keyframes(spec.o, 'opacity', String));
  }
  // visible only between a and b (hidden things cost the TV nothing to draw)
  function showBetween(e, a, b) {
    if (!HAS_WAAPI) { e.style.visibility = 'visible'; return; }
    a = Math.max(0, a - 0.6); b = Math.min(LOOP, b + 0.05);
    var k = [{ offset: 0, visibility: a <= 0 ? 'visible' : 'hidden', easing: 'step-end' }];
    if (a > 0) k.push({ offset: a / LOOP, visibility: 'visible', easing: 'step-end' });
    if (b < LOOP) k.push({ offset: b / LOOP, visibility: 'hidden', easing: 'step-end' });
    k.push({ offset: 1, visibility: b < LOOP ? 'hidden' : 'visible' });
    run(e, k);
  }
  function rise(e, t, dy, dur) {
    dy = dy == null ? 44 : dy; dur = dur || 1;
    track(e, { o: [[t, 0, 'out'], [t + dur * 0.8, 1]], t: [[t, { y: dy }, 'out'], [t + dur, { y: 0 }]] });
  }
  function glide(e, t, dx, dy, dur) {
    track(e, { o: [[t, 0, 'out'], [t + 0.6, 1]], t: [[t, { x: dx || 0, y: dy || 0 }, 'out'], [t + (dur || 2), { x: 0, y: 0 }]] });
  }

  /* ================= building blocks ================= */

  var PAD = 16;   // card padding 14 + border 2
  function card(parent, cx, y, w, ht, id) {
    var c = place(h('div', 'card', parent), Math.round(cx - w / 2 - PAD), y, w + PAD * 2, ht + PAD * 2);
    var im = h('img', '', c);
    im.alt = ''; im.width = w; im.height = ht;
    im.style.width = w + 'px'; im.style.height = ht + 'px';
    im.src = BASE + 'img/' + id + '.jpg';
    if (im.decode) im.decode().catch(function () {});
    return c;
  }
  function col(parent, x, y, w, ht) { return place(h('div', 'col', parent), x, y, w, ht); }

  function scene(parent, a, b) {
    var sc = place(h('div', 'scene', parent), 0, 0, W, SH);
    showBetween(sc, a, b);
    track(sc, { o: [[b - 0.8, 1, 'in'], [b, 0]], t: [[b - 0.8, { y: 0 }, 'in'], [b, { y: -36 }]] });
    return sc;
  }
  function kickers(sc, a, ru, en, subRu, subEn) {
    var k1 = place(h('div', 'kick', sc, '<b>' + esc(ru) + '</b>'), 0, 200, SW, 64);
    var k2 = place(h('div', 'kick en', sc, '<b>' + esc(en) + '</b>'), XR, 200, SW, 64);
    rise(k1, a + 0.15, 30); rise(k2, a + 0.3, 30);
    if (subRu) rise(place(h('div', 'sub', sc, esc(subRu)), 0, 292, SW), a + 0.5, 24);
    if (subEn) rise(place(h('div', 'sub', sc, esc(subEn)), XR, 292, SW), a + 0.65, 24);
  }

  // dish texts are bound to the menu data and re-rendered when fresh prices arrive
  var BOUND = [];
  function field(parent, cls, id, f, size) {
    var e = h('div', cls, parent);
    BOUND.push({ e: e, id: id, f: f, cls: cls, size: size });
    return e;
  }
  function render(b) {
    var d = DISH[b.id] || {}, e = b.e, s;
    e.className = b.cls;
    e.style.fontSize = b.size ? b.size + 'px' : '';
    if (b.f === 'ru') e.textContent = (d.ru && d.ru[0]) || '';
    else if (b.f === 'en') e.textContent = (d.en && d.en[0]) || '';
    else if (b.f === 'desc') { s = (d.ru && d.ru[1]) || ''; e.textContent = s; e.style.display = s ? '' : 'none'; }
    else if (b.f === 'var') { s = (d.variant && d.variant.ru) || ''; e.textContent = s; e.style.display = s ? '' : 'none'; }
    else if (b.f === 'price') {
      if (d.soldOut) { e.className = 'price out'; e.style.fontSize = ''; e.textContent = 'временно нет'; }
      else e.innerHTML = d.price ? esc(d.price).replace(/ \/ /g, '<span class="sl">/</span>') + '<small>сум</small>' : '';
    }
  }
  function fill() { BOUND.forEach(render); }

  // name, english name, description, variants, price — each line rises in turn
  function dishText(c, id, o, t) {
    var parts = [field(c, 'ru', id, 'ru', o.ru)];
    if (o.en !== false) parts.push(field(c, 'en', id, 'en', o.en));
    if (o.desc) parts.push(field(c, 'desc', id, 'desc', o.desc));
    if (o.variant) parts.push(field(c, 'var', id, 'var', o.variant));
    parts.push(field(c, 'price', id, 'price', o.price));
    parts.forEach(function (p, i) {
      if (i) p.style.marginTop = (p.className === 'en' ? 0.55 : p.className === 'price' ? 0.42 : 0.62) + 'em';
      rise(p, t + i * 0.14, 34);
    });
    return parts;
  }

  /* ================= scenes (seconds inside the 80 s loop) ================= */

  // 0–10 brand: the logo glides from the right screen into the left one
  function sBrand(a, b) {
    var sc = scene(wall, a, b);
    var lw = 760, lh = Math.round(lw * 486 / 461.9);
    var ly = 360, logo = place(h('img', 'abs', sc), CL - lw / 2, ly, lw, lh);
    logo.src = BASE + 'logo.svg'; logo.alt = '';
    glide(logo, a + 0.2, XR, 0, 2.4);
    rise(place(h('div', 'col by', sc, 'by Infinity Roses'), 0, ly + lh + 50, SW, 70), a + 2.2, 30);

    var c = col(sc, XR + 60, 330, SW - 120, 1060);
    var lines = [h('div', 'tag', c, 'Sweet moments'), h('div', 'tag', c, 'taste better'), h('div', 'tag', c, 'together')];
    var rule = h('div', 'rule', c); rule.style.margin = '64px 0 0';
    var made = h('div', 'made', c, 'MADE IN HOLLAND'); made.style.marginTop = '46px';
    var hb = h('div', 'halal', c, HALAL); hb.style.cssText = 'width:178px;height:178px;margin-top:54px';
    lines.forEach(function (l, i) { rise(l, a + 1.5 + i * 0.3, 50, 1.2); });
    track(rule, { o: [[a + 2.5, 0, 'out'], [a + 3, 1]], t: [[a + 2.5, { sx: 0 }, 'out'], [a + 3.5, { sx: 1 }]] });
    rise(made, a + 2.8, 30);
    track(hb, { o: [[a + 3.1, 0, 'out'], [a + 3.8, 1]], t: [[a + 3.1, { s: 0.8 }, 'out'], [a + 4.1, { s: 1 }]] });

    // one hairline across both screens, drawn from the left edge to the right one
    var hair = place(h('div', 'abs', sc), 120, 1448, W - 240, 2);
    hair.style.background = 'rgba(239,233,220,.45)';
    hair.style.transformOrigin = '0 50%';
    track(hair, { t: [[a + 0.6, { sx: 0 }, 'io'], [a + 3.2, { sx: 1 }]] });
  }

  // ice cream cups are cut from the LED banner: navy background with a soft glow, edges faded out
  function cup(parent, cx, y, w, n) {
    var ht = Math.round(w * 1400 / 1140);
    var im = place(h('img', 'abs ice', parent), Math.round(cx - w / 2), y, w, ht);
    im.alt = ''; im.src = BASE + 'img/ice-' + n + '.jpg';
    if (im.decode) im.decode().catch(function () {});
    return im;
  }
  // rise from below, then bob gently until the scene ends
  function riseAndFloat(e, t, b, phase) {
    var f = [[t, { y: 1000 }, 'out'], [t + 1.7, { y: 0 }, 'io']], up = true;
    for (var k = t + 1.7 + phase; k < b; k += 1.6) { f.push([k, { y: up ? -14 : 0 }, 'io']); up = !up; }
    track(e, { o: [[t, 0, 'out'], [t + 0.5, 1]], t: f });
  }
  function caption(parent, cls, text, size) {
    var e = h('div', cls, parent, esc(text));
    if (size) e.style.fontSize = size + 'px';
    return e;
  }
  function riseAll(list, t) {
    list.forEach(function (p, i) {
      if (i) p.style.marginTop = (p.className === 'en' ? 0.55 : p.className.indexOf('price') === 0 ? 0.42 : 0.62) + 'em';
      rise(p, t + i * 0.14, 34);
    });
  }

  // 10–22 ice cream: four cups rise from below, two on each screen, and keep floating
  function sIceCream(a, b) {
    var sc = scene(wall, a, b);
    kickers(sc, a, 'Мороженое', 'Ice cream');
    [[CL - 250, 1], [CL + 250, 3], [CR - 250, 2], [CR + 250, 4]].forEach(function (c, i) {
      riseAndFloat(cup(sc, c[0], 354, 585, c[1]), a + 0.3 + i * 0.18, b, i * 0.4);
    });
    var l = col(sc, 70, 1080, SW - 140, 440), r = col(sc, XR + 70, 1080, SW - 140, 440);
    riseAll([field(l, 'ru', 'ice-cream', 'ru', 120), field(l, 'en', 'ice-cream', 'en', 34)], a + 1.6);
    riseAll([field(r, 'desc', 'ice-cream', 'desc', 50), field(r, 'price', 'ice-cream', 'price', 92)], a + 1.9);
  }

  // 22–33 churros: the cup crosses the seam from the right screen, its text appears on the right
  function sChurros(a, b) {
    var sc = scene(wall, a, b);
    kickers(sc, a, 'Десерты', 'Desserts');
    var c = card(sc, CL, 470, 600, 800, 'churros');
    glide(c, a + 0.25, XR + 80, 0, 2.3);
    dishText(col(sc, XR + 70, 470, SW - 140, 832), 'churros', { ru: 120, en: 36, desc: 48, variant: 46, price: 96 }, a + 1.3);
  }

  // 33–44 pancakes: big ones on the left, mini ones with ice cream on the right
  function sPancakes(a, b) {
    var sc = scene(wall, a, b);
    kickers(sc, a, 'Панкейки', 'Pancakes');
    var c1 = card(sc, CL, 340, 900, 675, 'pancakes'), c2 = card(sc, CR, 340, 900, 675, 'mini-pancakes');
    glide(c1, a + 0.2, -1100, 0, 1.9);
    glide(c2, a + 0.45, 1100, 0, 1.9);
    var l = col(sc, 70, 1050, SW - 140, 500), r = col(sc, XR + 70, 1050, SW - 140, 500);
    riseAll([field(l, 'ru', 'pancakes', 'ru', 92), field(l, 'en', 'pancakes', 'en', 30), field(l, 'desc', 'pancakes', 'desc', 40), field(l, 'price', 'pancakes', 'price', 80)], a + 1.4);
    riseAll([caption(r, 'ru', 'Мини-панкейки', 92), caption(r, 'en', 'Mini pancakes', 30), caption(r, 'desc', 'с мороженым, ягодами и шоколадом', 40), field(r, 'price', 'pancakes', 'price', 80)], a + 1.7);
  }

  // 44–55 crêpes: two close-ups swap screens on the way in, crossing at the seam
  function sCrepes(a, b) {
    var sc = scene(wall, a, b);
    kickers(sc, a, 'Крепс', 'Crêpes');
    var c1 = card(sc, CL, 330, 600, 800, 'crepes-1'), c2 = card(sc, CR, 330, 600, 800, 'crepes-2');
    glide(c1, a + 0.2, XR, 0, 2.4);
    glide(c2, a + 0.45, -XR, 0, 2.4);
    var l = col(sc, 70, 1180, SW - 140, 380), r = col(sc, XR + 70, 1180, SW - 140, 380);
    riseAll([field(l, 'ru', 'crepes', 'ru', 100), field(l, 'en', 'crepes', 'en', 32), field(l, 'desc', 'crepes', 'desc', 40)], a + 1.6);
    riseAll([field(r, 'var', 'crepes', 'var', 46), field(r, 'price', 'crepes', 'price', 92)], a + 1.9);
  }

  // 55–68 to go: the branded cup on the left, tray and box on the right
  function sToGo(a, b) {
    var sc = scene(wall, a, b);
    kickers(sc, a, 'С собой', 'To go');
    var c = card(sc, CL, 340, 600, 800, 'churros-cup');
    glide(c, a + 0.2, 0, 1100, 1.9);
    var l = col(sc, 70, 1200, SW - 140, 340);
    riseAll([field(l, 'ru', 'churros', 'ru', 96), caption(l, 'desc', 'в фирменном стакане', 46)], a + 1.5);
    [['to-go-tray', 350, 'Мини-панкейки с мороженым'], ['to-go-box', 975, 'Десерт и кофе']].forEach(function (d, i) {
      var g = h('div', 'grp', sc);
      card(g, CR, d[1], 660, 495, d[0]);
      var t = col(g, XR + 70, d[1] + 535, SW - 140, 60);
      caption(t, 'var', d[2], 46);
      glide(g, a + 0.5 + i * 0.35, 1100, 0, 1.9);
    });
  }

  // 68–80 menu QR on the left, address on the right
  function sInfo(a, b) {
    var sc = scene(wall, a, b);
    kickers(sc, a, 'Меню онлайн', 'Menu online');
    var q = place(h('div', 'qr', sc, '<svg viewBox="0 0 ' + QR.n + ' ' + QR.n + '" shape-rendering="crispEdges" aria-hidden="true"><path fill="#1F2C47" d="' + QR.d + '"/></svg>'), CL - 300, 520, 600, 600);
    track(q, { o: [[a + 0.3, 0, 'out'], [a + 1, 1]], t: [[a + 0.3, { s: 0.9 }, 'out'], [a + 1.4, { s: 1 }]] });
    var c = col(sc, 60, 1170, SW - 120, 300);
    var t1 = h('div', 'desc', c, 'Наведите камеру телефона'); t1.style.fontSize = '54px';
    var t2 = h('div', 'addr', c, 'menu.palinger.uz'); t2.style.cssText = 'font-size:46px;margin-top:28px;letter-spacing:.12em';
    rise(t1, a + 0.9, 30); rise(t2, a + 1.1, 30);

    var lw = 470, lh = Math.round(lw * 486 / 461.9);
    var logo = place(h('img', 'abs', sc), CR - lw / 2, 500, lw, lh);
    logo.src = BASE + 'logo.svg'; logo.alt = '';
    track(logo, { o: [[a + 0.5, 0, 'out'], [a + 1.3, 1]], t: [[a + 0.5, { s: 0.92 }, 'out'], [a + 1.8, { s: 1 }]] });
    var c2 = col(sc, XR + 60, 500 + lh + 40, SW - 120, 470);
    c2.style.justifyContent = 'flex-start';
    var rows = [
      h('div', 'addr', c2, 'TARAS SHEVCHENKO ST. 40'),
      h('div', 'addr', c2, 'TASHKENT'),
      h('div', 'rule', c2),
      h('div', 'addr', c2, '@PALINGER.UZ'),
      h('div', 'addr', c2, '+998 77 370 11 22')
    ];
    rows[2].style.margin = '30px 0';
    rows.forEach(function (r, i) { rise(r, a + 1.2 + i * 0.12, 26); });
  }

  /* ================= the sync test picture ================= */

  var counters = [];
  function buildTest() {
    var sc = place(h('div', 'scene', wall), 0, 0, W, SH);
    sc.style.visibility = 'visible';
    for (var y = 160; y < SH; y += 160) place(h('div', 'tline', sc), 0, y, W, 2);
    // a straight diagonal: it bends at the seam if the gap setting is wrong
    var dy = 1100, len = Math.sqrt(W * W + dy * dy);
    var diag = place(h('div', 'abs', sc), 0, 380, len, 6);
    diag.style.cssText += ';background:#FFD400;transform-origin:0 50%;transform:rotate(' + (Math.atan2(dy, W) * 180 / Math.PI) + 'deg)';
    [[0, 'ЛЕВЫЙ'], [XR, 'ПРАВЫЙ']].forEach(function (s) {
      place(h('div', 'tlabel', sc, s[1]), s[0], 560);
      counters.push(place(h('div', 'tcount', sc, '0.00'), s[0], 760));
      var hint = place(h('div', 'tlabel', sc, 'цифры и полоса должны совпадать'), s[0], 1120);
      hint.style.cssText += ';font-size:40px;letter-spacing:.04em;opacity:.8';
      // a square that blinks twice a second on both screens at once
      var sq = place(h('div', 'abs', sc), s[0] + 440, 1300, 200, 200);
      sq.style.background = '#FFD400';
      var f = [];
      for (var t = 0; t < LOOP; t += 0.5) f.push([t, (t * 2) % 2 === 0 ? 1 : 0, 'step-end']);
      track(sq, { o: f });
    });
    var bar = place(h('div', 'tbar', sc), 0, 0);
    var fr = [];
    for (var i = 0; i <= LOOP / 2.5; i++) fr.push([i * 2.5, { x: i % 2 ? W - 48 : 0 }, 'lin']);
    track(bar, { t: fr });
  }
  function tickCounters(ts) {
    var v = (mod(ts + K + USER_MS, LOOP_MS) / 1000).toFixed(2);
    counters.forEach(function (c) { c.textContent = v; });
    requestAnimationFrame(tickCounters);
  }

  /* ================= page ================= */

  var header = document.querySelector('.ov');
  if (!TV) body.className += ' all';
  var view = h('div', '', body); view.id = 'view';
  var stage = h('div', '', view); stage.id = 'stage';
  var wall = h('div', '', stage); wall.id = 'wall';
  wall.style.width = W + 'px';
  if (TV) wall.style.left = (SIDE === 'r' ? -XR : 0) + 'px';
  else {
    stage.style.width = W + 'px';
    place(h('div', 'bezel', stage), SW, 0, GAP);
  }

  // frame round the whole wall, the skyline standing on its bottom line
  place(h('div', 'frame', wall), 40, 40, W - 80, SH - 80);
  place(h('div', 'frame in', wall), 52, 52, W - 104, SH - 104);
  (function skyline() {
    var WID = { towerbridge: 28, colosseum: 22, eiffel: 14, parthenon: 20, brandenburg: 18, sagrada: 12, cologne: 12, bigben: 8, pisa: 10, arc: 16, notredame: 18 };
    var seq = ['eiffel', 'towerbridge', 'bigben', 'colosseum', 'sagrada', 'arc', 'pisa', 'brandenburg', 'notredame', 'cologne', 'parthenon'];
    var k = 5.5, P = 2400, used = 0;
    seq.forEach(function (n) { used += WID[n] * k; });
    var gap = (P - used) / seq.length, uses = '', x = 0;
    for (var rep = 0; rep < 3; rep++) {
      seq.forEach(function (n) {
        uses += '<use href="#lx-' + n + '" xlink:href="#lx-' + n + '" transform="translate(' + x.toFixed(1) + ' 0) scale(' + k + ')"/>';
        x += WID[n] * k + gap;
      });
    }
    var clipTop = 1560, ground = SH - 53, ht = 44 * k;
    var clip = place(h('div', 'skyclip', wall), 53, clipTop, W - 106, ground - clipTop);
    var svg = h('div', '', clip,
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + Math.ceil(x) + '" height="' + ht +
      '" viewBox="0 0 ' + Math.ceil(x) + ' ' + ht + '" aria-hidden="true"><defs>' + LANDMARKS + '</defs>' + uses + '</svg>').firstChild;
    svg.style.top = (ground - clipTop - ht) + 'px';
    track(svg, { t: [[0, { x: 0 }, 'lin'], [LOOP, { x: -P }]] });
  })();

  if (!HAS_WAAPI) {
    place(h('div', 'col', wall, '<div class="desc">Этот браузер не умеет показывать анимацию.<br>Откройте страницу в приложении «Интернет» на ТВ.</div>'), 0, 700, W, 400);
  } else if (TEST) {
    buildTest();
  } else {
    sBrand(0, 10);
    sIceCream(10, 22);
    sChurros(22, 33);
    sPancakes(33, 44);
    sCrepes(44, 55);
    sToGo(55, 68);
    sInfo(68, 80);
  }
  fill();

  var hud = h('div', '', TV ? stage : view); hud.id = 'hud';
  if (!TV) { hud.style.cssText = 'left:16px;right:auto;bottom:16px;font-size:13px;padding:8px 12px'; }

  function fit() {
    if (header) view.style.top = header.offsetHeight + 'px';
    var vw = view.clientWidth, vh = view.clientHeight, s, tr;
    if (TV) {
      // the left TV is turned clockwise and the right one counter-clockwise, so the picture turns back
      var rot = (SIDE === 'l' ? -90 : 90) * (FLIP ? -1 : 1);
      // fill the whole screen: when the browser bar takes some room, crop the edges evenly
      // instead of leaving black bands (in full screen the TV is exactly 16:9 and nothing is cut)
      s = Math.max(vw / SH, vh / SW);
      tr = 'translate(' + vw / 2 + 'px,' + vh / 2 + 'px) rotate(' + rot + 'deg) scale(' + s + ') translate(' + (-SW / 2) + 'px,' + (-SH / 2) + 'px)';
    } else {
      s = Math.min(vw / W, vh / SH);
      tr = 'translate(' + vw / 2 + 'px,' + vh / 2 + 'px) scale(' + s + ') translate(' + (-W / 2) + 'px,' + (-SH / 2) + 'px)';
    }
    stage.style.transform = tr;
  }
  fit();
  window.addEventListener('resize', fit);
  function onFull() { fit(); if (typeof drawHud === 'function') drawHud(); }
  document.addEventListener('fullscreenchange', onFull);
  document.addEventListener('webkitfullscreenchange', onFull);

  /* ================= time =================
     server time = performance.now() + K. Every animation's start time is set so that its local
     time equals (server time + this TV's correction) modulo the loop. */

  var K = Date.now() - performance.now();
  var SYNC = { ok: false, busy: true, src: '', err: 0, fn: null };

  function applyTime() {
    var st = -mod(K + USER_MS, LOOP_MS);
    ANIMS.forEach(function (an) { try { an.startTime = st; } catch (e) { /* ignore */ } });
  }

  function sampleAkamai() {
    var t0 = performance.now();
    return withTimeout(fetch('https://time.akamai.com/?ms&r=' + Math.random().toString(36).slice(2), { cache: 'no-store', credentials: 'omit', mode: 'cors' })
      .then(function (r) { return r.text(); }), 4000).then(function (txt) {
      var t1 = performance.now(), ms = parseFloat(txt) * 1000;
      if (!(ms > 1.6e12)) throw new Error('bad time');
      return { k: ms - (t0 + t1) / 2, rtt: t1 - t0 };
    });
  }
  function sampleTimeapi() {
    var t0 = performance.now();
    return withTimeout(fetch('https://timeapi.io/api/time/current/zone?timeZone=UTC', { cache: 'no-store', credentials: 'omit' })
      .then(function (r) { return r.json(); }), 5000).then(function (j) {
      var t1 = performance.now();
      var m = /^(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)(?:\.(\d+))?/.exec(j.dateTime || '');
      if (!m) throw new Error('bad time');
      var ms = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]) + (m[7] ? Math.round(parseFloat('0.' + m[7]) * 1000) : 0);
      return { k: ms - (t0 + t1) / 2, rtt: t1 - t0 };
    });
  }
  // last resort: the Date header of this site only has whole seconds, so narrow it down over many requests
  function sampleDateHeader() {
    var lo = -Infinity, hi = Infinity, got = 0, i = 0;
    function one() {
      var t0 = performance.now();
      return withTimeout(fetch(location.pathname + '?t=' + Math.random().toString(36).slice(2), { method: 'HEAD', cache: 'no-store' }), 4000)
        .then(function (r) {
          var t1 = performance.now(), d = Date.parse(r.headers.get('date') || '');
          if (!isFinite(d)) throw new Error('no date');
          lo = Math.max(lo, d - t1); hi = Math.min(hi, d + 1000 - t0); got++;
        });
    }
    function step() {
      if (i++ >= 14) return Promise.resolve();
      return one().catch(function () {}).then(function () { return wait(150 + Math.random() * 600); }).then(step);
    }
    return step().then(function () {
      if (!got || !(hi >= lo)) throw new Error('no date');
      return { k: (lo + hi) / 2, rtt: hi - lo };
    });
  }
  function series(fn, n, gapMs) {
    var out = [];
    function step(i) {
      if (i >= n) return Promise.resolve(out);
      return fn().then(function (s) { out.push(s); }, function () {})
        .then(function () { return wait(gapMs); }).then(function () { return step(i + 1); });
    }
    return step(0);
  }
  function quickest(list) {   // the answer that came back fastest is the most accurate one
    var b = null;
    list.forEach(function (s) { if (!b || s.rtt < b.rtt) b = s; });
    return b;
  }
  var SOURCES = [
    { name: 'time.akamai.com', run: function (first) { return series(sampleAkamai, first ? 7 : 4, 120).then(function (l) { return quickest(first && l.length > 1 ? l.slice(1) : l); }); } },
    { name: 'timeapi.io', run: function (first) { return series(sampleTimeapi, first ? 5 : 3, 150).then(function (l) { return quickest(first && l.length > 1 ? l.slice(1) : l); }); } },
    { name: 'menu.palinger.uz', run: function () { return sampleDateHeader().catch(function () { return null; }); } }
  ];
  function syncFirst(i) {
    i = i || 0;
    if (i >= SOURCES.length) { SYNC.busy = false; return Promise.resolve(); }
    return SOURCES[i].run(true).then(function (b) {
      if (!b) return syncFirst(i + 1);
      K = b.k; SYNC = { ok: true, busy: false, src: SOURCES[i].name, err: b.rtt / 2, fn: SOURCES[i] };
      applyTime();
    }, function () { return syncFirst(i + 1); });
  }
  function resync() {
    if (!SYNC.fn) return syncFirst().then(drawHud);
    return SYNC.fn.run(false).then(function (b) {
      if (!b) return;
      var err = b.rtt / 2;
      if (err > Math.max(40, SYNC.err * 2.5)) return;      // a slow answer: keep what we have
      if (Math.abs(b.k - K) > 3) { K = b.k; applyTime(); }
      SYNC.err = err;
    }).catch(function () {}).then(drawHud);
  }

  /* ================= status line, keys ================= */

  var hudTimer = 0;
  function drawHud() {
    var side = SIDE === 'l' ? 'ЛЕВЫЙ ТВ' : SIDE === 'r' ? 'ПРАВЫЙ ТВ' : 'Предпросмотр';
    var s = '<b>' + side + '</b> · ';
    if (SYNC.busy) s += 'сверяю время…';
    else if (SYNC.ok) s += 'время: ' + SYNC.src + ', точность ±' + Math.max(1, Math.round(SYNC.err)) + ' мс';
    else s += '<span class="warn">интернет-время недоступно, иду по часам ТВ</span>';
    s += '<br>поправка ' + USER_MS + ' мс · зазор ' + GAP + ' · поворот ' + (FLIP ? 'обратный' : 'обычный');
    if (TV && !fullScreen()) s += '<br><span class="warn">Видна панель браузера: наведите курсор на картинку и нажмите OK</span>';
    if (TV) s += '<br>OK — полный экран · ◀ ▶ поправка ±5 мс · ▲ ▼ зазор ±2';
    hud.innerHTML = s;
  }
  function showHud(ms) {
    drawHud();
    hud.className = 'on';
    clearTimeout(hudTimer);
    if (!DEBUG) hudTimer = setTimeout(function () { hud.className = ''; }, ms);
  }
  // full screen, or a browser that shows no bar at all (the page area is then exactly 16:9)
  function fullScreen() {
    var d = document;
    if (d.fullscreenElement || d.webkitFullscreenElement) return true;
    var vw = view.clientWidth, vh = view.clientHeight;
    return vh > 0 && Math.abs(vw / vh - 16 / 9) < 0.03;
  }
  function fullscreen() {
    var d = document, el = d.documentElement;
    if (d.fullscreenElement || d.webkitFullscreenElement) return;
    [el, d.body].some(function (t) {
      var f = t.requestFullscreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen;
      if (!f) return false;
      try { var p = f.call(t); if (p && p.catch) p.catch(function () {}); return true; } catch (e) { return false; }
    });
  }
  function reloadWithout(param) {
    Q.delete(param);
    var qs = Q.toString();
    location.replace(location.pathname + (qs ? '?' + qs : ''));
  }
  if (TV) {
    document.addEventListener('click', function () { fullscreen(); showHud(8000); });
    document.addEventListener('keydown', function (e) {
      var k = e.key, c = e.keyCode, used = true;
      if (k === 'Enter' || c === 13) fullscreen();
      else if (k === 'ArrowLeft' || c === 37) { USER_MS -= 5; save('ms:' + SIDE, USER_MS); applyTime(); }
      else if (k === 'ArrowRight' || c === 39) { USER_MS += 5; save('ms:' + SIDE, USER_MS); applyTime(); }
      else if (k === 'ArrowUp' || c === 38) { save('gap', GAP + 2); reloadWithout('gap'); }
      else if (k === 'ArrowDown' || c === 40) { save('gap', Math.max(0, GAP - 2)); reloadWithout('gap'); }
      else used = false;
      if (used && e.preventDefault) e.preventDefault();
      showHud(8000);
    });
  }

  /* ================= start ================= */

  function loadMenu() {
    return withTimeout(fetch(BASE + '../index.html?tv=' + Date.now(), { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('http ' + r.status);
      return r.text();
    }), 10000).then(function (html) {
      var m = /<script[^>]*id="menu-data"[^>]*>([\s\S]*?)<\/script>/.exec(html);
      if (!m) return;
      var data = JSON.parse(m[1]);
      Object.keys(DISH).forEach(function (id) {
        var d = data.dishes && data.dishes[id];
        if (d && d.ru) DISH[id] = { ru: d.ru, en: d.en, price: d.price || null, variant: d.variant || null, soldOut: !!d.soldOut };
      });
      fill();
    }).catch(function () { /* keep the built-in prices */ });
  }
  function keepAwake() {
    try { if (navigator.wakeLock && document.visibilityState === 'visible') navigator.wakeLock.request('screen').catch(function () {}); } catch (e) { /* no wake lock */ }
  }

  applyTime();                      // start right away on the TV's own clock
  if (TEST) requestAnimationFrame(tickCounters);
  showHud(DEBUG ? 0 : (TV && !fullScreen() ? 60000 : 25000));
  var fonts = document.fonts && document.fonts.ready ? withTimeout(document.fonts.ready, 3500).catch(function () {}) : wait(800);
  var synced = withTimeout(syncFirst(), 9000).catch(function () {});
  Promise.all([fonts, synced]).then(function () { wall.className = 'on'; drawHud(); });
  setTimeout(function () { wall.className = 'on'; }, 9000);
  loadMenu();
  keepAwake();
  document.addEventListener('visibilitychange', keepAwake);

  setInterval(resync, 3 * 60 * 1000);          // clocks drift a little, so check again every 3 minutes
  setInterval(loadMenu, 30 * 60 * 1000);       // prices follow the online menu
  if (DEBUG) setInterval(drawHud, 1000);
  var started = Date.now();
  setInterval(function () {                    // fresh start every night at 5 am
    if (new Date().getHours() === 5 && Date.now() - started > 2 * 3600 * 1000) location.reload();
  }, 10 * 60 * 1000);
})();
