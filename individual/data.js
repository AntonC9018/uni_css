"use strict";


const NumRandomItems = 25;

const TierPortions = [
    { small: 4, medium: 1, large: 1 },
    { small: 4, medium: 2, large: 1 },
    { small: 4, medium: 3, large: 2 },
    { small: 4, medium: 4, large: 2 },
];

const TierMaxWidth = 4;

const PictureWidth  = 400;
const PictureHeight = 200;


// tier 0 -- 0   .. 100
// tier 1 -- 100 .. 200
// tier 2 -- 200 .. 500
// tier 3 -- > 500
const StringLengthWidthTierBreakpoints = [100, 200, 500];


function getRandomItems(numItems)
{
    let result = [];
    const titlesStart = [
        "Very nice",
        "Cute",
        "My own",
        "Insane",
        "Godlike",
        "Presumptuos",
        "Absolute",
        "Awesome",
        "Little",
        "Motivating",
        "Playful", // 11 is a prime
    ];
    const titlesEnd = [ // 13 is a prime
        "cat", "dog", "fish", "art",
        "utensils", "frog", "audio",
        "parrots", "coral", "studio",
        "goggles", "dream", "orbits",
    ];
    const loremIpsum = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet dolor commodo, malesuada diam quis, commodo est. Nunc non nisi dolor. Ut lectus tortor, congue vel ex sit amet, semper dignissim nibh. Morbi accumsan, risus eget laoreet luctus, lorem dui porta augue, commodo maximus erat nisl eu augue.",

        "Fusce bibendum cursus augue, ut egestas velit mollis gravida. Pellentesque at justo sem. Suspendisse interdum sodales porta. Donec massa est, porttitor id velit at, ultrices hendrerit est. Suspendisse volutpat faucibus tellus, ut convallis lacus. Mauris faucibus elementum finibus.",

        "Donec sollicitudin ullamcorper ligula, pharetra ullamcorper mi tristique et. Vestibulum eget fermentum sapien. Ut condimentum nec turpis mollis tristique. Nam lorem diam, ultrices eu volutpat id, iaculis eu dui. Sed ut felis elit. Cras et tortor in quam elementum commodo. Nunc semper molestie ante eu dignissim.",

        "Praesent auctor elit eu enim aliquet molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lorem at arcu tempus mattis. Maecenas tincidunt felis dapibus velit viverra, eget cursus dolor dignissim. Ut et nulla non mi tincidunt maximus a sit amet eros.",
        
        "Maecenas congue lorem placerat, aliquam urna eu, ornare lacus. Vivamus maximus metus turpis. Nullam a ex accumsan, imperdiet odio nec, dictum erat. Morbi quis finibus erat, nec congue sem.",

        "Donec elit erat, vulputate quis dolor eu, mattis gravida orci.",
        
        "Aliquam condimentum eu elit ac vestibulum. Nam sed erat ornare, pellentesque libero ac, condimentum augue. In eget cursus mi. Vestibulum et libero enim.",

        "Cras non posuere ante, in vehicula diam.",

        "Sed ac tortor sodales, lobortis risus in, porttitor dolor.",

        "Nulla nunc elit, finibus eu ante ut, iaculis elementum orci.",

        "Fusce quis tellus sit amet est hendrerit fermentum sit amet sit amet nisl.",

        "Pellentesque vel dui sit amet urna efficitur porta. Praesent pellentesque vitae orci eu facilisis. Sed at accumsan diam, nec interdum magna.",
        
        "Sed consequat metus ac leo venenatis tempor. Duis vitae dictum lacus, sit amet convallis felis. Curabitur viverra lorem urna, ac mollis enim pharetra vitae. Aliquam a finibus ipsum. Vestibulum a tellus laoreet, ultrices neque a, tristique arcu. Duis efficitur tortor non vulputate ornare. Etiam nec nibh id massa feugiat suscipit. Morbi vel ullamcorper nunc.",

        "Praesent molestie et magna vitae posuere. Aenean cursus orci non erat mattis, vitae venenatis augue luctus. Aliquam ut scelerisque dolor. Nullam pellentesque auctor tortor sed ullamcorper. Sed scelerisque mollis velit eget ultricies. Vivamus ut vestibulum justo.",

        "Vivamus at massa gravida, pulvinar nisi id, euismod ex. Integer leo magna, facilisis vitae risus malesuada, faucibus dignissim risus.",
        
        "Curabitur rhoncus vestibulum magna semper congue. Vivamus diam velit, porta id congue vel, finibus at ipsum. Integer vulputate posuere tellus, vel viverra ex molestie quis. Vivamus aliquet cursus lorem, sit amet iaculis lacus sodales sit amet. Curabitur quis cursus nisi.", 
    ]

    numItems = Math.min(numItems, titlesStart.length * titlesEnd.length);

    function getWidthTier(textLength)
    {
        for (let i = 0; i < StringLengthWidthTierBreakpoints.length; i++)
        {
            if (textLength < StringLengthWidthTierBreakpoints[i])
                return i;
        }
        return StringLengthWidthTierBreakpoints.length;
    }

    for (let i = 0; i < numItems; i++)
    {
        let titleStartIndex = i % titlesStart.length;
        let titleEndIndex = i % titlesEnd.length;
        
        let randomImageId = i % 500; 
        
        let loremIndex = i % loremIpsum.length;
        function more(text0, indexOffset)
        {
            if (Math.random() > 0.5)
                return text0 + " " + loremIpsum[(loremIndex + indexOffset) % loremIpsum.length];
            return text0;
        }

        let text = loremIpsum[loremIndex];
        text = more(text, 1);
        text = more(text, 2);

        result[i] = {
            title: titlesStart[titleStartIndex] + " " + titlesEnd[titleEndIndex],
            text: text,
            widthTier: getWidthTier(text.length),
            picture: `https://picsum.photos/id/${randomImageId}/${PictureWidth}/${PictureHeight}`
        }
    }
    return result;
}


var app = new Vue(
{
    el: "#app",
    data:
    {
        items: [
            // {
            //     title: "My cat",
            //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet dolor commodo, malesuada diam quis, commodo est. Nunc non nisi dolor. Ut lectus tortor, congue vel ex sit amet, semper dignissim nibh.",
            //     picture: "../images/cat1.jpg",
            //     widthTier: 0,
            // },
            // {
            //     title: "Page from question 1",
            //     text: "Morbi accumsan, risus eget laoreet luctus, lorem dui porta augue, commodo maximus erat nisl eu augue. Fusce bibendum cursus augue, ut egestas velit mollis gravida. Pellentesque at justo sem. Suspendisse interdum sodales porta. Donec massa est, porttitor id velit at, ultrices hendrerit est. Suspendisse volutpat faucibus tellus, ut convallis lacus. Mauris faucibus elementum finibus.",
            //     picture: "../images/page.png",
            //     widthTier: 1,
            // },
            // {
            //     title: "Weather today",
            //     text: "Donec sollicitudin ullamcorper ligula, pharetra ullamcorper mi tristique et. Vestibulum eget fermentum sapien. Ut condimentum nec turpis mollis tristique. Nam lorem diam, ultrices eu volutpat id, iaculis eu dui. Sed ut felis elit. Cras et tortor in quam elementum commodo. Nunc semper molestie ante eu dignissim. Praesent auctor elit eu enim aliquet molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lorem at arcu tempus mattis.",
            //     picture: "../images/weather.jpg",
            //     widthTier: 2,
            // },
            // {
            //     title: "My doggo",
            //     text: "Maecenas tincidunt felis dapibus velit viverra, eget cursus dolor dignissim. Ut et nulla non mi tincidunt maximus a sit amet eros. Maecenas congue lorem placerat, aliquam urna eu, ornare lacus. Vivamus maximus metus turpis. Nullam a ex accumsan, imperdiet odio nec, dictum erat. Morbi quis finibus erat, nec congue sem.",
            //     picture: "https://picsum.photos/id/200/200/300",
            //     widthTier: 3,
            // },
        ].concat(getRandomItems(NumRandomItems))
    },
    methods:
    {
        itemTierToWidthPortion: function(tier)
        {
            return TierPortions[tier];
        },

        itemTierToWidthClass: function(tier)
        {
            let t = this.itemTierToWidthPortion(tier);
            return `sm:basis-${t.small}/${TierMaxWidth} 
                    md:basis-${t.medium}/${TierMaxWidth} 
                    lg:basis-${t.large}/${TierMaxWidth}`;
        },

        itemWidthToFlexDirection: function(tier)
        {
            let t = this.itemTierToWidthPortion(tier);

            function getDirection(isSmall)
            {
                return isSmall ? "col" : "row";
            }
            
            // width of 1/tierMaxWidth means top to down, so flex-col
            return `sm:flex-${getDirection(t.small  == 1)}
                    md:flex-${getDirection(t.medium == 1)}
                    lg:flex-${getDirection(t.large  == 1)}`;
        }
    }
});