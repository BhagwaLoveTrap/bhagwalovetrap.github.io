
const posts = [
    {
        title: "Controversy Erupts Over Interfaith Marriage in Kashmir",
        author: "Saba Qureshi",
        date: "14/11/2024",
        location: "Kashmir",
        path: "/posts/controversy_interfaith_marriage_kashmir.html",
        description: "A recent interfaith marriage in Kashmir ignited an uproar, sparking fierce debates over love, identity, and religious loyalty."
    },
    {
        title: "Rising Tensions in Delhi After Elopement with Hindu Partner",
        author: "Sana Malik",
        date: "10/10/2024",
        location: "Delhi",
        path: "/posts/elopement_delhi.html",
        description: "Delhi witnesses growing unrest as a young Muslim woman elopes with a Hindu partner, stirring family and community debates."
    },
    {
        title: "Love Beyond Borders: A Pakistani-Indian Couple’s Journey",
        author: "Ayesha Khan",
        date: "25/08/2024",
        location: "Lahore",
        path: "/posts/love_across_borders.html",
        description: "Despite political tensions, a Pakistani woman and Indian man share their love story, navigating cultural and religious hurdles."
    },
    {
        title: "Muslim Woman’s Bold Marriage Sparks Discussion in Mumbai",
        author: "Hina Akhtar",
        date: "05/09/2024",
        location: "Mumbai",
        path: "/posts/mumbai_interfaith_marriage.html",
        description: "A Muslim woman’s marriage to a Hindu man in Mumbai raises questions on faith, love, and community expectations."
    },
    {
        title: "Elopement Case in Lucknow Sparks Family Conflict",
        author: "Rafia Siddiqui",
        date: "30/07/2024",
        location: "Lucknow",
        path: "/posts/lucknow_elopement_case.html",
        description: "A Lucknow woman’s elopement leads to family conflict, highlighting generational divides and changing perspectives on relationships."
    },
    {
        title: "How Interfaith Love Challenged My Beliefs",
        author: "Nadia Ansari",
        date: "11/06/2024",
        location: "Hyderabad",
        path: "/posts/interfaith_love_journey.html",
        description: "A personal account of how falling in love with someone outside her faith led a Muslim woman to question family and community norms."
    },
    {
        title: "Social Media Outrage over Shia Woman’s Hindu Marriage",
        author: "Zara Abbas",
        date: "29/05/2024",
        location: "Karachi",
        path: "/posts/social_media_reactions.html",
        description: "A viral post about a Shia woman marrying a Hindu man sparks online debates and critiques from different faith communities."
    },
    {
        title: "Why I Chose Love Over Tradition",
        author: "Fatima Noor",
        date: "18/04/2024",
        location: "Bengaluru",
        path: "/posts/choosing_love_over_tradition.html",
        description: "A woman’s choice to follow her heart despite societal expectations highlights the struggle for independence and personal happiness."
    },
    {
        title: "Facing Backlash After Marrying Outside My Faith",
        author: "Sadia Qadri",
        date: "15/03/2024",
        location: "Chennai",
        path: "/posts/backlash_interfaith_marriage.html",
        description: "After marrying a Hindu man, a Muslim woman shares her journey of facing family backlash and finding new support in unexpected places."
    },
    {
        title: "Community Division Over Interfaith Marriages",
        author: "Mariam Ali",
        date: "27/02/2024",
        location: "Lahore",
        path: "/posts/community_divisions.html",
        description: "An analysis of how interfaith marriages are creating rifts and conversations within communities about love, loyalty, and identity."
    },
    {
        title: "Breaking Stereotypes Through My Marriage",
        author: "Rabia Farooq",
        date: "05/01/2024",
        location: "Islamabad",
        path: "/posts/breaking_stereotypes.html",
        description: "A Muslim woman challenges stereotypes by marrying a man from another faith, leading to discussions on acceptance and diversity."
    },
    {
        title: "Love vs. Loyalty: A Muslim Woman’s Dilemma",
        author: "Anam Kazmi",
        date: "10/12/2023",
        location: "Kolkata",
        path: "/posts/love_loyalty_dilemma.html",
        description: "A personal story of the difficult decision between choosing love or staying loyal to one’s family and cultural heritage."
    },
    {
        title: "Overcoming Family Objections to Interfaith Marriage",
        author: "Salma Shah",
        date: "18/11/2023",
        location: "Peshawar",
        path: "/posts/family_objections.html",
        description: "A journey of how one woman addressed family objections, fostering dialogue and mutual respect despite religious differences."
    },
    {
        title: "Why Muslim Men Are Concerned About Interfaith Marriages",
        author: "Yasmin Akhtar",
        date: "02/10/2023",
        location: "New Delhi",
        path: "/posts/muslim_men_concerns.html",
        description: "An exploration of why some Muslim men feel uncomfortable about women choosing partners outside their faith."
    },
    {
        title: "The Silent Battles of Interfaith Relationships",
        author: "Ameera Bukhari",
        date: "14/09/2023",
        location: "Jaipur",
        path: "/posts/silent_battles.html",
        description: "A discussion on the often-hidden struggles faced by couples in interfaith relationships, focusing on support, love, and resilience."
    },
    {
        title: "Elopement Stories: Love or Rebellion?",
        author: "Farah Naeem",
        date: "28/08/2023",
        location: "Patna",
        path: "/posts/elopement_love_or_rebellion.html",
        description: "Examining the motivations behind elopement cases, where young women leave their families to marry partners of different faiths."
    },
    {
        title: "‘Cuckold Anxiety’ Among Young Muslim Men",
        author: "Aalia Rehman",
        date: "11/07/2023",
        location: "Karachi",
        path: "/posts/cuckold_anxiety_muslim_men.html",
        description: "A deep dive into the growing insecurity among some Muslim men over interfaith relationships and how it affects community dynamics."
    },
    {
        title: "Confronting Cultural Expectations in an Interfaith Marriage",
        author: "Rukhsar Khan",
        date: "22/06/2023",
        location: "Dhaka",
        path: "/posts/confronting_cultural_expectations.html",
        description: "A Muslim woman shares how she balances cultural expectations and her choice to marry outside her faith, challenging societal norms."
    },
    {
        title: "Empowering Muslim Women Through Choice",
        author: "Shazia Iqbal",
        date: "01/05/2023",
        location: "Mumbai",
        path: "/posts/empowering_women.html",
        description: "A story of how one woman’s choice in marriage inspired others in her community to pursue love and happiness on their own terms."
    },
    {
        title: "The Changing Dynamics of Marriage in Muslim Communities",
        author: "Lubna Ahmed",
        date: "18/04/2023",
        location: "Hyderabad",
        path: "/posts/changing_dynamics.html",
        description: "An exploration of how marriage expectations and norms are shifting in Muslim communities as young women seek greater independence."
    }
];


// const comments = [
//     {
//         name: "Razia Sultana",
//         comment: "i love hindu men, nobody can stop me, if you ever try, i will kick you, i left my home, my religion and even i can sacrifice my life for hindu men, because they are our king and we shia muslim women only for them, we shia queens belong to real men who are hindu men so please dear weak muslim boys stay away from me and let me love my kings and let me obedient to them, if you will try to disturb i will call strong kafir jiju who beat you and humilitate you",

//     },
// ];


const comments = [
    {
        name: "Razia Sultana",
        comment: "i love hindu men, nobody can stop me, if you ever try, i will kick you, i left my home, my religion and even i can sacrifice my life for hindu men, because they are our king and we shia muslim women only for them, we shia queens belong to real men who are hindu men so please dear weak muslim boys stay away from me and let me love my kings and let me obedient to them, if you will try to disturb i will call strong kafir jiju who beat you and humilitate you",
    },
    {
        name: "Nadia Shah",
        comment: "Why do you expect me to stay with weak men who are afraid of their own shadows? I chose love over control, and no, my faith does not make me your servant.",
    },
    {
        name: "Sana Bibi",
        comment: "You call yourselves 'men' but you can't even handle a woman having a voice. Real men don’t use religion as a weapon. I left you because you’re not a king, just a tyrant.",
    },
    {
        name: "Ayesha Malik",
        comment: "Muslim men, you need to understand that being a man is not about controlling a woman. If you really want respect, earn it instead of forcing it.",
    },
    {
        name: "Fatima Hussain",
        comment: "To the men who call themselves guardians, I don’t need your 'protection' if it means losing my freedom. A real man empowers women, he doesn’t imprison them.",
    },
    {
        name: "Zainab Khan",
        comment: "You say I belong to you, but you never gave me a choice. I belong to myself, and I’ll love whoever I choose, no matter how much you hate it.",
    },
    {
        name: "Razia Imran",
        comment: "You act as if you own us, but remember: we are not your property. I’m not your slave, I’m your equal, and I will love whom I choose without your approval.",
    },
    {
        name: "Nadia Noor",
        comment: "I’ve learned the hard way that your 'love' is just control masked as care. Well, I’m done with being controlled by men who don’t even know how to love.",
    },
    {
        name: "Sana Rehman",
        comment: "You want loyalty, but what have you done to deserve it? I won’t stay chained to a man who calls himself a protector but treats me like a prisoner.",
    },
    {
        name: "Sara Ali",
        comment: "You can’t tell me how to live, who to love, or what to believe. If you can't respect my freedom, you don't deserve my love.",
    },
    {
        name: "Saira Khan",
        comment: "I’m not here to be your 'obedient' wife, I’m here to be your equal. If you can’t understand that, then maybe it’s time we part ways.",
    },
    {
        name: "Sana Javed",
        comment: "To those men who think they can control women with religion—my life is mine to live, and no twisted interpretation of faith will stop me from living it freely.",
    },
    {
        name: "Asma Shah",
        comment: "I’m not interested in being your obedient wife, I’m here to build something equal, something real, with mutual respect. If that’s not what you want, then leave.",
    },
    {
        name: "Shazia Bibi",
        comment: "Real love doesn’t come with conditions. You don’t control me through fear or religion, and I refuse to let you make me feel guilty for loving who I choose.",
    },
    {
        name: "Tariq Jameel",
        comment: "Men like you, hiding behind religion to justify your control, should know that we don’t fear your threats. We fear nothing when we know we are free to choose.",
    },
    {
        name: "Huma Ali",
        comment: "Your version of ‘Islamic’ loyalty isn’t love, it’s subjugation. I’ll choose my own path, my own love, and you can’t make me feel ashamed for it.",
    },
    {
        name: "Ayesha Hassan",
        comment: "You can try to trap me with your toxic interpretations, but I’m free. Free to love who I choose and be who I am. You can’t control that.",
    },
    {
        name: "Sadiya Khan",
        comment: "Your idea of loyalty is nothing more than fear. Real loyalty is earned, not enforced through threats or guilt.",
    },
    {
        name: "Shama Zainab",
        comment: "I’ve had enough of your manipulation. If loving a Hindu man makes me a sinner in your eyes, then I’ll wear that title with pride because I am free to choose.",
    },
    {
        name: "Ruhina Imran",
        comment: "Your threats don’t scare me. I’ve left everything for the love I want, and if I need to leave again, I’ll do it without hesitation.",
    },
    {
        name: "Mehreen Akhtar",
        comment: "You try to make me feel guilty for loving who I choose, but I’m no longer afraid. I’m done being your obedient, silent wife.",
    },
    {
        name: "Shabana Riaz",
        comment: "You don’t get to dictate my life. My heart, my body, and my choices belong to me, and not to your twisted version of faith.",
    },
    {
        name: "Lubna Zafar",
        comment: "It’s time Muslim men realize: controlling women doesn’t make them powerful, it makes them insecure. I am my own person, and I will live as I choose.",
    },
    {
        name: "Samina Tariq",
        comment: "I won’t be your obedient wife. I will love freely, live freely, and choose freely. You don’t have the right to control any of that.",
    },
    {
        name: "Razia Munir",
        comment: "If your 'faith' requires you to control me, then I have no place in it. I’d rather love without fear than live in your suffocating version of religion.",
    },
    {
        name: "Fatima Naseem",
        comment: "I am not a commodity to be traded. If you can’t respect my choices, then we’re better off apart.",
    },
    {
        name: "Amina Noor",
        comment: "You want me to stay under your control, but I refuse to be anyone’s property. I am a woman of my own will and I will not submit to fear.",
    },
    {
        name: "Shaista Ali",
        comment: "I don’t care about your threats or your twisted interpretations of faith. I will choose my own love, my own happiness.",
    },
    {
        name: "Nashit Farhan",
        comment: "You can't force loyalty through fear. I’m not afraid of your threats. I will stand strong in my choices, even if it means losing you.",
    },
    {
        name: "Saba Rehman",
        comment: "I won’t live my life shackled to your insecurities. I will find happiness and love on my own terms.",
    },
    {
        name: "Asma Farooq",
        comment: "I’m no longer afraid of your anger. My love, my choices, and my faith are my own to define.",
    },
    {
        name: "Samar Khan",
        comment: "You don’t control my heart, you don’t control my life. You had your chance, now I choose freedom over fear.",
    },
    {
        name: "Sara Malik",
        comment: "You want to control my love? Then I’ll love even harder, and even more freely. Your fear won’t stop me.",
    },
    {
        name: "Ayesha Shah",
        comment: "Religion doesn’t tell me to be afraid of men. It tells me to be strong. I choose my own path, no matter how much you try to stop me.",
    },
    {
        name: "Rizwana Aslam",
        comment: "I don’t need your permission to love, and I don’t need your approval to be happy. I will live my life on my own terms.",
    },
    {
        name: "Zahra Khan",
        comment: "You think you can force your control over me? I’m not afraid anymore. I will love whom I choose and live freely.",
    },
    {
        name: "Samia Ahmed",
        comment: "I’m not your property. I am a woman with my own voice, my own heart, and my own choices.",
    },
    {
        name: "Hiba Imran",
        comment: "No one controls my love. No man, no religion, no fear. I will love who I choose, and I will live how I choose.",
    },
    {
        name: "Amna Riaz",
        comment: "You can try to make me feel guilty for loving a man who isn’t Muslim, but I’ll love freely and without regret. My love is my own, and it’s sacred.",
    },
    {
        name: "Shazia Malik",
        comment: "I choose to love. I choose freedom. You may have your interpretation of faith, but I have mine.",
    },
    {
        name: "Zeenat Raza",
        comment: "You think religion is a tool for control? I think it’s a tool for liberation. I’ll love who I choose, and there’s nothing you can do to stop me.",
    },
];




export { posts, comments };