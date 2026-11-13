---
title: Adjustable-deadrise keel hinge
summary: A flexible keel hinge that lets an 8 m shore-approach hull change deadrise from 10° to 35°. Our team has selected a concept, run first nonlinear FEA and is building a test section.
date: 2026-09-01
timeframe: Fall 2026 to Spring 2027
status: in-progress
context: Senior design capstone, MAE 451 / 494, industry sponsored
team: Six people
tools:
  - SolidWorks
  - SolidWorks Simulation (nonlinear FEA)
  - House of Quality
  - Pugh and weighted decision matrices
highlights:
  - value: 8 m
    label: Hull length
  - value: 10° to 35°
    label: Deadrise range
  - value: 6 psi
    label: Design water pressure
  - value: $1,000
    label: Prototype budget
cover: /images/projects/adjustable-deadrise-keel/cover.png
coverAlt: SolidWorks drawing of the 8 m hull in top, side, end and isometric views, with hull panels, living hinge, thwarts and supports numbered
---

## Problem

A boat hull has a fixed deadrise, the angle of the hull bottom from horizontal. A deep V cuts through waves and softens slamming. A shallow V draws less water and is more stable near shore. A craft that runs from open water to a beach needs both.

Our sponsor is developing a military and Coast Guard shore-approach craft whose bottom panels fold about the keel, so one hull can do both jobs. Our team is designing the keel hinge that makes this possible. It has to:

- Let deadrise change from 10° to 35° without binding, including along the curved, upswept bow
- Carry longitudinal bending and transverse slamming loads between the two hull panels
- Stay watertight through the whole range of motion
- Survive repeated wave and fold cycles in salt water
- Weigh no more than 5% of the boat
- Be proven on a prototype built for under $1,000

## Approach

### Requirements

We interviewed stakeholders, turned their needs into a product design specification, and ranked the engineering characteristics with a House of Quality. Slamming resistance, watertightness and fatigue life came out as the characteristics that drive the design.

### Concept selection

We built a morphological chart of ways to rotate, carry load, follow the bow curve and seal, then combined them into candidate concepts. After a feasibility screen, two rounds of Pugh analysis and a weighted decision matrix, a segmented pivot hinge with a reinforced inner bladder ranked first (8.21 against 7.86 and 6.48 for the alternatives).

Detailed modeling then focused on a continuous elastomer living hinge: a strip of fabric-reinforced rubber bonded between the two rigid hull panels, with nothing sliding and no separate seal.

### Performance modeling

We ran nonlinear static FEA in SolidWorks Simulation on a 12 in slice of the hull at 22.5° deadrise.

- **Load:** 6 psi (41.4 kPa) of uniform pressure on the outer surface
- **Supports:** fixed at the top of the internal actuator frame, with symmetry at the keel line
- **Rear model (flat section):** neoprene, SBR and natural rubber, each with 3 in and 12 in flexible sections
- **Front model (curved bow section):** SBR with a 12 in flexible section

![Von Mises stress plot of the rear hull section with a 12 inch SBR hinge under pressure](/images/projects/adjustable-deadrise-keel/fea-rear-stress.png)
*Rear section, 12 in SBR hinge: stress under 6 psi.*

![Von Mises stress plot of the curved front hull section with pressure arrows on the outer surface](/images/projects/adjustable-deadrise-keel/fea-front-stress.png)
*Front section, where the hinge has to follow the curve of the bow.*

### Test section

To check the models, we are building a 12 in wide, 8 ft long slice of the hull: plywood panels with a fiberglass layup, the rubber hinge at the keel, and wooden frames that hold it at 10°, 22.5° and 35°. The bill of materials comes to $535.30 of the $1,000 budget.

![Drawing of the test section with a V-shaped profile, 100 inches wide and 12 inches deep](/images/projects/adjustable-deadrise-keel/test-section-drawing.png)
*Test section drawing, dimensions in inches.*

Testing will follow published methods for rubber: tensile properties (ASTM D412), flex cracking under cyclic load (ASTM D430) and the effect of fluid exposure (ASTM D471).

## Results

So far the models show where the design needs attention.

- **Stress concentrates at the ends of the flexible section**, where the rubber meets the rigid panels. This held for all three materials, and it is where fatigue is most likely to start.
- **A longer flexible section spreads the deformation.** The 3 in hinge deformed locally near its bonds; the 12 in hinge shared it along its length.
- **The curved bow section behaves the same way**, with stress and strain highest at the end of the flexible section. Only one material has been run there so far.

We are not quoting a factor of safety yet. The team agreed to report one only after the hinge material strength is verified by our own tests.

## Next steps

- Finish the test section; materials were ordered in November 2026
- Fold the hinge repeatedly between 10° and 35° and check for leaks
- Run the remaining materials and hinge lengths on the curved bow model
- Compare measured behavior with the FEA predictions
