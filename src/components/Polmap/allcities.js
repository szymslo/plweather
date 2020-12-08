const allcities = [
    { name: "Aleksandrów Kujawski", lat: 52.88, long: 18.70},
    { name: "Aleksandrów Łódzki", lat: 51.82, long: 19.29},
    { name: "Andrychów", lat: 49.86, long: 19.33},
    { name: "Augustów", lat: 53.83, long: 23.00},
    { name: "Barlinek", lat: 52.99, long: 15.19},
    { name: "Bartoszyce", lat: 54.24, long: 20.80},
    { name: "Będzin", lat: 50.34, long: 19.12},
    { name: "Bełchatów", lat: 51.36, long: 19.36},
    { name: "Biała Podlaska", lat: 52.03, long: 23.11},
    { name: "Białogard", lat: 54.00, long: 15.97},
    { name: "Białystok", lat: 53.13, long: 23.15},
    { name: "Bielawa", lat: 50.68, long: 16.61},
    { name: "Bielsk Podlaski", lat: 52.78, long: 23.29},
    { name: "Bielsko Biała", lat: 49.81, long: 19.04},
    { name: "Bieruń", lat: 50.10, long: 19.10},
    { name: "Biłgoraj", lat: 50.53, long: 22.72},
    { name: "Biskupiec", lat: 53.87, long: 20.95},
    { name: "Blachownia", lat: 50.79, long: 18.95},
    { name: "Błonie", lat: 52.19, long: 20.62},
    { name: "Bochnia", lat: 49.97, long: 20.42},
    { name: "Bogatynia", lat: 50.91, long: 14.96},
    { name: "Boguszów-Gorce", lat: 50.76, long: 16.18},
    { name: "Bolesławiec", lat: 51.25, long: 15.56},
    { name: "Braniewo", lat: 54.39, long: 19.81},
    { name: "Brodnica", lat: 53.25, long: 19.39},
    { name: "Brwinów", lat: 52.17, long: 20.79},
    { name: "Brzeg", lat: 50.84, long: 17.47},
    { name: "Brzeg Dolny", lat: 51.27, long: 16.73},
    { name: "Brzesko", lat: 49.96, long: 20.60},
    { name: "Brzeszcze", lat: 49.99, long: 19.14},
    { name: "Brzeziny", lat: 51.80, long: 19.74},
    { name: "Bukowno", lat: 50.29, long: 19.44},
    { name: "Busko-Zdrój", lat: 50.47, long: 20.71},
    { name: "Bydgoszcz", lat: 53.12, long: 18.01},
    { name: "Bystrzyca Kłodzka", lat: 50.29, long: 16.63},
    { name: "Bytom", lat: 50.34, long: 18.90},
    { name: "Bytów", lat: 54.17, long: 17.47},
    { name: "Chełm", lat: 51.13, long: 23.49},
    { name: "Chełmek", lat: 50.11, long: 19.24},
    { name: "Chełmno", lat: 53.35, long: 18.42},
    { name: "Chełmża", lat: 53.18, long: 18.60},
    { name: "Chodzież", lat: 52.98, long: 16.91},
    { name: "Chojnice", lat: 53.70, long: 17.56},
    { name: "Chojnów", lat: 51.28, long: 15.93},
    { name: "Chorzów", lat: 50.29, long: 19.03},
    { name: "Choszczno", lat: 53.18, long: 15.40},
    { name: "Chrzanów", lat: 50.13, long: 19.39},
    { name: "Ciechanów", lat: 52.88, long: 20.62},
    { name: "Ciechocinek", lat: 52.88, long: 18.79},
    { name: "Cieszyn", lat: 49.75, long: 18.62},
    { name: "Czarna Białostocka", lat: 53.58, long: 22.57},
    { name: "Czarnków", lat: 52.91, long: 16.54},
    { name: "Czechowice-Dziedzice", lat: 49.91, long: 19.02},
    { name: "Czeladź", lat: 50.32, long: 19.12},
    { name: "Czersk", lat: 53.80, long: 17.97},
    { name: "Czerwionka-Leszczyny", lat: 50.17, long: 18.68},
    { name: "Częstochowa", lat: 50.81, long: 19.12},
    { name: "Człuchów", lat: 53.67, long: 17.35},
    { name: "Dąbrowa Górnicza", lat: 50.33, long: 19.18},
    { name: "Dąbrowa Tarnowska", lat: 50.17, long: 21.00},
    { name: "Darłowo", lat: 54.41, long: 16.41},
    { name: "Dębica", lat: 50.06, long: 21.42},
    { name: "Dęblin", lat: 51.56, long: 21.83},
    { name: "Dębno", lat: 52.74, long: 14.69},
    { name: "Dobre Miasto", lat: 53.99, long: 20.39},
    { name: "Drawsko Pomorskie", lat: 53.52, long: 15.80},
    { name: "Drezdenko", lat: 52.82, long: 15.82},
    { name: "Działdowo", lat: 53.22, long: 20.18},
    { name: "Dzierżoniów", lat: 50.72, long: 16.65},
    { name: "Elbląg", lat: 54.17, long: 19.39},
    { name: "Ełk", lat: 53.83, long: 22.35},
    { name: "Garwolin", lat: 51.90, long: 21.62},
    { name: "Gdańsk", lat: 54.36, long: 18.63},
    { name: "Gdynia", lat: 54.52, long: 18.53},
    { name: "Giżycko", lat: 54.04, long: 21.75},
    { name: "Gliwice", lat: 50.31, long: 18.66},
    { name: "Głogów", lat: 51.66, long: 16.08},
    { name: "Głowno", lat: 51.97, long: 19.70},
    { name: "Glubczyce", lat: 50.18, long: 17.83},
    { name: "Głuchołazy", lat: 50.32, long: 17.37},
    { name: "Gniezno", lat: 52.53, long: 17.61},
    { name: "Gołdap", lat: 54.31, long: 22.30},
    { name: "Goleniów", lat: 53.57, long: 14.81},
    { name: "Golub-Dobrzyń", lat: 53.11, long: 19.04},
    { name: "Góra", lat: 51.66, long: 16.52},
    { name: "Góra Kalwaria", lat: 51.99, long: 21.20},
    { name: "Gorlice", lat: 49.67, long: 21.15},
    { name: "Gorzów", lat: 52.74, long: 15.23},
    { name: "Gostyń", lat: 51.87, long: 17.00},
    { name: "Gostynin", lat: 53.43, long: 19.43},
    { name: "Grajewo", lat: 53.65, long: 22.44},
    { name: "Grodków", lat: 50.70, long: 17.37},
    { name: "Grodzisk Mazowiecki", lat: 52.10, long: 20.62},
    { name: "Grodzisk Wielkopolski", lat: 52.23, long: 16.36},
    { name: "Grójec", lat: 51.87, long: 20.85},
    { name: "Grudziądz", lat: 53.49, long: 18.74},
    { name: "Gryfice", lat: 53.91, long: 15.19},
    { name: "Gryfino", lat: 53.22, long: 14.47},
    { name: "Gubin", lat: 51.95, long: 14.71},
    { name: "Hajnówka", lat: 52.72, long: 23.57},
    { name: "Hel", lat: 54.61, long: 18.85},
    { name: "Hrubieszów", lat: 50.81, long: 23.88},
    { name: "Iława", lat: 53.58, long: 19.56},
    { name: "Inowrocław", lat: 52.78, long: 18.24},
    { name: "Janikowo", lat: 52.42, long: 17.03},
    { name: "Janów Lubelski", lat: 50.71, long: 22.41},
    { name: "Jarocin", lat: 51.97, long: 17.49},
    { name: "Jarosław", lat: 50.02, long: 22.67},
    { name: "Jasło", lat: 49.73, long: 21.46},
    { name: "Jastrzębie-Zdroj", lat: 49.99, long: 18.59},
    { name: "Jawor", lat: 51.06, long: 16.20},
    { name: "Jaworzno", lat: 50.20, long: 19.27},
    { name: "Jędrzejow", lat: 50.65, long: 20.29},
    { name: "Jelcz-Laskowice", lat: 51.02, long: 17.29},
    { name: "Jelenia Góra", lat: 50.90, long: 15.72},
    { name: "Józefów", lat: 52.15, long: 21.26},
    { name: "Kalety", lat: 50.57, long: 18.89},
    { name: "Kalisz", lat: 51.77, long: 18.10},
    { name: "Kamień Pomorski", lat: 53.97, long: 14.77},
    { name: "Kamienna Góra", lat: 50.79, long: 16.03},
    { name: "Karczew", lat: 52.08, long: 21.24},
    { name: "Kartuzy", lat: 54.32, long: 18.20},
    { name: "Kasprowy Wierch", lat: 49.19, long: 19.99},
    { name: "Katowice", lat: 50.25, long: 19.02},
    { name: "Kędzierzyn-Koźle", lat: 50.34, long: 18.20},
    { name: "Kępno", lat: 51.28, long: 18.00},
    { name: "Kętrzyn", lat: 54.07, long: 21.37},
    { name: "Kęty", lat: 49.87, long: 19.21},
    { name: "Kielce", lat: 50.88, long: 20.64},
    { name: "Kłobuck", lat: 50.90, long: 18.94},
    { name: "Kłodzko", lat: 50.43, long: 16.65},
    { name: "Kluczbork", lat: 50.98, long: 18.20},
    { name: "Knurów", lat: 50.22, long: 18.66},
    { name: "Kobyłka", lat: 52.33, long: 21.20},
    { name: "Kolno", lat: 53.41, long: 21.92},
    { name: "Koło", lat: 52.19, long: 18.63},
    { name: "Kołobrzeg", lat: 54.18, long: 15.56},
    { name: "Koluszki", lat: 51.75, long: 19.81},
    { name: "Konin", lat: 52.20, long: 18.24},
    { name: "Końskie", lat: 51.20, long: 20.39},
    { name: "Konstancin-Jeziorna", lat: 52.09, long: 21.11},
    { name: "Konstantynów Łódzki", lat: 51.75, long: 19.31},
    { name: "Koronowo", lat: 53.31, long: 17.92},
    { name: "Kościan", lat: 52.09, long: 16.63},
    { name: "Koscierzyna", lat: 54.13, long: 17.97},
    { name: "Kostrzyn", lat: 52.58, long: 14.64},
    { name: "Koszalin", lat: 54.18, long: 16.18},
    { name: "Kowary", lat: 50.79, long: 15.82},
    { name: "Kozienice", lat: 51.59, long: 21.55},
    { name: "Kożuchów", lat: 51.75, long: 15.60},
    { name: "Kraków", lat: 50.06, long: 19.95},
    { name: "Krapkowice", lat: 50.47, long: 17.96},
    { name: "Krasnik", lat: 50.92, long: 22.21},
    { name: "Krasnystaw", lat: 50.99, long: 23.17},
    { name: "Krosno", lat: 49.70, long: 21.75},
    { name: "Krosno Odrzańskie", lat: 52.06, long: 15.10},
    { name: "Krotoszyn", lat: 51.70, long: 17.43},
    { name: "Kruszwica", lat: 52.68, long: 18.29},
    { name: "Krynica", lat: 49.41, long: 20.95},
    { name: "Krzeszowice", lat: 50.13, long: 19.63},
    { name: "Kudowa-Zdrój", lat: 50.42, long: 16.22},
    { name: "Kutno", lat: 52.24, long: 19.36},
    { name: "Kwidzyn", lat: 53.74, long: 18.93},
    { name: "Lębork", lat: 54.54, long: 17.75},
    { name: "Ledziny", lat: 50.13, long: 19.05},
    { name: "Legionowo", lat: 52.40, long: 20.92},
    { name: "Legnica", lat: 51.20, long: 16.15},
    { name: "Lesko", lat: 49.47, long: 22.32},
    { name: "Leszno", lat: 51.84, long: 16.57},
    { name: "Leżajsk", lat: 50.25, long: 22.42},
    { name: "Libiąż", lat: 50.10, long: 19.29},
    { name: "Lidzbark Warmiński", lat: 54.13, long: 20.59},
    { name: "Limanowa", lat: 49.70, long: 20.41},
    { name: "Lipno", lat: 52.83, long: 19.16},
    { name: "Lobez", lat: 53.64, long: 15.62},
    { name: "Lubaczów", lat: 50.16, long: 23.11},
    { name: "Lubań", lat: 51.11, long: 15.28},
    { name: "Lubartów", lat: 51.45, long: 22.61},
    { name: "Lubawa", lat: 53.50, long: 19.74},
    { name: "Lubin", lat: 51.39, long: 16.20},
    { name: "Lublin", lat: 51.24, long: 22.57},
    { name: "Lubliniec", lat: 50.66, long: 18.68},
    { name: "Luboń", lat: 52.33, long: 16.87},
    { name: "Lubsko", lat: 51.79, long: 14.96},
    { name: "Lwowek Slaski", lat: 51.11, long: 15.60},
    { name: "Łańcut", lat: 50.06, long: 22.22},
    { name: "Łapy", lat: 52.98, long: 22.89},
    { name: "Łask", lat: 51.60, long: 19.14},
    { name: "Łaziska Gorne", lat: 50.17, long: 18.77},
    { name: "Łeba", lat: 54.75, long: 17.33},
    { name: "Łęczna", lat: 51.31, long: 22.87},
    { name: "Łęczyca", lat: 52.06, long: 19.19},
    { name: "Łódź", lat: 51.77, long: 19.45},
    { name: "Łomianki", lat: 52.34, long: 20.88},
    { name: "Łomża", lat: 53.18, long: 22.07},
    { name: "Łuków", lat: 51.94, long: 22.39},
    { name: "Maków Mazowiecki", lat: 52.86, long: 21.10},
    { name: "Malbork", lat: 54.04, long: 19.04},
    { name: "Marki", lat: 52.32, long: 21.11},
    { name: "Miastko", lat: 54.00, long: 16.96},
    { name: "Miechów", lat: 50.36, long: 20.01},
    { name: "Miedzychod", lat: 52.61, long: 15.89},
    { name: "Miedzyrzec Podlaski", lat: 51.99, long: 22.78},
    { name: "Miedzyrzecz", lat: 52.45, long: 15.56},
    { name: "Mielec", lat: 50.29, long: 21.43},
    { name: "Mikolów", lat: 50.23, long: 18.96},
    { name: "Mikołajki", lat: 53.68, long: 21.48},
    { name: "Milanówek", lat: 52.13, long: 20.65},
    { name: "Milicz", lat: 51.53, long: 17.27},
    { name: "Mińsk Mazowiecki", lat: 52.17, long: 21.55},
    { name: "Mława", lat: 53.12, long: 20.36},
    { name: "Mogilno", lat: 52.65, long: 17.96},
    { name: "Mońki", lat: 53.40, long: 22.78},
    { name: "Morąg", lat: 53.91, long: 19.93},
    { name: "Mosina", lat: 52.25, long: 16.84},
    { name: "Mrągowo", lat: 53.88, long: 21.30},
    { name: "Murowana Goślina", lat: 52.58, long: 17.01},
    { name: "Myślenice", lat: 49.83, long: 19.93},
    { name: "Myśliborz", lat: 52.92, long: 14.86},
    { name: "Mysłowice", lat: 50.24, long: 19.14},
    { name: "Myszków", lat: 50.58, long: 19.31},
    { name: "Nakło nad Notecia", lat: 53.13, long: 17.59},
    { name: "Namysłów", lat: 51.07, long: 17.71},
    { name: "Nidzica", lat: 53.36, long: 20.42},
    { name: "Nisko", lat: 50.52, long: 22.13},
    { name: "Nowa Dęba", lat: 50.43, long: 21.75},
    { name: "Nowa Ruda", lat: 50.59, long: 16.50},
    { name: "Nowa Sól", lat: 51.80, long: 15.70},
    { name: "Nowe Miasto Lubawskie", lat: 53.43, long: 19.59},
    { name: "Nowogard", lat: 53.66, long: 15.10},
    { name: "Nowy Dwór Gdański", lat: 54.22, long: 19.12},
    { name: "Nowy Dwór Mazowiecki", lat: 52.42, long: 20.70},
    { name: "Nowy Sącz", lat: 49.63, long: 20.69},
    { name: "Nowy Targ", lat: 49.48, long: 20.03},
    { name: "Nowy Tomyśl", lat: 52.31, long: 16.12},
    { name: "Nysa", lat: 50.47, long: 17.33},
    { name: "Oborniki", lat: 52.65, long: 16.80},
    { name: "Oława", lat: 50.94, long: 17.29},
    { name: "Olecko", lat: 54.04, long: 22.50},
    { name: "Oleśnica", lat: 51.20, long: 17.37},
    { name: "Olesno", lat: 50.88, long: 18.40},
    { name: "Olkusz", lat: 50.27, long: 19.54},
    { name: "Olsztyn", lat: 53.77, long: 20.48},
    { name: "Opalenica", lat: 52.31, long: 16.39},
    { name: "Opoczno", lat: 51.37, long: 20.28},
    { name: "Opole", lat: 50.67, long: 17.94},
    { name: "Opole Lubelskie", lat: 51.14, long: 21.96},
    { name: "Orneta", lat: 54.11, long: 20.12},
    { name: "Orzesze", lat: 50.16, long: 18.77},
    { name: "Ostróda", lat: 53.71, long: 19.95},
    { name: "Ostrołęka", lat: 53.09, long: 21.56},
    { name: "Ostrów Mazowiecki", lat: 52.79, long: 21.90},
    { name: "Ostrów Wielkopolski", lat: 51.66, long: 17.79},
    { name: "Ostrowiec Świętokrzyski", lat: 50.95, long: 21.38},
    { name: "Ostrzeszów", lat: 51.41, long: 17.95},
    { name: "Oświecim", lat: 50.03, long: 19.25},
    { name: "Otwock", lat: 52.10, long: 21.28},
    { name: "Ozimek", lat: 50.68, long: 18.21},
    { name: "Ozorków", lat: 51.96, long: 19.29},
    { name: "Pabianice", lat: 51.66, long: 19.35},
    { name: "Parczew", lat: 51.63, long: 22.90},
    { name: "Pasłęk", lat: 54.06, long: 19.65},
    { name: "Piaseczno", lat: 52.06, long: 21.02},
    { name: "Piastów", lat: 52.20, long: 20.92},
    { name: "Piekary Śląskie", lat: 50.40, long: 18.95},
    { name: "Pieszyce", lat: 50.72, long: 16.59},
    { name: "Piła", lat: 53.14, long: 16.73},
    { name: "Pińczów", lat: 50.53, long: 20.52},
    { name: "Pionki", lat: 51.49, long: 21.45},
    { name: "Piotrków Trybunalski", lat: 51.40, long: 19.70},
    { name: "Pisz", lat: 53.63, long: 21.79},
    { name: "Pleszew", lat: 51.90, long: 17.77},
    { name: "Płock", lat: 52.55, long: 19.70},
    { name: "Płonsk", lat: 52.62, long: 20.37},
    { name: "Polaniec", lat: 50.42, long: 21.28},
    { name: "Polczyn-Zdrój", lat: 53.77, long: 16.10},
    { name: "Police", lat: 53.54, long: 14.55},
    { name: "Polkowice", lat: 51.50, long: 16.04},
    { name: "Poniatowa", lat: 51.18, long: 22.12},
    { name: "Poręba", lat: 50.48, long: 19.33},
    { name: "Poznań", lat: 52.39, long: 16.90},
    { name: "Prudnik", lat: 50.33, long: 17.56},
    { name: "Pruszcz Gdański", lat: 54.25, long: 18.64},
    { name: "Pruszków", lat: 52.22, long: 20.81},
    { name: "Przasnysz", lat: 53.01, long: 20.87},
    { name: "Przemyśl", lat: 49.79, long: 22.78},
    { name: "Przeworsk", lat: 50.06, long: 22.50},
    { name: "Pszczyna", lat: 49.97, long: 18.95},
    { name: "Pszów", lat: 50.03, long: 18.40},
    { name: "Puck", lat: 54.70, long: 18.40},
    { name: "Puławy", lat: 51.43, long: 21.98},
    { name: "Pułtusk", lat: 52.71, long: 21.08},
    { name: "Pyrzyce", lat: 53.13, long: 14.87},
    { name: "Pyskowice", lat: 50.41, long: 18.62},
    { name: "Rabka", lat: 49.61, long: 19.93},
    { name: "Racibórz", lat: 50.09, long: 18.21},
    { name: "Radlin", lat: 50.03, long: 18.45},
    { name: "Radom", lat: 51.39, long: 21.15},
    { name: "Radomsko", lat: 51.06, long: 19.44},
    { name: "Radzionków", lat: 50.39, long: 18.88},
    { name: "Radzyn Podlaski", lat: 51.79, long: 22.62},
    { name: "Rawa Mazowiecka", lat: 51.77, long: 20.26},
    { name: "Rawicz", lat: 51.60, long: 16.86},
    { name: "Resko", lat: 53.66, long: 15.24},
    { name: "Reda", lat: 54.62, long: 18.34},
    { name: "Rogożno", lat: 52.75, long: 16.97},
    { name: "Ropczyce", lat: 50.06, long: 21.74},
    { name: "Ruda Śląska", lat: 50.29, long: 18.88},
    { name: "Rumia", lat: 54.59, long: 18.37},
    { name: "Rybnik", lat: 50.10, long: 18.54},
    { name: "Rydultowy", lat: 50.06, long: 18.42},
    { name: "Ryki", lat: 51.63, long: 21.92},
    { name: "Rypin", lat: 53.06, long: 19.41},
    { name: "Rzeszów", lat: 50.04, long: 21.99},
    { name: "Sandomierz", lat: 50.68, long: 21.74},
    { name: "Sanok", lat: 49.57, long: 22.20},
    { name: "Sępólno Krajeńskie", lat: 53.44, long: 17.53},
    { name: "Siedlce", lat: 52.16, long: 22.28},
    { name: "Siemianowice Śląskie", lat: 50.33, long: 19.04},
    { name: "Siemiatycze", lat: 52.41, long: 22.87},
    { name: "Sieradz", lat: 51.60, long: 18.74},
    { name: "Sierpc", lat: 52.86, long: 19.65},
    { name: "Skarzysko-Kamienna", lat: 51.11, long: 20.87},
    { name: "Skawina", lat: 49.97, long: 19.83},
    { name: "Skierniewice", lat: 51.95, long: 20.13},
    { name: "Skoczów", lat: 49.80, long: 18.79},
    { name: "Skwierzyna", lat: 52.58, long: 15.48},
    { name: "Sławno", lat: 54.34, long: 16.67},
    { name: "Słubice", lat: 52.35, long: 14.56},
    { name: "Słupca", lat: 52.29, long: 17.87},
    { name: "Słupsk", lat: 54.47, long: 17.01},
    { name: "Sochaczew", lat: 52.23, long: 20.22},
    { name: "Sokółka", lat: 53.40, long: 23.50},
    { name: "Sokołow Podlaski", lat: 52.40, long: 22.23},
    { name: "Solec Kujawski", lat: 53.06, long: 18.23},
    { name: "Sopot", lat: 54.43, long: 18.55},
    { name: "Sosnowiec", lat: 50.27, long: 19.12},
    { name: "Stalowa Wola", lat: 50.57, long: 22.04},
    { name: "Starachowice", lat: 51.06, long: 21.07},
    { name: "Stargard Szczeciński", lat: 53.34, long: 15.02},
    { name: "Starogard Gdański", lat: 53.97, long: 18.52},
    { name: "Stary Sącz", lat: 49.57, long: 20.64},
    { name: "Staszów", lat: 50.56, long: 21.18},
    { name: "Strzegom", lat: 50.95, long: 16.35},
    { name: "Strzelce Krajenskie", lat: 52.86, long: 15.52},
    { name: "Strzelce Opolskie", lat: 50.52, long: 18.29},
    { name: "Strzelin", lat: 50.78, long: 17.06},
    { name: "Sucha Beskidzka", lat: 49.75, long: 19.59},
    { name: "Suchedniów", lat: 51.06, long: 20.83},
    { name: "Sulechów", lat: 52.09, long: 15.62},
    { name: "Sulecin", lat: 52.45, long: 15.10},
    { name: "Sulejów", lat: 51.32, long: 19.82},
    { name: "Sulejówek", lat: 52.25, long: 21.27},
    { name: "Suwałki", lat: 54.10, long: 22.94},
    { name: "Swarzędz", lat: 52.40, long: 17.06},
    { name: "Syców", lat: 51.30, long: 17.70},
    { name: "Szamotuły", lat: 52.61, long: 16.58},
    { name: "Szczecin", lat: 53.43, long: 14.52},
    { name: "Szczecinek", lat: 53.71, long: 16.68},
    { name: "Szczytno", lat: 53.55, long: 20.99},
    { name: "Szprotawa", lat: 51.56, long: 15.52},
    { name: "Sztum", lat: 53.84, long: 18.95},
    { name: "Szubin", lat: 53.01, long: 17.71},
    { name: "Szydłowiec", lat: 51.22, long: 20.85},
    { name: "Śnieżka", lat: 50.64, long: 15.74},
    { name: "Śrem", lat: 52.09, long: 17.01},
    { name: "Środa Wielkopolska", lat: 52.22, long: 17.27},
    { name: "Świdnica", lat: 50.84, long: 16.48},
    { name: "Świdnik", lat: 51.21, long: 22.79},
    { name: "Świdwin", lat: 53.77, long: 15.77},
    { name: "Świebodzice", lat: 50.86, long: 16.32},
    { name: "Świebodzin", lat: 52.25, long: 15.52},
    { name: "Świecie", lat: 53.40, long: 18.44},
    { name: "Świętochłowice", lat: 50.29, long: 18.94},
    { name: "Świnoujście", lat: 53.90, long: 14.24},
    { name: "Tarnobrzeg", lat: 50.59, long: 21.68},
    { name: "Tarnów", lat: 50.00, long: 20.99},
    { name: "Tarnowskie Góry", lat: 50.45, long: 18.86},
    { name: "Tczew", lat: 54.09, long: 18.77},
    { name: "Terespol", lat: 52.04, long: 23.66},
    { name: "Tomaszów Lubelski", lat: 50.45, long: 23.41},
    { name: "Tomaszów Mazowiecki", lat: 51.54, long: 20.03},
    { name: "Toruń", lat: 53.02, long: 18.60},
    { name: "Trzcianka", lat: 53.04, long: 16.45},
    { name: "Trzebiatów", lat: 54.06, long: 15.26},
    { name: "Trzebinia", lat: 50.16, long: 19.45},
    { name: "Trzebnica", lat: 51.31, long: 17.06},
    { name: "Tuchola", lat: 53.58, long: 17.85},
    { name: "Turek", lat: 52.02, long: 18.47},
    { name: "Tychy", lat: 50.16, long: 19.00},
    { name: "Ustka", lat: 54.58, long: 16.85},
    { name: "Ustroń", lat: 49.71, long: 18.79},
    { name: "Ustrzyki Dolne", lat: 49.43, long: 22.61},
    { name: "Wabrzezno", lat: 53.28, long: 18.94},
    { name: "Wadowice", lat: 49.87, long: 19.48},
    { name: "Wągrowiec", lat: 52.81, long: 17.20},
    { name: "Wałbrzych", lat: 50.78, long: 16.28},
    { name: "Wałcz", lat: 53.27, long: 16.47},
    { name: "Warka", lat: 51.79, long: 21.19},
    { name: "Warszawa", lat: 52.25, long: 21.02},
    { name: "Węgorzewo", lat: 54.22, long: 21.74},
    { name: "Węgrów", lat: 52.39, long: 22.01},
    { name: "Wejherowo", lat: 54.59, long: 18.23},
    { name: "Wesoła", lat: 52.25, long: 21.20},
    { name: "Wieliczka", lat: 49.99, long: 20.09},
    { name: "Wieluń", lat: 51.21, long: 18.56},
    { name: "Wisła", lat: 49.65, long: 18.87},
    { name: "Władysławowo", lat: 54.78, long: 18.40},
    { name: "Włocławek", lat: 52.65, long: 19.05},
    { name: "Włodawa", lat: 51.54, long: 23.55},
    { name: "Włoszczowa", lat: 50.86, long: 19.96},
    { name: "Wodzisław Śląski", lat: 50.03, long: 18.40},
    { name: "Wojkowice", lat: 50.36, long: 19.01},
    { name: "Wolbrom", lat: 50.39, long: 19.77},
    { name: "Wolomin", lat: 52.33, long: 21.22},
    { name: "Wołów", lat: 51.32, long: 16.62},
    { name: "Wolsztyn", lat: 52.10, long: 16.10},
    { name: "Wrocław", lat: 51.11, long: 17.03},
    { name: "Wronki", lat: 52.70, long: 16.36},
    { name: "Września", lat: 52.32, long: 17.57},
    { name: "Wschowa", lat: 51.79, long: 16.31},
    { name: "Wysokie Mazowieckie", lat: 52.91, long: 22.50},
    { name: "Wyszków", lat: 52.59, long: 21.44},
    { name: "Ząbkowice Śląskie", lat: 50.59, long: 16.81},
    { name: "Zabrze", lat: 50.29, long: 18.77},
    { name: "Zakopane", lat: 49.28, long: 19.95},
    { name: "Zambrów", lat: 52.98, long: 22.23},
    { name: "Zamość", lat: 50.72, long: 23.26},
    { name: "Zawadzkie", lat: 50.61, long: 18.45},
    { name: "Zawiercie", lat: 50.48, long: 19.42},
    { name: "Zduńska Wola", lat: 51.60, long: 18.94},
    { name: "Zdzieszowice", lat: 50.41, long: 18.12},
    { name: "Zgierz", lat: 51.86, long: 19.41},
    { name: "Zgorzelec", lat: 51.14, long: 15.00},
    { name: "Ziębice", lat: 50.59, long: 17.05},
    { name: "Zielona Góra", lat: 51.94, long: 15.48},
    { name: "Zielonka", lat: 52.29, long: 21.16},
    { name: "Złocieniec", lat: 53.52, long: 16.00},
    { name: "Złotoryja", lat: 51.11, long: 15.90},
    { name: "Złotów", lat: 53.35, long: 17.03},
    { name: "Żabki", lat: 52.29, long: 21.11},
    { name: "Żagań", lat: 51.61, long: 15.29},
    { name: "Żary", lat: 51.64, long: 15.13},
    { name: "Żnin", lat: 52.85, long: 17.70},
    { name: "Żory", lat: 50.06, long: 18.68},
    { name: "Żychlin", lat: 52.25, long: 19.62},
    { name: "Żyrardów", lat: 52.06, long: 20.45},
    { name: "Żywiec", lat: 49.87, long: 19.18},
];

export default allcities;