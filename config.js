const config = {
    giveaway: {
        name: "Jays Tickets Canada Day Giveaway", // Used for modal, etc.
        heroHeadline: "Win Big with <span class='highlight'>Jays Tickets!</span>", // Supports HTML
        heroSubheadline: "Celebrate Canada Day in Style! Join us at the Canada Day event for your chance to win tickets to an amazing Jays game!",
        promotionDates: "Promotion runs from June 18, 2025 until July 2, 2025.",
        endDate: "2025-07-02T23:59:59", // Format: YYYY-MM-DDTHH:MM:SS (for countdown)
        heroBackgroundImageUrl: "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg",
        heroCtaText: "Enter Now for Jays Tickets!",
        entryFormCtaText: "Count Me In!",
        successModalHeaderText: "\uD83C\uDFC0 You're In! \uD83C\uDFC0",
        successModalMainMessage: "Your entry for the <strong>Jays Tickets Canada Day Giveaway</strong> has been successfully submitted. Best of luck!", // Supports HTML
        successModalEmailPrompt: "We'll announce the winner via email after the draw date on July 2nd. Keep an eye on your inbox!",
    },
    prize: {
        name: "$100 Value Toronto Blue Jays Game Tickets",
        value: "$100 Value",
        description: "Experience the thrill of a live Toronto Blue Jays game this summer! Win tickets worth $100 to enjoy an unforgettable day at the ballpark with friends or family. Join us at our Canada Day booth and score these amazing tickets—perfect for baseball lovers and summer fun!",
        images: [
            { src: "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg", alt: "Toronto Blue Jays Tickets Giveaway" },
            { src: "https://images.unsplash.com/photo-1531058020387-c6f1758f43df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80", alt: "Toronto Blue Jays Baseball Game" },
            { src: "https://images.unsplash.com/photo-1561414927-cf67e226f7aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80", alt: "Fans cheering at a baseball game" }
        ],
        includedItems: [
            { icon: "fas fa-ticket-alt", text: "Exclusive $100 value tickets to a live Toronto Blue Jays game" },
            { icon: "fas fa-calendar-check", text: "Must be present at Canada Day event on July 1 to enter" },
            { icon: "fas fa-users", text: "Perfect for baseball fans and summer fun seekers" },
            { icon: "fas fa-check-circle", text: "No purchase necessary to enter or win" },
            { icon: "fas fa-bolt", text: "Quick and fun entry at our booth!" }
        ],
        limitedTimeOfferText: "\uD83C\uDFC0 Limited Time Giveaway!",
        ctaButtonText: "I WANT TO WIN THIS!"
    },
    howToEnter: {
        steps: [
            { icon: "fas fa-map-marker-alt", title: "Visit Our Booth", description: "Catch us at the Canada Day event on July 1st to enter." },
            { icon: "fas fa-pen", title: "Fill the Form", description: "Complete our quick and fun survey at the booth." },
            { icon: "fas fa-fingers-crossed", title: "Wait for the Draw", description: "Keep your fingers crossed for the draw on July 2nd." }
        ],
        highlights: [
            { icon: "fas fa-baseball-ball", text: "Experience the Blue Jays excitement live" },
            { icon: "fas fa-sun", text: "Perfect summer outing" },
            { icon: "fas fa-trophy", text: "Fantastic $100 prize value" }
        ]
    },
    entryForm: {
        subtitle: "Provide your details below for a chance to win $100 Blue Jays tickets!",
        entryCountText: "Join hundreds of baseball fans entering!",
        socialSharePrompt: "Share the excitement with friends:",
        sharePlatforms: {
            facebook: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
            twitter: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Enter to win Blue Jays tickets at the Canada Day event!")
        },
        termsText: "By entering, you agree to our <a href='https://www.mls.theskygroup.ca/privacy-policy' target='_blank'>Privacy Policy</a> and <a href='https://www.mls.theskygroup.ca/terms' target='_blank'>Terms & Conditions</a>."  
    },
    rules: {
        fairSelectionInfo: {
            title: "Fair & Square Selection",
            text: "The winner will be randomly selected using a certified method to guarantee fairness and equal chance for all participants."
        },
        importantNotice: {
            title: "Winner Notification - Check Your Email!",
            text: "The winner will be notified by email on or about July 2, 2025. Please ensure your contact details are correct and monitor your spam folder."
        },
        faq: [
            { q: "Who is eligible to enter?", a: "Open to all baseball fans attending the Canada Day event, 18 years or older." },
            { q: "When does the giveaway run?", a: "Starts June 18, 2025 and ends July 2, 2025 at 11:59 PM." },
            { q: "How will the winner be selected?", a: "One winner will be randomly chosen from all valid entries received during the promotion period." },
            { q: "How will the winner be notified?", a: "Notification via email on or about July 2, 2025." },
            { q: "Can I enter more than once?", a: "One entry per person. Multiple entries will be disqualified." },
            { q: "Is my information secure?", a: "We respect your privacy and use your information solely for this giveaway in accordance with our Privacy Policy." }
        ],
        fullRulesPdfLink: "", // No PDF rule link provided
        tips: [
            "Double-check your email before submitting.",
            "Add us to your contact list to receive winner notification emails.",
            "Attend the Canada Day event July 1st for your chance to enter in person."
        ]
    },
    footerContact: {
        organizerName: "The Sky Group",
        organizerLogoUrl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/777776b6-d7a4-424e-8ea4-333ed3be7501/The_Sky_Group_X_Property.ca_cobranded_logo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R43P2EZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCjZpSS83THhy0ZqjzXN%2Fu9cWVD2lpF8ktW7Ns6grKBZgIhAJC0s78SMxwJl%2FdA3H290yi6DZgdKTPet9b4a%2FUMNMgFKv8DCGYQABoMNjM3NDIzMTgzODA1IgxEp8g1jYry1a5lE%2Fgq3APc%2Bh4KvefbkPrkUbTJ4DyxGrTt5MOhYzJeUGm%2BMRoRGZBTfqtZh9GgAYITgQbU0a5hJyJJN3HO4PXeJXxG6lRiLZGmuHpPNYV6tQ%2FtonxXgHlN%2B8MaNfoS4hOsFv4m6V%2F5yvld5rqBGbfM1hjsW6HnSi4PZgstYE52lqNXlL%2BFxsMa6VgR8EhZWWnCq6oe7VMnz4kOXyM39%2Fvz7tWrSMOgd7z19SUG1B9RqqGMlEoKflO8yb1LuskxXAjrS07dBiJLF66n9Bmr0t0K9%2FwKg9l6BNsQsxbd8ON3tJfN4i%2FFcUBZRWEJFCId%2Fk5DQGtLC%2Bb0oOMtvxezqR1kT2Zge9Mpr3BEpgvS%2F0qh0YmPN9X32EIp9rPCuX6fD%2B50HoI0Z%2BmJ6yuLFVE3d4rPRwP52xCvckFOvsSjZV8kQaqJFePnioQZH1tRHflYtfFxPihfRaDJLFrv6YxK6m4%2Ft3AYk3FhDxkk%2F9kxXolIspsj1LwRZ6SVSdhAo4zrvuj0MC317bu2LDU0MD%2FPeEwpM3CHTmBddGLuh1SN64mATJ%2B2CYj4dSmZknaAWDTCGSLY5hEDoWZq9IYu4Dk8tVLt1SA4Yro5Sj7Uj5HPmNr5vOUGQHnhOOVkjRTWjfjgsw0FJDC9jsLCBjqkAbo7OXEUAKSuzpCWDseT%2F1M68xJriexWH1GMgI%2FFMF3xvzK%2B1eiTkRH1q1%2BomeBgmxsZu97bDESLCapRogQZF5X%2B6tlR88ILF1O2jApqanldGrsmWv%2FHaGgv9jVRLoxz38lMZ7nMIbFAV3jLIYEaHTY0lg%2FY%2FmOmogQbP9zdDaAxwYJl7DBlkq72zKRn4oA7GQHyX1AoeL%2BbqCRI%2BWDqfhbs3lM3&X-Amz-Signature=ee4955acba29ad9a461520ad2534b8b0b49d29529fa06248bed0690efd011f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        email: "shar@theskygroup.ca",
        phone: "1 647 887 4996",
        address: "36 Distillery Lane Unit 500 Toronto M5A3C4",
        social: {
            facebook: "https://www.facebook.com/theskygroupre",
            instagram: "https://www.instagram.com/theskygroup_re",
        },
        copyrightOwner: "The Sky Group"
    },
    meta: {
        pageTitle: "Win Jays Tickets for Canada Day 2025!",
        navBrandLogoText: "The Sky Group",
        privacyPolicyLink: "https://www.mls.theskygroup.ca/privacy-policy",
        termsLink: "https://www.mls.theskygroup.ca/terms",
    },
    settings: {
        webhookUrl: "https://n8n.salesgenius.co/webhook/giveawayupdate",
        confettiColors: ['#0052cc', '#ff0000', '#ffffff', '#003366'],
        showCountdownInHero: true,
    },
    deploymentInfo: {
        repoName: "Giveaway-938",
        repoUrl: "https://github.com/arslvn93/Giveaway-938",
        tag: "Jays Tickets Canada Day Event",
        netlifyUrl: "http://Giveaway-938.netlify.app",
        netlifyId: "1003244303"
    },
    modalQuestions: [
        {
            id: "favorite_local_events",
            questionText: "Which type of local events do you enjoy attending most in Toronto?",
            options: [
                { value: "major_league_sports_games", text: "Major league sports games" },
                { value: "food_and_wine_festivals", text: "Food and wine festivals" },
                { value: "music_concerts", text: "Music concerts" },
                { value: "art_exhibitions", text: "Art exhibitions" }
            ]
        },
        {
            id: "lifestyle_preferences",
            questionText: "On a typical weekend, how do you prefer to spend your time?",
            options: [
                { value: "exploring_real_estate", text: "Exploring new real estate developments or open houses" },
                { value: "relaxing", text: "Relaxing at home with friends and family" },
                { value: "outdoor_activities", text: "Engaging in outdoor activities like hiking or biking" },
                { value: "dining_out", text: "Dining at trendy restaurants or cafes" }
            ]
        },
        {
            id: "travel_habits",
            questionText: "How do you typically spend your vacations?",
            options: [
                { value: "international_travel", text: "Traveling to international destinations" },
                { value: "local_attractions", text: "Visiting local attractions around Toronto" },
                { value: "staycations", text: "Taking staycations in luxury accommodations" },
                { value: "road_trips", text: "Going on road trips to explore new areas" }
            ]
        },
        {
            id: "community_engagement",
            questionText: "How involved are you in community activities or neighborhood associations?",
            options: [
                { value: "very_involved", text: "Very involved, I attend meetings and events regularly" },
                { value: "somewhat_involved", text: "Somewhat involved, I participate occasionally" },
                { value: "interested", text: "Not very involved, but Im interested in what's happening" },
                { value: "not_involved", text: "Not involved at all" }
            ]
        }
    ]
};