# Project Link



## Leaflet Challenge
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

### Javascript logic
Firstly, we query the data from the USGS website for the significant earthquakes this month.

![alt text](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrands.home-assistant.io%2F_%2Fusgs_earthquakes_feed%2Flogo%402x.png&f=1&nofb=1&ipt=0a21887f0844614664c9bf0c30b877c1045fc78f478c20cf5f336df259cedb34&ipo=images)

We then create our map tiles and a control layer to switch between them. Then we add a legend to show the magnitutde and the corrosponding color with the earthquake.

Each marker has metadata attached to it, refering to the earthquake data. 
