---
title: Scissor jack reverse engineering and FEA
summary: I measured a scissor car jack, rebuilt it as a nine-part SolidWorks assembly with GD&T drawings, and used FEA to find which load-bearing part has the least margin.
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
highlights:
  - value: 9 parts
    label: Measured and modeled
  - value: 3,500 N
    label: Design load
  - value: 1.12 to 12.1
    label: Factor of safety range
  - value: Under 1%
    label: Mesh convergence error
cover: /images/projects/scissor-jack-fea/cover.png
coverAlt: Exploded assembly drawing of the scissor jack with a nine-item bill of materials
---

## Problem

A scissor jack lifts a car with a lead screw: turning the crank pulls the arms together and raises the top platform. I took one apart to answer three questions.

1. Could I rebuild it as a fully constrained SolidWorks assembly from my own measurements?
2. Which parts carry the load, and how much margin does each have?
3. How should the parts be toleranced so they always assemble?

![The scissor jack used for the project, folded, on a dark countertop](/images/projects/scissor-jack-fea/jack-photo.jpg)
*The jack I measured.*

## Approach

### Modeling and drawings

I measured every component and modeled the jack as nine unique parts (15 pieces in total), all in AISI 1020 steel. I then built the assembly, an exploded view with a bill of materials, and a dimensioned drawing for each part. The drive key was missing from my jack, so I modeled it from the crank handle it fits into.

![Photo of the real arm interface on the jack beside its SolidWorks model](/images/projects/scissor-jack-fea/real-vs-cad.png)
*The arm interface on the jack (left) and my SolidWorks model of it (right).*

### Finite element analysis

I analyzed the three parts in the main load path:

- **Arm interface**, the saddle the car rests on
- **Base plate**, which takes the full load into the ground
- **Pivot pin**, which joins the arms to both of the above

The load was 3,500 N, a quarter of the weight of an average car. The arm interface was fixed at its pin holes with the load on the lowered saddle surface. The pin and base plate took the same load split into 875 N bearing loads.

H-adaptive meshing would not run, so I refined each mesh by hand and repeated the study until stress and displacement changed by less than 1% between runs.

![Meshed arm interface with the load on the saddle and fixtures at the four pin holes](/images/projects/scissor-jack-fea/arm-interface-mesh.png)
*Arm interface mesh, with the load on the saddle and fixtures at the pin holes.*

![Line graph of pivot pin peak stress falling from 28.98 to 25.61 MPa over five mesh refinements](/images/projects/scissor-jack-fea/pivot-pin-convergence.png)
*Pivot pin peak stress over five mesh refinements.*

### GD&T

I redrew eight parts to ASME Y14.5-2018, choosing datums from how each part locates in the assembly. On the arm interface, flatness and parallelism keep the two side walls square, and a position tolerance at maximum material condition on the pin holes makes sure the pins always fit. On the base plate, flatness on the bottom face keeps the jack from rocking.

![GD&T drawing of the arm interface showing datums A, B and C, flatness, parallelism and position tolerances](/images/projects/scissor-jack-fea/arm-interface-gdt.png)
*Arm interface drawing with datums A, B and C.*

![GD&T drawing of the base plate with flatness, perpendicularity and position tolerances](/images/projects/scissor-jack-fea/base-plate-gdt.png)
*Base plate drawing.*

## Results

| Part | Peak von Mises stress | Factor of safety | Convergence error |
| --- | --- | --- | --- |
| Arm interface (AISI 1020) | 313.7 MPa | 1.12 | 0.97% |
| Base plate | 74.7 MPa | 4.71 | 0.84% |
| Pivot pin | 29.0 MPa | 12.1 | 0.97% |
| Arm interface (AISI 4340, normalized) | 512.9 MPa | 1.38 | 0.98% |

Each factor of safety is yield strength divided by the highest peak stress from any mesh run.

- **The arm interface is the weak point** at a factor of safety of 1.12.
- **The base plate has comfortable margin** at 4.71.
- **The pivot pin is over-built** for this load at 12.1 and could lose material.

![Von Mises stress plot of the arm interface with the peak at a pin hole](/images/projects/scissor-jack-fea/arm-interface-stress.png)
*Arm interface: peak stress of 313.7 MPa at a pin hole, against a 351.6 MPa yield strength.*

![Von Mises stress plot of the base plate under four bearing loads](/images/projects/scissor-jack-fea/base-plate-stress.png)
*Base plate: peak stress of 74.7 MPa, well below yield.*

For the redesign I changed the arm interface material to AISI 4340 normalized steel (710 MPa yield). The geometry and the fit in the assembly stay the same, and the factor of safety rose to 1.38.

## What I learned

A factor of safety of 1.12 on a part that works every day told me to question my setup before the part. The stress peaks at the fixed pin holes, which points to a stress singularity or boundary conditions that are too stiff, and my model ignored how the load passes into the arms. The higher peak in the re-meshed redesign study points the same way. Next time I would run the arm interface inside the assembly with pin connections, and check the result against a hand calculation.
