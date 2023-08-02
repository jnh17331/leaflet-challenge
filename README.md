# Project Link

https://jnh17331.github.io/leaflet-challenge/

## Leaflet Challenge
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

![alt text](https://github.com/jnh17331/leaflet-challenge/blob/main/images/example.PNG?raw=true)

### Javascript logic
Firstly, we query the data from the USGS website for the significant earthquakes this month.

![alt text](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrands.home-assistant.io%2F_%2Fusgs_earthquakes_feed%2Flogo%402x.png&f=1&nofb=1&ipt=0a21887f0844614664c9bf0c30b877c1045fc78f478c20cf5f336df259cedb34&ipo=images)

We then add the following features to our page:
- Map tiles and a control to switch between them
- A legend showing the magnitudes and associated colors
- Metadata for each earthquake point
