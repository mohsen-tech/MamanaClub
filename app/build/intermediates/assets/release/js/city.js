function ldMenu(ostanCode, target) {
    var Indx = ostanCode;
    !target && (target = 'City');
    with (document.getElementById(target)) 
    {
        options.length = 0;
        if (Indx == 0)
            options[0] = new Option("-----", "");

        if (Indx == 1) {
            options[0] = new Option("شهر را انتخاب کنيد", "");
            options[1] = new Option("آذر شهر", "آذر شهر");
            options[2] = new Option("اسكو", "اسكو");
            options[3] = new Option("اهر", "اهر");
            options[4] = new Option("بستان آباد", "بستان آباد");
            options[5] = new Option("بناب", "بناب");
            options[6] = new Option("بندر شرفخانه", "بندر شرفخانه");
            options[7] = new Option("تبريز", "تبريز");
            options[8] = new Option("تسوج", "تسوج");
            options[9] = new Option("جلفا", "جلفا");
            options[10] = new Option("سراب", "سراب");
            options[11] = new Option("شبستر", "شبستر");
            options[12] = new Option("صوفیان", "صوفیان");
            options[13] = new Option("عجبشير", "عجبشير");
            options[14] = new Option("قره آغاج", "قره آغاج");
            options[15] = new Option("كليبر", "كليبر");
            options[16] = new Option("كندوان", "كندوان");
            options[17] = new Option("مراغه", "مراغه");
            options[18] = new Option("مرند", "مرند");
            options[19] = new Option("ملكان", "ملكان");
            options[20] = new Option("ميانه", "ميانه");
            options[21] = new Option("ورزقان", "ورزقان");
            options[22] = new Option("هاديشهر", "هاديشهر");
            options[23] = new Option("هريس", "هريس");
            options[24] = new Option("هشترود", "هشترود");
            options[25] = new Option("ممقان", "ممقان");
        }
        if (Indx == 2) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("اروميه", "اروميه");
            options[2] = new Option("اشنويه", "اشنويه");
            options[3] = new Option("بازرگان", "بازرگان");
            options[4] = new Option("بوكان", "بوكان");
            options[5] = new Option("پيرانشهر", "پيرانشهر");
            options[6] = new Option("تكاب", "تكاب");
            options[7] = new Option("چالدران", "چالدران");
            options[8] = new Option("خوي", "خوي");
            options[9] = new Option("سر دشت", "سر دشت");
            options[10] = new Option("سلماس", "سلماس");
            options[11] = new Option("سيه چشمه", "سيه چشمه");
            options[12] = new Option("شاهين دژ", "شاهين دژ");
            options[13] = new Option("ماكو", "ماكو");
            options[14] = new Option("مهاباد", "مهاباد");
            options[15] = new Option("مياندوآب", "مياندوآب");
            options[16] = new Option("نقده", "نقده");
        }
        if (Indx == 3) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("اردبيل", "اردبيل");
            options[2] = new Option("بيله سوار", "بيله سوار");
            options[3] = new Option("پارس آباد", "پارس آباد");
            options[4] = new Option("خلخال", "خلخال");
            options[5] = new Option("سرعين", "سرعين");
            options[6] = new Option("گیوی(کوثر)", "گیوی(کوثر)");
            options[7] = new Option("گرمي", "گرمي");
            options[8] = new Option("مشگين شهر", "مشگين شهر");
            options[9] = new Option("نمين", "نمين");
            options[10] = new Option("نير", "نير");
        }
        if (Indx == 4) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آران و بيدگل", "آران و بيدگل");
            options[2] = new Option("اردستان", "اردستان");
            options[3] = new Option("اصفهان", "اصفهان");
            options[4] = new Option("باغ بهادران", "باغ بهادران");
            options[5] = new Option("تيران", "تيران");
            options[6] = new Option("چادگان", "چادگان");
            options[7] = new Option("خميني شهر", "خميني شهر");
            options[8] = new Option("خوانسار", "خوانسار");
            options[9] = new Option("دولت آباد", "دولت آباد");
            options[10] = new Option("دهاقان", "دهاقان");
            options[11] = new Option("زرين شهر", "زرين شهر");
            options[12] = new Option("زیبا شهر", "زیبا شهر");
            options[13] = new Option("سميرم", "سميرم");
            options[14] = new Option("سپاهان شهر", "سپاهان شهر");
            options[15] = new Option("شاهين شهر", "شاهين شهر");
            options[16] = new Option("شهرضا", "شهرضا");
            options[17] = new Option("فريدن", "فريدن");
            options[18] = new Option("فريدون شهر", "فريدون شهر");
            options[19] = new Option("فلاورجان", "فلاورجان");
            options[20] = new Option("فولاد شهر", "فولاد شهر");
            options[21] = new Option("قهدریجان", "قهدریجان");
            options[22] = new Option("كاشان", "كاشان");
            options[23] = new Option("گلدشت", "گلدشت");
            options[24] = new Option("گلپايگان", "گلپايگان");
            options[25] = new Option("مباركه", "مباركه");
            options[26] = new Option("ملک شهر", "ملک شهر");
            options[27] = new Option("نايين", "نايين");
            options[28] = new Option("نجف آباد", "نجف آباد");
            options[29] = new Option("نطنز", "نطنز");
            options[30] = new Option("هرند", "هرند");
        }
        if (Indx == 5) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آسارا و شهرستانک", "آسارا و شهرستانک");
            options[2] = new Option("اشتهارد", "اشتهارد");
            options[3] = new Option("کرج", "کرج");
            options[4] = new Option("هشتگرد", "هشتگرد");
            options[5] = new Option("ساوجبلاغ", "ساوجبلاغ");
            options[6] = new Option("طالقان", "طالقان");
            options[7] = new Option("گرمدره", "گرمدره");
            options[7] = new Option("مشکین دشت و ولدآباد", "مشکین دشت و ولدآباد");
            options[7] = new Option("نظرآباد", "نظرآباد");
        }
        if (Indx == 6) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آبدانان", "آبدانان");
            options[2] = new Option("ايلام", "ايلام");
            options[3] = new Option("ايوان", "ايوان");
            options[4] = new Option("دره شهر", "دره شهر");
            options[5] = new Option("دهلران", "دهلران");
            options[6] = new Option("سرابله", "سرابله");
            options[7] = new Option("مهران", "مهران");
        }
        if (Indx == 7) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("اهرم", "اهرم");
            options[2] = new Option("برازجان", "برازجان");
            options[3] = new Option("آبپخش", "آبپخش");
            options[4] = new Option("بوشهر", "بوشهر");
            options[5] = new Option("تنگستان", "تنگستان");
            options[6] = new Option("جم", "جم");
            options[7] = new Option("خارك", "خارك");
            options[8] = new Option("خورموج", "خورموج");
            options[9] = new Option("دشتستان", "دشتستان");
            options[10] = new Option("دشتي", "دشتي");
            options[11] = new Option("دلوار", "دلوار");
            options[12] = new Option("دير", "دير");
            options[13] = new Option("ديلم", "ديلم");
            options[14] = new Option("عسلویه", "عسلویه");
            options[15] = new Option("كنگان", "كنگان");
            options[16] = new Option("گناوه", "گناوه");
        }
        if (Indx == 8) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آسارا", "آسارا");
            options[2] = new Option("اسلامشهر", "اسلامشهر");
            options[3] = new Option("اشتهارد", "اشتهارد");
            options[4] = new Option("بومهن", "بومهن");
            options[5] = new Option("پاكدشت", "پاكدشت");
            options[6] = new Option("تجريش", "تجريش");
            options[7] = new Option("تهران", "تهران");
            options[8] = new Option("چهاردانگه", "چهاردانگه");
            options[9] = new Option("دماوند", "دماوند");
            options[10] = new Option("رباط كريم", "رباط كريم");
            options[11] = new Option("رودهن", "رودهن");
            options[12] = new Option("ري", "ري");
            options[13] = new Option("شريف آباد", "شريف آباد");
            options[14] = new Option("شهريار", "شهريار");
            options[15] = new Option("طالقان", "طالقان");
            options[16] = new Option("فشم", "فشم");
            options[17] = new Option("فيروزكوه", "فيروزكوه");
            options[18] = new Option("قدس", "قدس");
            options[19] = new Option("قرچك", "قرچك");
            options[20] = new Option("كرج", "كرج");
            options[21] = new Option("كن", "كن");
            options[22] = new Option("كهريزك", "كهريزك");
            options[23] = new Option("گلستان", "گلستان");
            options[24] = new Option("لواسان", "لواسان");
            options[25] = new Option("ملارد", "ملارد");
            options[26] = new Option("نظرآباد", "نظرآباد");
            options[27] = new Option("ورامين", "ورامين");
            options[28] = new Option("هشتگرد", "هشتگرد");
        }
        if (Indx == 9) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("اردل", "اردل");
            options[2] = new Option("بروجن", "بروجن");
            options[3] = new Option("چلگرد", "چلگرد");
            options[4] = new Option("سامان", "سامان");
            options[5] = new Option("شهركرد", "شهركرد");
            options[6] = new Option("فارسان", "فارسان");
            options[7] = new Option("فرخ شهر", "فرخ شهر");
            options[8] = new Option("لردگان", "لردگان");
            options[9] = new Option("هفشجان", "هفشجان");
        }
        if (Indx == 10) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("بشرویه", "بشرویه");
            options[2] = new Option("بيرجند", "بيرجند");
            options[3] = new Option("خضری", "خضری");
            options[4] = new Option("سرایان", "سرایان");
            options[5] = new Option("سربيشه", "سربيشه");
            options[6] = new Option("فردوس", "فردوس");
            options[7] = new Option("قائن", "قائن");
            options[8] = new Option("نهبندان", "نهبندان");
        }
        if (Indx == 11) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("بردسكن", "بردسكن");
            options[2] = new Option("بجستان", "بجستان");
            options[3] = new Option("تايباد", "تايباد");
            options[4] = new Option("تربت جام", "تربت جام");
            options[5] = new Option("تربت حيدريه", "تربت حيدريه");
            options[6] = new Option("جغتای", "جغتای");
            options[7] = new Option("جوین", "جوین");
            options[8] = new Option("چناران", "چناران");
            options[9] = new Option("خواف", "خواف");
            options[10] = new Option("خلیل آباد", "خلیل آباد");
            options[11] = new Option("درگز", "درگز");
            options[12] = new Option("رشتخوار", "رشتخوار");
            options[13] = new Option("سبزوار", "سبزوار");
            options[14] = new Option("سرخس", "سرخس");
            options[15] = new Option("طوس", "طوس");
            options[16] = new Option("طرقبه", "طرقبه");
            options[17] = new Option("فريمان", "فريمان");
            options[18] = new Option("قوچان", "قوچان");
            options[19] = new Option("كاشمر", "كاشمر");
            options[20] = new Option("كلات", "كلات");
            options[21] = new Option("گناباد", "گناباد");
            options[22] = new Option("مشهد", "مشهد");
            options[23] = new Option("نيشابور", "نيشابور");
        }
        if (Indx == 12) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آشخانه", "آشخانه");
            options[2] = new Option("اسفراين", "اسفراين");
            options[3] = new Option("بجنورد", "بجنورد");
            options[4] = new Option("جاجرم", "جاجرم");
            options[5] = new Option("شيروان", "شيروان");
            options[6] = new Option("فاروج", "فاروج");
        }
        if (Indx == 13) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آبادان", "آبادان");
            options[2] = new Option("اميديه", "اميديه");
            options[3] = new Option("انديمشك", "انديمشك");
            options[4] = new Option("اهواز", "اهواز");
            options[5] = new Option("ايذه", "ايذه");
            options[6] = new Option("گتوند", "گتوند");
            options[7] = new Option("باغ ملك", "باغ ملك");
            options[8] = new Option("بندرامام خميني", "بندرامام خميني");
            options[9] = new Option("بندر ماهشهر", "بندر ماهشهر");
            options[10] = new Option("بهبهان", "بهبهان");
            options[11] = new Option("خرمشهر", "خرمشهر");
            options[12] = new Option("دزفول", "دزفول");
            options[13] = new Option("رامهرمز", "رامهرمز");
            options[14] = new Option("رامشیر", "رامشیر");
            options[15] = new Option("سوسنگرد", "سوسنگرد");
            options[16] = new Option("شادگان", "شادگان");
            options[17] = new Option("شوشتر", "شوشتر");
            options[18] = new Option("شوش", "شوش");
            options[19] = new Option("لالي", "لالي");
            options[20] = new Option("مسجد سليمان", "مسجد سليمان");
            options[21] = new Option("هنديجان", "هنديجان");
            options[22] = new Option("هويزه", "هويزه");
        }
        if (Indx == 14) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آب بر", "آب بر");
            options[2] = new Option("ابهر", "ابهر");
            options[3] = new Option("ايجرود", "ايجرود");
            options[4] = new Option("خرمدره", "خرمدره");
            options[5] = new Option("زرين آباد", "زرين آباد");
            options[6] = new Option("زنجان", "زنجان");
            options[7] = new Option("قيدار", "قيدار");
            options[8] = new Option("ماهنشان", "ماهنشان");
        }
        if (Indx == 15) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("ايوانكي", "ايوانكي");
            options[2] = new Option("بسطام", "بسطام");
            options[3] = new Option("دامغان", "دامغان");
            options[4] = new Option("سمنان", "سمنان");
            options[5] = new Option("سرخه", "سرخه");
            options[6] = new Option("شاهرود", "شاهرود");
            options[7] = new Option("شهمیرزاد", "شهمیرزاد");
            options[8] = new Option("گرمسار", "گرمسار");
            options[9] = new Option("مهدیشهر", "مهدیشهر");
        }
        if (Indx == 16) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("ايرانشهر", "ايرانشهر");
            options[2] = new Option("چابهار", "چابهار");
            options[3] = new Option("خاش", "خاش");
            options[4] = new Option("راسك", "راسك");
            options[5] = new Option("زابل", "زابل");
            options[6] = new Option("زاهدان", "زاهدان");
            options[7] = new Option("سراوان", "سراوان");
            options[8] = new Option("سرباز", "سرباز");
            options[9] = new Option("فنوج", "فنوج");
            options[10] = new Option("کنارک", "کنارک");
            options[11] = new Option("ميرجاوه", "ميرجاوه");
            options[12] = new Option("نيكشهر", "نيكشهر");
        }
        if (Indx == 17) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آباده", "آباده");
            options[2] = new Option("اردكان", "اردكان");
            options[3] = new Option("ارسنجان", "ارسنجان");
            options[4] = new Option("استهبان", "استهبان");
            options[5] = new Option("اقليد", "اقليد");
            options[6] = new Option("ایزد خواست", "ایزد خواست");
            options[7] = new Option("بوانات", "بوانات");
            options[8] = new Option("جهرم", "جهرم");
            options[9] = new Option("حاجي آباد", "حاجي آباد");
            options[10] = new Option("خرم بید", "خرم بید");
            options[11] = new Option("خنج", "خنج");
            options[12] = new Option("خشت", "خشت");
            options[13] = new Option("داراب", "داراب");
            options[14] = new Option("شيراز", "شيراز");
            options[15] = new Option("فراشبند", "فراشبند");
            options[16] = new Option("فسا", "فسا");
            options[17] = new Option("فيروز آباد", "فيروز آباد");
            options[18] = new Option("قایمیه", "قایمیه");
            options[19] = new Option("قيرو کارزین", "قيرو کارزین");
            options[20] = new Option("كازرون", "كازرون");
            options[21] = new Option("لار", "لار");
            options[22] = new Option("لامرد", "لامرد");
            options[23] = new Option("مرودشت", "مرودشت");
            options[24] = new Option("مهر", "مهر");
            options[25] = new Option("نورآباد", "نورآباد");
            options[26] = new Option("ني ريز", "ني ريز");
        }
        if (Indx == 18) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آبيك", "آبيك");
            options[2] = new Option("شهرک البرز", "شهرک البرز");
            options[3] = new Option("بوئين زهرا", "بوئين زهرا");
            options[4] = new Option("تاكستان", "تاكستان");
            options[5] = new Option("قزوين", "قزوين");
            options[6] = new Option("محمود آباد نمونه", "محمود آباد نمونه");
        }
        if (Indx == 19) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("دستجرد", "دستجرد");
            options[2] = new Option("سلفچگان", "سلفچگان");
            options[3] = new Option("قنوات", "قنوات");
            options[4] = new Option("قم", "قم");
            options[5] = new Option("کهک", "کهک");
        }
        if (Indx == 20) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("بانه", "بانه");
            options[2] = new Option("بيجار", "بيجار");
            options[3] = new Option("ديواندره", "ديواندره");
            options[4] = new Option("دهگلان", "دهگلان");
            options[5] = new Option("سقز", "سقز");
            options[6] = new Option("سنندج", "سنندج");
            options[7] = new Option("قروه", "قروه");
            options[8] = new Option("كامياران", "كامياران");
            options[9] = new Option("مريوان", "مريوان");
        }
        if (Indx == 21) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("شهر بابك", "شهر بابك");
            options[2] = new Option("بافت", "بافت");
            options[3] = new Option("بردسير", "بردسير");
            options[4] = new Option("بم", "بم");
            options[5] = new Option("جيرفت", "جيرفت");
            options[6] = new Option("سرچشمه", "سرچشمه");
            options[7] = new Option("راور", "راور");
            options[8] = new Option("رفسنجان", "رفسنجان");
            options[9] = new Option("زرند", "زرند");
            options[10] = new Option("سيرجان", "سيرجان");
            options[11] = new Option("كرمان", "كرمان");
            options[12] = new Option("كهنوج", "كهنوج");
        }
        if (Indx == 22) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("اسلام آباد غرب", "اسلام آباد غرب");
            options[2] = new Option("پاوه", "پاوه");
            options[3] = new Option("ثلاث باباجانی", "ثلاث باباجانی");
            options[4] = new Option("جوانرود", "جوانرود");
            options[5] = new Option("خسروی", "خسروی");
            options[6] = new Option("سر پل ذهاب", "سر پل ذهاب");
            options[7] = new Option("سنقر", "سنقر");
            options[8] = new Option("صحنه", "صحنه");
            options[9] = new Option("قصر شيرين", "قصر شيرين");
            options[10] = new Option("كرمانشاه", "كرمانشاه");
            options[11] = new Option("كنگاور", "كنگاور");
            options[12] = new Option("گيلان غرب", "گيلان غرب");
            options[13] = new Option("هرسين", "هرسين");
        }
        if (Indx == 23) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("دنا", "دنا");
            options[2] = new Option("دوگنبدان", "دوگنبدان");
            options[3] = new Option("دهدشت", "دهدشت");
            options[4] = new Option("سي سخت", "سي سخت");
            options[5] = new Option("گچساران", "گچساران");
            options[6] = new Option("لیکک", "لیکک");
            options[7] = new Option("ياسوج", "ياسوج");
        }
        if (Indx == 24) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آزاد شهر", "آزاد شهر");
            options[2] = new Option("آق قلا", "آق قلا");
            options[3] = new Option("بندر گز", "بندر گز");
            options[4] = new Option("تركمن", "تركمن");
            options[5] = new Option("جلین", "جلین");
            options[6] = new Option("راميان", "راميان");
            options[7] = new Option("علي آباد كتول", "علي آباد كتول");
            options[8] = new Option("كردكوي", "كردكوي");
            options[9] = new Option("كلاله", "كلاله");
            options[10] = new Option("گالیکش", "گالیکش");
            options[11] = new Option("گرگان", "گرگان");
            options[12] = new Option("گنبد كاووس", "گنبد كاووس");
            options[13] = new Option("مراوه تپه", "مراوه تپه");
            options[14] = new Option("مينو دشت", "مينو دشت");
        }
        if (Indx == 25) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آستارا", "آستارا");
            options[2] = new Option("آستانه اشرفيه", "آستانه اشرفيه");
            options[3] = new Option("املش", "املش");
            options[4] = new Option("بندرانزلي", "بندرانزلي");
            options[5] = new Option("تالش", "تالش");
            options[6] = new Option("خمام", "خمام");
            options[7] = new Option("رودبار", "رودبار");
            options[8] = new Option("رود سر", "رود سر");
            options[9] = new Option("رستم آباد", "رستم آباد");
            options[10] = new Option("رشت", "رشت");
            options[11] = new Option("رضوان شهر", "رضوان شهر");
            options[12] = new Option("سياهكل", "سياهكل");
            options[13] = new Option("شفت", "شفت");
            options[14] = new Option("صومعه سرا", "صومعه سرا");
            options[15] = new Option("فومن", "فومن");
            options[16] = new Option("كلاچاي", "كلاچاي");
            options[17] = new Option("لاهيجان", "لاهيجان");
            options[18] = new Option("لنگرود", "لنگرود");
            options[19] = new Option("لوشان", "لوشان");
            options[20] = new Option("ماسال", "ماسال");
            options[21] = new Option("ماسوله", "ماسوله");
            options[22] = new Option("منجيل", "منجيل");
        }
        if (Indx == 26) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("ازنا", "ازنا");
            options[2] = new Option("الشتر", "الشتر");
            options[3] = new Option("اليگودرز", "اليگودرز");
            options[4] = new Option("بروجرد", "بروجرد");
            options[5] = new Option("پلدختر", "پلدختر");
            options[6] = new Option("خرم آباد", "خرم آباد");
            options[7] = new Option("دورود", "دورود");
            options[8] = new Option("سراب دوره", "سراب دوره");
            options[9] = new Option("سپید دشت", "سپید دشت");
            options[10] = new Option("شول آباد", "شول آباد");
            options[11] = new Option("كوهدشت", "كوهدشت");
            options[12] = new Option("نور آباد", "نور آباد");
        }
        if (Indx == 27) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آمل", "آمل");
            options[2] = new Option("بلده", "بلده");
            options[3] = new Option("بهشهر", "بهشهر");
            options[4] = new Option("بابل", "بابل");
            options[5] = new Option("بابلسر", "بابلسر");
            options[6] = new Option("پل سفيد", "پل سفيد");
            options[7] = new Option("تنكابن", "تنكابن");
            options[8] = new Option("جويبار", "جويبار");
            options[9] = new Option("چالوس", "چالوس");
            options[10] = new Option("رامسر", "رامسر");
            options[11] = new Option("ساري", "ساري");
            options[12] = new Option("سلمانشهر", "سلمانشهر");
            options[13] = new Option("سواد كوه", "سواد كوه");
            options[14] = new Option("فريدون كنار", "فريدون كنار");
            options[15] = new Option("کلاردشت", "کلاردشت");
            options[16] = new Option("قائم شهر", "قائم شهر");
            options[17] = new Option("گلوگاه", "گلوگاه");
            options[18] = new Option("محمود آباد", "محمود آباد");
            options[19] = new Option("مرزن آباد", "مرزن آباد");
            options[20] = new Option("نكا", "نكا");
            options[21] = new Option("نور", "نور");
            options[22] = new Option("نوشهر", "نوشهر");
        }
        if (Indx == 28) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("آشتيان", "آشتيان");
            options[2] = new Option("اراك", "اراك");
            options[3] = new Option("تفرش", "تفرش");
            options[4] = new Option("خمين", "خمين");
            options[5] = new Option("خنداب", "خنداب");
            options[6] = new Option("دليجان", "دليجان");
            options[7] = new Option("زرندیه", "زرندیه");
            options[8] = new Option("ساوه", "ساوه");
            options[9] = new Option("شازند", "شازند");
            options[10] = new Option("کمیجان", "کمیجان");
            options[11] = new Option("محلات", "محلات");
        }
        if (Indx == 29) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("ابوموسي", "ابوموسي");
            options[2] = new Option("انگهران", "انگهران");
            options[3] = new Option("بندر جاسك", "بندر جاسك");
            options[4] = new Option("بندر خمیر", "بندر خمیر");
            options[5] = new Option("بندرعباس", "بندرعباس");
            options[6] = new Option("بندر لنگه", "بندر لنگه");
            options[7] = new Option("بستك", "بستك");
            options[8] = new Option("پارسیان", "پارسیان");
            options[9] = new Option("تنب بزرگ", "تنب بزرگ");
            options[10] = new Option("حاجي آباد", "حاجي آباد");
            options[11] = new Option("دهبارز", "دهبارز");
            options[12] = new Option("قشم", "قشم");
            options[13] = new Option("كيش", "كيش");
            options[14] = new Option("ميناب", "ميناب");
        }
        if (Indx == 30) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("اسدآباد", "اسدآباد");
            options[2] = new Option("بهار", "بهار");
            options[3] = new Option("تويسركان", "تويسركان");
            options[4] = new Option("رزن", "رزن");
            options[5] = new Option("كبودر اهنگ", "كبودر اهنگ");
            options[6] = new Option("ملاير", "ملاير");
            options[7] = new Option("نهاوند", "نهاوند");
            options[8] = new Option("همدان", "همدان");
        }
        if (Indx == 31) {
            options[0] = new Option("*لطفا شهر خود را انتخاب کنيد انتخاب اجباری*", "");
            options[1] = new Option("ابركوه", "ابركوه");
            options[2] = new Option("اردكان", "اردكان");
            options[3] = new Option("اشكذر", "اشكذر");
            options[4] = new Option("بافق", "بافق");
            options[5] = new Option("تفت", "تفت");
            options[6] = new Option("طبس", "طبس");
            options[7] = new Option("مهريز", "مهريز");
            options[8] = new Option("ميبد", "ميبد");
            options[9] = new Option("هرات", "هرات");
            options[10] = new Option("يزد", "يزد");
        }
    }
    document.getElementById(target).options[0].selected = true;
}
