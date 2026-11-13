---
title: Corvette C5 aerodynamic CFD
summary: A surfaced model of the full Corvette C5 exterior, to be run through external-flow CFD to see how air moves around the body.
date: 2026-06-01
timeframe: Summer 2026, ongoing
status: in-progress
context: Personal project
role: Sole author
tools:
  - SolidWorks surfacing
  - SolidWorks Flow Simulation (CFD)
cover: /images/projects/corvette-c5-cfd/cover.png
coverAlt: Early SolidWorks model of the Corvette C5 body with wheels, seen from the rear quarter
---

## Problem

I want to see how air moves around a Corvette C5 and estimate its drag. That needs a closed, accurate model of the whole exterior, and the C5 body is almost all compound curves, so it has to be built with surfacing instead of simple extrusions.

## Approach

I am building the body in SolidWorks from side, top, front and rear reference drawings of the car, so the profile matches in every view.

The first pass sets the overall proportions: the side profile, wheel positions and wheel arches.

![Early SolidWorks body model with the side profile, wheel arches and wheels in place](/images/projects/corvette-c5-cfd/body-model.png)
*Current model: side profile, wheel arches and wheels in place. Body surfacing is still in progress.*

## Next steps

- Surface the hood, roof, fenders and rear to match the top and front views
- Close the body into a solid for the flow domain
- Run external-flow CFD in SolidWorks Flow Simulation
- Report drag and the flow patterns around the body
