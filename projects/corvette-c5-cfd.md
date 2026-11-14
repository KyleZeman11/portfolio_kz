---
title: Corvette C5 aerodynamics study
summary: A surfaced SolidWorks model of the full Corvette C5 exterior, built to run through computational fluid dynamics (CFD) and show how air moves around the body.
date: 2026-06-01
timeframe: Summer 2026, ongoing
status: in-progress
context: Personal project
role: Sole author
tools:
  - SolidWorks surfacing
  - Computational fluid dynamics (SolidWorks Flow Simulation)
cover: /images/projects/corvette-c5-cfd/cover.png
coverAlt: Red SolidWorks model of the Corvette C5 body with wheels, seen from the front quarter
---

## Problem

I want to see how air moves around a Corvette C5 and estimate its drag. That needs a closed, accurate model of the whole exterior, and the C5 body is almost all compound curves, so it has to be built with surfacing instead of simple extrusions.

## Approach

I built the body in SolidWorks from side, top, front and rear reference drawings of the car, so the profile matches in every view.

![Red surfaced model of the Corvette C5 seen from the front quarter, with hood contours, cabin and wheels](/images/projects/corvette-c5-cfd/model-front.png)
*Surfaced body model, nearly complete, front quarter view.*

![The same model seen from the rear quarter, with tail lights and exhaust tips](/images/projects/corvette-c5-cfd/model-rear.png)
*Rear quarter view.*

## Next steps

- Finish the last body details
- Close the body into a solid for the flow domain
- Run external-flow CFD in SolidWorks Flow Simulation
- Report drag and the flow patterns around the body
- Add the step-by-step modeling process to this page
