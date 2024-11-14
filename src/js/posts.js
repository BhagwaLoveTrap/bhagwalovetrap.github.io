
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


const comments = [
    {
        name: "Razia Sultana",
        comment: "i love hindu men, nobody can stop me, if you ever try, i will kick you, i left my home, my religion and even i can sacrifice my life for hindu men, because they are our king and we shia muslim women only for them, we shia queens belong to real men who are hindu men so please dear weak muslim boys stay away from me and let me love my kings and let me obedient to them, if you will try to disturb i will call strong kafir jiju who beat you and humilitate you",

    },
];


export { posts, comments };