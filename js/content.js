// ─── All lesson content ───────────────────────────────────────────────────────

const SUBJECTS = {

  algebra: {
    label: "Algebra",
    icon: "𝑥",
    color: "#0071e3",
    lessons: [
      {
        concept: "Solving for a Mystery Number",
        desc: "Imagine x is a box hiding a number inside. Algebra helps us peek inside the box by doing the same thing to both sides of the equals sign — like peeling layers off an onion until only the box is left.",
        problem: "Solve for x:   3x + 7 = 22",
        steps: [
          {
            action: "Start with what we know",
            math: "3x + 7 = 22",
            eli5: "This says: 'three groups of x, plus 7, equals 22.' Our job is to figure out what number x is hiding."
          },
          {
            action: "Subtract 7 from both sides",
            math: "3x = 22 − 7 = 15",
            eli5: "We want to get the x alone. The +7 is in the way, so we undo it by subtracting 7. Whatever we do to one side of the = sign, we MUST do to the other side too — like a balanced scale. Remove 7 from both sides and the scale stays level."
          },
          {
            action: "Divide both sides by 3",
            math: "x = 15 ÷ 3 = 5",
            eli5: "Now we have '3 groups of x = 15.' To find ONE group (just x), split 15 into 3 equal groups. 15 ÷ 3 = 5. So one box holds 5!"
          },
          {
            action: "Check: plug x = 5 back in",
            math: "3(5) + 7 = 15 + 7 = 22  ✓",
            eli5: "Always verify! Replace x with 5 in the original problem. Does it equal 22? Yes! If it didn't, we made a mistake somewhere. Checking is free insurance."
          },
        ],
        answer: "x = 5"
      },
      {
        concept: "The Distributive Property",
        desc: "Think of it like handing out pizza slices. If you have 4 friends and each gets (2 slices of cheese + 3 slices of pepperoni), you multiply the 4 by each thing inside the parentheses separately.",
        problem: "Expand and simplify:   4(2x − 3) + 6",
        steps: [
          {
            action: "Multiply 4 by the first term inside",
            math: "4 × 2x = 8x",
            eli5: "The 4 outside the parentheses is like a delivery person who has to visit every single term inside. First stop: 2x. Four groups of 2x = 8x."
          },
          {
            action: "Multiply 4 by the second term inside",
            math: "4 × (−3) = −12",
            eli5: "Second stop for our delivery person: −3. Four groups of −3 = −12. Notice: 4 × a negative = a negative."
          },
          {
            action: "Bring in the +6 and write it all out",
            math: "8x − 12 + 6",
            eli5: "The +6 was outside the parentheses, so it wasn't multiplied by 4. It just comes along for the ride unchanged."
          },
          {
            action: "Combine the plain numbers (−12 + 6)",
            math: "8x − 6",
            eli5: "−12 + 6 = −6. We can only combine numbers with numbers, and x-terms with x-terms. There's only one x-term (8x), so that stays put."
          },
        ],
        answer: "8x − 6"
      },
      {
        concept: "Factoring a Trinomial",
        desc: "Factoring is like un-baking a cake — taking something already mixed together and figuring out what ingredients went in. We need two numbers that multiply AND add to specific targets.",
        problem: "Factor:   x² + 5x + 6",
        steps: [
          {
            action: "Find pairs of numbers that multiply to 6",
            math: "Pairs: (1 × 6), (2 × 3)",
            eli5: "We need two numbers whose product is the last number (6). List every pair: 1×6 = 6, 2×3 = 6. These are our candidates."
          },
          {
            action: "Which pair also adds up to 5?",
            math: "1 + 6 = 7 ✗     2 + 3 = 5 ✓",
            eli5: "Now add each pair and check if it matches the middle number (5). The pair 2 and 3 wins — it multiplies to 6 AND adds to 5."
          },
          {
            action: "Write as two brackets",
            math: "(x + 2)(x + 3)",
            eli5: "Put each winning number into its own bracket with x. It's like reversing the pizza-distribution from before."
          },
          {
            action: "Verify by expanding back out",
            math: "x² + 3x + 2x + 6 = x² + 5x + 6  ✓",
            eli5: "Multiply the brackets out using FOIL (First, Outer, Inner, Last). Do we get back what we started with? Yes! That proves our answer is correct."
          },
        ],
        answer: "(x + 2)(x + 3)"
      },
      {
        concept: "Two Equations, One Answer",
        desc: "Imagine two clues in a riddle. Each clue alone doesn't solve it, but together they do. We plug one clue into the other — that's called substitution.",
        problem: "Solve:   y = 2x + 1   and   3x + y = 16",
        steps: [
          {
            action: "The first equation tells us what y equals",
            math: "y = 2x + 1",
            eli5: "The first equation is a gift — it already tells us exactly what y is in terms of x. We can use this!"
          },
          {
            action: "Replace y in the second equation",
            math: "3x + (2x + 1) = 16   →   5x + 1 = 16",
            eli5: "Wherever we see y in the second equation, swap it with '2x + 1'. Now there's only one unknown (x) — much easier to solve!"
          },
          {
            action: "Solve for x",
            math: "5x = 15   →   x = 3",
            eli5: "Subtract 1 from both sides to get 5x = 15. Then divide by 5. x = 3!"
          },
          {
            action: "Find y by plugging x = 3 back in",
            math: "y = 2(3) + 1 = 7",
            eli5: "Now that we know x = 3, plug it into the first equation to find y. y = 2×3 + 1 = 7. We found both unknowns!"
          },
        ],
        answer: "x = 3,  y = 7"
      },
      {
        concept: "The Quadratic Formula",
        desc: "Some equations have an x² in them and can have two answers — like a ball thrown up that comes back down at two different times. The quadratic formula is a recipe that always cracks these open.",
        problem: "Solve:   x² − 5x + 6 = 0",
        steps: [
          {
            action: "Identify a, b, and c",
            math: "a = 1,  b = −5,  c = 6",
            eli5: "Every quadratic looks like ax² + bx + c = 0. Match the pieces: the number in front of x² is a, in front of x is b, and the plain number is c. Watch the signs!"
          },
          {
            action: "Write the quadratic formula",
            math: "x = (−b ± √(b²− 4ac)) / 2a",
            eli5: "This formula works for EVERY quadratic equation, no exceptions. The ± means we'll get two answers — one with + and one with −."
          },
          {
            action: "Calculate the discriminant (under the √)",
            math: "(−5)² − 4(1)(6) = 25 − 24 = 1   →   √1 = 1",
            eli5: "The part under the square root is called the discriminant. It tells us how many solutions exist. Positive → 2 solutions. Zero → 1 solution. Negative → no real solutions."
          },
          {
            action: "Use + and − to get both answers",
            math: "x = (5 + 1)/2 = 3   or   x = (5 − 1)/2 = 2",
            eli5: "Plug in: −b = −(−5) = 5, √discriminant = 1, and 2a = 2. First answer uses +, second uses −. Both are valid solutions!"
          },
        ],
        answer: "x = 2  or  x = 3"
      },
      {
        concept: "Slope — How Steep Is a Line?",
        desc: "Slope is how much a line goes up for every step sideways. A steep hill has big slope, a flat road has zero slope. We measure it as rise ÷ run.",
        problem: "Find the slope through points (1, 3) and (4, 9)",
        steps: [
          {
            action: "The slope formula",
            math: "m = (y₂ − y₁) / (x₂ − x₁)",
            eli5: "Slope = rise ÷ run. Rise is vertical change (y goes up or down), run is horizontal change (x goes left or right). We always put vertical on top."
          },
          {
            action: "Label the points and plug them in",
            math: "m = (9 − 3) / (4 − 1)",
            eli5: "Call the first point (x₁, y₁) = (1, 3) and the second (x₂, y₂) = (4, 9). Subtract in the same order: second minus first, for both x and y."
          },
          {
            action: "Simplify",
            math: "m = 6 / 3 = 2",
            eli5: "The line rises 6 units and runs 3 units. 6 ÷ 3 = 2. This means for every 1 step to the right, the line goes up 2 steps."
          },
          {
            action: "What slope = 2 means",
            math: "→ right 1, ↑ up 2  📈",
            eli5: "A slope of 2 is moderately steep. Slope of 0 = flat. Negative slope = line goes downhill. The bigger the number, the steeper the climb."
          },
        ],
        answer: "m = 2"
      },
      {
        concept: "Combining Like Terms",
        desc: "You can only add apples to apples and oranges to oranges. In algebra, you can only combine terms that share the same variable and power — those are called 'like terms.'",
        problem: "Simplify:   5x² + 3x − 2x² + 7 − x",
        steps: [
          {
            action: "Group all the x² terms",
            math: "5x² − 2x² = 3x²",
            eli5: "Think of x² as a type of fruit — 'squared apples.' 5 squared apples minus 2 squared apples = 3 squared apples. Easy!"
          },
          {
            action: "Group all the plain x terms",
            math: "3x − x = 2x",
            eli5: "Now plain x is a different fruit — 'regular apples.' 3 regular apples minus 1 regular apple = 2. Note: −x means −1x."
          },
          {
            action: "The constant 7 has no match — keep it",
            math: "+ 7",
            eli5: "7 is just a plain number with no variable. There are no other plain numbers to combine it with, so it rides solo."
          },
          {
            action: "Write the final simplified expression",
            math: "3x² + 2x + 7",
            eli5: "Put them all together! We write in order from highest power down (x² first, then x, then the plain number). This is standard form."
          },
        ],
        answer: "3x² + 2x + 7"
      },
    ]
  },

  geometry: {
    label: "Geometry",
    icon: "△",
    color: "#8944ab",
    lessons: [
      {
        concept: "Area of a Triangle",
        desc: "Imagine a rectangle. Cut it diagonally from corner to corner — you get a triangle. That's why a triangle's area is always exactly half of a rectangle's (base × height).",
        problem: "Find the area of a triangle with base 10 cm and height 6 cm.",
        diagram: "triangle",
        steps: [
          {
            action: "A triangle is half a rectangle",
            math: "A = ½ × base × height",
            eli5: "Draw any triangle. You can always complete it into a rectangle. The triangle takes up exactly half the rectangle. That's where the ½ comes from — not magic, just geometry!"
          },
          {
            action: "Plug in the numbers",
            math: "A = ½ × 10 × 6",
            eli5: "Base is the bottom edge (10 cm). Height is the straight-up distance from base to tip — not the slanted side, but the perpendicular height (6 cm)."
          },
          {
            action: "Multiply step by step",
            math: "A = ½ × 60 = 30",
            eli5: "10 × 6 = 60, then half of 60 = 30. You can also do it as 10 × 3 = 30. Either way works!"
          },
        ],
        answer: "A = 30 cm²"
      },
      {
        concept: "The Pythagorean Theorem",
        desc: "In any right triangle, the two shorter sides have a secret relationship with the longest side. Square each short side, add them, and you get the long side squared. Discovered 2,500 years ago!",
        problem: "A right triangle has legs of 6 and 8. Find the hypotenuse.",
        diagram: "right-triangle",
        steps: [
          {
            action: "The rule for right triangles",
            math: "a² + b² = c²",
            eli5: "This only works for right triangles (ones with a 90° corner). a and b are the two shorter sides (legs). c is always the longest side (hypotenuse) — the one across from the right angle."
          },
          {
            action: "Square both legs and add",
            math: "6² + 8² = 36 + 64 = 100",
            eli5: "6² = 6 × 6 = 36. 8² = 8 × 8 = 64. Add them: 36 + 64 = 100. So c² = 100."
          },
          {
            action: "Now take the square root",
            math: "c = √100 = 10",
            eli5: "We know c² = 100. What number times itself = 100? That's 10! √100 = 10. The hypotenuse is 10."
          },
          {
            action: "This is the famous 3-4-5 family",
            math: "6-8-10 = 2 × (3-4-5)  ✓",
            eli5: "Certain number combos like (3,4,5), (5,12,13), and (6,8,10) are called Pythagorean triples. They always satisfy a² + b² = c² perfectly. Handy to memorize!"
          },
        ],
        answer: "c = 10"
      },
      {
        concept: "Circumference of a Circle",
        desc: "If you unrolled the edge of a circle into a straight line, how long would it be? It's always about 3.14 times the width. That magic number is π (pi), and it never ends!",
        problem: "Find the circumference of a circle with radius 7 cm. (π ≈ 3.14)",
        diagram: "circle",
        steps: [
          {
            action: "The circumference formula",
            math: "C = 2πr",
            eli5: "Circumference is the perimeter of a circle — the distance all the way around the edge. Diameter (d) = 2 × radius. So C = π × d = 2πr."
          },
          {
            action: "Plug in r = 7 and π ≈ 3.14",
            math: "C = 2 × 3.14 × 7",
            eli5: "r = 7 means the circle is 7 cm from center to edge. We use π ≈ 3.14 as a close-enough approximation. (The true value goes on forever: 3.14159265…)"
          },
          {
            action: "Multiply step by step",
            math: "C = 6.28 × 7 = 43.96 cm",
            eli5: "2 × 3.14 = 6.28 first, then 6.28 × 7 = 43.96. That's about 44 cm — almost as long as a ruler and a half!"
          },
        ],
        answer: "C ≈ 43.96 cm"
      },
      {
        concept: "Angles Inside a Polygon",
        desc: "Every polygon can be sliced into triangles. A triangle has 180°. So the more sides a shape has, the more triangles it holds — and the more total degrees in its angles.",
        problem: "Find the sum of interior angles of a hexagon (6 sides).",
        diagram: "hexagon",
        steps: [
          {
            action: "The formula for any polygon",
            math: "Sum = (n − 2) × 180°",
            eli5: "Any polygon can be cut into triangles from one corner. A 4-sided shape makes 2 triangles (2 × 180° = 360°). A 5-sided shape makes 3 triangles. Always (n − 2) triangles."
          },
          {
            action: "A hexagon has 6 sides, so n = 6",
            math: "Sum = (6 − 2) × 180°",
            eli5: "Plug 6 in for n. 6 − 2 = 4. That means a hexagon can be divided into 4 triangles. Each triangle has 180°, so we multiply."
          },
          {
            action: "Calculate",
            math: "Sum = 4 × 180° = 720°",
            eli5: "4 × 180 = 720°. A honeycomb's hexagon has angles that all add up to 720°. Each of the 6 corners is exactly 120°."
          },
        ],
        answer: "Sum = 720°"
      },
      {
        concept: "Area of a Circle",
        desc: "π shows up again! To find the space inside a circle, square the radius (center to edge), then multiply by π. Like filling the circle with tiny squares and counting them all.",
        problem: "Find the area of a circle with radius 5 m. (π ≈ 3.14)",
        diagram: "circle",
        steps: [
          {
            action: "The area formula",
            math: "A = πr²",
            eli5: "This is one of the most famous formulas in math. r² means radius times itself. The π stretches that square into a circle shape."
          },
          {
            action: "Square the radius first",
            math: "5² = 25",
            eli5: "Always handle the exponent before multiplying by π. 5² = 5 × 5 = 25. This is the area of a square with side 5. Now we convert it to a circle."
          },
          {
            action: "Multiply by π",
            math: "A = 3.14 × 25 = 78.5 m²",
            eli5: "3.14 × 25: think of it as 3 × 25 = 75, plus 0.14 × 25 = 3.5. Total = 78.5 m². That's about the size of a small bedroom floor!"
          },
        ],
        answer: "A ≈ 78.5 m²"
      },
      {
        concept: "Perimeter — Fencing a Yard",
        desc: "Perimeter is how far you'd walk going all the way around a shape without lifting your feet. Just add up every side!",
        problem: "Find the perimeter of a rectangle 9 cm long and 4 cm wide.",
        diagram: "rectangle",
        steps: [
          {
            action: "A rectangle has two pairs of equal sides",
            math: "P = 2 × length + 2 × width",
            eli5: "A rectangle has 4 sides, but they come in matching pairs: two long sides and two short sides. So instead of adding all four, just double each unique measurement."
          },
          {
            action: "Plug in 9 and 4",
            math: "P = 2(9) + 2(4) = 18 + 8",
            eli5: "2 × 9 = 18 (the two long sides). 2 × 4 = 8 (the two short sides). Now add both together."
          },
          {
            action: "Add up the total distance",
            math: "P = 26 cm",
            eli5: "18 + 8 = 26. If you were fencing this yard, you'd need 26 cm of fencing. Perimeter is always a length — measured in cm, m, feet, etc."
          },
        ],
        answer: "P = 26 cm"
      },
      {
        concept: "Supplementary Angles",
        desc: "Angles are how 'open' something is — like a door. Two angles are supplementary when they open together to form a perfectly flat, straight line — that's exactly 180°.",
        problem: "Angle A and Angle B make a straight line. Angle A = 65°. Find Angle B.",
        steps: [
          {
            action: "A straight line always equals 180°",
            math: "A + B = 180°",
            eli5: "A straight line is half of a full rotation (360° ÷ 2 = 180°). When two angles sit side-by-side on a straight line, they must share those 180° between them."
          },
          {
            action: "Plug in A = 65°",
            math: "65° + B = 180°",
            eli5: "We know one angle is 65°. The two angles together must reach 180°. So the other one gets whatever is left over."
          },
          {
            action: "Subtract to find B",
            math: "B = 180° − 65° = 115°",
            eli5: "180 − 65 = 115. Check: 65 + 115 = 180. ✓ The two angles perfectly fill the straight line."
          },
        ],
        answer: "Angle B = 115°"
      },
    ]
  },

  fractions: {
    label: "Fractions",
    icon: "½",
    color: "#d63060",
    lessons: [
      {
        concept: "Simplifying Fractions",
        desc: "A fraction is just 'part of something.' The bottom number says how many equal pieces the whole is cut into. The top says how many pieces you have. ½ means 1 of 2 equal pieces — like half a sandwich!",
        problem: "Simplify the fraction:   12/18",
        steps: [
          {
            action: "Find a number that divides evenly into BOTH 12 and 18",
            math: "Both are divisible by 6",
            eli5: "We're looking for the biggest 'common factor' — a number that goes into both without leaving a remainder. 6 divides into 12 (=2 times) and into 18 (=3 times). That works!"
          },
          {
            action: "Divide the top (numerator) by 6",
            math: "12 ÷ 6 = 2",
            eli5: "The top number is called the numerator. 12 ÷ 6 = 2."
          },
          {
            action: "Divide the bottom (denominator) by 6",
            math: "18 ÷ 6 = 3",
            eli5: "The bottom number is called the denominator. 18 ÷ 6 = 3. Dividing both top and bottom by the same number keeps the fraction equal in value — like cutting a pizza into fewer, bigger slices."
          },
          {
            action: "Can 2/3 simplify further?",
            math: "2 and 3 share no common factor → done!",
            eli5: "2 is prime, 3 is prime, and they're different primes — so nothing divides both of them. 2/3 is fully simplified!"
          },
        ],
        answer: "2/3"
      },
      {
        concept: "Adding Fractions (Same Denominator)",
        desc: "You can only add fractions when the bottoms match — like only adding slices of the same-size pizza. If the bottoms don't match, resize the slices first.",
        problem: "Add:   1/4 + 2/4",
        steps: [
          {
            action: "Check: do the denominators match?",
            math: "Both have 4 on the bottom  ✓",
            eli5: "The denominator tells us the slice size. Both fractions use fourths (4 equal pieces), so we're adding same-sized pieces. "
          },
          {
            action: "Add the numerators — keep the denominator",
            math: "1 + 2 = 3,  keep the 4",
            eli5: "Think of it as: 1 quarter-slice + 2 quarter-slices = 3 quarter-slices. The slice size (4) doesn't change — only the count of slices changes."
          },
          {
            action: "Write the result",
            math: "3/4",
            eli5: "We have 3 out of 4 equal pieces. Three quarters of a pizza!"
          },
          {
            action: "Check: can it simplify? 3 and 4 share no factor",
            math: "3/4  ✓  fully simplified",
            eli5: "3 is prime, and 4 = 2×2. They share no common factors, so 3/4 is already in simplest form."
          },
        ],
        answer: "3/4"
      },
      {
        concept: "Adding Unlike Fractions",
        desc: "If the pizza slices are different sizes, you can't count them together yet. You have to cut everything to the same size first — that's finding the common denominator.",
        problem: "Add:   1/3 + 1/4",
        steps: [
          {
            action: "Find a common denominator",
            math: "3 × 4 = 12  →  use 12",
            eli5: "We need a number that both 3 and 4 divide into evenly. The easiest is to multiply them: 3 × 4 = 12. So we'll recut everything into 12ths."
          },
          {
            action: "Convert 1/3 to twelfths",
            math: "1/3 = 4/12   (multiply top & bottom by 4)",
            eli5: "To change thirds into twelfths, multiply both numbers by 4. 1×4 = 4, 3×4 = 12. It's the same fraction — just cut into more (smaller) slices."
          },
          {
            action: "Convert 1/4 to twelfths",
            math: "1/4 = 3/12   (multiply top & bottom by 3)",
            eli5: "To change fourths into twelfths, multiply both by 3. 1×3 = 3, 4×3 = 12. Now both fractions have the same slice size!"
          },
          {
            action: "Now add — same denominator",
            math: "4/12 + 3/12 = 7/12",
            eli5: "4 twelfths + 3 twelfths = 7 twelfths. Does 7/12 simplify? 7 is prime and doesn't go into 12, so nope — 7/12 is our final answer."
          },
        ],
        answer: "7/12"
      },
      {
        concept: "Multiplying Fractions",
        desc: "Multiplying fractions is the easiest operation — just multiply tops together and bottoms together. No resizing needed! 'Half of a half' = a quarter (1/2 × 1/2 = 1/4).",
        problem: "Multiply:   2/3 × 3/5",
        steps: [
          {
            action: "Multiply the numerators (tops)",
            math: "2 × 3 = 6",
            eli5: "Just multiply straight across the top. No need to find common denominators here — that's only for adding and subtracting."
          },
          {
            action: "Multiply the denominators (bottoms)",
            math: "3 × 5 = 15",
            eli5: "Multiply straight across the bottom too. The new denominator (15) is the total number of equal pieces in our new fraction."
          },
          {
            action: "Write as one fraction",
            math: "6/15",
            eli5: "Put top over bottom: 6/15. But wait — can this be simplified? Let's check."
          },
          {
            action: "Simplify — both 6 and 15 divide by 3",
            math: "6 ÷ 3 = 2,   15 ÷ 3 = 5   →   2/5",
            eli5: "GCF of 6 and 15 is 3. Divide both by 3. 6/15 = 2/5. Always simplify at the end!"
          },
        ],
        answer: "2/5"
      },
      {
        concept: "Dividing Fractions",
        desc: "Dividing by a fraction means 'how many times does this fit?' There's a slick trick: flip the second fraction upside-down and multiply instead. Keep, change, flip!",
        problem: "Divide:   3/4 ÷ 1/2",
        steps: [
          {
            action: "Keep the first fraction exactly as-is",
            math: "3/4  ←  keep this",
            eli5: "The first fraction never changes. Just copy it down. '3/4 ÷ 1/2' is asking 'how many halves fit into three-quarters?'"
          },
          {
            action: "Change ÷ to ×",
            math: "3/4  ×",
            eli5: "Swap the division sign for a multiplication sign. Division and multiplication are opposites, and flipping the second fraction will compensate."
          },
          {
            action: "Flip the second fraction (reciprocal)",
            math: "1/2  →  2/1",
            eli5: "Swap the top and bottom of the second fraction. 1/2 becomes 2/1. This is called the reciprocal. Now multiply!"
          },
          {
            action: "Multiply and simplify",
            math: "(3×2)/(4×1) = 6/4 = 3/2 = 1½",
            eli5: "3×2 = 6 on top, 4×1 = 4 on bottom. 6/4 simplifies to 3/2 (divide by 2). As a mixed number: 1 and a half. So 1.5 halves fit inside 3/4!"
          },
        ],
        answer: "3/2  (or 1½)"
      },
    ]
  },

  statistics: {
    label: "Statistics",
    icon: "σ",
    color: "#0c8fa8",
    lessons: [
      {
        concept: "Mean — The Average",
        desc: "The mean is what you get when you share equally. Imagine 5 friends with different amounts of candy — pour it all into one pile, split it evenly. That fair share is the mean.",
        problem: "Find the mean of: 4, 8, 6, 5, 7",
        steps: [
          {
            action: "Add all the numbers together",
            math: "4 + 8 + 6 + 5 + 7 = 30",
            eli5: "Throw all the values into one pile. 4+8 = 12, +6 = 18, +5 = 23, +7 = 30. The total is 30."
          },
          {
            action: "Count how many numbers there are",
            math: "5 numbers total",
            eli5: "We have 5 values: 4, 8, 6, 5, and 7. Counting correctly matters — if you miscount, your average will be wrong!"
          },
          {
            action: "Divide the total by the count",
            math: "30 ÷ 5 = 6",
            eli5: "Splitting 30 among 5 people gives everyone 6. So the mean is 6. Notice: the mean doesn't have to be one of the original numbers!"
          },
        ],
        answer: "Mean = 6"
      },
      {
        concept: "Median — The Middle Value",
        desc: "The median is the one sitting in the exact middle of a sorted lineup. Sort everyone by height, stand them in a row — the person in the very middle is the median. It ignores wild outliers at the ends!",
        problem: "Find the median of: 3, 7, 1, 9, 4",
        steps: [
          {
            action: "Sort the numbers smallest to biggest",
            math: "1, 3, 4, 7, 9",
            eli5: "The median only works if you sort first! Unsorted data gives a random middle value. Sort ascending: 1 is smallest, 9 is largest."
          },
          {
            action: "Find the middle position",
            math: "5 numbers → middle is position 3",
            eli5: "With 5 values, position 3 is the true middle (2 values on each side). Formula: (n+1)/2 = (5+1)/2 = 3rd position."
          },
          {
            action: "The middle value is the median",
            math: "1, 3,  [4],  7, 9   →   Median = 4",
            eli5: "The 3rd value in our sorted list is 4. That's the median! Even if the highest value were 9,000 instead of 9, the median would still be 4. That's why the median is great for ignoring extreme values."
          },
        ],
        answer: "Median = 4"
      },
      {
        concept: "Mode — The Most Popular",
        desc: "The mode is the number that shows up the most — like the most popular kid in class. A list can have one mode, many modes, or no mode. It's the only average that works for words too!",
        problem: "Find the mode of: 2, 5, 3, 2, 8, 5, 2, 1",
        steps: [
          {
            action: "Count how many times each number appears",
            math: "2 → 3 times,   5 → 2 times,   3 → 1×,   8 → 1×,   1 → 1×",
            eli5: "Go through the list and tally each unique number. Like counting votes in an election — every appearance is one vote."
          },
          {
            action: "The most frequent number is the mode",
            math: "2 appears 3 times — more than any other",
            eli5: "2 wins with 3 appearances. If two numbers tied, we'd have two modes (called bimodal). If every number appeared once, there'd be no mode."
          },
        ],
        answer: "Mode = 2"
      },
      {
        concept: "Range — The Spread",
        desc: "Range tells you how spread out data is. Small range = values are close together (consistent). Big range = values vary a lot. It's the quickest way to measure 'how wild' your data is.",
        problem: "Find the range of test scores: 72, 85, 90, 61, 88",
        steps: [
          {
            action: "Find the highest score",
            math: "Maximum = 90",
            eli5: "Scan all the numbers for the biggest one. 90 is larger than 72, 85, 61, and 88. Maximum = 90."
          },
          {
            action: "Find the lowest score",
            math: "Minimum = 61",
            eli5: "Now find the smallest. 61 is smaller than all the others. Minimum = 61."
          },
          {
            action: "Subtract: max minus min",
            math: "Range = 90 − 61 = 29",
            eli5: "The range is 29 points. That means the best student scored 29 points more than the worst. A range of 5 would mean everyone scored very similarly."
          },
        ],
        answer: "Range = 29"
      },
      {
        concept: "Probability — What Are the Chances?",
        desc: "Probability is how likely something is to happen. We write it as: favorable outcomes ÷ total outcomes. 0 = impossible, 1 = certain, ½ = 50/50 like a coin flip!",
        problem: "A bag has 3 red, 2 blue, 5 green marbles. Probability of pulling red?",
        steps: [
          {
            action: "Count the favorable outcomes",
            math: "3 red marbles",
            eli5: "Favorable = what we WANT to happen. We want red, and there are 3 red marbles."
          },
          {
            action: "Count ALL possible outcomes",
            math: "3 + 2 + 5 = 10 total marbles",
            eli5: "Every marble in the bag is a possible outcome. We assume we can't see inside — each marble has an equal chance of being picked."
          },
          {
            action: "Divide: favorable ÷ total",
            math: "P(red) = 3/10 = 0.3",
            eli5: "3 out of 10 marbles are red. So the probability is 3/10 = 0.3. Every time you reach in, there's a 3 in 10 chance you grab red."
          },
          {
            action: "Convert to a percentage",
            math: "0.3 × 100 = 30%",
            eli5: "Multiply by 100 to get a percent. 30% chance means: if you did this 100 times, you'd expect red about 30 of those times."
          },
        ],
        answer: "P = 3/10  (30%)"
      },
    ]
  },

  percentages: {
    label: "Percentages",
    icon: "%",
    color: "#c77b00",
    lessons: [
      {
        concept: "What Is a Percent?",
        desc: "Percent means 'out of 100.' Per = for every, cent = hundred (like cents in a dollar). So 40% means 40 out of every 100 — like if 40 out of 100 kids like chocolate ice cream.",
        problem: "What is 25% of 80?",
        steps: [
          {
            action: "Convert percent to a decimal",
            math: "25% = 25 ÷ 100 = 0.25",
            eli5: "Percent always means 'per 100.' To convert any percent to a decimal, just divide by 100 — or move the decimal point 2 places to the left. 25% → 0.25."
          },
          {
            action: "Multiply the decimal by the total",
            math: "0.25 × 80",
            eli5: "'Of' in math means multiply. '25% of 80' = 0.25 × 80. Think of 0.25 as one quarter — and one quarter of 80 is..."
          },
          {
            action: "Calculate",
            math: "0.25 × 80 = 20",
            eli5: "0.25 × 80 = 20. You can also think: 80 ÷ 4 = 20 (since 25% = ¼). Twenty is 25% of eighty."
          },
        ],
        answer: "20"
      },
      {
        concept: "Percent Increase",
        desc: "When something goes up in price or size, we ask: out of the original amount, how much was the change? That ratio × 100 is the percent increase.",
        problem: "A shirt costs $40. It goes up to $50. What's the percent increase?",
        steps: [
          {
            action: "Find the amount of change",
            math: "$50 − $40 = $10",
            eli5: "How much did it actually change? $50 − $40 = $10. The price went up by $10."
          },
          {
            action: "Divide the change by the ORIGINAL value",
            math: "$10 ÷ $40 = 0.25",
            eli5: "This is the key step people get wrong: always divide by the ORIGINAL price, not the new one. $10 is 0.25 of $40."
          },
          {
            action: "Multiply by 100 to get a percent",
            math: "0.25 × 100 = 25%",
            eli5: "0.25 → 25%. The shirt got 25% more expensive. If it had doubled in price ($40 → $80), that would be 100% increase."
          },
        ],
        answer: "25% increase"
      },
      {
        concept: "Finding the Original Price",
        desc: "Sometimes we know the sale price and the discount percentage, but want to know what it cost before. We work backwards — un-doing the discount.",
        problem: "A jacket is $60 after a 25% discount. What was the original price?",
        steps: [
          {
            action: "Figure out what percentage remains",
            math: "100% − 25% = 75%",
            eli5: "If 25% was taken off, then 75% of the original price is still there. The $60 you paid represents 75% of the original cost."
          },
          {
            action: "Set up the equation",
            math: "$60 = 0.75 × original price",
            eli5: "75% as a decimal = 0.75. So: original price × 0.75 = $60. We want to find the original price."
          },
          {
            action: "Divide both sides by 0.75",
            math: "original = $60 ÷ 0.75 = $80",
            eli5: "Undo the multiplication by dividing. $60 ÷ 0.75 = $80. Check: 25% of $80 = $20, and $80 − $20 = $60. ✓"
          },
        ],
        answer: "$80"
      },
      {
        concept: "Tip Math",
        desc: "Knowing percentages is super useful at restaurants. A 20% tip — how do you calculate it fast in your head? Move the decimal left to get 10%, then double it!",
        problem: "Calculate a 20% tip on a $35 bill.",
        steps: [
          {
            action: "Find 10% first — just divide by 10",
            math: "$35 ÷ 10 = $3.50",
            eli5: "Finding 10% is easy — move the decimal one place to the left. $35.00 → $3.50. No calculator needed!"
          },
          {
            action: "20% is double 10%",
            math: "$3.50 × 2 = $7.00",
            eli5: "Since 20% = 2 × 10%, just double your answer. $3.50 × 2 = $7. This mental trick works for any 'easy' percentage: 15% = 10% + 5% (half of 10%)."
          },
          {
            action: "Add the tip to get the total",
            math: "$35 + $7 = $42",
            eli5: "The tip is $7. Add it to the original bill: $35 + $7 = $42 total. You can also tip on the pre-tax amount — technically more correct!"
          },
        ],
        answer: "$7 tip  →  $42 total"
      },
    ]
  },

  trigonometry: {
    label: "Trigonometry",
    icon: "θ",
    color: "#5856d6",
    lessons: [
      {
        concept: "What Is Sine?",
        desc: "Trig tools help with right triangles. Imagine tilting your head up at a tall building. You know the angle and how far you are from the base. Sine finds the height — without climbing it!",
        problem: "Angle = 30°, hypotenuse = 10. Find the opposite side.",
        steps: [
          {
            action: "SOH: Sine = Opposite ÷ Hypotenuse",
            math: "sin(θ) = opposite / hypotenuse",
            eli5: "SOH is your memory hook. The 'opposite' side is the one across from the angle. The 'hypotenuse' is always the longest side, across from the 90° corner."
          },
          {
            action: "Plug in what we know",
            math: "sin(30°) = opposite / 10",
            eli5: "We know the angle (30°) and the hypotenuse (10). We want 'opposite.' Plug in what we have."
          },
          {
            action: "sin(30°) is a known value: 0.5",
            math: "0.5 = opposite / 10",
            eli5: "sin(30°) = 0.5 exactly. You'll memorize a few key angles: sin(30°) = 0.5, sin(45°) ≈ 0.707, sin(60°) ≈ 0.866, sin(90°) = 1."
          },
          {
            action: "Multiply both sides by 10",
            math: "opposite = 10 × 0.5 = 5",
            eli5: "Isolate 'opposite' by multiplying both sides by 10. The opposite side is 5. Without trig, you'd have to physically measure this!"
          },
        ],
        answer: "Opposite = 5"
      },
      {
        concept: "What Is Cosine?",
        desc: "Cosine is for the side next to the angle. If sine finds 'how tall,' cosine finds 'how far away.' Together they can describe any direction in the universe!",
        problem: "Angle = 60°, hypotenuse = 14. Find the adjacent side.",
        steps: [
          {
            action: "CAH: Cosine = Adjacent ÷ Hypotenuse",
            math: "cos(θ) = adjacent / hypotenuse",
            eli5: "The 'adjacent' side is the one right next to the angle (touching it, but not the hypotenuse). CAH helps you remember: Cosine = Adjacent over Hypotenuse."
          },
          {
            action: "Plug in the values",
            math: "cos(60°) = adjacent / 14",
            eli5: "Angle = 60°, hypotenuse = 14, adjacent = unknown."
          },
          {
            action: "cos(60°) = 0.5",
            math: "0.5 = adjacent / 14",
            eli5: "Like sine, cosine of common angles has known values. cos(60°) = 0.5 exactly. Notice sin(30°) = cos(60°) — they're related because the angles add to 90°."
          },
          {
            action: "Solve for adjacent",
            math: "adjacent = 14 × 0.5 = 7",
            eli5: "Multiply both sides by 14. Adjacent = 7. So the side next to the 60° angle is 7 units long."
          },
        ],
        answer: "Adjacent = 7"
      },
      {
        concept: "What Is Tangent?",
        desc: "Tangent compares opposite to adjacent directly — skipping the hypotenuse. Surveyors use this to measure mountain heights from far away with just an angle and a ground distance.",
        problem: "Angle = 45°, adjacent side = 8. Find the opposite side.",
        steps: [
          {
            action: "TOA: Tangent = Opposite ÷ Adjacent",
            math: "tan(θ) = opposite / adjacent",
            eli5: "TOA: Tangent = Opposite over Adjacent. No hypotenuse involved! Tangent is especially useful when you know ground distance and angle but want height."
          },
          {
            action: "Plug in values",
            math: "tan(45°) = opposite / 8",
            eli5: "θ = 45°, adjacent = 8, opposite = unknown. Plug in what we know."
          },
          {
            action: "tan(45°) = 1 exactly",
            math: "1 = opposite / 8",
            eli5: "At exactly 45°, the opposite and adjacent sides are equal — that's why tan(45°) = 1. A 45° angle makes a perfect diagonal."
          },
          {
            action: "Solve",
            math: "opposite = 8 × 1 = 8",
            eli5: "8 × 1 = 8. The opposite side is also 8. This confirms the triangle is a special 45-45-90 triangle — an isoceles right triangle!"
          },
        ],
        answer: "Opposite = 8"
      },
      {
        concept: "SOH-CAH-TOA",
        desc: "SOH-CAH-TOA is the cheat code for trig. It's a memory trick: Sine=Opposite/Hypotenuse, Cosine=Adjacent/Hypotenuse, Tangent=Opposite/Adjacent. Once this sticks, triangles become easy.",
        problem: "Find angle θ if opposite = 5 and hypotenuse = 13.",
        steps: [
          {
            action: "We have opposite and hypotenuse — that's Sine",
            math: "sin(θ) = opposite / hypotenuse = 5/13",
            eli5: "Match what you know to SOH-CAH-TOA. We have opposite and hypotenuse → that's SOH → use Sine."
          },
          {
            action: "Calculate the ratio",
            math: "5 ÷ 13 ≈ 0.3846",
            eli5: "Divide: 5 ÷ 13 ≈ 0.3846. This decimal tells us the sine value of the angle. Now we need to find which angle has this sine."
          },
          {
            action: "Use inverse sine (sin⁻¹) to find the angle",
            math: "θ = sin⁻¹(0.3846)",
            eli5: "Inverse sine 'undoes' sine — like how ÷ undoes ×. On a calculator: [sin⁻¹] or [arcsin] of 0.3846. This finds the angle whose sine is 0.3846."
          },
          {
            action: "Evaluate",
            math: "θ ≈ 22.6°",
            eli5: "The angle is about 22.6°. We could verify: sin(22.6°) ≈ 0.3846 ✓. This is the 5-12-13 Pythagorean triple — check: 5²+12²=169=13². Neat!"
          },
        ],
        answer: "θ ≈ 22.6°"
      },
    ]
  },

  numbertheory: {
    label: "Number Theory",
    icon: "∞",
    color: "#1a7f47",
    lessons: [
      {
        concept: "Prime Numbers",
        desc: "A prime number is a loner — it can ONLY be divided evenly by 1 and itself. The first primes: 2, 3, 5, 7, 11, 13… they go on forever. Mathematicians have been obsessed with them for 2,000 years!",
        problem: "Is 37 a prime number?",
        steps: [
          {
            action: "Only check divisors up to √37",
            math: "√37 ≈ 6.1  →  check 2, 3, 5",
            eli5: "Smart shortcut: if a number has a factor bigger than its square root, it also has one smaller. So we only need to check up to √37 ≈ 6. That means checking just 2, 3, and 5."
          },
          {
            action: "Is 37 divisible by 2?",
            math: "37 is odd (ends in 7) → NO",
            eli5: "Even numbers end in 0, 2, 4, 6, or 8. 37 ends in 7, so it's odd. Odd numbers are never divisible by 2."
          },
          {
            action: "Is 37 divisible by 3?",
            math: "3+7 = 10,  10 is not divisible by 3 → NO",
            eli5: "Divisibility trick for 3: add the digits. 3+7 = 10. Is 10 divisible by 3? No (3×3=9, 3×4=12). So 3 doesn't go into 37."
          },
          {
            action: "Is 37 divisible by 5?",
            math: "37 ends in 7, not 0 or 5 → NO  →  37 is prime!",
            eli5: "Numbers divisible by 5 always end in 0 or 5. 37 ends in 7, so no. We've checked all candidates up to √37 and none divide it. Therefore 37 is prime!"
          },
        ],
        answer: "Yes, 37 is prime"
      },
      {
        concept: "Greatest Common Factor",
        desc: "The GCF is the biggest number that divides into two numbers perfectly — like finding the largest identical group you can split both things into. Super useful for simplifying fractions!",
        problem: "Find the GCF of 24 and 36.",
        steps: [
          {
            action: "List all factors of 24",
            math: "1, 2, 3, 4, 6, 8, 12, 24",
            eli5: "Factors are numbers that divide in without a remainder. For 24: 1×24, 2×12, 3×8, 4×6. Those give us 1, 2, 3, 4, 6, 8, 12, 24."
          },
          {
            action: "List all factors of 36",
            math: "1, 2, 3, 4, 6, 9, 12, 18, 36",
            eli5: "For 36: 1×36, 2×18, 3×12, 4×9, 6×6. Gives us 1, 2, 3, 4, 6, 9, 12, 18, 36."
          },
          {
            action: "Find the factors they share",
            math: "Common factors: 1, 2, 3, 4, 6, 12",
            eli5: "Circle every number that appears in BOTH lists: 1, 2, 3, 4, 6, and 12 all appear in both."
          },
          {
            action: "Pick the biggest shared factor",
            math: "GCF = 12",
            eli5: "The Greatest Common Factor is the biggest one from the shared list: 12. This means 12 is the largest number that divides perfectly into both 24 and 36."
          },
        ],
        answer: "GCF = 12"
      },
      {
        concept: "Least Common Multiple",
        desc: "The LCM is the smallest number both values divide into evenly. Like finding the first time two buses arrive together — if one comes every 4 min and another every 6 min, they meet at minute 12.",
        problem: "Find the LCM of 4 and 6.",
        steps: [
          {
            action: "List multiples of 4",
            math: "4, 8, 12, 16, 20, 24…",
            eli5: "Multiples of 4 are what you get when you keep skip-counting by 4: 4, 8, 12, 16, 20… These are all the numbers 4 divides into evenly."
          },
          {
            action: "List multiples of 6",
            math: "6, 12, 18, 24, 30…",
            eli5: "Skip-count by 6: 6, 12, 18, 24… We're looking for the first number that appears on BOTH lists."
          },
          {
            action: "Find the first shared multiple",
            math: "First overlap: 12  ✓",
            eli5: "12 is the first number that shows up on both lists! It's divisible by 4 (12÷4=3 ✓) and by 6 (12÷6=2 ✓). That's the LCM."
          },
        ],
        answer: "LCM = 12"
      },
      {
        concept: "Even & Odd Patterns",
        desc: "Even numbers split into two equal groups perfectly. Odd numbers always have one left over. These simple ideas have surprisingly powerful patterns — odd + odd = always even. Try it!",
        problem: "Without calculating, is (27 × 34 + 15) even or odd?",
        steps: [
          {
            action: "27 is odd, 34 is even — what's odd × even?",
            math: "odd × even = always EVEN",
            eli5: "Rules to remember: odd × odd = odd. odd × even = even. even × even = even. Think of it: any even number has a factor of 2. Multiplying by it makes the result even too."
          },
          {
            action: "So 27 × 34 is even. Now add 15 (odd)",
            math: "even + odd = ?",
            eli5: "More rules: even + even = even. odd + odd = even. even + odd = odd. Think of it: even numbers can be paired up perfectly. Add one odd one → one is left over → odd."
          },
          {
            action: "Conclusion",
            math: "even + odd = ODD  ✓",
            eli5: "The final answer is ODD — no arithmetic needed! These parity rules let you predict even/odd for any combination without computing the actual value."
          },
        ],
        answer: "Odd  (no calculator needed!)"
      },
    ]
  },

};

// ─── Subject list ─────────────────────────────────────────────────────────────

const ROTATION = [
  'algebra', 'geometry', 'fractions',
  'statistics', 'percentages', 'trigonometry', 'numbertheory'
];

// Pick a random lesson on every page load.
// If the user manually picks a subject, choose a random lesson from that subject.
function getTodayLesson(subjectOverride) {
  const subjectKey = subjectOverride || ROTATION[Math.floor(Math.random() * ROTATION.length)];
  const subject    = SUBJECTS[subjectKey];
  const lesson     = subject.lessons[Math.floor(Math.random() * subject.lessons.length)];
  return { subjectKey, subject, lesson };
}
