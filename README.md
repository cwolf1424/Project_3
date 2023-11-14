# Project_3
KU Data Analytics Bootcamp Group Project 3

Data for this project was from the following source:

    https://sports.core.api.espn.com/v2/sports/soccer/leagues?lang=en

Specific sections directly using additional sources listed below:

--------------------------------------------------
grabbing-all_leagues.ipynb
--------------------------------------------------

--------------------------------------------------
cleaning-all_leagues.ipynb
--------------------------------------------------

The following syntax (used in multiple sections):

    leagues_df["league_id"] = ["lg" + str(league_id) for league_id in leagues_df["league_id"]]

    split_heights = split_heights.str.split("'", n=1, expand=True)

used the following lines of code from Kyle and Caleb's last group project, project 3:

    scat_ids = ["subcat" + str(scat_id) for scat_id in subcategory_ids]

    contacts_df[["first_name","last_name"]] = contacts_df["name"].str.split(" ", n=1, expand=True)

--------------------------------------------------
quick_dbd-export.sql
--------------------------------------------------

Our schema layouts were created using quickDBD:

    https://www.quickdatabasediagrams.com/

--------------------------------------------------
hosting.ipynb
--------------------------------------------------

--------------------------------------------------
site.html
--------------------------------------------------

The following sections:

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Placeholder Title</title>
    
        <!-- Our CSS -->
        <link rel="stylesheet" type="text/css" href="static/css/style.css">

    </head>

    <body>
        
        <!-- D3 JavaScript -->
        <script src="https://d3js.org/d3.v7.min.js"></script>

        <!-- Our JavaScript -->
        <script type="text/javascript" src="static/js/logic.js"></script>

    </body>

    </html>

Used the setup format from the leaflet challenge index.html file.

--------------------------------------------------
style.css
--------------------------------------------------

--------------------------------------------------
logic.js
--------------------------------------------------

We used the following tool to build our table grid:

    https://gridjs.io/

--------------------------------------------------
no_picture.png
--------------------------------------------------

We grabbed this image from the following location:

    https://www.nicepng.com/ourpic/u2y3a9e6t4o0a9w7_profile-picture-default-png/
