---
title: Scissor jack reverse engineering and FEA
summary: I measured and modeled a scissor car jack as nine SolidWorks parts, drew them with GD&T, and ran FEA at a 3,500 N load. Factors of safety ranged from 1.12 to 12.1.
date: 2025-09-01
timeframe: Fall 2025
status: complete
context: MAE 377 course project, University at Buffalo
role: Sole author
tools:
  - SolidWorks
  - SolidWorks Simulation (FEA)
  - GD&T (ASME Y14.5)
  - Engineering drawings
cover: /images/projects/scissor-jack-fea/cover.jpg
coverAlt: A steel scissor car jack lying open on a wooden board, seen from above
---

## Problem

A scissor jack lifts a car with a lead screw: turning the crank pulls the arms together and raises the top platform. I took one apart to answer three questions. Could I rebuild it as a fully constrained SolidWorks assembly from my own measurements? Which parts carry the load, and how much margin do they have? And how would I tolerance the parts so they still assemble?

## Approach

**Modeling and drawings.** I measured every component and modeled the jack as nine unique parts (15 pieces in total), then built the assembly and an exploded view with a bill of materials. Each part has a dimensioned drawing. The drive key was missing from my jack, so I modeled it from the crank handle it fits into.

![Exploded assembly drawing of the scissor jack with a nine-item bill of materials](/images/projects/scissor-jack-fea/exploded-assembly.png)
*Exploded view and bill of materials. All parts are modeled in AISI 1020 steel.*

**Finite element analysis.** I analyzed the three parts in the main load path: the arm interface (the saddle the car rests on), the base plate and a pivot pin. The load was 3,500 N, a quarter of the weight of an average car. The arm interface was fixed at its pin holes with the load on the lowered saddle surface. The pin and base plate took the same load split into 875 N bearing loads.

H-adaptive meshing would not run, so I refined each mesh by hand and repeated the study until stress and displacement changed by less than 1% between runs.

![Von Mises stress plot of the arm interface with the peak at a pin hole](/images/projects/scissor-jack-fea/arm-interface-stress.png)
*Arm interface: peak von Mises stress of 313.7 MPa at a pin hole, against a 351.6 MPa yield strength.*

**GD&T.** I redrew eight parts to ASME Y14.5-2018 with datums chosen from how each part locates in the assembly. On the arm interface, flatness and parallelism keep the two side walls square, and a position tolerance at maximum material condition on the pin holes makes sure the pins always fit.

![GD&T drawing of the arm interface showing datums A, B and C, flatness, parallelism and position tolerances](/images/projects/scissor-jack-fea/arm-interface-gdt.png)
*Arm interface drawing with datums A, B and C.*

## Results

| Part | Peak von Mises stress | Factor of safety | Convergence error |
| --- | --- | --- | --- |
| Arm interface (AISI 1020) | 313.7 MPa | 1.12 | 0.97% |
| Base plate | 74.7 MPa | 4.71 | 0.84% |
| Pivot pin | 29.0 MPa | 12.1 | 0.97% |
| Arm interface (AISI 4340, normalized) | 512.9 MPa | 1.38 | 0.98% |

The base plate has comfortable margin, and the pivot pin is far stronger than this load requires, so it could lose material. The arm interface was the weak point at a factor of safety of 1.12.

![Von Mises stress plot of the base plate under four bearing loads](/images/projects/scissor-jack-fea/base-plate-stress.png)
*Base plate: peak stress of 74.7 MPa, well below yield.*

For the redesign I changed the arm interface material to AISI 4340 normalized steel (710 MPa yield). The geometry and the fit in the assembly stay the same, and the factor of safety rose to 1.38.

## What I learned

A factor of safety of 1.12 on a part that works every day told me to question my setup before the part. The stress peaks at the fixed pin holes, which points to a stress singularity or boundary conditions that are too stiff, and my model ignored how the load passes into the arms. Next time I would run the arm interface inside the assembly with pin connections, and check the hand-refined mesh against a simple hand calculation.
