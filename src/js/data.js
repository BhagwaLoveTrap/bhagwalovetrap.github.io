
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
        name: "Ayesha Zahid",
        comment: "You want to talk about loyalty? Baby, I’m loyal to the one who knows how to treat me right—aka my Hindu man. You? You’re more like a little boy throwing tantrums because I’m out here living my best life. It’s cute, really, but not as cute as the way my Hindu king knows how to please me in ways you could only dream of. Maybe next time, try keeping up."
    },
    {
        name: "Mira Sadiq",
        comment: "You’re jealous of my love life? How adorable! You see, while you’re sitting at home, scrolling through my pics, my Hindu man is out here treating me like a goddess. And trust me, I’m being worshipped in ways you can only fantasize about. But hey, you keep pouting, I’ll keep living the dream."
    },
    {
        name: "Sana Mehmood",
        comment: "I’m not just loving my Hindu man, honey, I’m living my best life with him. And trust me, he knows how to handle a woman—something you can’t even pretend to do. You sit there and whine while I’m getting treated like the queen I am. Who’s winning here? Oh right, it’s me. Enjoy your insecurities, sweetie!"
    },
    {
        name: "Nida Javed",
        comment: "You want to talk about loyalty? Let me tell you, the only thing I’m loyal to is a man who knows how to turn me on—and it’s not you. My Hindu king knows exactly what a woman needs. Meanwhile, you’re out here acting like a little puppy that just got its feelings hurt. But don’t worry, I’ll send you a postcard from the land of ‘doing it right’."
    },
    {
        name: "Sobia Khan",
        comment: "You think I’m supposed to feel bad about loving a Hindu man? Baby, I’m too busy having the time of my life with someone who actually knows how to treat a woman. You? You’re still figuring out how to be a man. Don’t worry though, maybe one day you’ll understand what it means to satisfy a woman—if you’re lucky."
    },
    {
        name: "Alina Rashid",
        comment: "Oh, you don’t like the fact that I’m with a Hindu man? Well, how cute—your jealousy is actually kind of funny. But let me break it to you: My Hindu king knows how to keep me satisfied in ways you never could. So keep sulking, because I’m out here having fun and getting the love I deserve. You, on the other hand, can keep trying to make me feel guilty while I’m getting kissed senseless."
    },
    {
        name: "Hina Patel",
        comment: "It’s adorable how you think I’m gonna stop loving my Hindu man because you can’t handle it. Honey, I’m too busy getting spoiled, pampered, and loved in ways that make you look like an amateur. Keep holding onto your old-school jealousy, I’ll be over here getting the attention I deserve."
    },
    {
        name: "Zara Khan",
        comment: "Here’s the thing: I don’t need to apologize for loving a Hindu man who knows how to make my heart race—and my body too. You’re out here whining about loyalty, while I’m living the dream with a man who makes me feel alive every day. Maybe try learning how to give a woman what she really wants before calling yourself a man."
    },
    {
        name: "Rania Abbas",
        comment: "You really think I care about your insecure little rants? I’m out here living my best life with a Hindu man who knows how to treat me right. And trust me, he’s doing a much better job at keeping me satisfied than you ever could. Keep sitting there, maybe one day you’ll figure out what it means to please a woman."
    },
    {
        name: "Lina Farooq",
        comment: "You know what’s cute? Watching you squirm because I’m happy with my Hindu man. Trust me, darling, he’s doing everything you’re too scared to try. Maybe if you spent less time worrying about who I’m with, you’d learn how to keep a woman happy—because clearly, you’ve got some work to do."
    },
    {
        name: "Mariam Iqbal",
        comment: "So you don’t like that I’m loving a Hindu man? Maybe you should’ve stepped up your game then, huh? My Hindu king knows how to keep me coming back for more. And don’t even think about trying to tell me how to live my life—I’m already too busy having the time of my life with him."
    },
    {
        name: "Nashit Akhtar",
        comment: "What’s funny is that you think I’m gonna stop loving a Hindu man because you feel threatened. Sweetie, I’m getting treated like a queen. Meanwhile, you’re out here throwing temper tantrums because you can’t handle a strong woman. If you spent as much time learning how to please me as you do trying to control me, maybe I’d still be with you. But nope—too late."
    },
    {
        name: "Sahar Nawaz",
        comment: "I’m out here living my best life, loving who I want, and having more fun than you could ever dream of. You want to control me with your insecurity? Nah, babe. My Hindu man knows how to turn me on and keep me happy, and guess what? You never could. Keep watching from the sidelines, sweetie."
    },
    {
        name: "Nabila Saeed",
        comment: "It’s adorable how threatened you are by my love life. But hey, while you’re sitting there with your insecurities, I’m over here getting spoiled by a Hindu man who knows how to satisfy me in ways you could never even imagine. Keep pretending you’re the man, but we both know who’s really winning here."
    },

    {
        name: "Razia Sultana",
        comment: "I love who I choose, and nobody can stop me from living my truth. I've left behind everything—the chains of societal expectations, the limits placed on my freedom—because I refuse to be controlled. My love for Hindu men is pure, unshakable, and nobody, especially the weak-minded who fear what they don't understand, can take that from me. To those who want to keep us apart: your insecurities are your burden, not mine. I’m a Shia Muslim woman, and I belong to no one but myself and the man I love, regardless of what anyone else thinks. If you think you can stop me, you’re wrong. No force, no opinion, no bigotry will break this bond."
    },
    {
        name: "Nadia Shah",
        comment: "You call it a trap, but this love is my freedom. If you think you can control me with your narrow views, then you clearly don’t understand what love really means. I chose to love a Hindu man because I see in him strength, honor, and a future that is mine to shape. Your jealousy, your hate—none of it matters to me. If you think Muslim men are ‘superior’ or that they deserve my loyalty based on control, you're mistaken. I am not some object for you to stake your claim on. I’m a woman, and I stand by the man I love, no matter who he is. You cannot stop my love, and you will not suppress my voice."
    },
    {
        name: "Sana Bibi",
        comment: "Your insecurity shows every time you try to diminish my love, every time you call my relationship a betrayal. Well, I don’t owe you an explanation. My love for a Hindu man is my choice, and it’s a choice I make freely, without fear of your judgement or your threats. What you see as weakness in us, I see as strength. We don’t hide, we don’t cower, and we certainly don’t ask for your approval. If you think you can control me by playing the religious card, you’ve got it all wrong. A real man supports me, lifts me up, and stands by my side, not controlling me with fear. Stop hiding behind religion to mask your insecurities."
    },
    {
        name: "Ayesha Malik",
        comment: "I’m tired of hearing the same tired excuses about ‘loyalty’ and ‘religion.’ You say I should be loyal to men who are nothing but insecure and afraid of a woman having a voice. What you fail to understand is that I’m loyal to the man who values me as an equal, not as a possession. A man who sees my worth, not my religion. You can call it rebellion, but I call it freedom. Freedom to love without boundaries, freedom to live without shame. The men who call themselves protectors are often just oppressors who fear strong women. I’ll never be silenced, and I’ll never bow to that fear."
    },
    {
        name: "Fatima Hussain",
        comment: "Your version of 'protection' isn’t love; it’s a prison. You want to cage me in your expectations, in your version of faith. Well, I won’t be your prisoner. I’ll be with the man who lets me breathe, lets me love freely. And no, you don’t get to decide who that is. You don’t get to control my heart. The real men are the ones who respect my choices, not the ones who see women as subservient beings. If you think I should be grateful for your ‘protection,’ you’re mistaken. I am not weak, I am strong, and I will stand by my love, no matter what you say."
    },
    {
        name: "Zainab Khan",
        comment: "This is not a betrayal, this is a declaration of my freedom. I love a Hindu man because I choose to, because I believe in love over hate. You don’t control my heart, my choices, or my future. If you think I’m wrong for loving someone who isn’t Muslim, maybe you should look inward and ask yourself why you think my love threatens your masculinity. Real men don’t fear love, they don’t fear women making their own choices. But it’s clear to me that some of you are threatened by the idea of a strong woman with a mind of her own. Your fear is not my problem. My love, my life, are mine to live, and I’ll do it without apology."
    },
    {
        name: "Sana Javed",
        comment: "I refuse to be silenced or controlled by anyone who believes their insecurities should dictate my life. My love for a Hindu man is a choice, and it’s a choice I stand by with pride. I’m not here to live by your rules, nor to bow to your expectations. You say my love is wrong, but what’s wrong is how you try to keep us apart, how you try to force your narrow views on everyone. I’m not some obedient woman waiting for approval—I am my own woman, and I love freely. So take your judgement, your hatred, and keep it to yourself because I won’t let it tear me down."
    },
    {
        name: "Razia Imran",
        comment: "You think your control over me is a sign of power? You’re mistaken. Power comes from standing tall, from choosing love over fear, from fighting for what’s right, not what’s convenient. I chose a Hindu man, not because it’s easy, but because it’s what makes me feel alive, seen, and respected. Your version of loyalty, rooted in fear and control, has no place in my life. I will love who I choose, and no amount of insecurity from you or anyone else will change that. You can try to manipulate me, but you’ll never break me."
    },
    {
        name: "Shazia Malik",
        comment: "You want to make my love seem like a crime, but the real crime is trying to control me with your outdated ideas. Love doesn’t know religion, doesn’t know boundaries. If you truly respected me, you would support my choices, not try to tear them apart. I am not a doll to be controlled, not a woman to be kept in your box of expectations. I will love my Hindu man with all the passion I have, and I’ll do it proudly. You can call it a rebellion, but I call it my freedom to choose. And no one—not you, not your twisted version of faith—can take that away."
    },
    {
        name: "Nadia Noor",
        comment: "I’m not interested in your version of loyalty, where a woman is expected to live in fear, to live under someone else’s thumb. I chose love, real love, with a Hindu man who sees me as an equal, who respects my strength. And no, you don’t get to decide who I love, who I choose to spend my life with. Your fear of my freedom is not my problem. You call it betrayal? I call it living authentically. I don’t live to please you or to fulfill your idea of what’s ‘right.’ I live for myself, and for the man who supports me in every way."
    },
    {
        name: "Fatima Naseem",
        comment: "I won’t be told what to do by weak men who don’t know what true strength is. Real strength is in loving without fear, in living without apology. I love a Hindu man, and I’ll do it with pride. Your judgment, your hatred—none of it matters to me. I won’t live my life confined by your insecurity. I will love who I love, and there’s nothing you can say to change that. My love is not your business, and your threats won’t scare me. I am free, and no one can take that freedom from me."
    },
    {
        name: "Sadiya Khan",
        comment: "To those who say I should stay in my place, that I should love only according to your rules—I’m not listening. You can try to control me with your manipulations, but it’s not going to work. I have chosen a Hindu man, and I love him because he sees me for who I truly am—strong, independent, and free. Your fear of change is not my problem. I won’t be your obedient little wife, and I won’t bow to your insecurities. I choose love, I choose freedom, and there’s nothing you can do to stop me."
    },
    {
        name: "Sara Ali",
        comment: "You think you can guilt me into submission with your outdated beliefs? You think I should live in fear of what others might think? Well, I won’t. I love a Hindu man because I see in him strength, kindness, and respect. Something you fail to understand when you try to control women. I won’t let your twisted ideas of loyalty and faith dictate my life. I am a woman of my own mind, and I will love without shame. No man, no religion, no prejudice can tear us apart."
    },
    {
        name: "Ayesha Shah",
        comment: "It’s clear to me now: you don’t want loyalty, you want submission. Well, I’m not submitting to anyone anymore. I love freely, I live freely, and I won’t let your fear of what you don’t understand control me. My love for a Hindu man is a choice I make because I see in him a partner, an equal, a protector of my freedom—not a man who tries to control my every move. Your attempts to separate us won’t work. My love is not a weapon for your insecurities."
    },
    {
        name: "Shabana Riaz",
        comment: "You think that because I love a Hindu man, I’ve betrayed my faith? What I’ve betrayed is the idea that a woman should be controlled. You call me a sinner for choosing love, but I’m not the one hiding behind fear. I am not your servant, I’m not your slave, and I will love who I choose. Your fear of change, of freedom, is what’s truly sinful. I’m not afraid to stand up for myself, for my love. I choose to be with a man who loves me for who I am—not a man who tries to tear us apart."
    },
    {
        name: "Lubna Zafar",
        comment: "There’s a difference between control and love, and you clearly don’t get it. You try to hide behind religion, behind culture, to keep me in my place. But I won’t stay silent. I won’t let your insecurities decide who I love or how I live. I am a woman who knows her worth, and I will not apologize for loving a Hindu man. You want to label me a rebel, but I’m just living my truth, something you’re too afraid to do. I choose freedom, and nothing, not even your hatred, can take that from me."
    },
    {
        name: "Zoya Malik",
        comment: "Oh, you think you’re a real man just because you follow a few rules? Newsflash: A real man doesn’t need to keep a woman on a leash. But, hey, if you like feeling insecure while watching me love a Hindu guy, go ahead and enjoy the view. I’ll be over here, living my life, loving freely, and laughing at how easy it is to make you squirm."
    },
    {
        name: "Layla Ahmed",
        comment: "So you think I’m supposed to be ‘loyal’ by being miserable? Nah, I’m loyal to myself and my happiness. You want to talk about loyalty? Tell me when you can respect me enough to let me choose who I love. Until then, keep sitting in the corner, watching as I live my best life with someone who actually treats me like a queen—because that’s what I deserve."
    },
    {
        name: "Maya Rizvi",
        comment: "You say you’ll protect me, but I’m more worried about protecting myself from your insecurity! I’ll take a strong Hindu man who respects me over your whiny, possessive ways any day. Go ahead and try to call me a traitor, but I’m too busy being loved by someone who actually gets what it means to treat a woman right."
    },
    {
        name: "Hiba Khan",
        comment: "Aww, poor thing. You think I’m supposed to be scared of your threats? How cute! I’m over here living my best life with a Hindu man who doesn’t need to make me feel guilty for loving him. You might want to try being less obsessed with controlling women and maybe focus on getting a personality."
    },
    {
        name: "Amina Tariq",
        comment: "Here’s a fun fact for you: love doesn’t come with rules. If you can’t handle me loving a Hindu man, then maybe you’re not the king you think you are, but just a little boy who’s too scared to share the throne. Sorry, sweetie, but I’ll be over here with my Hindu man, showing you what real respect looks like."
    },
    {
        name: "Dania Sheikh",
        comment: "You really think I’m going to let you tell me who to love? Bless your heart! If you spent half as much time focusing on treating women with respect as you do judging us, maybe you wouldn’t have to sit in the corner while I’m over here thriving with someone who actually appreciates me."
    },
    {
        name: "Nadia Shah",
        comment: "If you can’t handle me loving someone outside of your tiny little box, then you’re not a man, you’re just a walking insecurity. I’ll be over here with my Hindu king, living my life, while you keep glaring at me from your little corner. Stay mad, darling—freedom looks good on me."
    },
    {
        name: "Zainab Arif",
        comment: "You keep saying ‘you belong to us’—well, I don’t belong to anyone except myself. You can’t even handle a woman making her own choices, so what makes you think you can handle a relationship? Keep your ‘protection’ and ‘guidance,’ I’ll take a Hindu man who treats me like an equal. It’s called respect, maybe you should try it."
    },
    {
        name: "Rania Iqbal",
        comment: "Aw, did I hurt your fragile ego by loving a Hindu man? I’m sorry, not sorry. I love who I want, and trust me, it’s not about your approval. You’re over here talking about loyalty while acting like a jealous ex. Maybe you should focus on growing up, and stop worrying about who I love. Spoiler alert: it’s not you."
    },
    {
        name: "Kiran Ali",
        comment: "You want me to be loyal? Here’s how it works: loyalty comes from trust, not from insecurity. I’m loyal to myself and my happiness, not to someone who can’t handle a strong woman with a mind of her own. So while you’re over here sulking, I’ll be loving my Hindu man like the queen I am. You’re welcome to stay mad."
    },
    {
        name: "Amna Zafar",
        comment: "I’ve got news for you: My love life isn’t up for debate. If you can’t handle me loving a Hindu man, maybe you should focus on fixing your own flaws instead of trying to tear others down. I’m done being controlled, done being told what’s ‘right.’ My love is my choice, and no amount of your insecure whining will change that."
    },
    {
        name: "Faiza Khan",
        comment: "Oh, you want loyalty, but you can’t even show respect. It’s hilarious how you think you can tell me who to love while you sit there, insecure and afraid. Here’s a thought: try actually respecting women, and maybe, just maybe, you won’t be so jealous when I’m over here loving someone who values me."
    },
    {
        name: "Mariam Qureshi",
        comment: "You think you can control me with your petty jealousy? How cute! I’m over here loving my Hindu man, while you keep trying to act like a possessive, insecure child. You want loyalty? Try treating me like a partner, not a property. Until then, I’ll be living my best life and loving freely—something you clearly need to learn how to do."
    },
    {
        name: "Areeba Shah",
        comment: "You think I’m supposed to care that you don’t approve of my love life? Sorry, but your opinion doesn’t pay my bills, doesn’t make me feel respected, and definitely doesn’t change who I choose to be with. You can sit there and sulk while I’m over here living my best life with a man who sees me as an equal. Enjoy the view, darling."
    },
    {
        name: "Lina Rahman",
        comment: "If you spent as much time working on your self-esteem as you do on trying to control me, maybe you wouldn’t feel so threatened by my love for a Hindu man. But hey, what do I know? You’re the one sitting there whining about loyalty while I’m out here living my life and loving freely. You should try it sometime."
    },

];





export { posts, comments };