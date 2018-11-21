

var data = {
  name: "Root",
  children: [
    {
      name: "Front",
      children: [
        {
          name: "Website",
          children: [
            {
              name: "Home",
            },
            {
              name: "News",
              children: [
                {
                  name: "World"
                },
                {
                  name: "Sport"
                },
                {
                  name: "Politics"
                },
                {
                  name: "Science"
                },
                {
                  name: "Business"
                },
                {
                  name: "Technology"
                },
                {
                  name: "Health"
                }
              ],
              
            },
            {
              name: "Live",
              
            },
            {
              name: "Blogs",
              
            },
            {
              name: "Videos",
              children: [
                {
                  name: "World videos"
                },
                {
                  name: "Sport videos"
                },
                {
                  name: "Politics videos"
                },
                {
                  name: "Science videos"
                },
                {
                  name: "Business videos"
                },
                {
                  name: "Technology videos"
                },
                {
                  name: "Health videos"
                }
              ],
              
            },
            {
              name: "Jobs",
              
            },
            {
              name: "Store",
              
            },
            {
              name: "Help",
              children: [
                {
                  name: "Contact"
                },
                {
                  name: "Privacy"
                },
                {
                  name: "Mobile apps"
                },
                {
                  name: "Using website"
                },
                {
                  name: "What's New"
                }
              ],
              
            }
          ],
        },
        {
          name: "Reader",
          children: [
            {
              name: "RSS"
            },
            {
              name: "Alerts"
            },
            {
              name: "Favorites"
            }
          ],
        },
        {
          name: "Mobile",
          children: [
            {
              name: "iOS app",
              children: [
                {
                  name: "News iOS Mobile"
                },
                {
                  name: "Live iOS Mobile"
                },
                {
                  name: "Videos iOS Mobile"
                }
              ],
            },
            {
              name: "Android app",
              children: [
                {
                  name: "News Android Mobile"
                },
                {
                  name: "Live Android Mobile"
                },
                {
                  name: "Videos Android Mobile"
                }
              ],
            },
            {
              name: "Windows app",
              children: [
                {
                  name: "News Windows Mobile"
                },
                {
                  name: "Live Windows Mobile"
                },
                {
                  name: "Videos Windows Mobile"
                }
              ],
            }
          ],
        }
      ]
    },
    {
      name: "SaaS",
      children: [
        {
          name: "Xiti"
        },
        {
          name: "Google Ads"
        },
        {
          name: "Video Player"
        },
        {
          name: "S3 Storage"
        },
        {
          name: "Simple Queue Service"
        },
        {
          name: "Facebook",
          children: [
            {
              name: "Comments"
            },
            {
              name: "Like Button"
            }
          ]
        },
        {
          name: "Twitter"
        }
      ]
    },
    {
      name: "API",
      children: [
        {
          name: "Content API",
        },
        {
          name: "Picture API",
          children: [
            {
              name: "Picture API Content"
            },
            {
              name: "Picture API Home"
            }
          ],
        },
        {
          name: "Router API",
        },
        {
          name: "Search API",
        },
        {
          name: "Account API",
        },
        {
          name: "SEO API",
        },
        {
          name: "Export API",
          children: [
            {
              name: "Partner export"
            },
            {
              name: "RSS export"
            },
            {
              name: "Sitemap",
              children: [
                {
                  name: "Sitemap News"
                },
                {
                  name: "Sitemap Videos"
                },
                {
                  name: "Sitemap Live"
                }
              ]
            }
          ],
        }
      ],
      dependsOn: [
        "S3 Storage",
        "Simple Queue Service"
      ]
    },
    {
      name: "Back",
      children: [
        {
          name: "CMS",
          children: [
            {
              name: "BO World"
            },
            {
              name: "BO Sport"
            },
            {
              name: "BO Politics"
            },
            {
              name: "BO Science"
            },
            {
              name: "BO Business"
            },
            {
              name: "BO Technology"
            },
            {
              name: "BO Health"
            },
            {
              name: "BO Front page editor"
            },
            {
              name: "BO Section manager"
            }
          ],
        },
        {
          name: "CRM",
        },
        {
          name: "Wordpress MU",
        },
        {
          name: "BO Videos",
        },
        {
          name: "BO Account",
        },
        {
          name: "BO SEO",
          children: [
            {
              name: "BO Meta home"
            },
            {
              name: "BO Meta content"
            },
            {
              name: "BO Meta links"
            }
          ],
        },
        {
          name: "Import",
          children: [
            {
              name: "FTP Import"
            },
            {
              name: "RSS Import"
            },
            {
              name: "Custom Import"
            }
          ],
        },
        {
          name: "BO JobBoard",
        },
        {
          name: "BO Store",
        }
      ],
    }
  ]
}
